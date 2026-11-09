import { Link } from "react-router-dom";
import LogoMark from "@/components/feature/LogoMark";

const columns = [
  {
    title: "Club",
    links: [
      { label: "Our story", to: "/about" },
      { label: "Four squads", to: "/about#teams" },
      { label: "News & stories", to: "/#stories" },
      { label: "Season schedule", to: "/#season" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "Full collection", to: "/shop" },
      { label: "Apparel", to: "/shop" },
      { label: "Equipment", to: "/shop" },
      { label: "Bulk orders", to: "/contact" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Contact the club", to: "/contact" },
      { label: "Join a squad", to: "/contact" },
      { label: "Academy for kids", to: "/contact" },
      { label: "Sponsorship", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background-50">
      <div className="h-px w-full bg-gradient-to-r from-primary-500 via-primary-500/25 to-transparent" />
      <div className="mx-auto max-w-site px-4 pt-14 md:px-6 md:pt-20">
        <div className="grid grid-cols-2 gap-8 gap-y-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex cursor-pointer items-center gap-3">
              <LogoMark size="md" className="ring-1 ring-foreground-950/[0.12]" />
              <span className="leading-none">
                <span className="font-heading block text-[20px] uppercase leading-none tracking-[0.04em] text-foreground-950">
                  Medvednica
                </span>
                <span className="font-label mt-1.5 block text-[11px] uppercase tracking-[0.22em] text-foreground-500">
                  Baseball & Softball Club · Zagreb
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-[1.75] text-foreground-500">
              A club built on the north slope of Medvednica since 1989. Four
              squads, one dugout culture, and a merch line made for the people who
              fill the stands on Saturday afternoons.
            </p>
            <p className="font-label mt-5 flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-accent-500">
              <span className="inline-block h-px w-6 bg-current" />
              Est. 1989 · National League
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: "ri-instagram-line", label: "Instagram", href: "https://www.instagram.com" },
                { icon: "ri-facebook-circle-line", label: "Facebook", href: "https://www.facebook.com" },
                { icon: "ri-youtube-line", label: "YouTube", href: "https://www.youtube.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center  border border-background-300 text-foreground-500 transition-colors hover:border-primary-500 hover:text-primary-500"
                >
                  <i className={`${social.icon} text-base`} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-label text-[12px] uppercase tracking-[0.24em] text-accent-500">
                {column.title}
              </p>
              <ul className="mt-3 space-y-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="block cursor-pointer py-1.5 text-[15px] text-foreground-500 transition-colors hover:text-foreground-950"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-background-200 pt-6 text-[13px] text-foreground-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Medvednica Baseball & Softball Club. All rights reserved.</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>Medvednica Field · Zagreb, Croatia</span>
            <span className="hidden h-3 w-px bg-background-300 sm:inline-block" />
            <span>Merch prices in EUR</span>
          </p>
        </div>

        <div className="mt-6 flex justify-center border-t border-background-200 pt-6">
          <a
            href="https://palladio.hr/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-[12px] text-foreground-400 transition-colors hover:text-primary-500"
          >
            <span className="font-label uppercase tracking-[0.2em]">Official sponsor</span>
            <img
              src="/images/palladio-logo.svg"
              alt="Palladio"
              className="h-9 w-auto opacity-70 transition-opacity group-hover:opacity-100"
            />
          </a>
        </div>
      </div>

      <div className="pointer-events-none select-none overflow-hidden">
        <p
          aria-hidden="true"
          className="font-poster -mb-[0.14em] mt-10 whitespace-nowrap text-center text-[18vw] uppercase leading-[0.74] tracking-[-0.01em] text-outline-ink-soft"
        >
          Medvednica
        </p>
      </div>
    </footer>
  );
}
