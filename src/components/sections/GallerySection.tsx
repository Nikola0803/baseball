import { galleryImages } from "@/mocks/stories";
import SectionHeading from "@/components/base/SectionHeading";

const spans = [
  "sm:col-span-2 sm:row-span-2",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-1",
  "sm:col-span-2",
];

export default function GallerySection() {
  return (
    <section className="bg-background-50 py-20 md:py-28">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="07"
            eyebrow="From the stands"
            title="Dust, dirt and the last out."
            description="Shot on the north slope by players, parents and whoever had a camera that day."
          />
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label group flex w-fit cursor-pointer items-center gap-2 whitespace-nowrap border-b border-background-300 pb-1 text-[13px] uppercase tracking-[0.18em] text-foreground-600 transition-colors hover:border-primary-500 hover:text-primary-500"
          >
            <i className="ri-instagram-line text-sm" />
            Follow the club
            <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:auto-rows-[220px] sm:grid-cols-3">
          {galleryImages.map((image, index) => (
            <figure
              key={image.id}
              data-reveal
              data-reveal-delay={String((index % 3) + 1)}
              className={`group relative aspect-[4/3] overflow-hidden  bg-background-100 sm:aspect-auto ${
                spans[index] ?? "sm:col-span-1"
              }`}
            >
              <img
                src={image.image}
                alt={image.alt}
                title={`${image.alt} | Medvednica Baseball Club`}
                className="h-full w-full object-cover object-top transition-transform duration-[1100ms] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-50/90 via-background-50/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="font-label absolute left-3 top-3 flex h-6 items-center  border border-foreground-950/20 bg-background-50/60 px-2 text-[11px] uppercase tracking-[0.16em] text-foreground-700 backdrop-blur-sm">
                0{index + 1}
              </span>
              <figcaption className="absolute bottom-3 left-3 right-3 text-[13px] leading-snug text-foreground-800">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}