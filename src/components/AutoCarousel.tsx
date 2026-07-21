import { Children, useEffect, useRef, useState, type ReactNode } from "react";

export function AutoCarousel({
  children,
  cycleSeconds = 30,
  className = "",
}: {
  children: ReactNode;
  scrollStep?: number;
  cycleSeconds?: number;
  dark?: boolean;
  className?: string;
}) {
  const arr = Children.toArray(children);
  const items = [...arr, ...arr];
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    const step = (now: number) => {
      const dt = now - last;
      last = now;
      if (!paused && el.scrollWidth > el.clientWidth) {
        const half = el.scrollWidth / 2;
        const speed = half / (cycleSeconds * 1000);
        el.scrollLeft += speed * dt;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused, cycleSeconds]);

  const nudge = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(400, el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((c, i) => (
          <div key={i} className="shrink-0">{c}</div>
        ))}
      </div>
      <button
        type="button"
        aria-label="Précédent"
        onClick={() => nudge(-1)}
        className="carousel-arrow absolute left-2 top-1/2 -translate-y-1/2"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
      </button>
      <button
        type="button"
        aria-label="Suivant"
        onClick={() => nudge(1)}
        className="carousel-arrow absolute right-2 top-1/2 -translate-y-1/2"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
      </button>
    </div>
  );
}
