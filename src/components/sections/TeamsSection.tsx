import { Link } from "react-router-dom";
import { teams } from "@/mocks/teams";

export default function TeamsSection() {
  return (
    <section
      id="teams"
      className="relative scroll-mt-24 overflow-hidden bg-background-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-site px-4 md:px-6">
        <div className="flex flex-col justify-between gap-6 border-b border-foreground-950/15 pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-label flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-primary-500">
              <span className="font-poster text-[15px] leading-none text-foreground-300">
                03
              </span>
              <span className="inline-block h-[2px] w-9 bg-primary-500" />
              Four squads
            </p>
            <h2 className="font-heading mt-4 max-w-[20ch] text-[clamp(34px,5.6vw,68px)] uppercase leading-[0.86] tracking-[-0.03em] text-foreground-950">
              One club. Four ways to play.
            </h2>
          </div>
          <Link
            to="/contact"
            className="font-label group flex w-fit cursor-pointer items-center gap-2 whitespace-nowrap border-b border-foreground-950/30 pb-1.5 text-[12px] uppercase tracking-[0.2em] text-foreground-700 transition-colors hover:border-primary-500 hover:text-primary-500"
          >
            Try a training session
            <i className="ri-arrow-right-up-line text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {teams.map((team, index) => (
            <article
              key={team.id}
              data-reveal
              data-reveal-delay={String((index % 4) + 1)}
              className={`group relative flex flex-col ${
                index % 2 === 1 ? "lg:mt-14" : ""
              }`}
            >
              <div className="hover-lift relative aspect-[3/4] w-full overflow-hidden bg-foreground-900">
                <img
                  src={team.image}
                  alt={`${team.name} — ${team.ageGroup} squad`}
                  title={`${team.name} | Medvednica Baseball Club`}
                  className="h-full w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground-950/[0.92] via-foreground-950/25 to-transparent" />

                <span className="font-poster absolute right-3 top-2 text-[46px] leading-none text-background-50/35 transition-colors duration-500 group-hover:text-background-50/70 md:text-[60px]">
                  0{index + 1}
                </span>

                <span className="font-label absolute left-3 top-3 border border-background-50/35 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-background-50">
                  {team.ageGroup}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-3.5 md:p-4">
                  <span className="mb-2 block h-[2px] w-7 bg-primary-500" />
                  <h3 className="font-heading text-[20px] uppercase leading-[0.92] text-background-50 md:text-[27px]">
                    {team.name}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-background-50/70">
                    <i className="ri-time-line text-primary-400" />
                    {team.training}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-start justify-between gap-2 border-t border-foreground-950/15 pt-2.5">
                <p className="font-label truncate text-[10px] uppercase tracking-[0.14em] text-foreground-500">
                  {team.coach}
                </p>
                <p className="font-poster shrink-0 text-[15px] leading-none text-primary-500">
                  {team.record}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}