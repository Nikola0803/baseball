import { useEffect, useState } from "react";
import type { MerchItem } from "@/mocks/merch";

interface ItemModalProps {
  item: MerchItem | null;
  onClose: () => void;
  onAdd: (item: MerchItem, size: string, qty: number) => void;
}

export default function ItemModal({ item, onClose, onAdd }: ItemModalProps) {
  const sizes = item?.sizes ?? ["One size"];
  const [size, setSize] = useState(sizes[0]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setSize(item?.sizes?.[0] ?? "One size");
    setQty(1);
  }, [item]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-foreground-950/55 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 max-h-[92dvh] w-full max-w-3xl overflow-y-auto  bg-background-50 ">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close item"
          className="absolute right-3 top-3 z-20 flex h-11 w-11 cursor-pointer items-center justify-center  border border-background-200 bg-background-50/90 text-foreground-700 backdrop-blur-sm transition-colors hover:border-primary-500 hover:text-primary-600"
        >
          <i className="ri-close-line text-lg" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="h-64 w-full overflow-hidden bg-background-100 sm:h-full sm:min-h-[380px]">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="p-5 md:p-6">
            <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary-600">
              {item.category}
            </p>
            <h2 className="font-heading mt-2 text-2xl uppercase leading-tight text-foreground-950">
              {item.name}
            </h2>
            <p className="mt-1 text-lg font-semibold text-foreground-900">
              €{item.price.toFixed(2)}
            </p>
            <p className="mt-3 text-[16px] leading-[1.7] text-foreground-600">
              {item.description}
            </p>

            <div className="mt-5">
              <p className="font-label text-[10px] uppercase tracking-[0.18em] text-foreground-600">
                Size
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {sizes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSize(option)}
                    className={`font-label flex min-h-[44px] cursor-pointer items-center whitespace-nowrap  border px-4 py-2.5 text-[13px] uppercase tracking-[0.12em] transition-colors ${
                      size === option
                        ? "border-primary-500 bg-primary-500 text-background-50"
                        : "border-background-300 text-foreground-700 hover:border-primary-600"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <div className="flex items-center gap-2  border border-background-300 px-2 py-1.5">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center text-foreground-700 hover:text-primary-600"
                >
                  <i className="ri-subtract-line text-sm" />
                </button>
                <span className="w-6 text-center text-[15px] font-semibold text-foreground-900">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  aria-label="Increase quantity"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center text-foreground-700 hover:text-primary-600"
                >
                  <i className="ri-add-line text-sm" />
                </button>
              </div>
              <p className="text-xs text-foreground-500">
                €{(item.price * qty).toFixed(2)} total
              </p>
            </div>

            <button
              type="button"
              onClick={() => onAdd(item, size, qty)}
              className="font-label mt-6 flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap  bg-foreground-950 px-5 py-4 text-[13px] uppercase tracking-[0.16em] text-background-50 transition-colors hover:bg-foreground-800"
            >
              <i className="ri-shopping-bag-3-line text-sm" />
              Add to bag
            </button>
            <p className="mt-2 text-center text-[11px] text-foreground-500">
              Pickup at the clubhouse · size swaps on match days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}