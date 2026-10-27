import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import MerchCard from "@/components/feature/MerchCard";
import ItemModal from "@/pages/shop/components/ItemModal";
import BagDrawer, { type BagLine } from "@/pages/shop/components/BagDrawer";
import MerchHero from "@/pages/shop/components/MerchHero";
import MerchSheets from "@/pages/shop/components/MerchSheets";
import { merchCategories, merchItems, type MerchCategory, type MerchItem } from "@/mocks/merch";

type CategoryFilter = "All" | MerchCategory;
type SortKey = "featured" | "price-asc" | "price-desc" | "name";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured first" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "name", label: "Name A–Z" },
];

export default function MerchPage() {
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [sort, setSort] = useState<SortKey>("featured");
  const [activeItem, setActiveItem] = useState<MerchItem | null>(null);
  const [bag, setBag] = useState<BagLine[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const prices = merchItems.map((item) => item.price);

  const visibleItems = useMemo(() => {
    const filtered =
      category === "All"
        ? [...merchItems]
        : merchItems.filter((item) => item.category === category);

    switch (sort) {
      case "price-asc":
        return filtered.sort((a, b) => a.price - b.price);
      case "price-desc":
        return filtered.sort((a, b) => b.price - a.price);
      case "name":
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [category, sort]);

  const bagCount = bag.reduce((sum, line) => sum + line.qty, 0);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const addToBag = (item: MerchItem, size: string, qty: number) => {
    setBag((current) => {
      const existing = current.find(
        (line) => line.id === item.id && line.size === size
      );
      if (existing) {
        return current.map((line) =>
          line.id === item.id && line.size === size
            ? { ...line, qty: Math.min(20, line.qty + qty) }
            : line
        );
      }
      return [...current, { id: item.id, size, qty }];
    });
    setActiveItem(null);
    setToast(`${item.name} · ${size} added to bag`);
  };

  const changeQty = (id: string, size: string, delta: number) => {
    setBag((current) =>
      current
        .map((line) =>
          line.id === id && line.size === size
            ? { ...line, qty: line.qty + delta }
            : line
        )
        .filter((line) => line.qty > 0)
    );
  };

  const removeLine = (id: string, size: string) => {
    setBag((current) =>
      current.filter((line) => !(line.id === id && line.size === size))
    );
  };

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <MerchHero
          itemCount={merchItems.length}
          lowest={Math.min(...prices)}
          highest={Math.max(...prices)}
        />

        <section className="mx-auto max-w-site px-4 py-12 md:px-6 md:py-16">
          <div className="flex flex-col gap-4 border-b border-background-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setCategory("All")}
                className={`font-label flex min-h-[44px] cursor-pointer items-center whitespace-nowrap rounded-full border px-4 py-2 text-[13px] uppercase tracking-[0.14em] transition-colors ${
                  category === "All"
                    ? "border-foreground-950 bg-foreground-950 text-background-50"
                    : "border-background-300 text-foreground-700 hover:border-primary-600 hover:text-primary-600"
                }`}
              >
                All items
              </button>
              {merchCategories.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCategory(option)}
                  className={`font-label flex min-h-[44px] cursor-pointer items-center whitespace-nowrap rounded-full border px-4 py-2 text-[13px] uppercase tracking-[0.14em] transition-colors ${
                    category === option
                      ? "border-foreground-950 bg-foreground-950 text-background-50"
                      : "border-background-300 text-foreground-700 hover:border-primary-600 hover:text-primary-600"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between gap-3 sm:justify-end">
              <p className="hidden text-[12px] uppercase tracking-[0.14em] text-foreground-500 sm:block">
                {visibleItems.length} items
              </p>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value as SortKey)}
                  aria-label="Sort merchandise"
                  className="font-label min-h-[44px] cursor-pointer appearance-none  border border-background-300 bg-background-50 py-2.5 pl-3 pr-8 text-[13px] uppercase tracking-[0.12em] text-foreground-800 outline-none transition-colors focus:border-primary-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <i className="ri-arrow-down-s-line pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-sm text-foreground-500" />
              </div>
              <button
                type="button"
                onClick={() => setBagOpen(true)}
                className="font-label flex min-h-[44px] cursor-pointer items-center gap-2 whitespace-nowrap  bg-foreground-950 px-4 py-2.5 text-[13px] uppercase tracking-[0.14em] text-background-50 transition-colors hover:bg-foreground-800"
              >
                <i className="ri-shopping-bag-3-line text-sm" />
                Bag
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-background-50 px-1 text-[9px] font-semibold text-foreground-950">
                  {bagCount}
                </span>
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2  border border-background-200 bg-background-100 px-4 py-3">
            <i className="ri-information-line mt-0.5 text-sm text-primary-500" />
            <p className="text-[13px] leading-relaxed text-foreground-500">
              Suggested retail prices, all in EUR. Online checkout is not live yet —
              add items to the bag and reserve them for pickup at the clubhouse, or
              message the club for a size that is not listed.
            </p>
          </div>

          <div
            data-product-shop
            className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"
          >
            {visibleItems.map((item) => (
              <MerchCard key={item.id} item={item} onAdd={setActiveItem} />
            ))}
          </div>

          {visibleItems.length === 0 && (
            <p className="mt-10  border border-background-200 py-12 text-center text-sm text-foreground-500">
              Nothing in this category yet. Try another filter.
            </p>
          )}
        </section>

        <MerchSheets />

        <section className="border-t border-background-200 bg-background-100 py-14 md:py-16">
          <div className="mx-auto max-w-site px-4 md:px-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  icon: "ri-store-2-line",
                  title: "Clubhouse pickup",
                  text: "Orders are packed and waiting at the clubhouse on match days, from 12:30 until the last out.",
                },
                {
                  icon: "ri-ruler-2-line",
                  title: "Sizing help",
                  text: "Apparel runs true to size with a relaxed cut. If you are between sizes, message us before ordering.",
                },
                {
                  icon: "ri-heart-3-line",
                  title: "Where the money goes",
                  text: "Every euro funds baseballs, junior travel and the field. No salaries, no middlemen.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-background-200 bg-background-50 p-5"
                >
                  <span className="flex h-10 w-10 items-center justify-center  bg-primary-500/[0.12] text-primary-500">
                    <i className={`${item.icon} text-lg`} />
                  </span>
                  <h3 className="font-heading mt-4 text-base uppercase text-foreground-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 bg-foreground-950 px-5 py-6 sm:flex-row sm:items-center md:px-8">
              <div>
                <h3 className="font-heading text-xl uppercase text-background-50">
                  Need a size or a bulk order?
                </h3>
                <p className="mt-1 text-sm text-background-300">
                  Team kits, sponsor gifts and junior bundles — we can arrange it.
                </p>
              </div>
              <Link
                to="/contact"
                className="font-label flex cursor-pointer items-center gap-2 whitespace-nowrap  bg-background-50 px-5 py-3 text-[12px] uppercase tracking-[0.18em] text-foreground-950 transition-colors hover:bg-background-200"
              >
                Message the club
                <i className="ri-arrow-right-line text-sm" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ItemModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
        onAdd={addToBag}
      />

      <BagDrawer
        open={bagOpen}
        lines={bag}
        products={merchItems}
        onClose={() => setBagOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeLine}
      />

      {toast && (
        <div className="fixed bottom-5 left-1/2 z-[80] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3  border border-background-200 bg-background-50 px-4 py-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-background-50">
            <i className="ri-check-line text-sm" />
          </span>
          <p className="min-w-0 flex-1 truncate text-xs text-foreground-800">{toast}</p>
          <button
            type="button"
            onClick={() => {
              setToast(null);
              setBagOpen(true);
            }}
            className="font-label cursor-pointer whitespace-nowrap text-[10px] uppercase tracking-[0.14em] text-primary-600"
          >
            View bag
          </button>
        </div>
      )}
    </div>
  );
}