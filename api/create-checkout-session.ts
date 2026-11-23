import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";
import { merchItems } from "../src/mocks/merch";

/**
 * Vercel serverless function: creates a Stripe Checkout Session for the bag.
 *
 * Security notes:
 * - The Stripe secret key is read ONLY from the STRIPE_SECRET_KEY environment
 *   variable (set it in the Vercel dashboard, never in the repo).
 * - Prices are looked up server-side from the authoritative merch catalog.
 *   The client only sends { id, size, qty } — never a price — so a tampered
 *   request cannot change what the customer is charged.
 */

const MAX_QTY_PER_LINE = 20;
const MAX_LINES = 50;

interface IncomingLine {
  id: string;
  size: string;
  qty: number;
}

function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(key);
}

function originFrom(req: VercelRequest): string {
  const envUrl = process.env.PUBLIC_SITE_URL;
  if (envUrl) return envUrl.replace(/\/$/, "");
  const proto = (req.headers["x-forwarded-proto"] as string) || "https";
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  return `${proto}://${host}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const lines: IncomingLine[] = Array.isArray(body?.lines) ? body.lines : [];

    if (lines.length === 0) {
      return res.status(400).json({ error: "Your bag is empty." });
    }
    if (lines.length > MAX_LINES) {
      return res.status(400).json({ error: "Too many items in the bag." });
    }

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    for (const line of lines) {
      const product = merchItems.find((item) => item.id === line?.id);
      if (!product) {
        return res.status(400).json({ error: `Unknown item: ${line?.id}` });
      }

      const qty = Math.floor(Number(line.qty));
      if (!Number.isFinite(qty) || qty < 1 || qty > MAX_QTY_PER_LINE) {
        return res.status(400).json({ error: `Invalid quantity for ${product.name}.` });
      }

      const size = typeof line.size === "string" ? line.size : "";
      if (product.sizes && product.sizes.length > 0 && !product.sizes.includes(size)) {
        return res.status(400).json({ error: `Invalid size for ${product.name}.` });
      }

      lineItems.push({
        quantity: qty,
        price_data: {
          currency: "eur",
          // Stripe expects the amount in the smallest currency unit (cents).
          unit_amount: Math.round(product.price * 100),
          product_data: {
            name: product.name,
            description: size ? `Size ${size}` : undefined,
            metadata: { id: product.id, size },
          },
        },
      });
    }

    const origin = originFrom(req);
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      billing_address_collection: "required",
      shipping_address_collection: { allowed_countries: ["HR", "SI", "AT", "DE", "IT", "HU", "RS"] },
      phone_number_collection: { enabled: true },
      success_url: `${origin}/shop?checkout=success`,
      cancel_url: `${origin}/shop?checkout=cancelled`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Checkout failed";
    // Log full error server-side; return a generic message to the client.
    console.error("create-checkout-session error:", message);
    return res.status(500).json({ error: "Could not start checkout. Please try again." });
  }
}
