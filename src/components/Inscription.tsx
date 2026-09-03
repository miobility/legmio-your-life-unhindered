import { useId, useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";

/**
 * Champ d'inscription pose dans la page.
 *
 * Avant, chaque bouton ouvrait le formulaire HubSpot dans un onglet separe :
 * on perdait le visiteur a l'instant ou il venait de decider. Ici il saisit son
 * adresse sur place et la confirmation s'affiche au meme endroit.
 *
 * Tant que PORTAIL et FORMULAIRE ne sont pas renseignes, le composant retombe
 * sur l'ancien comportement — le bouton ouvre HubSpot. Rien ne casse en
 * attendant que Benjamin colle les deux identifiants.
 */
const PORTAIL = "";     // HubSpot > Parametres > Compte : « ID du compte »
const FORMULAIRE = "";  // HubSpot > Marketing > Formulaires : le GUID du formulaire
const REGION = "eu1";

const configure = () => PORTAIL !== "" && FORMULAIRE !== "";

type Etat = "repos" | "envoi" | "fait" | "erreur";

export function Inscription({ ton = "clair" }: { ton?: "clair" | "sombre" }) {
  const { t, tr, hubspotUrl, lang } = useLanguage();
  const champ = useId();
  const [courriel, setCourriel] = useState("");
  const [etat, setEtat] = useState<Etat>("repos");

  const sombre = ton === "sombre";
  const encre = sombre ? "#FFFFFF" : "#15122E";
  const doux = sombre ? "#A89ED0" : "#6B6B6B";
  const bordure = sombre ? "#252159" : "#E8E4DC";
  const fond = sombre ? "#15122E" : "#FFFFFF";

  async function envoyer(e: FormEvent) {
    e.preventDefault();
    if (etat === "envoi") return;
    setEtat("envoi");
    try {
      const r = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAIL}/${FORMULAIRE}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [{ objectTypeId: "0-1", name: "email", value: courriel }],
            context: {
              pageUri: typeof window !== "undefined" ? window.location.href : "",
              pageName: `legmio — ${lang}`,
            },
          }),
        }
      );
      setEtat(r.ok ? "fait" : "erreur");
    } catch {
      setEtat("erreur");
    }
  }

  // Sans identifiants, on garde le bouton qui ouvre HubSpot.
  if (!configure()) {
    return (
      <a
        href={hubspotUrl}
        target="_blank"
        rel="noreferrer"
        className={sombre ? "btn-dark btn-dark-hover" : "btn-light btn-light-hover"}
      >
        {t("cta_interested")} →
      </a>
    );
  }

  if (etat === "fait") {
    return (
      <p
        role="status"
        className="text-base font-medium py-3"
        style={{ color: sombre ? "#FFCA75" : "#15122E" }}
      >
        {tr(
          "C'est noté. On t'écrit dès que la béquille est disponible.",
          "You're on the list. We'll write as soon as the crutch is available.",
          "Eingetragen. Wir melden uns, sobald die Krücke verfügbar ist."
        )}
      </p>
    );
  }

  return (
    <form onSubmit={envoyer} className="w-full max-w-md mx-auto">
      <label htmlFor={champ} className="sr-only">
        {tr("Votre adresse e-mail", "Your email address", "Ihre E-Mail-Adresse")}
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id={champ}
          type="email"
          required
          autoComplete="email"
          value={courriel}
          onChange={(e) => setCourriel(e.target.value)}
          placeholder={tr("Votre adresse e-mail", "Your email address", "Ihre E-Mail-Adresse")}
          className="flex-1 min-w-0 rounded-full px-5 py-3.5 text-base outline-none"
          style={{ backgroundColor: fond, color: encre, border: `1px solid ${bordure}` }}
        />
        <button
          type="submit"
          disabled={etat === "envoi"}
          className={`${sombre ? "btn-dark btn-dark-hover" : "btn-light btn-light-hover"} justify-center shrink-0`}
        >
          {etat === "envoi"
            ? tr("Envoi…", "Sending…", "Wird gesendet…")
            : t("cta_interested")}
        </button>
      </div>
      <p className="mt-3 text-xs" style={{ color: doux }}>
        {tr(
          "Une seule adresse, aucun message inutile. Désinscription en un clic.",
          "One address, no noise. Unsubscribe in one click.",
          "Eine Adresse, kein Lärm. Abmeldung mit einem Klick."
        )}
      </p>
      <p role="alert" aria-live="polite" className="mt-2 text-sm" style={{ color: sombre ? "#FFCA75" : "#B4322E" }}>
        {etat === "erreur"
          ? tr(
              "L'envoi a échoué. Réessaie, ou écris-nous à contact@legmio.com.",
              "That didn't go through. Try again, or write to contact@legmio.com.",
              "Das hat nicht geklappt. Versuche es erneut oder schreibe an contact@legmio.com."
            )
          : ""}
      </p>
    </form>
  );
}
