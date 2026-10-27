import { Link } from "react-router-dom";
import type { MerchItem } from "@/mocks/merch";

interface MerchCardProps {
  item: MerchItem;
  onAdd?: (item: MerchItem) => void;
}

export default function MerchCard({ item, onAdd }: MerchCardProps) {
  return (
    <article
      data-product-shop
      className="hover-lift group flex flex-col overflow-hidden border border-background-200 bg-background-50 transition-colors hover:border-foreground-950/20"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-background-200">
        <img
          src={item.image}
          alt={`${item.name} — Medvednica Baseball Club official merchandise`}
          title={`${item.name} | Medvednica Baseball Club merch`}
          className="h-full w-full object-cover object-top transition-transform duration-[1100ms] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-50/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {item.tag && (
          <span className="font-label absolute left-2.5 top-2.5  bg-primary-500 px-2 py-1 text-[11px] uppercase leading-none tracking-[0.14em] text-background-50">
            {item.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3.5">
        <div className="flex items-center justify-between gap-2">
          <p className="font-label truncate text-[11px] uppercase tracking-[0.2em] text-foreground-400">
            {item.category}
          </p>
          <span className="font-poster shrink-0 text-[18px] leading-none tracking-[0.01em] text-foreground-950">
            €{item.price.toFixed(2)}
          </span>
        </div>

        <h3 className="mt-2 text-[15px] font-semibold leading-snug text-foreground-950 transition-colors group-hover:text-primary-500">
          {item.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-[1.6] text-foreground-500">
          {item.description}
        </p>

        <div className="mt-3.5 pt-1">
          {onAdd ? (
            <button
              type="button"
              onClick={() => onAdd(item)}
              className="font-label flex min-h-[44px] w-full cursor-pointer items-center justify-between gap-2 whitespace-nowrap  border border-background-300 px-3 py-2.5 text-[12px] uppercase tracking-[0.16em] text-foreground-700 transition-colors hover:border-primary-500 hover:bg-primary-500 hover:text-background-50"
            >
              Add to bag
              <i className="ri-add-line text-sm" />
            </button>
          ) : (
            <Link
              to="/shop"
              className="font-label flex min-h-[44px] w-full cursor-pointer items-center justify-between gap-2 whitespace-nowrap  border border-background-300 px-3 py-2.5 text-[12px] uppercase tracking-[0.16em] text-foreground-700 transition-colors hover:border-primary-500 hover:bg-primary-500 hover:text-background-50"
            >
              View piece
              <i className="ri-arrow-right-up-line text-sm" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}