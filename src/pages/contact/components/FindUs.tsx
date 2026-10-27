const visitDetails = [
  {
    icon: "ri-map-pin-2-line",
    label: "The field",
    value: "Medvednica Field, Zagreb, Croatia",
    note: "Follow the gravel road past the forest lodge — the gate is on the left.",
  },
  {
    icon: "ri-time-line",
    label: "Match days",
    value: "Saturdays · gates 12:30",
    note: "Home games are pay-what-you-want at the gate. Members go straight in.",
  },
  {
    icon: "ri-bus-2-line",
    label: "Getting there",
    value: "Bus 140 to Medvednica, then 8 min walk",
    note: "Free parking behind the clubhouse, but it fills up fast on cup days.",
  },
  {
    icon: "ri-phone-line",
    label: "Clubhouse",
    value: "+385 99 211 9524",
    note: "Someone is usually around on training evenings, Tue & Thu from 18:00.",
  },
];

export default function FindUs() {
  return (
    <section className="bg-background-50 py-20 md:py-28">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7" data-reveal>
            <p className="font-label flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-primary-500">
              <span className="inline-block h-px w-8 bg-primary-500" />
              Find us
            </p>
            <h2 className="font-heading mt-5 text-[34px] uppercase leading-[0.92] text-foreground-950 md:text-[48px]">
              Uphill, past the lodge.
            </h2>
            <p className="mt-3 max-w-[58ch] text-[17px] leading-[1.75] text-foreground-500">
              The field sits on the north slope of Medvednica, twenty minutes from
              the city centre. If you can see the floodlights through the trees,
              you are close.
            </p>

            <div className="mt-6 h-[300px] w-full overflow-hidden  border border-background-200 bg-background-100 sm:h-[360px] md:h-[420px]">
              <iframe
                title="Map showing Medvednica Field in Zagreb, Croatia"
                aria-label="Google Map of Medvednica Field, Zagreb"
                src="https://www.google.com/maps?q=Medvednica%20Zagreb%20Croatia&hl=en&z=12&output=embed"
                className="h-full w-full border-0 opacity-90 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-5" data-reveal data-reveal-delay="2">
            <div className="flex h-full flex-col justify-between gap-3">
              {visitDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex gap-4  border border-background-200 bg-background-100 p-4 md:p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center  bg-primary-500/[0.12] text-primary-500">
                    <i className={`${detail.icon} text-lg`} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-label text-[11px] uppercase tracking-[0.18em] text-foreground-400">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-[16px] font-semibold leading-snug text-foreground-950">
                      {detail.value}
                    </p>
                    <p className="mt-1.5 max-w-[40ch] text-[14px] leading-[1.65] text-foreground-500">
                      {detail.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}