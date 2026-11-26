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

interface CatalogItem {
  name: string;
  priceInCents: number;
  sizes: string[];
}

const MAX_LINE_QUANTITY = 20;

// Kept server-side so prices sent by a browser are never trusted.
const catalog: Record<string, CatalogItem> = {
  "t-shirt": { name: "T-Shirt (Black / White)", priceInCents: 2000, sizes: ["S", "M", "L", "XL", "XXL"] },
  "jersey-top": { name: "Baseball Jersey Top", priceInCents: 3500, sizes: ["S", "M", "L", "XL", "XXL"] },
  hoodie: { name: "Hoodie", priceInCents: 4000, sizes: ["S", "M", "L", "XL", "XXL"] },
  "baseball-cap": { name: "Baseball Cap", priceInCents: 1500, sizes: ["One size"] },
  beanie: { name: "Beanie", priceInCents: 1500, sizes: ["One size"] },
  "sports-visor": { name: "Sports Visor", priceInCents: 1000, sizes: ["One size"] },
  "baseball-bat": { name: "Baseball Bat", priceInCents: 3500, sizes: ["One size"] },
  "batting-gloves": { name: "Batting Gloves", priceInCents: 2500, sizes: ["S", "M", "L", "XL"] },
  baseball: { name: "Baseball", priceInCents: 400, sizes: ["One size"] },
  softball: { name: "Softball", priceInCents: 500, sizes: ["One size"] },
  backpack: { name: "Backpack", priceInCents: 4000, sizes: ["One size"] },
  "drawstring-bag": { name: "Drawstring Bag", priceInCents: 1200, sizes: ["One size"] },
  "tote-bag": { name: "Tote Bag", priceInCents: 1000, sizes: ["One size"] },
  "water-bottle": { name: "Water Bottle", priceInCents: 1800, sizes: ["One size"] },
  "coffee-mug": { name: "Coffee Mug", priceInCents: 1200, sizes: ["One size"] },
  keychain: { name: "Keychain", priceInCents: 400, sizes: ["One size"] },
  wristband: { name: "Wristband", priceInCents: 300, sizes: ["One size"] },
  "sticker-pack": { name: "Sticker Pack", priceInCents: 500, sizes: ["One size"] },
};

function firstHeader(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function getSiteOrigin(req: ApiRequest) {
  const configuredOrigin = process.env.SITE_URL?.replace(/\/$/, "");
  if (configuredOrigin) return configuredOrigin;

  const host = firstHeader(req.headers["x-forwarded-host"]) ?? firstHeader(req.headers.host);
  const protocol = firstHeader(req.headers["x-forwarded-proto"]) ?? "https";
  return host ? `${protocol}://${host}` : null;
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return res.status(500).json({ error: "Stripe is not configured in Vercel." });
  }

  const requestedLines = Array.isArray(req.body?.lines)
    ? (req.body.lines as CheckoutLine[])
    : [];
  if (requestedLines.length === 0) {
    return res.status(400).json({ error: "Your bag is empty." });
  }

  const origin = getSiteOrigin(req);
  if (!origin) {
    return res.status(500).json({ error: "SITE_URL is not configured in Vercel." });
  }

  try {
    const params = new URLSearchParams({
      mode: "payment",
      success_url: `${origin}/shop?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop?checkout=cancelled`,
      billing_address_collection: "auto",
      "phone_number_collection[enabled]": "true",
      "metadata[source]": "medvednica-webshop",
    });

    requestedLines.forEach((line, index) => {
      const product = catalog[line.id];
      const quantity = Number(line.qty);
      if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > MAX_LINE_QUANTITY) {
        throw new Error("Invalid product or quantity.");
      }
      if (!product.sizes.includes(line.size)) {
        throw new Error("Invalid product size.");
      }

      const prefix = `line_items[${index}]`;
      params.set(`${prefix}[quantity]`, String(quantity));
      params.set(`${prefix}[price_data][currency]`, "eur");
      params.set(`${prefix}[price_data][unit_amount]`, String(product.priceInCents));
      params.set(`${prefix}[price_data][product_data][name]`, product.name);
      params.set(`${prefix}[price_data][product_data][description]`, `Size: ${line.size}`);
      params.set(`${prefix}[price_data][product_data][metadata][productId]`, line.id);
      params.set(`${prefix}[price_data][product_data][metadata][size]`, line.size);
    });

    const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });
    const stripeData = (await stripeResponse.json()) as {
      url?: string;
      error?: { message?: string };
    };

    if (!stripeResponse.ok || !stripeData.url) {
      throw new Error(stripeData.error?.message ?? "Stripe could not create checkout.");
    }

    return res.status(200).json({ url: stripeData.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Checkout failed.";
    console.error("Stripe checkout error:", message);
    return res.status(400).json({ error: message });
  }
}
