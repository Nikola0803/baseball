import { Link } from "react-router-dom";

interface MerchHeroProps {
  itemCount: number;
  lowest: number;
  highest: number;
}

export default function MerchHero({ itemCount, lowest, highest }: MerchHeroProps) {
  return (
    <section className="w-full border-b border-background-200 bg-background-50 pb-14 pt-32 md:pb-16 md:pt-40">
      <div className="mx-auto w-full max-w-site px-4 md:px-6">
        <nav className="font-label flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-foreground-400">
          <Link to="/" className="cursor-pointer transition-colors hover:text-foreground-950">
            Home
          </Link>
          <i className="ri-arrow-right-s-line text-xs" />
          <span className="text-primary-500">Shop</span>
        </nav>

        <div className="mt-9 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7" data-reveal>
            <p className="font-label inline-flex items-center gap-2.5 border border-foreground-950/20 bg-background-100 px-3 py-1.5 text-[13px] uppercase tracking-[0.18em] text-foreground-700">
              <span className="inline-block h-[2px] w-6 bg-primary-500" />
              Official club merchandise
            </p>
            <h1 className="font-heading mt-6 text-[clamp(44px,7.6vw,92px)] uppercase leading-[0.84] tracking-[-0.035em] text-foreground-950">
              The 2026
              <br />
              <span className="text-primary-500">club collection.</span>
            </h1>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.7] text-foreground-600 md:text-[18px]">
              Eighteen pieces in black, bone white and club red, carrying the bear
              crest that started on the mountain. Suggested retail prices in EUR —
              every purchase goes back into the field, the bats and the junior bus.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-px border-t border-foreground-950/15 bg-foreground-950/[0.12] pt-0">
              <div className="bg-background-50 pt-5">
                <p className="font-poster text-[32px] leading-none text-foreground-950">
                  {itemCount}
                </p>
                <p className="font-label mt-1.5 text-[11px] uppercase tracking-[0.16em] text-foreground-400">
                  Items
                </p>
              </div>
              <div className="bg-background-50 pt-5 pl-4">
                <p className="font-poster text-[32px] leading-none text-foreground-950">
                  €{lowest}
                </p>
                <p className="font-label mt-1.5 text-[11px] uppercase tracking-[0.16em] text-foreground-400">
                  From
                </p>
              </div>
              <div className="bg-background-50 pt-5 pl-4">
                <p className="font-poster text-[32px] leading-none text-foreground-950">
                  €{highest}
                </p>
                <p className="font-label mt-1.5 text-[11px] uppercase tracking-[0.16em] text-foreground-400">
                  Up to
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" data-reveal data-reveal-delay="2">
            <div className="relative aspect-[16/11] w-full overflow-hidden border border-background-200 bg-background-100">
              <img
                src="/images/shop-hero.jpg"
                alt="Official Medvednica T-shirt designs"
                title="Medvednica Baseball Club | Official merchandise collection"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="font-label mt-3 flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-foreground-400">
              <i className="ri-store-2-line text-sm text-primary-500" />
              Clubhouse pickup · match days only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
