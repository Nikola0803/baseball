import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface PageHeroStat {
  label: string;
  value: string;
}

interface PageHeroProps {
  breadcrumb: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  imageTitle: string;
  stats?: PageHeroStat[];
  note?: string;
}

export default function PageHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageTitle,
  stats,
  note,
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden border-b border-background-200 bg-background-50">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt}
          title={imageTitle}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-50 via-background-50/[0.92] to-background-50/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/25 to-background-50/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background-50/80 via-transparent to-background-50/[0.95]" />
        <div className="absolute inset-0 ember-bloom" />
      </div>

      <div className="pointer-events-none absolute -right-20 top-24 hidden h-[380px] w-[380px] lg:block crest-watermark">
        <img
          src="https://storage.helloreaddy.io/project_files/8979afdd-4f59-418a-b171-395db2d04af6/48134d4b-cc9c-4af9-ac9d-0d1828ab7720_compressed_WhatsApp-Image-2026-10-21-at-09.53.42.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-site px-4 pb-14 pt-32 md:px-6 md:pb-20 md:pt-44">
        <nav className="font-label flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-foreground-400">
          <Link
            to="/"
            className="cursor-pointer transition-colors hover:text-foreground-950"
          >
            Home
          </Link>
          <i className="ri-arrow-right-s-line text-xs" />
          <span className="text-primary-500">{breadcrumb}</span>
        </nav>

        <div className="mt-9 grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8" data-reveal>
            <p className="font-label inline-flex items-center gap-2.5 border border-foreground-950/20 bg-background-50/85 px-3 py-1.5 text-[13px] uppercase tracking-[0.18em] text-foreground-700 backdrop-blur-sm">
              <span className="inline-block h-[2px] w-6 bg-primary-500" />
              {eyebrow}
            </p>
            <h1 className="font-heading mt-6 text-[clamp(44px,7.4vw,94px)] uppercase leading-[0.84] tracking-[-0.035em] text-foreground-950">
              {title}
            </h1>
            <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.7] text-foreground-600 md:text-[18px]">
              {description}
            </p>
            {note && (
              <p className="font-label mt-6 flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-foreground-400">
                <span className="inline-block h-px w-6 bg-primary-500" />
                {note}
              </p>
            )}
          </div>

          {stats && stats.length > 0 && (
            <div className="lg:col-span-4" data-reveal data-reveal-delay="2">
              <div className="border border-foreground-950/15 bg-background-50 shadow-[0_20px_45px_-32px_rgba(23,23,23,0.45)]">
                <div className="h-[3px] w-full bg-primary-500" />
                <div className="p-5">
                  <div className="flex items-center justify-between border-b border-foreground-950/12 pb-3">
                    <p className="font-label text-[12px] uppercase tracking-[0.2em] text-primary-500">
                      Club at a glance
                    </p>
                    <span className="font-label text-[12px] uppercase tracking-[0.16em] text-foreground-400">
                      2026
                    </span>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    {stats.map((stat) => (
                      <div key={stat.label} className="min-w-0">
                        <p className="font-poster text-[30px] leading-none text-foreground-950">
                          {stat.value}
                        </p>
                        <p className="font-label mt-2 text-[11px] uppercase leading-snug tracking-[0.12em] text-foreground-400">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}