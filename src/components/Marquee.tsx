import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { SEUIL } from "@/lib/apparition";

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
  tone = "dark",
}: {
  rows: ReactNode[][];
  label: string;
  seconds?: number;
  /** « light » sur fond sombre, « dark » sur fond clair. */
  tone?: "light" | "dark";
}) {
  const [paused, setPaused] = useState(false);
  // L'animation partait au chargement de la page : quand on arrivait sur la
  // section, elle tournait deja depuis longtemps et le premier logo etait
  // coupe. Elle ne demarre plus qu'a l'entree dans l'ecran, donc toujours
  // au debut de la frise.
  const bloc = useRef<HTMLDivElement>(null);
  const [demarre, setDemarre] = useState(false);
  const [reduced, setReduced] = useState(false);
  // Le doigt pose sur la frise la fige, pour pouvoir la pousser soi-meme.
  const [manipule, setManipule] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = bloc.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setDemarre(true);
        io.disconnect();
      },
      { threshold: SEUIL, rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const arrete = paused || reduced || manipule || !demarre;

  return (
    <div
      ref={bloc}
      role="group"
      aria-roledescription="bandeau défilant"
      aria-label={label}
      onPointerDown={() => setManipule(true)}
      onPointerUp={() => setManipule(false)}
      onPointerCancel={() => setManipule(false)}
      onPointerLeave={() => setManipule(false)}
    >
      <div className="space-y-6 marquee-pause">
        {rows.map((row, r) => {
          const doubled = [...Children.toArray(row), ...Children.toArray(row)];
          return (
            <div
              key={r}
              // Defilement a la main : on peut pousser la frise pour aller plus vite.
              // overflow-y-hidden, sinon overflow-x auto le rendrait defilable en vertical.
              className="overflow-x-auto overflow-y-hidden no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", overscrollBehaviorX: "contain" }}
            >
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
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-pressed={paused}
            aria-label={paused ? "Relancer le défilement" : "Arrêter le défilement"}
            title={paused ? "Relancer le défilement" : "Arrêter le défilement"}
            className="marquee-toggle"
            style={{ color: tone === "light" ? "#FFFFFF" : "#0D0D29" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {paused ? <path d="M7 4l13 8-13 8z" /> : <path d="M7 4h4v16H7zM13 4h4v16h-4z" />}
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
