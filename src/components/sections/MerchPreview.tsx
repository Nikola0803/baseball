import { Link } from "react-router-dom";
import { featuredMerch } from "@/mocks/merch";
import MerchCard from "@/components/feature/MerchCard";

export default function MerchPreview() {
  return (
    <section className="bg-background-50 py-20 md:py-28">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-label flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-primary-500">
              <span className="font-poster text-[15px] leading-none text-foreground-300">05</span>
              <span className="inline-block h-[2px] w-9 bg-primary-500" />
              Clubhouse shop
            </p>
            <h2 className="font-heading mt-5 max-w-[16ch] text-[clamp(32px,4.8vw,60px)] uppercase leading-[0.87] tracking-[-0.03em] text-foreground-950">
              Eighteen pieces.
              <br />
              One palette.
            </h2>
            <p className="mt-5 max-w-[50ch] text-[17px] leading-[1.75] text-foreground-500">
              Bone white, stone grey and one club red. Everything below is
              available at the clubhouse on match days — prices are the suggested
              retail prices in EUR.
            </p>
          </div>
          <Link
            to="/shop"
            className="font-label group flex w-fit cursor-pointer items-center gap-2 whitespace-nowrap  bg-foreground-950 px-5 py-3.5 text-[14px] uppercase tracking-[0.16em] text-background-50 transition-colors hover:bg-foreground-800"
          >
            Browse full collection
            <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div
          data-product-shop
          className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {featuredMerch.slice(0, 4).map((item, index) => (
            <div key={item.id} data-reveal data-reveal-delay={String((index % 4) + 1)}>
              <MerchCard item={item} />
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-background-200 pt-6">
          {[
            { icon: "ri-store-2-line", text: "Pick up at the clubhouse" },
            { icon: "ri-shield-check-line", text: "Every euro funds the field" },
            { icon: "ri-exchange-line", text: "Size swaps on match days" },
          ].map((note) => (
            <span
              key={note.text}
              className="font-label flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-foreground-500"
            >
              <i className={`${note.icon} text-sm text-primary-500`} />
              {note.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}