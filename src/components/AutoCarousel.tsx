import { Children, type ReactNode } from "react";

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
  return (
    <div className={`marquee-container ${className}`}>
      <div className="marquee-track" style={{ animationDuration: `${cycleSeconds}s` }}>
        {arr.map((c, i) => (
          <div key={`a${i}`} className="marquee-item">{c}</div>
        ))}
        {arr.map((c, i) => (
          <div key={`b${i}`} className="marquee-item" aria-hidden>{c}</div>
        ))}
      </div>
    </div>
  );
}
