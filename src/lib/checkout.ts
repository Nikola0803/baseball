import type { BagLine } from "@/pages/shop/components/BagDrawer";

/**
 * Sends the current bag to the serverless function, which creates a Stripe
 * Checkout Session, then redirects the browser to Stripe's hosted payment page.
 *
 * Only { id, size, qty } is sent — prices are computed on the server so the
 * amount charged can never be tampered with from the browser.
 */
export async function startCheckout(lines: BagLine[]): Promise<void> {
  const res = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      lines: lines.map(({ id, size, qty }) => ({ id, size, qty })),
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.error ?? "Could not start checkout.");
  }

  const { url } = (await res.json()) as { url?: string };
  if (!url) {
    throw new Error("Checkout session did not return a URL.");
  }

  window.location.href = url;
}
