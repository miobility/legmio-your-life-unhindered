import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/produit")({
  head: () => ({
    meta: [
      { title: "legmio — Fiche produit" },
      { name: "description", content: "Fiche produit détaillée de legmio : composants, spécifications, compatibilité, entretien." },
      { property: "og:title", content: "legmio — Fiche produit" },
      { property: "og:description", content: "Composants, spécifications, compatibilité, entretien." },
    ],
  }),
  component: Produit,
});

function Produit() {
  const { lang } = useLanguage();
  const specs = [
    ["Poids", "850g"],
    ["Matériau", "Aluminium anodisé"],
    ["Taille utilisateur", "1m50 – 1m95"],
    ["Capacité de charge", "130 kg"],
    ["Réglages", "Poignée + appui coude (2 points)"],
    ["Embouts", "Interchangeables sans outil"],
    ["Certification", "CE Classe I (en cours)"],
    ["Assemblage", "France"],
  ];
  const composants = [
    { t: "L'appui avant-bras", d: "Redistribue la charge. Protège tes poignets, tes épaules, tes nerfs." },
    { t: "La poignée ergonomique", d: "Position naturelle du poignet. Confort sur longues distances." },
    { t: "Le système de réglage", d: "Deux points de réglage. Universel de 1m50 à 1m95." },
    { t: "L'embout interchangeable", d: "Sans outil. Intérieur, extérieur, usure." },
    { t: "La structure aluminium", d: "850g. Robuste. Légère. Conçue pour durer." },
  ];
  return (
    <div>
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-3xl" style={{ backgroundColor: "#F5F5F5", border: "1px dashed #EEEEEE" }} />
          <Reveal>
            <h1 className="text-4xl sm:text-5xl text-[#111111]">legmio.<br />Pensée jusqu'au dernier centimètre.</h1>
            <p className="mt-6 text-lg" style={{ color: "#444444" }}>
              La seule béquille conçue pour durer. Née de la recherche CNRS/Sorbonne Université.
            </p>
            <a href="/#pricing" className="btn-dark btn-dark-hover mt-8 inline-flex">Je suis intéressé →</a>
          </Reveal>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-[#111111] text-center">Spécifications</h2>
          <div className="mt-10 rounded-2xl overflow-hidden border border-[#EEEEEE]">
            <table className="w-full">
              <tbody>
                {specs.map(([k, v], i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 ? "#FFFFFF" : "#F5F5F5" }}>
                    <td className="p-4 text-[#444444] text-sm">{k}</td>
                    <td className="p-4 text-[#111111] font-medium">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#111111] text-center">Composants</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {composants.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="p-6 rounded-2xl border border-[#EEEEEE] flex gap-5" style={{ backgroundColor: "#F5F5F5" }}>
                  <div className="w-24 h-24 rounded-xl shrink-0" style={{ backgroundColor: "#F5F5F5", border: "1px dashed #EEEEEE" }} />
                  <div>
                    <h3 className="text-lg text-[#111111]">{c.t}</h3>
                    <p className="mt-2 text-sm" style={{ color: "#444444" }}>{c.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-[#EEEEEE]" style={{ backgroundColor: "#FFFFFF" }}>
            <h3 className="text-xl text-[#111111]">Compatibilité</h3>
            <ul className="mt-4 space-y-2 text-sm" style={{ color: "#444444" }}>
              <li>• Taille utilisateur : 1m50 à 1m95</li>
              <li>• Poids max : 130 kg</li>
              <li>• Post-op, handicap long terme, RQTH, parents actifs</li>
              <li>• Pas de contre-indication majeure — voir avec ton MPR</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-[#EEEEEE]" style={{ backgroundColor: "#FFFFFF" }}>
            <h3 className="text-xl text-[#111111]">Entretien</h3>
            <ul className="mt-4 space-y-2 text-sm" style={{ color: "#444444" }}>
              <li>• Nettoyage chiffon humide + savon doux</li>
              <li>• Embouts remplaçables sans outil</li>
              <li>• Poignée et appui remplaçables via SAV</li>
              <li>• Garantie 2 ans</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl text-[#111111]">Rejoins la liste d'attente</h2>
        <p className="mt-4" style={{ color: "#444444" }}>Commercialisation 2027 · Aucun prélèvement maintenant</p>
        <a href="/#pricing" className="btn-dark btn-dark-hover mt-8 inline-flex text-lg px-8 py-4">Je suis intéressé →</a>
      </section>
    </div>
  );
}
