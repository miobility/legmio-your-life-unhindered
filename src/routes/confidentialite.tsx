import { metaDe } from "@/lib/meta";
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/confidentialite")({
  head: () => metaDe("fr", "confidentialite"),
  component: Confidentialite,
});

const TEXT = "#FFFFFF";
const MUTED = "#A89ED0";
const BG = "#0D0D29";
const BG_ALT = "#15122E";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="titre-section font-display font-bold mt-6 mb-3" style={{ color: TEXT }}>{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export function Confidentialite() {
  const { tr } = useLanguage();
  return (
    <div style={{ backgroundColor: BG }}>
      <section style={{ backgroundColor: BG_ALT }} className="px-4 sm:px-6 py-16 text-center">
        <h1 className="titre-page font-display font-bold" style={{ color: TEXT }}>{tr("Politique de confidentialité", "Privacy policy", "Datenschutzrichtlinie")}</h1>
      </section>
      <section className="px-4 sm:px-6 py-16">
        <article className="max-w-[680px] mx-auto text-[15px] leading-relaxed space-y-2" style={{ color: MUTED }}>
          <Section title={tr("1. Responsable du traitement", "1. Data controller", "1. Verantwortlicher für die Datenverarbeitung")}>
            <p>{tr("Le responsable du traitement des données collectées sur legmio.com est :", "The controller responsible for processing data collected on legmio.com is:", "Der Verantwortliche für die Verarbeitung der auf legmio.com erhobenen Daten ist:")}</p>
            <p>{tr("miobility, projet en cours d'immatriculation", "miobility, a project currently being registered", "miobility, ein Projekt, das sich derzeit in der Registrierung befindet")}<br />13-15 Rue Traversière — 75012 Paris<br /><a href="mailto:contact@legmio.com" className="underline">contact@legmio.com</a></p>
          </Section>

          <Section title={tr("2. Données collectées", "2. Data collected", "2. Erhobene Daten")}>
            <p>{tr("legmio.com collecte des données personnelles dans les cas suivants :", "legmio.com collects personal data in the following cases:", "legmio.com erhebt personenbezogene Daten in folgenden Fällen:")}</p>
            <p><strong>{tr("Via le formulaire de liste d'attente (HubSpot)", "Via the waiting list form (HubSpot)", "Über das Warteliste-Formular (HubSpot)")}</strong> :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{tr("Prénom et/ou nom", "First and/or last name", "Vor- und/oder Nachname")}</li>
              <li>{tr("Adresse email", "Email address", "E-Mail-Adresse")}</li>
              <li>{tr("Profil utilisateur (optionnel)", "User profile (optional)", "Benutzerprofil (optional)")}</li>
            </ul>
            <p>{tr("Ces données sont collectées avec votre consentement explicite, matérialisé par une case à cocher non pré-cochée au moment de la soumission du formulaire.", "This data is collected with your explicit consent, materialized by an unchecked checkbox at the time of form submission.", "Diese Daten werden mit Ihrer ausdrücklichen Zustimmung erhoben, die durch ein bei der Formularübermittlung nicht vorausgewähltes Kontrollkästchen dokumentiert wird.")}</p>
            <p>{tr("Aucune autre donnée personnelle n'est collectée. Le site legmio.com n'utilise pas de cookies de tracking ni d'outils d'analyse comportementale. Les statistiques de visite sont collectées de manière agrégée et anonyme via Vercel Analytics, sans dépôt de cookie.", "No other personal data is collected. The legmio.com site does not use tracking cookies or behavioral analysis tools. Visit statistics are collected in an aggregated and anonymous manner via Vercel Analytics, without any cookie being placed.", "Es werden keine weiteren personenbezogenen Daten erhoben. Die Website legmio.com verwendet keine Tracking-Cookies oder Tools zur Verhaltensanalyse. Besuchsstatistiken werden aggregiert und anonym über Vercel Analytics erfasst, ohne dass Cookies gesetzt werden.")}</p>
          </Section>

          <Section title={tr("3. Finalité du traitement", "3. Purpose of processing", "3. Zweck der Verarbeitung")}>
            <p>{tr("Les données collectées via le formulaire sont utilisées uniquement pour :", "The data collected via the form is used solely to:", "Die über das Formular erhobenen Daten werden ausschließlich verwendet, um:")}</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{tr("Vous informer du lancement de legmio et de l'ouverture des commandes", "Inform you of the launch of legmio and the opening of orders", "Sie über den Start von legmio und die Eröffnung der Bestellungen zu informieren")}</li>
              <li>{tr("Vous contacter dans le cadre de votre demande d'information", "Contact you regarding your information request", "Sie im Rahmen Ihrer Informationsanfrage zu kontaktieren")}</li>
            </ul>
            <p>{tr("Elles ne sont utilisées à aucune autre fin commerciale ou publicitaire.", "They are not used for any other commercial or advertising purpose.", "Sie werden zu keinem anderen kommerziellen oder werblichen Zweck verwendet.")}</p>
          </Section>

          <Section title={tr("4. Base légale", "4. Legal basis", "4. Rechtsgrundlage")}>
            <p>{tr("Le traitement de vos données repose sur votre consentement explicite, recueilli au moment de la soumission du formulaire (article 6.1.a du RGPD). Vous pouvez retirer votre consentement à tout moment en nous contactant à ", "The processing of your data is based on your explicit consent, collected at the time of form submission (article 6.1.a of the GDPR). You can withdraw your consent at any time by contacting us at ", "Die Verarbeitung Ihrer Daten beruht auf Ihrer ausdrücklichen Einwilligung, die bei der Übermittlung des Formulars eingeholt wird (Artikel 6.1.a der DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie uns kontaktieren unter ")}<a href="mailto:contact@legmio.com" className="underline">contact@legmio.com</a>.</p>
          </Section>

          <Section title={tr("5. Destinataires des données", "5. Data recipients", "5. Empfänger der Daten")}>
            <p>{tr("Vos données sont traitées via HubSpot (outil de gestion de la relation client). HubSpot est configuré pour stocker les données dans l'Union Européenne. Vos données ne sont transmises à aucun tiers à des fins commerciales. Elles ne sont pas vendues.", "Your data is processed via HubSpot (customer relationship management tool). HubSpot is configured to store data within the European Union. Your data is not transmitted to any third party for commercial purposes. It is not sold.", "Ihre Daten werden über HubSpot (Kundenbeziehungsmanagement-Tool) verarbeitet. HubSpot ist so konfiguriert, dass Daten innerhalb der Europäischen Union gespeichert werden. Ihre Daten werden zu keinem kommerziellen Zweck an Dritte weitergegeben. Sie werden nicht verkauft.")}</p>
          </Section>

          <Section title={tr("6. Durée de conservation", "6. Retention period", "6. Aufbewahrungsdauer")}>
            <p>{tr("Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre inscription, ou jusqu'à ce que vous demandiez leur suppression.", "Your data is retained for a maximum period of 3 years from your registration, or until you request its deletion.", "Ihre Daten werden für maximal 3 Jahre ab Ihrer Registrierung aufbewahrt oder bis Sie deren Löschung beantragen.")}</p>
          </Section>

          <Section title={tr("7. Vos droits", "7. Your rights", "7. Ihre Rechte")}>
            <p>{tr("Conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants :", "In accordance with the GDPR (EU Regulation 2016/679) and the French Data Protection Act, you have the following rights:", "Gemäß der DSGVO (EU-Verordnung 2016/679) und dem französischen Datenschutzgesetz haben Sie folgende Rechte:")}</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{tr("Droit d'accès — obtenir une copie de vos données", "Right of access — obtain a copy of your data", "Auskunftsrecht — eine Kopie Ihrer Daten erhalten")}</li>
              <li>{tr("Droit de rectification — corriger des données inexactes", "Right of rectification — correct inaccurate data", "Recht auf Berichtigung — unrichtige Daten korrigieren")}</li>
              <li>{tr("Droit à l'effacement — demander la suppression de vos données", "Right to erasure — request the deletion of your data", "Recht auf Löschung — die Löschung Ihrer Daten beantragen")}</li>
              <li>{tr("Droit d'opposition — vous opposer au traitement de vos données", "Right to object — object to the processing of your data", "Widerspruchsrecht — der Verarbeitung Ihrer Daten widersprechen")}</li>
              <li>{tr("Droit à la portabilité — recevoir vos données dans un format lisible", "Right to portability — receive your data in a readable format", "Recht auf Datenübertragbarkeit — Ihre Daten in einem lesbaren Format erhalten")}</li>
              <li>{tr("Droit de retrait du consentement — à tout moment, sans effet rétroactif", "Right to withdraw consent — at any time, without retroactive effect", "Recht auf Widerruf der Einwilligung — jederzeit, ohne rückwirkende Wirkung")}</li>
            </ul>
            <p>{tr("Pour exercer ces droits : ", "To exercise these rights: ", "Um diese Rechte auszuüben: ")}<a href="mailto:contact@legmio.com" className="underline">contact@legmio.com</a></p>
            <p>{tr("Vous disposez également du droit d'introduire une réclamation auprès de la CNIL : ", "You also have the right to lodge a complaint with the CNIL: ", "Sie haben außerdem das Recht, eine Beschwerde bei der CNIL einzureichen: ")}<a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="underline">www.cnil.fr</a></p>
          </Section>

          <Section title={tr("8. Cookies", "8. Cookies", "8. Cookies")}>
            <p>{tr("legmio.com n'utilise pas de cookies de tracking ou de publicité. Les seules données techniques collectées le sont de manière agrégée et anonyme via Vercel Analytics, sans identification individuelle et sans dépôt de cookie sur votre appareil.", "legmio.com does not use tracking or advertising cookies. The only technical data collected is done so in an aggregated and anonymous manner via Vercel Analytics, without individual identification and without any cookie being placed on your device.", "legmio.com verwendet keine Tracking- oder Werbe-Cookies. Die einzigen erfassten technischen Daten werden aggregiert und anonym über Vercel Analytics erhoben, ohne individuelle Identifizierung und ohne dass Cookies auf Ihrem Gerät gesetzt werden.")}</p>
          </Section>

          <Section title={tr("9. Sécurité", "9. Security", "9. Sicherheit")}>
            <p>{tr("miobility met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou altération. Le site est hébergé sur Vercel avec connexion sécurisée HTTPS.", "miobility implements appropriate technical and organizational measures to protect your data against unauthorized access, loss or alteration. The site is hosted on Vercel with a secure HTTPS connection.", "miobility setzt geeignete technische und organisatorische Maßnahmen um, um Ihre Daten vor unbefugtem Zugriff, Verlust oder Veränderung zu schützen. Die Website wird auf Vercel mit einer sicheren HTTPS-Verbindung gehostet.")}</p>
          </Section>

          <Section title={tr("10. Modification de la politique", "10. Policy changes", "10. Änderung der Richtlinie")}>
            <p>{tr("La présente politique de confidentialité peut être mise à jour. La date de dernière mise à jour est indiquée en bas de page.", "This privacy policy may be updated. The date of the last update is indicated at the bottom of the page.", "Diese Datenschutzrichtlinie kann aktualisiert werden. Das Datum der letzten Aktualisierung wird am Ende der Seite angegeben.")}</p>
          </Section>

          <p className="text-xs pt-6" style={{ color: MUTED }}>{tr("Dernière mise à jour : juillet 2026", "Last updated: July 2026", "Letzte Aktualisierung: Juli 2026")}</p>
        </article>
      </section>
    </div>
  );
}
