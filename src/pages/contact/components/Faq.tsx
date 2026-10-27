import { useState } from "react";

const faqs = [
  {
    q: "Do I need my own equipment to try a training?",
    a: "No. We keep a box of spare gloves, helmets and bats for newcomers. Wear trainers or cleats and bring water — everything else is on us for the first few sessions.",
  },
  {
    q: "Can I buy merch outside match days?",
    a: "The merch table only opens on home match days, but you can message the club any time and we will arrange a pickup at the clubhouse or hand an order to a coach after training.",
  },
  {
    q: "Are home games really free?",
    a: "Yes. We ask visitors for a pay-what-you-want contribution at the gate, which goes straight into the field. Members and kids under twelve go in without paying.",
  },
  {
    q: "Can my kid join the academy mid-season?",
    a: "The Little Bears accept new players all season, every Saturday from 10:00 until noon. No registration fee and no waiting list — just come down and say hello.",
  },
  {
    q: "Do you ship merch orders?",
    a: "Not yet. Everything is pickup at the clubhouse. Bulk orders for teams, sponsors or schools can be arranged individually — tell us the quantities and we will quote you.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background-100 py-20 md:py-28">
      <div className="mx-auto max-w-site px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="font-label flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-primary-500">
              <span className="inline-block h-px w-8 bg-primary-500" />
              Questions
            </p>
            <h2 className="font-heading mt-5 text-[34px] uppercase leading-[0.92] text-foreground-950 md:text-[46px]">
              Before you write to us.
            </h2>
            <p className="mt-4 max-w-[46ch] text-[17px] leading-[1.75] text-foreground-500">
              The five things people ask most. If your question is not here, the
              form above is the fastest way to reach a real person.
            </p>
          </div>

          <div className="lg:col-span-8" data-reveal data-reveal-delay="2">
            <div className="border-t border-background-300">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.q} className="border-b border-background-200">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="group flex min-h-[68px] w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary-500"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-label text-[11px] tracking-[0.18em] text-foreground-400">
                          0{index + 1}
                        </span>
                        <span
                          className={`text-[16px] font-semibold leading-snug md:text-[18px] ${
                            isOpen ? "text-foreground-950" : "text-foreground-800"
                          }`}
                        >
                          {faq.q}
                        </span>
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isOpen
                            ? "border-primary-500 bg-primary-500 text-background-50"
                            : "border-background-300 text-foreground-500 group-hover:border-primary-500"
                        }`}
                      >
                        <i
                          className={
                            isOpen ? "ri-subtract-line text-sm" : "ri-add-line text-sm"
                          }
                        />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pb-6 pl-0 sm:pl-8">
                        <p className="max-w-[64ch] text-[17px] leading-[1.75] text-foreground-500">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}