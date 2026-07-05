import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IconChevron, IconCheck, IconArrowRight, IconStar } from "@/components/Icons";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/produit")({
  head: () => ({
    meta: [
      { title: "legmio — Fiche produit" },
      { name: "description", content: "legmio, la seule béquille ergonomique mains libres. 150€ TTC, livraison incluse. Conçue en France." },
      { property: "og:title", content: "legmio — Fiche produit" },
      { property: "og:description", content: "Pensée jusqu'au dernier centimètre." },
    ],
  }),
  component: Produit,
});

function Placeholder({ label, aspect = "aspect-square", dark = false }: { label: string; aspect?: string; dark?: boolean }) {
  return (
    <div
      className={`w-full ${aspect} flex items-center justify-center text-xs font-medium tracking-wide uppercase`}
      style={{
        background: dark ? "linear-gradient(135deg, #1a1a1a, #2a2a2a)" : "linear-gradient(135deg, #F5F5F5, #E8E8E8)",
        color: dark ? "#666" : "#999",
      }}
    >
      {label}
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b" style={{ borderColor: "#EEEEEE" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-4 text-left" style={{ color: "#111" }}>
        <span className="font-semibold">{title}</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}><IconChevron size={18} /></span>
      </button>
      {open && <div className="pb-5 text-sm" style={{ color: "#444" }}>{children}</div>}
    </div>
  );
}

function Produit() {
  const { t } = useLanguage();
  const gallery = [
    "legmio · face",
    "Appui avant-bras",
    "Poignée ergonomique",
    "Système de réglage",
    "Embout interchangeable",
    "Lifestyle",
    "Contenu du pack",
  ];
  const [sel, setSel] = useState(0);

  return (
    <div>
      {/* SECTION 1 — HERO PRODUIT */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#F5F5F5" }}>
              <Placeholder label={gallery[sel]} aspect="aspect-square" />
            </div>
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setSel(i)}
                  className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition`}
                  style={{ borderColor: sel === i ? "#111" : "#EEEEEE" }}
                  aria-label={g}
                >
                  <Placeholder label={`${i + 1}`} aspect="aspect-square" />
                </button>
              ))}
            </div>
          </div>

          <div className="md:sticky md:top-32 md:self-start">
            <h1 className="text-5xl md:text-6xl font-display font-bold" style={{ color: "#111" }}>legmio</h1>
            <div className="mt-3 inline-block px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#F5F5F5", color: "#111" }}>
              Dispositif médical CE Classe I (en cours)
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm" style={{ color: "#111" }}>
              <div className="flex" style={{ color: "#111" }}>
                {[0, 1, 2, 3, 4].map((i) => <IconStar key={i} size={14} />)}
              </div>
              <a href="#reviews" className="underline" style={{ color: "#666" }}>4.9/5 (12 avis)</a>
            </div>
            <div className="mt-6 text-4xl font-display font-bold" style={{ color: "#111" }}>150€ TTC</div>
            <div className="text-sm" style={{ color: "#666" }}>Livraison incluse</div>
            <p className="mt-6 text-base" style={{ color: "#333" }}>
              La seule béquille ergonomique mains libres. Conçue pour durer — pas juste ta rééducation, ta vie.
            </p>
            <a href="#features" className="mt-3 inline-block underline text-sm" style={{ color: "#111" }}>En savoir plus</a>

            <div className="mt-8">
              <Accordion title="About" defaultOpen>
                L'appui avant-bras redistribue la charge et libère complètement la main. Conçue par des roboticiens issus du CNRS et de l'ISIR Sorbonne Université.
              </Accordion>
              <Accordion title="Taille">
                Taille unique — réglable pour utilisateurs 1m50 à 1m95.<br />
                <a href="#" className="underline">Guide des tailles</a>
              </Accordion>
              <Accordion title="Caractéristiques">
                <ul className="space-y-2">
                  {[
                    ["Poids", "850g"], ["Matériau", "Aluminium"], ["Hauteur réglable", "1m10 à 1m40"],
                    ["Pour", "utilisateurs 1m50 à 1m95"], ["Charge max", "130kg"],
                    ["Embouts", "interchangeables sans outil"], ["Assemblage", "France"],
                    ["Brevet", "FR2411206"], ["Certification", "CE Classe I en cours · MDR 2017/745"],
                  ].map(([k, v]) => (
                    <li key={k} className="flex justify-between gap-4"><span style={{ color: "#666" }}>{k}</span><span style={{ color: "#111" }}>{v}</span></li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Idéal pour">
                <ul className="space-y-2">
                  {[
                    "Retrouver l'usage complet de ses mains au quotidien",
                    "Réduire les douleurs aux épaules et aux poignets",
                    "Maintenir son autonomie en famille, au travail, en déplacement",
                    "Rééducation post-opératoire sans contrainte",
                  ].map((i) => (
                    <li key={i} className="flex gap-2"><IconCheck size={16} /> {i}</li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Ce qui est inclus">
                <ul className="space-y-1">
                  <li>· 1 béquille legmio (droite ou gauche au choix)</li>
                  <li>· 2 embouts (intérieur + extérieur)</li>
                  <li>· Notice de montage</li>
                  <li>· Garantie 2 ans</li>
                </ul>
              </Accordion>
              <Accordion title="Nettoyage">
                Nettoyage à l'eau savonneuse avec un chiffon doux. Ne pas immerger. Sécher à l'air libre.
              </Accordion>
              <Accordion title="Remplacement des pièces">
                Les embouts sont disponibles séparément. La mousse de l'appui avant-bras est remplaçable. Contacter contact@legmio.com pour commander des pièces.
              </Accordion>

              <a href="/#waitlist" className="btn-dark btn-dark-hover w-full mt-8">
                {t("cta_interested")} <IconArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — ANIMATION BÉQUILLE */}
      <section style={{ backgroundColor: "#111111" }} className="py-24 relative overflow-hidden">
        <div className="max-w-3xl mx-auto flex items-center justify-center h-[420px] relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)" }} />
          </div>
          <div className="float-rotate relative">
            <div
              className="w-16 h-80 rounded-full"
              style={{ background: "linear-gradient(180deg, #f0f0f0 0%, #a0a0a0 50%, #606060 100%)", boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURES CARROUSEL */}
      <section id="features" style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl" style={{ color: "#111" }}>Caractéristiques</h2>
          <FeaturesCarousel />
        </div>
      </section>

      {/* SECTION 4 — AVIS CLIENTS */}
      <section id="reviews" style={{ backgroundColor: "#F5F5F5" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl" style={{ color: "#111" }}>Avis clients</h2>
              <div className="mt-4 flex items-baseline gap-3">
                <div className="text-5xl font-display font-bold" style={{ color: "#111" }}>4.9/5</div>
                <div style={{ color: "#666" }}>(12 avis)</div>
              </div>
              <div className="mt-6 space-y-2 max-w-sm">
                {[["5 étoiles", 92], ["4 étoiles", 8], ["3 étoiles", 0], ["2 étoiles", 0], ["1 étoile", 0]].map(([l, v]) => (
                  <div key={l as string} className="flex items-center gap-3 text-sm" style={{ color: "#111" }}>
                    <span className="w-16 shrink-0">{l}</span>
                    <div className="flex-1 h-2 rounded-full" style={{ backgroundColor: "#DDDDDD" }}>
                      <div className="h-full rounded-full" style={{ width: `${v}%`, backgroundColor: "#111" }} />
                    </div>
                    <span className="w-10 text-right" style={{ color: "#666" }}>{v}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-right">
              <button className="btn-outline-dark">Laisser un avis</button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { t: "Ça change tout.", q: "Je béquille depuis 3 ans et je n'avais jamais imaginé pouvoir porter mon fils. Avec legmio c'est possible.", n: "Sophie", p: "Sclérose en plaques", d: "Mars 2026" },
              { t: "Rééducation transformée.", q: "6 mois de rééducation post-opératoire. Mes épaules n'ont pas souffert. Indispensable.", n: "Marc", p: "Post-opératoire hanche", d: "Février 2026" },
              { t: "Enfin une vraie solution.", q: "J'avais abandonné l'idée d'avoir les mains libres. legmio m'a prouvé que c'était possible.", n: "Camille", p: "Sarcome d'Ewing", d: "Janvier 2026" },
            ].map((r, i) => (
              <div key={i} className="card-soft p-6">
                <div className="flex gap-0.5" style={{ color: "#111" }}>
                  {[0, 1, 2, 3, 4].map((k) => <IconStar key={k} size={14} />)}
                </div>
                <h3 className="mt-3 font-display font-bold text-lg" style={{ color: "#111" }}>{r.t}</h3>
                <p className="mt-2 text-sm" style={{ color: "#333" }}>{r.q}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: "#EEE", color: "#111" }}>{r.n[0]}</div>
                  <div className="text-sm">
                    <div className="font-bold" style={{ color: "#111" }}>{r.n}</div>
                    <div style={{ color: "#666" }}>{r.p} · {r.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button className="btn-outline-dark">Voir tous les avis</button>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQ PRODUIT */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl" style={{ color: "#111" }}>Questions fréquentes</h2>
            <a href="/faq" className="text-sm underline" style={{ color: "#111" }}>Voir toutes les questions</a>
          </div>
          <div>
            {[
              ["legmio est-elle réglable ?", "Oui. Deux points de réglage indépendants : la poignée et l'appui coude. Universelle de 1m50 à 1m95."],
              ["Faut-il de la force dans les mains ?", "Non. Un simple appui du poignet sur l'avant-bras suffit. Pas besoin de fermer la main."],
              ["Combien de temps pour s'adapter ?", "Environ 1 à 2 semaines. La plupart des utilisateurs trouvent leur rythme en quelques jours."],
              ["Est-elle remboursée ?", "Partiellement sur prescription médicale (LPPR). En contexte emploi RQTH, prise en charge jusqu'à 90% via Agefiph ou FIPHFP."],
              ["Quel est le prix ?", "150€ TTC, livraison incluse."],
              ["Où est-elle fabriquée ?", "Conçue et assemblée en France. Structure en aluminium."],
              ["Convient-elle aux utilisateurs d'une seule béquille ?", "Oui. legmio est disponible à l'unité, droite ou gauche."],
            ].map(([q, a], i) => (
              <Accordion key={i} title={q as string}>{a}</Accordion>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturesCarousel() {
  const slides = [
    { t: "L'appui avant-bras", p: "Conçue par des roboticiens issus du CNRS et de l'ISIR Sorbonne Université, legmio redistribue la charge de l'appui sur l'avant-bras complet. Fini les douleurs au poignet, à l'épaule, aux nerfs." },
    { t: "Mains libres. Vraiment.", p: "Porter son enfant, faire ses courses, travailler, cuisiner. legmio te rend ce que les béquilles classiques t'avaient pris." },
    { t: "Universelle et réglable", p: "Deux points de réglage indépendants. De 1m50 à 1m95. Montage en moins de 2 minutes, sans outil." },
    { t: "Conçue pour durer", p: "Structure aluminium 850g. Assemblée en France. legmio n'est pas un accessoire temporaire. C'est un équipement de vie." },
  ];
  const [i, setI] = useState(0);
  const s = slides[i];
  const go = (d: number) => setI((i + d + slides.length) % slides.length);
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#F5F5F5" }}>
          <div
            className="w-full aspect-video flex items-center justify-center text-xs uppercase tracking-wide"
            style={{ color: "#999" }}
          >{s.t}</div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-display font-bold" style={{ color: "#111" }}>{s.t}</h3>
          <p className="mt-4" style={{ color: "#444" }}>{s.p}</p>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button onClick={() => go(-1)} aria-label="Précédent" className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: "#111", color: "#111" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <div className="flex gap-2">
          {slides.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className="w-2 h-2 rounded-full" style={{ backgroundColor: k === i ? "#111" : "#CCC" }} />
          ))}
        </div>
        <button onClick={() => go(1)} aria-label="Suivant" className="w-10 h-10 rounded-full border flex items-center justify-center" style={{ borderColor: "#111", color: "#111" }}>
          <IconArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
