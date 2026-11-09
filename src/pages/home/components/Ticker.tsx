const tickerItems = [
  "Medvednica Baseball & Softball Club",
  "Est. 1989",
  "Four squads · one dugout",
  "Play loud · wear red",
  "North slope · Zagreb",
  "37 titles · all categories",
  "Official club merch",
];

export default function Ticker() {
  const row = [...tickerItems, ...tickerItems];
  return (
    <div className="relative w-full overflow-hidden border-y border-background-50/15 bg-foreground-950 py-3 text-background-50 md:py-3.5">
      <div className="pointer-events-none absolute inset-0 ink-grain opacity-60" />
      <div className="relative flex w-max animate-marquee items-center">
        {[0, 1].map((pass) => (
          <div key={pass} className="flex items-center" aria-hidden={pass === 1}>
            {row.map((text, index) => (
              <span
                key={`${pass}-${index}`}
                className="flex items-center whitespace-nowrap"
              >
                <span
                  className={`font-poster text-[24px] uppercase leading-none md:text-[30px] ${
                    index % 2 === 1 ? "text-outline-paper" : "text-background-50"
                  }`}
                >
                  {text}
                </span>
                <span className="mx-6 inline-block h-2 w-2 rotate-45 bg-primary-500 md:mx-8" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
