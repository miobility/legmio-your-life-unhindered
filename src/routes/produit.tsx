import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/produit")({
  head: () => ({
    meta: [
      { title: "legmio — Béquille ergonomique mains libres" },
      { name: "description", content: "legmio : la béquille ergonomique mains libres. 150€ TTC, livraison incluse. Née de la recherche CNRS/Sorbonne. Brevet FR2411206." },
      { property: "og:title", content: "legmio — Béquille ergonomique mains libres" },
      { property: "og:description", content: "La seule béquille conçue pour durer. 850g. Assemblage France. Prise en charge Agefiph jusqu'à 90%." },
    ],
  }),
  component: Produit,
});

const images = [
  { label: "Vue d'ensemble" },
  { label: "Appui avant-bras" },
  { label: "Poignée ergonomique" },
  { label: "Système de réglage" },
  { label: "Embout interchangeable" },
];

const features = [
  { t: "L'appui avant-bras", d: "Redistribue la charge. Protège tes poignets, tes épaules, tes nerfs." },
  { t: "La poignée ergonomique", d: "Conçue pour la position naturelle du poignet. Confort longue durée garanti." },
  { t: "Le système de réglage", d: "Deux points de réglage. Universelle de 1m50 à 1m95." },
  { t: "L'embout interchangeable", d: "Sans outil. Intérieur, extérieur, usure — toujours la bonne accroche." },
  { t: "La structure aluminium", d: "850g. Robuste. Légère. Conçue pour durer." },
];

const specs: [string, string][] = [
  ["Poids", "850g"],
  ["Matériau", "Aluminium"],
  ["Hauteur réglable", "1m50 – 1m95"],
  ["Charge max", "130kg"],
  ["Points de réglage", "2 (poignée + appui coude)"],
  ["Embouts", "Interchangeables sans outil"],
  ["Assemblage", "France"],
  ["Certification", "CE Classe I (en cours) · MDR 2017/745"],
];

const faq = [
  { q: "legmio est-elle réglable ?", a: "Oui. Deux points de réglage : poignée et appui coude. Universelle de 1m50 à 1m95." },
  { q: "Faut-il de la force dans les mains ?", a: "Non. legmio ne nécessite pas de poigne — un simple appui du poignet suffit." },
  { q: "Combien de temps pour s'adapter ?", a: "Environ 1 à 2 semaines, le temps que le corps intègre le nouveau schéma de marche." },
  { q: "Quel est le prix ?", a: "150€ TTC, livraison incluse." },
  { q: "Est-elle remboursée ?", a: "Partiellement sur prescription médicale (LPP). En contexte emploi, jusqu'à 90% via Agefiph ou FIPHFP." },
  { q: "Quand sera-t-elle disponible ?", a: "Commercialisation prévue en 2027. Rejoins la liste d'attente pour être parmi les premiers." },
  { q: "Quelle est la garantie ?", a: "Garantie 2 ans. Pièces remplaçables via SAV (poignée, appui, embouts)." },
  { q: "Peut-on l'utiliser en extérieur ?", a: "Oui. Les embouts sont interchangeables sans outil selon le terrain (intérieur, extérieur, usure)." },
];

function Produit() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* SECTION 1 — HERO */}
      <section className="px-4 sm:px-6 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — carousel */}
          <div>
            <div
              className="w-full aspect-square rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: "#F5F5F5", border: "1px solid #EEEEEE" }}
            >
              <span className="text-sm" style={{ color: "#999999" }}>{images[active].label}</span>
            </div>
            <div className="mt-4 grid grid-cols-5 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="aspect-square rounded-lg transition"
                  aria-label={img.label}
                  style={{
                    backgroundColor: "#F5F5F5",
                    border: active === i ? "2px solid #111111" : "1px solid #EEEEEE",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right — details */}
          <div>
            <Reveal>
              <div className="text-xs font-bold tracking-widest" style={{ color: "#666666" }}>
                BÉQUILLE ERGONOMIQUE MAINS LIBRES
              </div>
              <h1 className="mt-4 text-5xl sm:text-6xl" style={{ color: "#111111" }}>legmio</h1>
              <p className="mt-3 text-lg" style={{ color: "#444444" }}>Pensée jusqu'au dernier centimètre.</p>

              <div className="mt-8 flex items-baseline gap-3">
                <div className="font-display font-bold text-4xl" style={{ color: "#111111" }}>150€ TTC</div>
                <div className="text-sm" style={{ color: "#666666" }}>Livraison incluse</div>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 text-sm" style={{ color: "#111111" }}>
                <span>⚖️ 850g</span>
                <span aria-hidden style={{ color: "#CCCCCC" }}>·</span>
                <span>📏 1m50–1m95</span>
                <span aria-hidden style={{ color: "#CCCCCC" }}>·</span>
                <span>💪 130kg</span>
              </div>

              <a
                href="/#pricing"
                className="btn-dark btn-dark-hover mt-8 w-full text-base"
                style={{ width: "100%" }}
              >
                Je suis intéressé →
              </a>

              <ul className="mt-6 space-y-2 text-sm" style={{ color: "#444444" }}>
                <li>🚚 Livraison offerte</li>
                <li>💼 Agefiph jusqu'à 90% (RQTH)</li>
                <li>🇫🇷 Assemblage France</li>
                <li>📋 Brevet déposé FR2411206</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — 4 arguments banner */}
      <section className="px-4 sm:px-6 py-8" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center" style={{ color: "#FFFFFF" }}>
          {[
            { i: "🚚", t: "Livraison offerte" },
            { i: "💼", t: "Prise en charge Agefiph/FIPHFP" },
            { i: "🇫🇷", t: "Assemblage France" },
            { i: "📋", t: "Brevet déposé" },
          ].map((a, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="text-2xl" aria-hidden>{a.i}</div>
              <div className="text-sm font-medium">{a.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Features alternating */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {features.map((f, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <Reveal key={i}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div
                    className={`aspect-[4/3] rounded-2xl flex items-center justify-center ${imageLeft ? "md:order-1" : "md:order-2"}`}
                    style={{ backgroundColor: "#F5F5F5", border: "1px solid #EEEEEE" }}
                  >
                    <span className="text-xs" style={{ color: "#999999" }}>{f.t}</span>
                  </div>
                  <div className={imageLeft ? "md:order-2" : "md:order-1"}>
                    <div className="text-xs font-bold tracking-widest" style={{ color: "#666666" }}>0{i + 1}</div>
                    <h2 className="mt-3 text-3xl sm:text-4xl" style={{ color: "#111111" }}>{f.t}</h2>
                    <p className="mt-4 text-lg" style={{ color: "#444444" }}>{f.d}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 4 — Specs table */}
      <section className="px-4 sm:px-6 py-20" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #EEEEEE" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-center" style={{ color: "#111111" }}>Spécifications</h2>
          <div className="mt-10 rounded-xl overflow-hidden" style={{ border: "1px solid #EEEEEE" }}>
            <table className="w-full">
              <tbody>
                {specs.map(([k, v], i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 ? "#F5F5F5" : "#FFFFFF" }}>
                    <td className="p-4 text-sm" style={{ color: "#666666" }}>{k}</td>
                    <td className="p-4 font-medium text-right" style={{ color: "#111111" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Science & proof */}
      <section className="px-4 sm:px-6 py-20" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl" style={{ color: "#111111" }}>Née de la recherche CNRS/Sorbonne</h2>
          <div
            className="mt-10 p-8 sm:p-10 rounded-2xl text-left"
            style={{ backgroundColor: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", border: "1px solid #EEEEEE" }}
          >
            <p className="text-xl sm:text-2xl italic" style={{ color: "#111111" }}>
              « Une béquille qui rend les mains au patient : une grande avancée ! »
            </p>
            <p className="mt-6 font-bold" style={{ color: "#111111" }}>Dr Pauline Coignard</p>
            <p className="text-sm" style={{ color: "#666666" }}>Médecin MPR · Centre de Kerpape · SOFMER</p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-sm font-medium tracking-wider" style={{ color: "#666666" }}>
            {["CNRS", "Sorbonne Université", "SATT Lutech", "Bpifrance"].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="px-4 sm:px-6 py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-center" style={{ color: "#111111" }}>Questions fréquentes</h2>
          <div className="mt-10 space-y-3">
            {faq.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="rounded-xl" style={{ backgroundColor: "#FFFFFF", border: "1px solid #EEEEEE" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex justify-between items-center p-5 text-left"
                    style={{ color: "#111111" }}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{f.q}</span>
                    <span className="text-xl shrink-0 ml-4" style={{ color: "#111111" }}>{isOpen ? "▲" : "▼"}</span>
                  </button>
                  {isOpen && <div className="px-5 pb-5 text-sm" style={{ color: "#444444" }}>{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Final CTA */}
      <section className="px-4 sm:px-6 py-20 text-center" style={{ backgroundColor: "#111111", color: "#FFFFFF" }}>
        <h2 className="text-4xl sm:text-5xl" style={{ color: "#FFFFFF" }}>Sois parmi les premiers.</h2>
        <a
          href="/#pricing"
          className="inline-flex items-center justify-center gap-2 mt-8 text-base font-semibold px-8 py-4 rounded-full transition"
          style={{ backgroundColor: "#FFFFFF", color: "#111111" }}
        >
          Je suis intéressé →
        </a>
        <p className="mt-6 text-sm" style={{ color: "#BBBBBB" }}>
          Commercialisation 2027 · Aucun prélèvement maintenant
        </p>
      </section>
    </div>
  );
}
