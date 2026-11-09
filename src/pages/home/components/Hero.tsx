import { Link } from "react-router-dom";

const facts = [
  { value: "1994", label: "Founded" },
  { value: "04", label: "Squads" },
  { value: "180", label: "Players" },
  { value: "27", label: "Titles" },
];

const fixtureCells = [
  { label: "Next home game", value: "Sat 07 Nov" },
  { label: "First pitch", value: "14:00" },
  { label: "Gates open", value: "12:30" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background-50">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-40" />
      <div className="pointer-events-none absolute -left-56 top-10 h-[560px] w-[560px] rounded-full bg-primary-500/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-12%] top-1/3 h-[440px] w-[440px] rounded-full bg-accent-500/[0.10] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-site px-4 md:px-6">
        <div className="grid grid-cols-2 items-center gap-y-2 border-b border-foreground-950/15 pb-4 pt-24 sm:grid-cols-3 md:pt-32">
          <p className="font-label flex items-center gap-2.5 text-[13px] uppercase tracking-[0.2em] text-foreground-700">
            <span className="relative flex h-2 w-2 items-center justify-center">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary-500/60" />
              <span className="inline-block h-2 w-2 rounded-full bg-primary-500" />
            </span>
            2026 season · National League
          </p>
          <p className="font-label hidden text-center text-[13px] uppercase tracking-[0.2em] text-foreground-400 sm:block">
            Zagreb · 45.87° N
          </p>
          <p className="font-label text-right text-[13px] uppercase tracking-[0.2em] text-foreground-400">
            Est. 1994
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-10 pt-9 lg:grid-cols-12 lg:gap-6 lg:pt-12">
          <div className="relative z-20 lg:col-span-7">
            <h1
              data-reveal
              className="font-heading text-[clamp(46px,9.2vw,116px)] uppercase leading-[0.82] tracking-[-0.035em] text-foreground-950"
            >
              Play loud.
              <br />
              Wear <span className="text-primary-500">red.</span>
            </h1>

            <div className="pointer-events-none absolute -top-4 right-10 hidden h-[136px] w-[136px] rotate-[9deg] items-center justify-center rounded-full border border-foreground-950/25 xl:flex">
              <div className="flex h-[114px] w-[114px] flex-col items-center justify-center rounded-full border border-primary-500/50 text-center">
                <span className="font-label text-[10px] uppercase tracking-[0.22em] text-foreground-500">
                  Est.
                </span>
                <span className="font-poster text-[32px] leading-none text-primary-500">
                  1994
                </span>
                <span className="font-label mt-1 text-[10px] uppercase tracking-[0.2em] text-foreground-500">
                  Zagreb
                </span>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-[3px] w-14 bg-primary-500" />
              <span className="font-label text-[13px] uppercase tracking-[0.22em] text-foreground-500">
                Baseball club · north slope
              </span>
            </div>

            <p className="mt-6 max-w-[46ch] text-[17px] leading-[1.7] text-foreground-600 md:text-[19px]">
              Four squads, one dugout, and a merch line built for the people who
              never leave before the last out. A volunteer club on the north slope
              of Medvednica since 1994.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/shop"
                className="font-label group flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap bg-foreground-950 px-6 py-4 text-[14px] uppercase tracking-[0.16em] text-background-50 transition-colors hover:bg-primary-500"
              >
                <i className="ri-shopping-bag-3-line text-base" />
                Shop the collection
                <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                to="/contact"
                className="font-label group flex cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap border border-foreground-950 px-6 py-4 text-[14px] uppercase tracking-[0.16em] text-foreground-950 transition-colors hover:bg-foreground-950 hover:text-background-50"
              >
                Get tickets
                <i className="ri-ticket-2-line text-base" />
              </Link>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-y-6 border-t border-foreground-950/15 pt-6 sm:grid-cols-4">
              {facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={`pl-4 ${
                    index === 0 ? "pl-0" : "border-l border-foreground-950/10"
                  } ${index === 2 ? "pl-0 sm:pl-4" : ""}`}
                >
                  <dd className="font-poster text-[34px] leading-none text-foreground-950">
                    {fact.value}
                  </dd>
                  <dt className="font-label mt-1.5 text-[11px] uppercase tracking-[0.18em] text-foreground-400">
                    {fact.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="relative z-10 lg:col-span-5 lg:-mt-16 xl:-mt-24"
            data-reveal
            data-reveal-delay="2"
          >
            <figure className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-foreground-950/15 bg-background-100">
                <img
                  src="/images/hero.jpg"
                  alt="Medvednica players in the dugout on match day"
                  title="Medvednica Baseball Club | The team on match day"
                  className="h-full w-full object-cover object-center"
                />
                <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-background-50/80" />
                <span className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-background-50/80" />
                <span className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-background-50/80" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-background-50/80" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground-950/60 via-foreground-950/5 to-transparent" />
                <p className="font-label absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.22em] text-background-50/90">
                  Medvednica Field · matchday
                </p>
              </div>

              <figcaption className="relative -mt-12 ml-3 mr-3 border border-foreground-950/15 bg-background-50 p-4 shadow-[0_24px_50px_-32px_rgba(23,23,23,0.5)] md:ml-0 md:mr-10 lg:absolute lg:-bottom-10 lg:-left-12 lg:right-auto lg:mt-0 lg:w-[238px]">
                <p className="font-label text-[11px] uppercase tracking-[0.22em] text-foreground-400">
                  Next home game
                </p>
                <p className="font-poster mt-1.5 text-[28px] uppercase leading-none text-foreground-950">
                  07 Nov · 14:00
                </p>
                <div className="my-3 h-px w-full bg-foreground-950/[0.12]" />
                <p className="text-[14px] leading-snug text-foreground-600">
                  Bears vs Cowboys · gates open 12:30
                </p>
                <p className="font-label mt-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-primary-500">
                  <i className="ri-map-pin-line text-sm" />
                  Medvednica Field
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="relative mt-14 md:mt-20 lg:mt-24">
          <div className="grid grid-cols-2 gap-px bg-foreground-950/15 md:grid-cols-4">
            {fixtureCells.map((cell) => (
              <div key={cell.label} className="bg-background-50 px-4 py-4 md:px-5">
                <p className="font-label text-[11px] uppercase tracking-[0.2em] text-foreground-400">
                  {cell.label}
                </p>
                <p className="font-poster mt-1.5 text-[24px] uppercase leading-none text-foreground-950 md:text-[28px]">
                  {cell.value}
                </p>
              </div>
            ))}
            <Link
              to="/contact"
              className="group flex cursor-pointer items-center justify-between gap-2 bg-foreground-950 px-4 py-4 text-background-50 transition-colors hover:bg-primary-500 md:px-5"
            >
              <span>
                <span className="font-label block text-[11px] uppercase tracking-[0.2em] text-background-50/55">
                  Cup semi-final
                </span>
                <span className="font-label mt-1.5 block whitespace-nowrap text-[14px] uppercase tracking-[0.16em]">
                  Get tickets
                </span>
              </span>
              <i className="ri-arrow-right-up-line text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
