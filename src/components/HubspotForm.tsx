import { useEffect, useRef, useState } from "react";
import { useLanguage, HUBSPOT_PORTAL_ID, HUBSPOT_REGION } from "@/lib/i18n";

const SRC = `https://js-eu1.hsforms.net/forms/embed/${HUBSPOT_PORTAL_ID}.js`;

/**
 * Formulaire HubSpot integre a la page, a la place d'un renvoi vers un onglet.
 * Le script HubSpot balaie le DOM au chargement : on le recharge quand la langue
 * change, sinon le nouveau formulaire ne serait jamais rendu.
 */
export function HubspotForm({ className = "" }: { className?: string }) {
  const { hubspotFormId, hubspotUrl, tr } = useLanguage();
  const holder = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    document.querySelectorAll(`script[src="${SRC}"]`).forEach((n) => n.remove());
    const script = document.createElement("script");
    script.src = SRC;
    script.defer = true;
    script.onerror = () => setFailed(true);
    document.body.appendChild(script);

    // Si rien n'a ete injecte au bout de 6 s, on montre le lien de repli.
    const timer = window.setTimeout(() => {
      if (holder.current && holder.current.childElementCount === 0) setFailed(true);
    }, 6000);
    return () => window.clearTimeout(timer);
  }, [hubspotFormId]);

  return (
    <div className={className}>
      <div
        ref={holder}
        key={hubspotFormId}
        className="hs-form-frame"
        data-region={HUBSPOT_REGION}
        data-form-id={hubspotFormId}
        data-portal-id={HUBSPOT_PORTAL_ID}
      />
      {failed && (
        <a href={hubspotUrl} target="_blank" rel="noreferrer" className="btn-light btn-light-hover">
          {tr("Ouvrir le formulaire", "Open the form", "Formular öffnen")}
        </a>
      )}
    </div>
  );
}
