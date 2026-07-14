import { Children, useEffect, useRef, useState, type ReactNode } from "react";

export function AutoCarousel({
  children,
  scrollStep = 320,
  cycleSeconds = 30,
  dark = false,
  className = "",
}: {
  children: ReactNode;
  scrollStep?: number;
  cycleSeconds?: number;
  dark?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const arr = Children.toArray(children);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!paused && el) {
        const half = el.scrollWidth / 2;
        const speed = half > 0 ? half / cycleSeconds : 0;
        el.scrollLeft += (speed * dt) / 1000;
        if (half > 0 && el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, cycleSeconds]);

  const scrollByStep = (dir: 1 | -1) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir * scrollStep, behavior: "smooth" });
  };

  const arrowBase: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 44,
    height: 44,
    borderRadius: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: dark ? "rgba(255,255,255,0.9)" : "rgba(17,17,17,0.9)",
    color: dark ? "#111" : "#FFF",
    zIndex: 10,
    cursor: "pointer",
    boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button aria-label="Previous" onClick={() => scrollByStep(-1)} style={{ ...arrowBase, left: 8 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button aria-label="Next" onClick={() => scrollByStep(1)} style={{ ...arrowBase, right: 8 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
      </button>
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {arr.map((c, i) => (
          <div key={`a${i}`} className="shrink-0">{c}</div>
        ))}
        {arr.map((c, i) => (
          <div key={`b${i}`} className="shrink-0" aria-hidden>{c}</div>
        ))}
      </div>
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
    </div>
  );
}
