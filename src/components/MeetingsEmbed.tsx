import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const EMBED_SCRIPT = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

/**
 * Calendrier HubSpot integre.
 * L'ancienne version chargeait l'URL brute dans une iframe de 750px fixe : HubSpot
 * renvoyait sa page complete, d'ou l'affichage casse sur mobile. Le script officiel
 * ajoute ?embed=true et ajuste la hauteur du cadre au contenu, a toutes les tailles.
 */
export function MeetingsEmbed({ url }: { url: string }) {
  const { tr } = useLanguage();
  const holder = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    document.querySelectorAll(`script[src="${EMBED_SCRIPT}"]`).forEach((n) => n.remove());
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    script.onerror = () => setFailed(true);
    document.body.appendChild(script);
    const timer = window.setTimeout(() => {
      if (holder.current && holder.current.childElementCount === 0) setFailed(true);
    }, 8000);
    return () => window.clearTimeout(timer);
  }, [url]);

  if (failed) {
    return (
      <div className="flex justify-center">
        <a href={url} target="_blank" rel="noreferrer" className="btn-dark btn-dark-hover">
          {tr("Prendre rendez-vous", "Book a meeting", "Termin vereinbaren")} <span aria-hidden="true">→</span>
        </a>
      </div>
    );
  }
  return <div ref={holder} className="meetings-iframe-container" data-src={`${url}?embed=true`} />;
}
