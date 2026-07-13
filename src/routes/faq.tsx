import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IconChevron } from "@/components/Icons";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "legmio — FAQ" },
      { name: "description", content: "Toutes les réponses sur legmio : produit, usage, prix, prise en charge, SAV." },
      { property: "og:title", content: "legmio — FAQ" },
      { property: "og:description", content: "Tout ce que tu veux savoir sur legmio." },
    ],
  }),
  component: Faq,
});

type Item = { q: [string, string]; a: [string, string] };
type Theme = { title: [string, string]; items: Item[] };

const themes: Theme[] = [
  {
    title: ["legmio & moi", "legmio & me"],
    items: [
      { q: ["Quelle taille pour moi ?", "What size fits me?"], a: ["Taille unique, réglable de 1m50 à 1m95.", "One size, adjustable from 1m50 to 1m95."] },
      { q: ["Poids max supporté ?", "Maximum weight?"], a: ["130 kg.", "130 kg."] },
      { q: ["Réglable ?", "Adjustable?"], a: ["Oui, deux points : poignée + appui coude.", "Yes, two points: grip and elbow rest."] },
      { q: ["Enfants ?", "Children?"], a: ["Actuellement adultes. Version enfant à l'étude.", "Currently adults only. Kids' version in study."] },
      { q: ["Faut-il de la force dans les mains ?", "Do I need hand strength?"], a: ["Non, l'appui du poignet sur l'avant-bras suffit.", "No, resting the wrist on the forearm is enough."] },
    ],
  },
  {
    title: ["Le produit", "The product"],
    items: [
      { q: ["Poids ?", "Weight?"], a: ["850g.", "850g."] },
      { q: ["Matériaux ?", "Materials?"], a: ["Aluminium anodisé, polymères ergonomiques.", "Anodized aluminum, ergonomic polymers."] },
      { q: ["Embouts ?", "Tips?"], a: ["Interchangeables sans outil.", "Interchangeable, no tools."] },
      { q: ["Amortissement ?", "Shock absorption?"], a: ["Structure et embout absorbent les chocs.", "Frame and tip absorb shocks."] },
      { q: ["Poignée ?", "Grip?"], a: ["Ergonomique, adaptée à la position naturelle du poignet.", "Ergonomic, fits the natural wrist position."] },
    ],
  },
  {
    title: ["Usage", "Usage"],
    items: [
      { q: ["Intérieur / extérieur ?", "Indoor / outdoor?"], a: ["Les deux — changer d'embout au besoin.", "Both — swap tips as needed."] },
      { q: ["Temps d'adaptation ?", "Adaptation time?"], a: ["1 à 2 semaines.", "1 to 2 weeks."] },
      { q: ["Amputation ?", "Amputation?"], a: ["Compatible selon niveau — voir MPR.", "Compatible depending on level — see a PM&R physician."] },
      { q: ["Contre-indications ?", "Contraindications?"], a: ["Peu, mais valider avec ton médecin.", "Few, but check with your doctor."] },
    ],
  },
  {
    title: ["Preuves & certifications", "Evidence & certifications"],
    items: [
      { q: ["CE ?", "CE?"], a: ["Classe I, MDR 2017/745, en cours.", "Class I, MDR 2017/745, in progress."] },
      { q: ["Recherche ?", "Research?"], a: ["Issue du CNRS / ISIR Sorbonne Université.", "Born from CNRS / ISIR Sorbonne Université."] },
      { q: ["Brevet ?", "Patent?"], a: ["FR2411206, octobre 2024.", "FR2411206, October 2024."] },
      { q: ["Validation médicale ?", "Medical validation?"], a: ["+6 médecins MPR — Kerpape, autres centres.", "6+ PM&R physicians — Kerpape and other centers."] },
    ],
  },
  {
    title: ["Prix & prise en charge", "Price & reimbursement"],
    items: [
      { q: ["Prix ?", "Price?"], a: ["150€ TTC (prix estimatif), livraison incluse.", "€150 incl. VAT (estimated), shipping included."] },
      { q: ["Sécu ?", "Public health cover?"], a: ["Remboursement partiel sur prescription (LPP).", "Partial reimbursement on prescription (LPP)."] },
      { q: ["Mutuelle ?", "Private insurance?"], a: ["Complément selon contrat.", "Depends on your plan."] },
      { q: ["Agefiph / FIPHFP ?", "Agefiph / FIPHFP?"], a: ["Jusqu'à 90% en contexte emploi RQTH.", "Up to 90% in an RQTH employment context."] },
      { q: ["MDPH / PCH ?", "MDPH / PCH?"], a: ["Éligible selon dossier individuel.", "Eligible based on individual file."] },
    ],
  },
  {
    title: ["Commande & livraison", "Ordering & shipping"],
    items: [
      { q: ["Livraison gratuite ?", "Free shipping?"], a: ["Oui, incluse.", "Yes, included."] },
      { q: ["Délais ?", "Timeline?"], a: ["Commercialisation courant 2027 — liste d'attente ouverte.", "Launching in 2027 — waiting list open."] },
      { q: ["International ?", "International?"], a: ["France d'abord, Europe ensuite.", "France first, then Europe."] },
    ],
  },
  {
    title: ["Entretien & SAV", "Care & support"],
    items: [
      { q: ["Nettoyage ?", "Cleaning?"], a: ["Chiffon humide + savon doux.", "Damp cloth + mild soap."] },
      { q: ["Pièces remplaçables ?", "Replaceable parts?"], a: ["Embouts, poignée, appui.", "Tips, grip, rest."] },
      { q: ["Garantie ?", "Warranty?"], a: ["2 ans.", "2 years."] },
      { q: ["Retours ?", "Returns?"], a: ["14 jours.", "14 days."] },
    ],
  },
  {
    title: ["Professionnels", "Professionals"],
    items: [
      { q: ["Tarifs revendeurs ?", "Reseller pricing?"], a: ["contact@legmio.com", "contact@legmio.com"] },
      { q: ["Démo prescripteurs ?", "Demo for prescribers?"], a: ["Programme en cours.", "Program in progress."] },
      { q: ["Prêt ?", "Loan?"], a: ["Kits de prêt pour MPR — nous contacter.", "Loan kits for PM&R centers — contact us."] },
    ],
  },
];

function Faq() {
  const { lang, tr } = useLanguage();
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <section className="px-4 sm:px-6 py-20">
        <h1 className="text-4xl sm:text-5xl text-center" style={{ color: "#111" }}>
          {tr("Tout ce que tu veux savoir.", "Everything you want to know.")}
        </h1>
      </section>
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-10">
          {themes.map((th, ti) => (
            <div key={ti}>
              <h2 className="text-xl mb-2 font-display font-bold" style={{ color: "#111" }}>{th.title[lang === "en" ? 1 : 0]}</h2>
              <div>
                {th.items.map((it, ii) => {
                  const key = `${ti}-${ii}`;
                  const isOpen = open === key;
                  const idx = lang === "en" ? 1 : 0;
                  return (
                    <div key={ii} className="border-b" style={{ borderColor: "#EEEEEE" }}>
                      <button onClick={() => setOpen(isOpen ? null : key)} className="w-full flex justify-between items-center py-4 text-left" style={{ color: "#111" }}>
                        <span>{it.q[idx]}</span>
                        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}><IconChevron size={18} /></span>
                      </button>
                      {isOpen && <div className="pb-4 text-sm" style={{ color: "#666" }}>{it.a[idx]}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
