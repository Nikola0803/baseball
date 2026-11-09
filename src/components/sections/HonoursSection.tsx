import { Link } from "react-router-dom";

const honours = [
  {
    label: "National championships",
    title: "Champions",
    count: "12",
    years: "Baseball & softball",
    icon: "ri-trophy-line",
  },
  {
    label: "National Cup",
    title: "Winners",
    count: "9",
    years: "Baseball & softball",
    icon: "ri-medal-line",
  },
  {
    label: "European Cup",
    title: "Medals",
    count: "3",
    years: "European competition",
    icon: "ri-award-line",
  },
  {
    label: "Youth programme",
    title: "Squads",
    count: "12",
    years: "From T-ball to juniors",
    detail:
      "Baseball5 · T-ball softball · T-ball baseball · U11 baseball · 2× U13 softball · U15 baseball · U16 softball girls · U16 baseball boys · junior softball men · junior baseball men · junior softball girls",
    icon: "ri-seedling-line",
  },
];

export default function HonoursSection() {
  return (
    <section className="relative overflow-hidden bg-foreground-950 py-20 text-background-50 md:py-28">
      <div className="pointer-events-none absolute inset-0 ink-grain opacity-70" />
      <div className="pointer-events-none absolute -right-[8%] -top-10 select-none">
        <span className="font-poster text-[42vw] leading-none text-outline-paper-soft opacity-70">
          24
        </span>
      </div>

      <div className="relative mx-auto max-w-site px-4 md:px-6">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-label flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-primary-400">
              <span className="font-poster text-[15px] leading-none text-background-50/40">
                02
              </span>
              <span className="inline-block h-[2px] w-9 bg-primary-500" />
              The record
            </p>
            <h2 className="font-heading mt-4 text-[clamp(34px,5.8vw,72px)] uppercase leading-[0.86] tracking-[-0.03em] text-background-50">
              Twenty-four honours.
              <br />
              <span className="text-outline-paper">No shortcuts.</span>
            </h2>
            <p className="mt-6 max-w-[54ch] text-[16px] leading-[1.75] text-background-50/60 md:text-[17px]">
              A volunteer club from the mountain that keeps showing up in October.
              Every trophy below was won with a roster built from our own academy.
            </p>
          </div>

          <div className="flex items-end gap-8">
            <div className="hidden text-right sm:block">
              <p className="font-poster text-[56px] leading-none text-background-50">
                24
              </p>
              <p className="font-label mt-1 text-[10px] uppercase tracking-[0.2em] text-background-50/45">
                senior honours
              </p>
            </div>
            <Link
              to="/about"
              className="font-label group flex w-fit cursor-pointer items-center gap-2 whitespace-nowrap border-b border-background-50/25 pb-1.5 text-[12px] uppercase tracking-[0.2em] text-background-50/70 transition-colors hover:border-primary-500 hover:text-background-50"
            >
              Club history
              <i className="ri-arrow-right-up-line text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-background-50/15">
          {honours.map((item, index) => (
            <article
              key={item.label}
              data-reveal
              data-reveal-delay={String((index % 4) + 1)}
              className="group relative border-b border-background-50/15"
            >
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-500 transition-all duration-500 group-hover:w-full" />
              <div className="grid grid-cols-[36px_1fr_auto] items-center gap-4 py-6 sm:gap-8 md:grid-cols-[76px_1.5fr_1fr_auto] md:py-8">
                <span className="font-poster text-[18px] leading-none text-background-50/30 transition-colors duration-300 group-hover:text-primary-500 md:text-[24px]">
                  0{index + 1}
                </span>

                <div className="min-w-0 transition-transform duration-500 group-hover:translate-x-1.5">
                  <p className="font-label text-[11px] uppercase tracking-[0.22em] text-primary-400">
                    {item.label}
                  </p>
                  <h3 className="font-heading mt-1.5 text-[26px] uppercase leading-none text-background-50 sm:text-[32px]">
                    {item.title}
                  </h3>
                </div>

                <div className="hidden items-center gap-3 md:flex">
                  <i className={`${item.icon} text-lg text-background-50/40`} />
                  <span className="font-editorial text-[17px] text-background-50/55">
                    {item.years}
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5 text-right">
                  <span className="font-poster text-[40px] leading-none text-background-50 transition-colors duration-500 group-hover:text-primary-500 sm:text-[64px]">
                    {item.count}
                  </span>
                  <span className="font-poster text-[16px] leading-none text-background-50/35">
                    ×
                  </span>
                </div>
              </div>
              {item.detail && (
                <p className="pb-6 pl-[52px] text-[13px] leading-relaxed text-background-50/50 sm:pl-[68px] md:pl-[108px]">
                  {item.detail}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <p className="font-label text-[11px] uppercase tracking-[0.2em] text-background-50/40">
            1994 — 2026 · National League
          </p>
          <span className="hidden h-3 w-px bg-background-50/20 sm:block" />
          <p className="font-label text-[11px] uppercase tracking-[0.2em] text-background-50/40">
            Home field: Medvednica Field
          </p>
        </div>
      </div>
    </section>
  );
}
