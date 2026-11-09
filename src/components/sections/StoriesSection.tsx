import { useEffect, useState } from "react";
import { stories, type Story } from "@/mocks/stories";
import SectionHeading from "@/components/base/SectionHeading";

export default function StoriesSection() {
  const [active, setActive] = useState<Story | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="stories" className="scroll-mt-24 bg-background-100 py-20 md:py-28">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <SectionHeading
          index="06"
          eyebrow="Stories"
          title="News from the dugout."
          description="Results, academy dates and the occasional merch drop. Written by people who were actually there."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((story, index) => (
            <article
              key={story.id}
              className="group flex flex-col"
              data-reveal
              data-reveal-delay={String((index % 3) + 1)}
            >
              <button
                type="button"
                onClick={() => setActive(story)}
                className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden  bg-background-200"
                aria-label={`Read: ${story.title}`}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  title={`${story.title} | Medvednica Baseball Club`}
                  className="h-full w-full object-cover object-top transition-transform duration-[1100ms] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-50/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
              <div className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em]">
                <span className="font-label  border border-primary-500/40 bg-primary-500/10 px-2 py-1 text-primary-500">
                  {story.category}
                </span>
                <span className="font-label text-foreground-400">{story.date}</span>
              </div>
              <h3 className="mt-3 text-[18px] font-semibold leading-snug text-foreground-950 transition-colors group-hover:text-primary-500">
                {story.title}
              </h3>
              <p className="mt-2 flex-1 text-[16px] leading-[1.7] text-foreground-500">
                {story.excerpt}
              </p>
              <button
                type="button"
                onClick={() => setActive(story)}
                className="font-label mt-4 flex w-fit cursor-pointer items-center gap-1.5 whitespace-nowrap border-b border-background-300 pb-1 text-[12px] uppercase tracking-[0.2em] text-foreground-600 transition-colors hover:border-primary-500 hover:text-primary-500"
              >
                Read story
                <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-foreground-950/55 p-0 backdrop-blur-sm sm:items-center sm:p-6">
          <div
            className="absolute inset-0"
            onClick={() => setActive(null)}
            aria-hidden="true"
          />
          <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto  border border-background-200 bg-background-100 ">
            <div className="relative h-48 w-full overflow-hidden bg-background-200 sm:h-60">
              <img
                src={active.image}
                alt={active.title}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-100 to-transparent" />
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close story"
                className="absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center  border border-background-300 bg-background-50/80 text-foreground-700 backdrop-blur-sm transition-colors hover:border-primary-500 hover:text-primary-500"
              >
                <i className="ri-close-line text-lg" />
              </button>
            </div>
            <div className="p-5 md:p-8">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em]">
                <span className="font-label  bg-primary-500 px-2 py-1 text-background-50">
                  {active.category}
                </span>
                <span className="font-label text-foreground-400">{active.date}</span>
              </div>
              <h2 className="font-heading mt-3 text-[26px] uppercase leading-[1] text-foreground-950">
                {active.title}
              </h2>
              <div className="mt-4 max-w-[64ch] space-y-3 text-[17px] leading-[1.75] text-foreground-600">
                {active.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 h-px w-full bg-background-200" />
              <p className="font-label mt-4 text-[11px] uppercase tracking-[0.16em] text-foreground-400">
                Medvednica Baseball & Softball Club · club desk
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
