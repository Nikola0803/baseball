export default function SponsorSection() {
  return (
    <section className="border-y border-background-200 bg-background-100 py-14 md:py-20">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <a
          href="https://palladio.hr/"
          target="_blank"
          rel="noopener noreferrer"
          className="group grid items-center gap-8 border border-foreground-950/15 bg-background-50 p-6 transition-colors hover:border-primary-500 md:grid-cols-[1fr_1.2fr_auto] md:p-9"
          aria-label="Visit Palladio, official sponsor of Medvednica"
        >
          <div>
            <p className="font-label text-[11px] uppercase tracking-[0.24em] text-primary-500">
              Official sponsor
            </p>
            <h2 className="font-heading mt-3 text-[28px] uppercase leading-none text-foreground-950 md:text-[38px]">
              Powered by Palladio.
            </h2>
            <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-foreground-500">
              Proud partner of Medvednica Baseball &amp; Softball Club.
            </p>
          </div>

          <div className="flex min-h-28 items-center justify-center border-y border-background-200 py-6 md:border-x md:border-y-0 md:px-8 md:py-0">
            <img
              src="/images/palladio-logo.svg"
              alt="Palladio — We Make Legends"
              className="h-auto w-full max-w-[410px]"
            />
          </div>

          <span className="font-label flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-foreground-500 transition-colors group-hover:text-primary-500">
            Visit sponsor
            <i className="ri-arrow-right-up-line text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </section>
  );
}
