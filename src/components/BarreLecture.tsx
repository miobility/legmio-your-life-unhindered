import { useEffect, useState } from "react";

/**
 * Fin trait dore sous l'en-tete, qui suit l'avancee dans la page.
 * Repere de progression discret, sans occuper de place.
 */
export function BarreLecture() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let raf = 0;
    const calcule = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(calcule); };
    calcule();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="barre-lecture" style={{ top: 104, width: `${pct}%` }} aria-hidden="true" />;
}
