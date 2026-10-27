import { Link } from "react-router-dom";

export default function ManifestoBand() {
  return (
    <section className="relative flex min-h-[560px] w-full items-end overflow-hidden bg-foreground-950 md:min-h-[660px]">
      <img
        src="https://readdy.ai/api/search-image?query=Bright%20daytime%20documentary%20photograph%20of%20a%20small%20baseball%20crowd%20filling%20simple%20wooden%20bleachers%20behind%20a%20chain-link%20backstop%2C%20red%20and%20white%20club%20colours%20in%20the%20stands%2C%20warm%20late%20afternoon%20sunlight%2C%20green%20field%20beyond%2C%20film%20grain%2C%20wide%20editorial%20sports%20photography%2C%20natural%20colours%2C%20high%20detail&width=1920&height=1080&seq=medvednica-manifesto-stands-01&orientation=landscape"
        alt="Supporters filling the stands behind the backstop at Medvednica Field"
        title="Medvednica Baseball Club | The stands on a Saturday afternoon"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground-950 via-foreground-950/75 to-foreground-950/35" />
      <div className="pointer-events-none absolute inset-0 ink-grain opacity-70" />

      <div className="relative z-10 mx-auto w-full max-w-site px-4 pb-12 pt-24 md:px-6 md:pb-16 md:pt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-label flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-primary-400">
              <span className="inline-block h-[2px] w-9 bg-primary-500" />
              The ground crew
            </p>
            <h2 className="font-heading mt-5 text-[clamp(38px,7.2vw,96px)] uppercase leading-[0.84] tracking-[-0.035em] text-background-50">
              The field is ours
              <br />
              because <span className="text-outline-paper">we built it.</span>
            </h2>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.75] text-background-50/70 md:text-[18px]">
              No groundskeeper on the payroll. No sponsor logos on the backstop.
              Parents rake the infield on Friday nights, former players run the
              kids through drills on Sunday mornings, and the merch table pays for
              the baseballs.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="border border-background-50/20 bg-foreground-950/40 p-5 backdrop-blur-sm md:p-6">
              <p className="font-label text-[11px] uppercase tracking-[0.22em] text-background-50/50">
                Since 1994
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