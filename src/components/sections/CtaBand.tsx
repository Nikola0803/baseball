import { Link } from "react-router-dom";

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryTo: string;
  secondaryLabel: string;
  secondaryTo: string;
}

export default function CtaBand({
  eyebrow = "Match day",
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden border-y border-background-200 bg-background-50">
      <div className="absolute inset-0">
        <img
          src="/images/cta.jpg"
          alt="Medvednica players celebrating together"
          title="Medvednica Baseball Club | Team celebration"
          className="h-full w-full object-cover object-center"
        />
        {/* white wash keeps the photo as a quiet texture behind the type */}
        <div className="absolute inset-0 bg-background-50/[0.84]" />
        {/* soft white gradient so the photo dissolves into the page top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-50 via-background-50/[0.15] to-background-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-50/[0.55] via-transparent to-background-50/[0.55]" />
        <div className="absolute inset-0 ember-bloom" />
      </div>

      <div className="relative mx-auto max-w-site px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="font-label inline-flex items-center gap-3 text-[13px] uppercase tracking-[0.24em] text-primary-500">
            <span className="inline-block h-[2px] w-10 bg-primary-500" />
            {eyebrow}
            <span className="inline-block h-[2px] w-10 bg-primary-500" />
          </p>
          <h2 className="font-heading mt-6 text-[clamp(34px,5.8vw,72px)] uppercase leading-[0.87] tracking-[-0.03em] text-foreground-950">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-[54ch] text-[17px] leading-[1.75] text-foreground-700 md:text-[18px]">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              to={primaryTo}
              className="font-label group flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap bg-foreground-950 px-6 py-4 text-[14px] uppercase tracking-[0.16em] text-background-50 transition-colors hover:bg-foreground-800"
            >
              {primaryLabel}
              <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to={secondaryTo}
              className="font-label flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap border border-foreground-950 px-6 py-4 text-[14px] uppercase tracking-[0.16em] text-foreground-950 transition-colors hover:bg-foreground-950 hover:text-background-50"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
