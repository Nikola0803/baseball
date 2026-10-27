import SectionHeading from "@/components/base/SectionHeading";

const pillars = [
  {
    icon: "ri-team-line",
    title: "Volunteer run",
    text: "Coaches are former players, the ground crew is whoever shows up early, and the scoreboard is still switched by hand.",
  },
  {
    icon: "ri-seedling-line",
    title: "Academy first",
    text: "The Little Bears programme is free for every kid between six and twelve. Gloves and helmets are provided.",
  },
  {
    icon: "ri-landscape-line",
    title: "Field before merch",
    text: "Every euro from the merch table pays for baseballs, junior travel and the drainage we keep promising to fix.",
  },
];

const milestones = [
  {
    year: "1994",
    title: "Nine friends, one glove",
    text: "The first practice on a borrowed patch of grass on the north slope.",
  },
  {
    year: "2001",
    title: "First national season",
    text: "Medvednica enters the Croatian national league with a squad of sixteen.",
  },
  {
    year: "2011",
    title: "The Reds are born",
    text: "A women's fast-pitch softball squad joins the club and wins its first series.",
  },
  {
    year: "2019",
    title: "First cup final",
    text: "The Bears reach the national cup final and lose it in the ninth inning.",
  },
  {
    year: "2024",
    title: "A real clubhouse",
    text: "Volunteers rebuild the dugout, add a batting cage and a proper scoreboard.",
  },
  {
    year: "2026",
    title: "Back in the semi-final",
    text: "Four squads, 180 players and a cup semi-final at home on 7 November.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-background-100 py-20 md:py-28">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <SectionHeading
          index="08"
          eyebrow="How we run it"
          title="Nothing here is corporate."
          description="No salaries, no middlemen, no brand consultants. Three rules have kept this club on the field for three decades."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden  border border-background-200 bg-background-200 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="flex flex-col bg-background-50 p-6 md:p-7"
              data-reveal
              data-reveal-delay={String((index % 3) + 1)}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center  border border-background-300 text-primary-500">
                  <i className={`${pillar.icon} text-base`} />
                </span>
                <span className="font-label text-[11px] uppercase tracking-[0.22em] text-foreground-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-heading mt-6 text-[20px] uppercase leading-snug text-foreground-950">
                {pillar.title}
              </h3>
              <p className="mt-2.5 max-w-[46ch] text-[16px] leading-[1.7] text-foreground-500 md:text-[17px]">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20" data-reveal>
          <div className="flex flex-col justify-between gap-4 border-b border-background-300 pb-5 md:flex-row md:items-end">
            <h3 className="font-heading text-[26px] uppercase leading-none text-foreground-950 md:text-[34px]">
              Thirty-two seasons, six moments
            </h3>
            <p className="font-label text-[11px] uppercase tracking-[0.2em] text-foreground-400">
              1994 — 2026
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className="group border-b border-background-200 py-6 lg:border-r lg:border-background-200 lg:px-6 lg:first:pl-0 lg:[&:nth-child(3n)]:border-r-0"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-[22px] leading-none text-primary-500">
                    {item.year}
                  </span>
                  <span className="font-label text-[11px] uppercase tracking-[0.18em] text-foreground-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="mt-2.5 text-[16px] font-semibold text-foreground-900">
                  {item.title}
                </h4>
                <p className="mt-1.5 max-w-[42ch] text-[15px] leading-[1.7] text-foreground-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}