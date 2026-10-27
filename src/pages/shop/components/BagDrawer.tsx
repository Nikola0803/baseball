import { Link } from "react-router-dom";
import type { MerchItem } from "@/mocks/merch";

export interface BagLine {
  id: string;
  size: string;
  qty: number;
}

interface BagDrawerProps {
  open: boolean;
  lines: BagLine[];
  products: MerchItem[];
  onClose: () => void;
  onChangeQty: (id: string, size: string, delta: number) => void;
  onRemove: (id: string, size: string) => void;
}

export default function BagDrawer({
  open,
  lines,
  products,
  onClose,
  onChangeQty,
  onRemove,
}: BagDrawerProps) {
  const detailed = lines
    .map((line) => {
      const product = products.find((item) => item.id === line.id);
      return product ? { ...line, product } : null;
    })
    .filter((line): line is BagLine & { product: MerchItem } => line !== null);

  const subtotal = detailed.reduce(
    (sum, line) => sum + line.product.price * line.qty,
    0
  );
  const count = detailed.reduce((sum, line) => sum + line.qty, 0);

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-foreground-950/45 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[61] flex h-full w-full max-w-md flex-col bg-background-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-background-200 px-5 py-4">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.24em] text-primary-600">
              Your bag
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground-950">
              {count} {count === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close bag"
            className="flex h-11 w-11 cursor-pointer items-center justify-center  border border-background-300 text-foreground-700 transition-colors hover:border-primary-500 hover:text-primary-600"
          >
            <i className="ri-close-line text-lg" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {detailed.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background-200 text-foreground-500">
                <i className="ri-shopping-bag-3-line text-2xl" />
              </span>
              <p className="mt-4 text-sm font-semibold text-foreground-900">
                Your bag is empty
              </p>
              <p className="mt-1 max-w-[260px] text-[14px] leading-relaxed text-foreground-500">
                Pick something from the collection and it will show up here.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {detailed.map((line) => (
                <li
                  key={`${line.id}-${line.size}`}
                  className="flex gap-3 border-b border-background-200 pb-4 last:border-b-0"
                >
                  <div className="h-20 w-20 shrink-0 overflow-hidden  bg-background-100">
                    <img
                      src={line.product.image}
                      alt={line.product.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[15px] font-semibold leading-snug text-foreground-900">
                        {line.product.name}
                      </p>
                      <button
                        type="button"
                        onClick={() => onRemove(line.id, line.size)}
                        aria-label={`Remove ${line.product.name}`}
                        className="flex h-8 w-8 cursor-pointer items-center justify-center text-foreground-400 transition-colors hover:text-primary-600"
                      >
                        <i className="ri-delete-bin-line text-sm" />
                      </button>
                    </div>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-foreground-500">
                      Size {line.size}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1  border border-background-300 px-1.5 py-0.5">
                        <button
                          type="button"
                          onClick={() => onChangeQty(line.id, line.size, -1)}
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 cursor-pointer items-center justify-center text-foreground-700 hover:text-primary-600"
                        >
                          <i className="ri-subtract-line text-sm" />
                        </button>
                        <span className="w-5 text-center text-[13px] font-semibold text-foreground-900">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => onChangeQty(line.id, line.size, 1)}
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 cursor-pointer items-center justify-center text-foreground-700 hover:text-primary-600"
                        >
                          <i className="ri-add-line text-sm" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-foreground-950">
                        €{(line.product.price * line.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-background-200 bg-background-50 px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-foreground-600">Subtotal</span>
            <span className="font-heading text-xl text-foreground-950">
              €{subtotal.toFixed(2)}
            </span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-foreground-500">
            Bag is saved for this visit. Online checkout is not live yet — reserve
            the order and we will confirm pickup at the clubhouse.
          </p>
          <Link
            to="/contact"
            onClick={onClose}
            className={`font-label mt-3 flex min-h-[52px] w-full items-center justify-center gap-2 whitespace-nowrap  px-5 py-4 text-[13px] uppercase tracking-[0.16em] transition-colors ${
              detailed.length === 0
                ? "pointer-events-none bg-background-300 text-foreground-500"
                : "cursor-pointer bg-foreground-950 text-background-50 hover:bg-foreground-800"
            }`}
          >
            Reserve this order
            <i className="ri-arrow-right-line text-sm" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="font-label mt-2 min-h-[48px] w-full cursor-pointer whitespace-nowrap py-3.5 text-[13px] uppercase tracking-[0.16em] text-foreground-600 transition-colors hover:text-foreground-900"
          >
            Keep shopping
          </button>
        </div>
      </aside>
    </>
  );
}