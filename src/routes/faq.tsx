import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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

const themes: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "legmio & moi",
    items: [
      { q: "Quelle taille pour moi ?", a: "Universelle de 1m50 à 1m95." },
      { q: "Poids max supporté ?", a: "130 kg." },
      { q: "Réglable ?", a: "Oui, deux points : poignée + appui coude." },
      { q: "Enfants ?", a: "Actuellement adultes. Version enfant à l'étude." },
      { q: "Faut-il de la force dans les mains ?", a: "Non, appui du poignet suffit." },
    ],
  },
  {
    title: "Le produit",
    items: [
      { q: "Poids ?", a: "850g." },
      { q: "Matériaux ?", a: "Aluminium anodisé, polymères ergonomiques." },
      { q: "Embouts ?", a: "Interchangeables sans outil." },
      { q: "Amortissement ?", a: "Structure et embout absorbent les chocs." },
      { q: "Poignée ?", a: "Ergonomique, adaptée à la position naturelle du poignet." },
    ],
  },
  {
    title: "Usage",
    items: [
      { q: "Intérieur / extérieur ?", a: "Les deux — changer d'embout au besoin." },
      { q: "Temps d'adaptation ?", a: "1 à 2 semaines." },
      { q: "Amputation ?", a: "Compatible selon niveau — voir MPR." },
      { q: "Contre-indications ?", a: "Peu, mais valider avec ton médecin." },
    ],
  },
  {
    title: "Preuves & certifications",
    items: [
      { q: "CE ?", a: "Classe I, MDR 2017/745, en cours." },
      { q: "Recherche ?", a: "Issue du CNRS / ISIR Sorbonne Université." },
      { q: "Brevet ?", a: "FR2411206, octobre 2024." },
      { q: "Validation médicale ?", a: "+6 médecins MPR — Kerpape, autres centres." },
    ],
  },
  {
    title: "Prix & prise en charge",
    items: [
      { q: "Prix ?", a: "150€ TTC, livraison incluse." },
      { q: "Sécu ?", a: "Remboursement partiel sur prescription (LPP)." },
      { q: "Mutuelle ?", a: "Complément selon contrat." },
      { q: "Agefiph / FIPHFP ?", a: "Jusqu'à 90% en contexte emploi RQTH." },
      { q: "MDPH / PCH ?", a: "Éligible selon dossier individuel." },
    ],
  },
  {
    title: "Commande & livraison",
    items: [
      { q: "Livraison gratuite ?", a: "Oui, incluse." },
      { q: "Délais ?", a: "Commercialisation 2027 — liste d'attente ouverte." },
      { q: "International ?", a: "France d'abord, Europe ensuite." },
    ],
  },
  {
    title: "Entretien & SAV",
    items: [
      { q: "Nettoyage ?", a: "Chiffon humide + savon doux." },
      { q: "Pièces remplaçables ?", a: "Embouts, poignée, appui." },
      { q: "Garantie ?", a: "2 ans." },
      { q: "Retours ?", a: "14 jours." },
    ],
  },
  {
    title: "Professionnels",
    items: [
      { q: "Tarifs revendeurs ?", a: "contact@legmio.com" },
      { q: "Démo prescripteurs ?", a: "Programme en cours." },
      { q: "Prêt ?", a: "Kits de prêt pour MPR — nous contacter." },
    ],
  },
];

function Faq() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div>
      <section className="px-4 sm:px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl text-[#111111]">Tout ce que tu veux savoir.</h1>
      </section>
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-8">
          {themes.map((th, ti) => (
            <div key={ti}>
              <h2 className="text-xl mb-4" style={{ color: "#111111" }}>{th.title}</h2>
              <div className="space-y-2">
                {th.items.map((it, ii) => {
                  const key = `${ti}-${ii}`;
                  const isOpen = open === key;
                  return (
                    <div key={ii} className="rounded-xl border border-[#EEEEEE]" style={{ backgroundColor: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                      <button onClick={() => setOpen(isOpen ? null : key)} className="w-full flex justify-between items-center p-5 text-left text-[#111111]">
                        <span>{it.q}</span>
                        <span className="text-xl shrink-0 ml-4" style={{ color: "#111111" }}>{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && <div className="px-5 pb-5" style={{ color: "#444444" }}>{it.a}</div>}
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
