import { useState } from "react";
import { fixtures } from "@/mocks/schedule";
import SectionHeading from "@/components/base/SectionHeading";

type Filter = "all" | "home" | "away";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All games" },
  { id: "home", label: "Home" },
  { id: "away", label: "Away" },
];

const standings = [
  { team: "Medvednica", played: 8, wins: 6, points: 18 },
  { team: "Zagreb Giants", played: 8, wins: 5, points: 15 },
  { team: "SPAN", played: 8, wins: 4, points: 12 },
  { team: "Špansko Panthers", played: 8, wins: 3, points: 9 },
  { team: "Dubrava Bears", played: 8, wins: 2, points: 6 },
];

const form = ["W", "W", "L", "W", "W"];

export default function SeasonSection() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = fixtures.filter(
    (fixture) => filter === "all" || fixture.location === filter
  );

  return (
    <section
      id="season"
      className="relative scroll-mt-24 overflow-hidden bg-background-100 py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-site px-4 md:px-6">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <SectionHeading
            index="04"
            eyebrow="2026 season"
            title="Every game, every bus ride."
            description="Cup semi-final in November, winter series through December. Home games are free for members — bring a friend, they pay what they want at the gate."
          />

          <div className="flex w-full items-center gap-1 rounded-full border border-background-300 bg-background-50 p-1 sm:w-fit">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`font-label flex min-h-[44px] flex-1 cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] uppercase tracking-[0.12em] transition-colors sm:flex-none ${
                  filter === item.id
                    ? "bg-foreground-950 text-background-50"
                    : "text-foreground-500 hover:text-foreground-950"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-8">
            <div className="border-t border-background-200">
              {visible.map((fixture) => (
                <div
                  key={fixture.id}
                  className="group relative flex flex-col gap-3 border-b border-background-200 px-1 py-5 transition-colors hover:bg-background-200/20 sm:flex-row sm:items-center sm:gap-6 sm:px-3 md:py-6"
                >
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-primary-500 transition-all duration-500 group-hover:w-full" />

                  <div className="flex w-[72px] shrink-0 items-baseline gap-2 sm:flex-col sm:items-start sm:gap-0">
                    <span className="font-heading text-[30px] leading-none text-foreground-950">
                      {fixture.day}
                    </span>
                    <span className="font-label text-[12px] uppercase tracking-[0.2em] text-primary-500 sm:mt-1">
                      {fixture.month}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-[16px] font-semibold text-foreground-950">
                        {fixture.opponent}
                      </p>
                      <span
                        className={`font-label  px-1.5 py-0.5 text-[11px] uppercase tracking-[0.14em] ${
                          fixture.location === "home"
                            ? "bg-primary-500/15 text-primary-500"
                            : "bg-background-200 text-foreground-500"
                        }`}
                      >
                        {fixture.location}
                      </span>
                    </div>
                    <p className="mt-1.5 truncate text-[13px] text-foreground-500">
                      {fixture.competition} · {fixture.venue}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-background-200 pt-3 sm:flex-col sm:items-end sm:gap-1.5 sm:border-0 sm:pt-0">
                    <span className="font-label text-[13px] uppercase tracking-[0.16em] text-foreground-600">
                      {fixture.time}
                    </span>
                    {fixture.status === "final" ? (
                      <span className="font-label text-[12px] font-medium tracking-[0.08em] text-accent-500">
                        {fixture.result}
                      </span>
                    ) : (
                      <span className="font-label rounded-full border border-primary-500/40 px-2 py-0.5 text-[11px] uppercase tracking-[0.14em] text-primary-500">
                        Upcoming
                      </span>
                    )}
                  </div>
                </div>
              ))}
              {visible.length === 0 && (
                <p className="py-12 text-center text-sm text-foreground-500">
                  No games match this filter yet.
                </p>
              )}
            </div>
          </div>

          <aside className="lg:col-span-4" data-reveal data-reveal-delay="1">
            <div className=" border border-background-200 bg-background-50 p-5 md:p-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-label text-[11px] uppercase tracking-[0.24em] text-accent-500">
                    League table
                  </p>
                  <p className="font-heading mt-2 text-[19px] uppercase leading-none text-foreground-950">
                    National League
                  </p>
                </div>
                <span className="font-label text-[11px] uppercase tracking-[0.16em] text-foreground-400">
                  R8
                </span>
              </div>

              <div className="mt-5 grid grid-cols-[1fr_auto_auto] gap-3 border-b border-background-200 pb-2">
                <span className="font-label text-[11px] uppercase tracking-[0.18em] text-foreground-400">
                  Club
                </span>
                <span className="font-label text-[11px] uppercase tracking-[0.18em] text-foreground-400">
                  W-L
                </span>
                <span className="font-label text-[11px] uppercase tracking-[0.18em] text-foreground-400">
                  Pts
                </span>
              </div>

              <div className="mt-2 space-y-0.5">
                {standings.map((row, index) => {
                  const isBears = row.team === "Medvednica";
                  return (
                    <div
                      key={row.team}
                      className={`grid grid-cols-[1fr_auto_auto] items-center gap-3  px-2 py-2.5 ${
                        isBears ? "bg-primary-500/[0.12]" : ""
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        <span
                          className={`font-label w-3 text-[11px] ${
                            isBears ? "text-primary-500" : "text-foreground-400"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <span
                          className={`truncate text-[13px] ${
                            isBears
                              ? "font-semibold text-foreground-950"
                              : "text-foreground-600"
                          }`}
                        >
                          {row.team}
                        </span>
                      </span>
                      <span className="text-[12px] tabular-nums text-foreground-500">
                        {row.wins}-{row.played - row.wins}
                      </span>
                      <span className="font-label w-6 text-right text-[12px] font-medium tabular-nums text-foreground-900">
                        {row.points}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-background-200 pt-4">
                <span className="font-label text-[11px] uppercase tracking-[0.18em] text-foreground-400">
                  Last five
                </span>
                <span className="flex items-center gap-1">
                  {form.map((result, index) => (
                    <span
                      key={`${result}-${index}`}
                      className={`font-label flex h-6 w-6 items-center justify-center  text-[11px] font-medium ${
                        result === "W"
                          ? "bg-primary-500 text-background-50"
                          : "bg-background-200 text-foreground-500"
                      }`}
                    >
                      {result}
                    </span>
                  ))}
                </span>
              </div>

              <div className="mt-5 flex items-start gap-3 border-t border-background-200 pt-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center  bg-primary-500 text-background-50">
                  <i className="ri-ticket-2-line text-sm" />
                </span>
                <p className="text-[13px] leading-relaxed text-foreground-500">
                  Cup semi-final tickets are pay-what-you-want at the gate.
                  Members get the covered stand and a free sticker pack.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
