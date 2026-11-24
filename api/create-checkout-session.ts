import Stripe from "stripe";
import { merchItems } from "../src/mocks/merch";

interface ApiRequest {
  method?: string;
  body?: { lines?: unknown };
  headers: Record<string, string | string[] | undefined>;
}

interface ApiResponse {
  setHeader(name: string, value: string): void;
  status(code: number): ApiResponse;
  json(payload: { error?: string; url?: string }): void;
}

interface CheckoutLine {
  id: string;
  size: string;
  qty: number;
}

const MAX_LINE_QUANTITY = 20;

function getSiteOrigin(req: ApiRequest) {
  const configuredOrigin = process.env.SITE_URL?.replace(/\/$/, "");
  if (configuredOrigin) return configuredOrigin;

  const forwardedHost = req.headers["x-forwarded-host"];
  const forwardedProtocol = req.headers["x-forwarded-proto"];
  const host = Array.isArray(forwardedHost)
    ? forwardedHost[0]
    : forwardedHost ?? req.headers.host;
  const protocol = Array.isArray(forwardedProtocol)
    ? forwardedProtocol[0]
    : forwardedProtocol ?? "https";
  return host ? `${protocol}://${host}` : null;
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: "Stripe is not configured." });
  }

  const requestedLines = Array.isArray(req.body?.lines)
    ? (req.body.lines as CheckoutLine[])
    : [];

  if (requestedLines.length === 0) {
    return res.status(400).json({ error: "Your bag is empty." });
  }

  try {
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = requestedLines.map(
      (line) => {
        const product = merchItems.find((item) => item.id === line.id);
        const quantity = Number(line.qty);

        if (
          !product ||
          !Number.isInteger(quantity) ||
          quantity < 1 ||
          quantity > MAX_LINE_QUANTITY
        ) {
          throw new Error("Invalid product or quantity.");
        }

        const allowedSizes = product.sizes ?? ["One size"];
        if (!allowedSizes.includes(line.size)) {
          throw new Error("Invalid product size.");
        }

        return {
          quantity,
          price_data: {
            currency: "eur",
            unit_amount: Math.round(product.price * 100),
            product_data: {
              name: product.name,
              description: `Size: ${line.size}`,
              metadata: {
                productId: product.id,
                size: line.size,
              },
            },
          },
        };
      }
    );

    const origin = getSiteOrigin(req);
    if (!origin) {
      return res.status(500).json({ error: "Site URL is not configured." });
    }

    const stripe = new Stripe(secretKey);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/shop?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop?checkout=cancelled`,
      billing_address_collection: "auto",
      phone_number_collection: { enabled: true },
      metadata: { source: "medvednica-webshop" },
    });

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL.");
    }

    return res.status(200).json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Checkout failed.";
    console.error("Stripe checkout error:", message);
    return res.status(400).json({ error: message });
  }
}
