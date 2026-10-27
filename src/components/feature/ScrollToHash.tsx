import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const id = hash.replace("#", "");
    const timer = window.setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        const offset = 118;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 80);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}