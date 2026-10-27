import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RevealOnScroll() {
  const location = useLocation();

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)")
    );

    if (nodes.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}