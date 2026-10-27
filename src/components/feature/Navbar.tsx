import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoMark from "@/components/feature/LogoMark";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="h-[3px] w-full bg-primary-500" />
        <div
          className={`border-b transition-all duration-300 ${
            scrolled || open
              ? "border-background-200 bg-background-50/95 shadow-[0_1px_0_rgba(23,23,23,0.02)] backdrop-blur-xl"
              : "border-background-200/70 bg-background-50/90 backdrop-blur-md"
          }`}
        >
          <div className="flex items-center justify-between gap-6 px-4 py-3.5 md:px-8 md:py-4">
            <Link
              to="/"
              className="group flex shrink-0 cursor-pointer items-center gap-3"
              aria-label="Medvednica Baseball Club home"
            >
              <LogoMark
                size="md"
                className="border border-background-200 transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="leading-none">
                <span className="font-heading block text-[19px] uppercase leading-none tracking-[0.02em] text-foreground-950 md:text-[22px]">
                  Medvednica
                </span>
                <span className="font-label mt-1.5 block text-[12px] uppercase leading-none tracking-[0.18em] text-foreground-400">
                  Baseball Club · Zagreb
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-9 lg:flex">
              {navItems.map((item) => {
                const active = isActive(item.to);
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`font-label group relative cursor-pointer whitespace-nowrap py-2 text-[15px] uppercase tracking-[0.16em] transition-colors ${
                      active
                        ? "text-foreground-950"
                        : "text-foreground-500 hover:text-foreground-950"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-primary-500 transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <Link
                to="/contact"
                className="font-label cursor-pointer whitespace-nowrap border border-background-300 px-4 py-3 text-[14px] uppercase tracking-[0.14em] text-foreground-800 transition-colors hover:border-foreground-950 hover:text-foreground-950"
              >
                Join the club
              </Link>
              <Link
                to="/shop"
                className="font-label flex cursor-pointer items-center gap-2 whitespace-nowrap bg-foreground-950 px-4 py-3 text-[14px] uppercase tracking-[0.14em] text-background-50 transition-colors hover:bg-foreground-800"
              >
                <i className="ri-shopping-bag-3-line text-base" />
                Shop
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 cursor-pointer items-center justify-center border border-background-300 text-foreground-950 transition-colors hover:border-primary-500 hover:text-primary-500 lg:hidden"
            >
              <i className={open ? "ri-close-line text-2xl" : "ri-menu-2-line text-2xl"} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-background-50 px-5 pb-8 pt-24 md:hidden"
        >
          <p className="font-label text-[13px] uppercase tracking-[0.24em] text-foreground-400">
            Menu
          </p>
          <nav className="mt-4 flex flex-col border-t border-background-200">
            {navItems.map((item, index) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className="group flex min-h-[68px] cursor-pointer items-center justify-between gap-4 border-b border-background-200 py-4"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-label w-6 text-[13px] tracking-[0.16em] text-primary-500">
                      0{index + 1}
                    </span>
                    <span
                      className={`font-heading text-[28px] uppercase leading-none ${
                        active ? "text-primary-500" : "text-foreground-950"
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                  <i className="ri-arrow-right-line text-lg text-foreground-400" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-7 flex flex-col gap-3">
            <Link
              to="/shop"
              className="font-label flex min-h-[54px] w-full cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap bg-foreground-950 px-4 py-4 text-[15px] uppercase tracking-[0.16em] text-background-50"
            >
              <i className="ri-shopping-bag-3-line text-lg" />
              Shop the collection
            </Link>
            <Link
              to="/contact"
              className="font-label flex min-h-[54px] w-full cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap border border-background-300 px-4 py-4 text-[15px] uppercase tracking-[0.16em] text-foreground-900"
            >
              Join the club
            </Link>
          </div>

          <div className="mt-auto pt-10">
            <div className="flex items-center justify-between border-t border-background-200 pt-5">
              <p className="font-label text-[13px] uppercase tracking-[0.18em] text-foreground-400">
                Next home game
              </p>
              <p className="font-label text-[13px] uppercase tracking-[0.18em] text-primary-500">
                07 Nov · 14:00
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2.5">
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
                  className="flex h-11 w-11 cursor-pointer items-center justify-center border border-background-300 text-foreground-600"
                >
                  <i className={`${social.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}