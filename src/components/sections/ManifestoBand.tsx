import { Link } from "react-router-dom";

export default function ManifestoBand() {
  return (
    <section className="relative flex min-h-[720px] w-full items-end overflow-hidden bg-foreground-950 md:min-h-[820px]">
      <img
        src="/images/manifesto.jpg"
        alt="Medvednica team entering the field"
        title="Medvednica Baseball Club | Together on the field"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground-950 via-foreground-950/75 to-foreground-950/35" />
      <div className="pointer-events-none absolute inset-0 ink-grain opacity-70" />

      <div className="relative z-10 mx-auto w-full max-w-site px-4 pb-12 pt-24 md:px-6 md:pb-16 md:pt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-label flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-primary-400">
              <span className="inline-block h-[2px] w-9 bg-primary-500" />
              Our story
            </p>
            <h2 className="font-heading mt-5 text-[clamp(38px,7.2vw,96px)] uppercase leading-[0.84] tracking-[-0.035em] text-background-50">
              The ones who
              <br />
              <span className="text-outline-paper">show up.</span>
            </h2>
            <div className="mt-6 max-w-[60ch] space-y-4 text-[15px] leading-[1.7] text-background-50/70 md:text-[17px]">
              <p>We don&apos;t have a field to call our own. Not yet.</p>
              <p>
                Our home is the space in front of a schoolyard. A place where a few
                lines on the ground become a baseball diamond, where borrowed space
                becomes a place to belong, and where every practice brings us one
                step closer to something bigger.
              </p>
              <p>
                We build this from the ground up. With people who give their time,
                share what they know, teach the next generation, and believe that a
                baseball community is worth building.
              </p>
              <p>
                And we&apos;re not building alone. Palladio stands beside us—a proud
                sponsor, a partner, and a guiding hand helping us find our way
                forward.
              </p>
              <p>
                We may not have everything a baseball club dreams of. But we have
                the people, the passion, and the determination to make it happen.
              </p>
              <p>This is where our story begins.</p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="border border-background-50/20 bg-foreground-950/40 p-5 backdrop-blur-sm md:p-6">
              <p className="font-label text-[11px] uppercase tracking-[0.22em] text-background-50/50">
                Since 1989
              </p>
              <div className="mt-4 space-y-3.5">
                {[
                  { value: "100%", label: "Volunteer run" },
                  { value: "240+", label: "Kids coached" },
                  { value: "1", label: "Home field" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 border-b border-background-50/[0.12] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-poster text-[26px] leading-none text-background-50">
                      {row.value}
                    </span>
                    <span className="font-label text-right text-[10px] uppercase tracking-[0.18em] text-background-50/50">
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="font-label group mt-5 flex cursor-pointer items-center justify-between gap-2 whitespace-nowrap bg-primary-500 px-4 py-3 text-[13px] uppercase tracking-[0.16em] text-background-50 transition-colors hover:bg-primary-600"
              >
                Meet the club
                <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
