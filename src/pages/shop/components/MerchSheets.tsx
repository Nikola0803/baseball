import { useEffect, useState } from "react";

interface Sheet {
  id: string;
  label: string;
  title: string;
  caption: string;
  image: string;
}

const sheets: Sheet[] = [
  {
    id: "accessories-sheet",
    label: "Sheet 01",
    title: "Accessories & everyday",
    caption:
      "Beanie, drawstring bag, water bottle, tote, mug, backpack, batting gloves and the sticker pack.",
    image:
      "https://storage.helloreaddy.io/project_files/8979afdd-4f59-418a-b171-395db2d04af6/58e79332-5c6c-4bbb-be5a-2307ab84d326_compressed_WhatsApp-Image-2026-10-21-at-10.09.24.webp",
  },
  {
    id: "equipment-sheet",
    label: "Sheet 02",
    title: "Balls, caps & apparel",
    caption:
      "Softball, baseball, cap, visor, wristband, keychain, bat, tee, jersey top and hoodie.",
    image:
      "https://storage.helloreaddy.io/project_files/8979afdd-4f59-418a-b171-395db2d04af6/6a7d40ac-1fdf-4d93-98b9-86a1eb2d98c6_compressed_WhatsApp-Image-2026-10-21-at-10.04.21.webp",
  },
];

const teeDesign: Sheet = {
  id: "tee-design",
  label: "Tee design",
  title: "Front and back",
  caption:
    "Front carries the club M mark, the back carries MEDVEDNICA across the shoulders.",
  image:
    "https://storage.helloreaddy.io/project_files/8979afdd-4f59-418a-b171-395db2d04af6/c1867521-a8a5-4ebe-b937-ea7468383201_compressed_WhatsApp-Image-2026-10-21-at-10.03.07.webp",
};

export default function MerchSheets() {
  const [active, setActive] = useState<Sheet | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="border-t border-background-200 bg-background-100 py-14 md:py-20">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-label flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-primary-500">
              <span className="inline-block h-px w-8 bg-primary-500" />
              The official line-up
            </p>
            <h2 className="font-heading mt-3 text-[30px] uppercase leading-[0.95] text-foreground-950 md:text-[40px]">
              Every piece, on two sheets.
            </h2>
            <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-foreground-500">
              The printed merchandise sheets we hand out at the clubhouse. One team,
              one mountain, one bear — black, white and nothing else.
            </p>
          </div>
          <p className="font-label whitespace-nowrap text-[12px] uppercase tracking-[0.16em] text-foreground-400">
            Tap a sheet to enlarge
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {sheets.map((sheet, index) => (
            <button
              key={sheet.id}
              type="button"
              onClick={() => setActive(sheet)}
              className="group relative cursor-pointer overflow-hidden  border border-background-200 text-left transition-colors hover:border-primary-500"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-background-50">
                <img
                  src={sheet.image}
                  alt={`Medvednica official merchandise sheet — ${sheet.title}`}
                  title={`Medvednica official merchandise | ${sheet.title}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/10 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-background-950 px-2.5 py-1 font-label text-[11px] uppercase tracking-[0.16em] text-foreground-50">
                  {sheet.label}
                </span>
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background-950 text-foreground-50 transition-colors group-hover:bg-primary-500 group-hover:text-background-50">
                  <i className="ri-expand-diagonal-line text-sm" />
                </span>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4">
                  <div className="min-w-0">
                    <h3 className="font-heading text-[18px] uppercase leading-tight text-foreground-950">
                      {sheet.title}
                    </h3>
                    <p className="mt-1.5 max-w-[42ch] text-[13px] leading-relaxed text-foreground-500">
                      {sheet.caption}
                    </p>
                  </div>
                  <span className="font-heading shrink-0 text-2xl leading-none text-primary-500">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActive(teeDesign)}
          className="group mt-4 grid w-full cursor-pointer grid-cols-1 overflow-hidden  border border-background-200 text-left transition-colors hover:border-primary-500 md:grid-cols-[1.6fr_1fr]"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-background-50">
            <img
              src={teeDesign.image}
              alt="Medvednica club t-shirt design, front and back"
              title="Medvednica t-shirt design | front and back"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background-950/90 text-foreground-50 transition-colors group-hover:bg-primary-500 group-hover:text-background-50">
              <i className="ri-expand-diagonal-line text-sm" />
            </span>
          </div>
          <div className="flex flex-col justify-between border-t border-background-200 p-4 md:border-l md:border-t-0 md:p-6">
            <div>
              <p className="font-label text-[11px] uppercase tracking-[0.2em] text-primary-500">
                {teeDesign.label}
              </p>
              <h3 className="font-heading mt-2 text-[22px] uppercase leading-tight text-foreground-950">
                {teeDesign.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-foreground-500">
                {teeDesign.caption}
              </p>
            </div>
            <p className="font-label mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-foreground-400">
              <i className="ri-shield-check-line text-sm text-primary-500" />
              Printed in small runs
            </p>
          </div>
        </button>
      </div>

      {active && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-foreground-950/85 p-4 backdrop-blur-sm md:p-8">
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close sheet"
            className="absolute inset-0 h-full w-full cursor-zoom-out"
          />
          <div className="relative z-10 flex max-h-full w-full max-w-4xl flex-col items-center">
            <img
              src={active.image}
              alt={`${active.title} — Medvednica official merchandise`}
              className="max-h-[80vh] w-auto max-w-full  object-contain"
            />
            <div className="mt-4 flex w-full items-center justify-between gap-4 rounded-md border border-background-200 bg-background-100 px-4 py-3">
              <p className="text-[13px] text-foreground-500">{active.caption}</p>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-background-300 text-foreground-700 transition-colors hover:border-primary-500 hover:text-primary-500"
              >
                <i className="ri-close-line text-base" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}