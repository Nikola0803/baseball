import { clubStats } from "@/mocks/teams";
import SectionHeading from "@/components/base/SectionHeading";

export default function ClubStory() {
  return (
    <section id="club" className="scroll-mt-24 bg-background-50 py-20 md:py-28">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6" data-reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-background-200 bg-background-100">
                <img
                  src="/images/club-story.jpg"
                  alt="Medvednica players leaving the dugout before a game"
                  title="Medvednica Baseball Club | Match day in the dugout"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/[0.18] to-transparent" />
                <span className="font-label absolute left-4 top-4 border border-background-200 bg-background-50/85 px-2.5 py-1 text-[12px] uppercase tracking-[0.2em] text-foreground-700 backdrop-blur-sm">
                  North slope · archive
                </span>
              </div>

              <div className="absolute -bottom-8 right-4 w-56 bg-foreground-950 p-4 md:right-[-28px] md:w-60">
                <div className="h-px w-full bg-primary-500" />
                <p className="font-label mt-3 text-[12px] uppercase tracking-[0.22em] text-background-300">
                  First pitch
                </p>
                <p className="font-heading mt-1.5 text-[32px] uppercase leading-none text-background-50">
                  1989
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-background-300">
                  A borrowed glove, nine friends and a field on the mountain.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6" data-reveal data-reveal-delay="1">
            <SectionHeading
              eyebrow="The club"
              title="Built on the north slope, not in a boardroom."
              description="Medvednica Baseball & Softball Club started as a weekend experiment between friends who had watched too many American box scores. Three decades later we run four squads, a free academy for kids, and a merch line that funds the bats, balls and bus rides."
            />

            <div className="mt-8 max-w-[64ch] space-y-4 text-[17px] leading-[1.75] text-foreground-600 md:text-[18px]">
              <p>
                We are a volunteer club. Coaches are former players, the ground
                crew is whoever shows up early, and the scoreboard is still
                switched by hand. Everything we sell goes straight back into the
                field.
              </p>
            </div>

            <figure className="mt-8 border-l border-primary-500 pl-5">
              <blockquote className="font-editorial text-[22px] leading-[1.3] text-foreground-900 md:text-[26px]">
                “Nobody here is a professional. We just refuse to lose the same
                way twice.”
              </blockquote>
              <figcaption className="font-label mt-3 text-[12px] uppercase tracking-[0.2em] text-foreground-500">
                Alen Beriš · head coach
              </figcaption>
            </figure>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-background-200 pt-8 sm:grid-cols-4">
              {clubStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-[30px] leading-none text-foreground-950">
                    {stat.value}
                  </p>
                  <p className="font-label mt-2 text-[11px] uppercase leading-snug tracking-[0.16em] text-foreground-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
