import { Children, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Carrousel de contenu, mecanique unique pour tout le site.
 *
 * Mobile  : defilement horizontal avec accrochage, pastilles sous le bloc.
 * Desktop : les cartes s'etalent en rangee, plus rien ne defile.
 *
 * Pas de defilement automatique : avec trois cartes qui tiennent toutes a
 * l'ecran sur desktop, il n'apporte rien et empeche de lire a son rythme.
 */
export function Carousel({
  children,
  label,
  className = "",
}: {
  children: ReactNode;
  label: string;
  className?: string;
}) {
  const items = Children.toArray(children);
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const pas = first.getBoundingClientRect().width + parseFloat(getComputedStyle(el).gap || "0");
      setActive(Math.max(0, Math.min(items.length - 1, Math.round(el.scrollLeft / pas))));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items.length]);

  const goTo = (i: number) => {
    const el = track.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return;
    const pas = first.getBoundingClientRect().width + parseFloat(getComputedStyle(el).gap || "0");
    el.scrollTo({ left: i * pas, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={track}
        role="group"
        aria-roledescription="carrousel"
        aria-label={label}
        className="flex gap-6 overflow-x-auto overflow-y-hidden md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          // Des que overflow-x vaut auto, overflow-y ne peut plus valoir visible :
          // il devient auto, et le bloc se laissait tirer verticalement au doigt.
          // overflow-y-hidden suffit a l'empecher, et le geste vertical remonte
          // alors naturellement a la page.
          // Surtout pas de touch-action ici : « pan-x » interdirait le geste
          // vertical sur toute la chaine, page comprise — on ne pourrait plus
          // descendre en posant le doigt sur un carrousel.
          overscrollBehaviorX: "contain",
        }}
      >
        {items.map((c, i) => (
          // 86 % sur mobile : la carte suivante depasse toujours, quel que soit l'ecran
          <div key={i} className="snap-start shrink-0 w-[86%] sm:w-[62%] md:w-auto md:flex-1 md:shrink">
            {c}
          </div>
        ))}
      </div>

      {/* Pastilles : utiles seulement la ou ca defile */}
      {items.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-1 md:hidden">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${label} — ${i + 1} sur ${items.length}`}
              aria-current={i === active}
              className="flex items-center justify-center"
              style={{ width: 44, height: 44 }}
            >
              <span
                className="block rounded-full transition-all"
                style={{
                  width: i === active ? 22 : 8,
                  height: 8,
                  backgroundColor: i === active ? "#FFCA75" : "#C9C4DA",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
