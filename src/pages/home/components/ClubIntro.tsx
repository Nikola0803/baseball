import { Link } from "react-router-dom";
import { clubStats } from "@/mocks/teams";

export default function ClubIntro() {
  return (
    <section className="relative overflow-hidden bg-background-50 py-20 md:py-28">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-foreground-950/15 pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-label flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-primary-500">
              <span className="font-poster text-[15px] leading-none text-foreground-300">
                01
              </span>
              <span className="inline-block h-[2px] w-9 bg-primary-500" />
              The club · est. 1994
            </p>
            <h2 className="font-heading mt-4 max-w-[18ch] text-[clamp(34px,5.6vw,68px)] uppercase leading-[0.86] tracking-[-0.03em] text-foreground-950">
              Thirty seasons on the same field.
            </h2>
          </div>
          <Link
            to="/about"
            className="font-label group flex w-fit cursor-pointer items-center gap-2 whitespace-nowrap border-b border-foreground-950/30 pb-1.5 text-[12px] uppercase tracking-[0.2em] text-foreground-700 transition-colors hover:border-primary-500 hover:text-primary-500"
          >
            Read the club story
            <i className="ri-arrow-right-up-line text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="relative lg:col-span-6" data-reveal>
            <div className="relative aspect-[5/6] w-full overflow-hidden border border-foreground-950/15 bg-background-100">
              <img
                src="/images/club-intro.jpg"
                alt="Medvednica squad gathered in a huddle before a game"
                title="Medvednica Baseball Club | The squad before first pitch"
                className="h-full w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground-950/55 via-transparent to-transparent" />
              <span className="font-label absolute left-4 top-4 border border-background-50/40 bg-foreground-950/45 px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] text-background-50 backdrop-blur-sm">
                North slope · archive
              </span>
              <p className="font-label absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.22em] text-background-50/85">
                Before first pitch · 2025
              </p>
            </div>

            <div className="pointer-events-none absolute -bottom-16 -left-3 hidden select-none md:block">
              <span className="font-poster text-[132px] leading-[0.72] text-outline-ink-soft sm:text-[170px]">
                30
              </span>
              <span className="font-label absolute bottom-2 left-1 block text-[11px] uppercase tracking-[0.24em] text-foreground-400">
                seasons
              </span>
            </div>

            <div className="absolute -right-2 top-12 hidden w-[136px] rotate-[6deg] bg-primary-500 p-3 text-background-50 md:block">
              <p className="font-label text-[10px] uppercase tracking-[0.2em]">
                First pitch
              </p>
              <p className="font-poster text-[36px] leading-none">1994</p>
              <p className="mt-1.5 text-[12px] leading-snug text-background-50/85">
                Nine friends. One borrowed glove.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pt-2" data-reveal data-reveal-delay="2">
            <figure className="border-l-2 border-primary-500 pl-5">
              <blockquote className="font-editorial text-[26px] leading-[1.22] text-foreground-900 md:text-[34px]">
                “Nobody here gets paid. Everybody here shows up.”
              </blockquote>
              <figcaption className="font-label mt-3 text-[11px] uppercase tracking-[0.2em] text-foreground-500">
                Iva Kovač · head coach since 2009
              </figcaption>
            </figure>

            <p className="mt-8 max-w-[54ch] text-[17px] leading-[1.75] text-foreground-600">
              Medvednica Baseball & Softball Club started in 1994 with nine friends, a
              borrowed glove and a field on the north slope of the mountain. Three
              decades later we still run it the same way: volunteers on the ground
              crew, former players coaching the kids, and every euro from the merch
              table going back into baseballs and bus rides.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-px bg-foreground-950/[0.12] sm:grid-cols-4">
              {clubStats.map((stat) => (
                <div key={stat.label} className="bg-background-50 py-4 pr-2 sm:px-4 sm:first:pl-0">
                  <p className="font-poster text-[36px] leading-none text-foreground-950">
                    {stat.value}
                  </p>
                  <p className="font-label mt-1.5 text-[10px] uppercase leading-snug tracking-[0.16em] text-foreground-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/about"
                className="font-label group flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap bg-foreground-950 px-5 py-3.5 text-[14px] uppercase tracking-[0.16em] text-background-50 transition-colors hover:bg-primary-500"
              >
                Read the club story
                <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="font-label flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap border border-foreground-950/25 px-5 py-3.5 text-[14px] uppercase tracking-[0.16em] text-foreground-800 transition-colors hover:border-foreground-950 hover:text-foreground-950"
              >
                Try a training session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
