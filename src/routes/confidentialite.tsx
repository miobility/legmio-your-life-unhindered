import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/confidentialite")({
  head: () => ({
    meta: [
      { title: "legmio — Politique de confidentialité" },
      { name: "description", content: "Politique de confidentialité du site legmio.com." },
    ],
  }),
  component: Confidentialite,
});

const TEXT = "#FFFFFF";
const MUTED = "#A89ED0";
const BG = "#120B3B";
const BG_ALT = "#1A1040";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold mt-6 mb-3" style={{ color: TEXT }}>{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Confidentialite() {
  const { tr } = useLanguage();
  return (
    <div style={{ backgroundColor: BG }}>
      <section style={{ backgroundColor: BG_ALT }} className="px-4 sm:px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-display font-bold" style={{ color: TEXT }}>{tr("Politique de confidentialité", "Privacy policy")}</h1>
      </section>
      <section className="px-4 sm:px-6 py-16">
        <article className="max-w-[680px] mx-auto text-[15px] leading-relaxed space-y-2" style={{ color: "#333" }}>
          <Section title="1. Responsable du traitement">
            <p>Le responsable du traitement des données collectées sur legmio.com est :</p>
            <p>miobility, projet en cours d'immatriculation<br />13-15 Rue Traversière — 75012 Paris<br /><a href="mailto:contact@legmio.com" className="underline">contact@legmio.com</a></p>
          </Section>

          <Section title="2. Données collectées">
            <p>legmio.com collecte des données personnelles dans les cas suivants :</p>
            <p><strong>Via le formulaire de liste d'attente (HubSpot)</strong> :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prénom et/ou nom</li>
              <li>Adresse email</li>
              <li>Profil utilisateur (optionnel)</li>
            </ul>
            <p>Ces données sont collectées avec votre consentement explicite, matérialisé par une case à cocher non pré-cochée au moment de la soumission du formulaire.</p>
            <p>Aucune autre donnée personnelle n'est collectée. Le site legmio.com n'utilise pas de cookies de tracking ni d'outils d'analyse comportementale. Les statistiques de visite sont collectées de manière agrégée et anonyme via Vercel Analytics, sans dépôt de cookie.</p>
          </Section>

          <Section title="3. Finalité du traitement">
            <p>Les données collectées via le formulaire sont utilisées uniquement pour :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vous informer du lancement de legmio et de l'ouverture des commandes</li>
              <li>Vous contacter dans le cadre de votre demande d'information</li>
            </ul>
            <p>Elles ne sont utilisées à aucune autre fin commerciale ou publicitaire.</p>
          </Section>

          <Section title="4. Base légale">
            <p>Le traitement de vos données repose sur votre consentement explicite, recueilli au moment de la soumission du formulaire (article 6.1.a du RGPD). Vous pouvez retirer votre consentement à tout moment en nous contactant à <a href="mailto:contact@legmio.com" className="underline">contact@legmio.com</a>.</p>
          </Section>

          <Section title="5. Destinataires des données">
            <p>Vos données sont traitées via HubSpot (outil de gestion de la relation client). HubSpot est configuré pour stocker les données dans l'Union Européenne. Vos données ne sont transmises à aucun tiers à des fins commerciales. Elles ne sont pas vendues.</p>
          </Section>

          <Section title="6. Durée de conservation">
            <p>Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre inscription, ou jusqu'à ce que vous demandiez leur suppression.</p>
          </Section>

          <Section title="7. Vos droits">
            <p>Conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Droit d'accès — obtenir une copie de vos données</li>
              <li>Droit de rectification — corriger des données inexactes</li>
              <li>Droit à l'effacement — demander la suppression de vos données</li>
              <li>Droit d'opposition — vous opposer au traitement de vos données</li>
              <li>Droit à la portabilité — recevoir vos données dans un format lisible</li>
              <li>Droit de retrait du consentement — à tout moment, sans effet rétroactif</li>
            </ul>
            <p>Pour exercer ces droits : <a href="mailto:contact@legmio.com" className="underline">contact@legmio.com</a></p>
            <p>Vous disposez également du droit d'introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noreferrer" className="underline">www.cnil.fr</a></p>
          </Section>

          <Section title="8. Cookies">
            <p>legmio.com n'utilise pas de cookies de tracking ou de publicité. Les seules données techniques collectées le sont de manière agrégée et anonyme via Vercel Analytics, sans identification individuelle et sans dépôt de cookie sur votre appareil.</p>
          </Section>

          <Section title="9. Sécurité">
            <p>miobility met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou altération. Le site est hébergé sur Vercel avec connexion sécurisée HTTPS.</p>
          </Section>

          <Section title="10. Modification de la politique">
            <p>La présente politique de confidentialité peut être mise à jour. La date de dernière mise à jour est indiquée en bas de page.</p>
          </Section>

          <p className="text-xs pt-6" style={{ color: MUTED }}>Dernière mise à jour : juillet 2026</p>
        </article>
      </section>
    </div>
  );
}
