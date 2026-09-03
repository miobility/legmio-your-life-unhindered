import { Children, useEffect, useState, type ReactNode } from "react";

/**
 * Bandeau defilant, pour les elements decoratifs : logos presse, mur d'avis.
 * A la difference du carrousel, il n'y a rien a « consulter » ici — c'est une
 * frise. D'ou le defilement continu, mais avec un bouton d'arret : le critere
 * WCAG 2.2.2 impose de pouvoir stopper tout mouvement de plus de 5 secondes.
 */
export function Marquee({
  rows,
  label,
  seconds = 40,
}: {
  rows: ReactNode[][];
  label: string;
  seconds?: number;
}) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const arrete = paused || reduced;

  return (
    <div role="group" aria-roledescription="bandeau défilant" aria-label={label}>
      <div className="space-y-6 marquee-pause">
        {rows.map((row, r) => {
          const doubled = [...Children.toArray(row), ...Children.toArray(row)];
          return (
            <div key={r} className="overflow-hidden">
              <div
                className={`flex gap-4 ${r % 2 === 0 ? "marquee-left" : "marquee-right"}`}
                style={{
                  width: "max-content",
                  animationDuration: `${seconds}s`,
                  animationPlayState: arrete ? "paused" : "running",
                }}
              >
                {doubled.map((c, i) => (
                  <div key={i} className="shrink-0">{c}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {!reduced && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            className="marquee-toggle"
          >
            {paused ? (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8z" /></svg>
                Relancer le défilement
              </>
            ) : (
              <>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4h4v16H7zM13 4h4v16h-4z" /></svg>
                Arrêter le défilement
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
