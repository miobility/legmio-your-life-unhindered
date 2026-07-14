import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { SOCIAL } from "@/components/Layout";
import {
  IconArrowRight, IconInstagram, IconTiktok, IconLinkedin,
} from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { AutoCarousel } from "@/components/AutoCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "legmio — La béquille qui libère les mains" },
      { name: "description", content: "legmio est la seule béquille ergonomique mains libres. Née de la recherche CNRS/Sorbonne Université. Commercialisation courant 2027." },
      { property: "og:title", content: "legmio — La béquille qui libère les mains" },
      { property: "og:description", content: "Des mains libres et une autonomie enfin retrouvée." },
    ],
  }),
  component: Landing,
});

const BG = "#FAFAF8";
const BG_ALT = "#F2F0EB";
const TEXT = "#1A1A1A";
const MUTED = "#6B6B6B";
const BORDER = "#E8E4DC";
const ACCENT = "#2D5A3D";

function CTA({ dark, block }: { dark?: boolean; block?: boolean }) {
  const { t, hubspotUrl } = useLanguage();
  return (
    <a
      href={hubspotUrl}
      target="_blank"
      rel="noreferrer"
      className={`${dark ? "btn-light btn-light-hover" : "btn-dark btn-dark-hover"} ${block ? "w-full" : ""}`}
    >
      {t("cta_interested")} <IconArrowRight size={16} />
    </a>
  );
}

// ============= Specs strip pill icons =============
const IconBalance = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M4 8h16M6 8l-3 6a3 3 0 006 0L6 8zM18 8l-3 6a3 3 0 006 0l-3-6z" />
  </svg>
);
const IconHandOpen = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 11V5a1.5 1.5 0 013 0v6M10 11V4a1.5 1.5 0 013 0v7M13 11V5a1.5 1.5 0 013 0v8M16 11V7a1.5 1.5 0 013 0v9a5 5 0 01-5 5h-2a5 5 0 01-5-5v-2l-2-3a1.5 1.5 0 012-2l2 2" />
  </svg>
);
const IconRulerPill = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 16l5-13 13 5-5 13-13-5z" /><path d="M8 6l1 2M11 8l1 2M14 11l1 2" />
  </svg>
);
const IconShieldPill = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z" />
  </svg>
);
const IconRecycle = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 19H4l3-5M17 5h3l-3 5M12 4l3 3M8 20l-3-3M20 12l-3 3" />
  </svg>
);
const IconFlagFr = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21V4M4 4h14l-2 4 2 4H4" />
  </svg>
);
const IconFeather = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4c-6 0-11 5-11 11v4h4c6 0 11-5 11-11" /><path d="M4 20l9-9" />
  </svg>
);
const IconArm = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20l6-6 4 4 6-10" /><circle cx="20" cy="4" r="2" />
  </svg>
);
const IconSliders = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h16" /><circle cx="9" cy="6" r="2" fill="currentColor" /><circle cx="15" cy="12" r="2" fill="currentColor" /><circle cx="7" cy="18" r="2" fill="currentColor" />
  </svg>
);
const IconRest = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18h18M6 18V9a3 3 0 013-3h6a3 3 0 013 3v9" /><path d="M9 12h6" />
  </svg>
);
const IconWall = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21V4h16M8 21V4M12 21V4M16 21V4" />
  </svg>
);

const IconNerve = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4c4 0 4 4 8 4s4-4 8-4M4 12c4 0 4 4 8 4s4-4 8-4M4 20c4 0 4-4 8-4s4 4 8 4" />
  </svg>
);
const IconGrip = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 3v6M11 3v6M15 3v6M19 3v6M5 9h14a2 2 0 012 2v3a7 7 0 01-14 0v-3a2 2 0 012-2z" />
  </svg>
);

const specsItems = () => [
  { icon: <IconFeather />, kFr: "Ultralégère", kEn: "Ultralight", sFr: "Pèse seulement 850g", sEn: "Only 850g" },
  { icon: <IconHandOpen />, kFr: "Mains libres", kEn: "Hands free", sFr: "Appui sur l'avant-bras", sEn: "Forearm support" },
  { icon: <IconShieldPill />, kFr: "Robuste", kEn: "Sturdy", sFr: "Supporte jusqu'à 130kg", sEn: "Supports up to 130kg" },
  { icon: <IconGrip />, kFr: "Ergonomique", kEn: "Ergonomic", sFr: "Poignée qui redistribue les contraintes d'appui", sEn: "Grip that redistributes load" },
  { icon: <IconNerve />, kFr: "Protectrice", kEn: "Protective", sFr: "Zones d'appui qui protègent les nerfs", sEn: "Support zones that protect nerves" },
  { icon: <IconSliders />, kFr: "Réglable", kEn: "Adjustable", sFr: "Double réglage en longueur et au niveau de la poignée", sEn: "Dual adjustment: length and grip" },
  { icon: <IconRecycle />, kFr: "Durable", kEn: "Durable", sFr: "Embouts, poignée, sangles remplaçables", sEn: "Replaceable tips, grip, straps" },
  { icon: <IconRulerPill />, kFr: "Universelle", kEn: "Universal", sFr: "Convient de 1m50 à 1m95", sEn: "Fits 1m50 to 1m95" },
];

export function SpecsStrip() {
  const { tr } = useLanguage();
  const pills = specsItems();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {pills.map((p, i) => (
        <div key={i} className="rounded-2xl p-5 flex flex-col items-start gap-2 transition hover:-translate-y-0.5" style={{ backgroundColor: "#FFFFFF", border: `1px solid ${BORDER}`, color: TEXT }}>
          <div style={{ color: ACCENT }}>{p.icon}</div>
          <div className="font-display font-bold text-base leading-tight">{tr(p.kFr, p.kEn)}</div>
          <div className="text-xs" style={{ color: MUTED }}>{tr(p.sFr, p.sEn)}</div>
        </div>
      ))}
    </div>
  );
}

// ============= Product-page features grid (10 items) =============
export function ProductFeatureGrid() {
  const { tr } = useLanguage();
  const base = specsItems();
  const items = [
    ...base,
    { icon: <IconRest />, kFr: "Position de repos", kEn: "Rest position", sFr: "Tu peux t'appuyer sur legmio pour récupérer", sEn: "Lean on legmio to recover" },
    { icon: <IconWall />, kFr: "Tient seule", kEn: "Stands alone", sFr: "legmio tient debout contre un mur sans tomber", sEn: "legmio stands against a wall without falling" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((p, i) => (
        <div key={i} className="rounded-2xl p-5 flex flex-col items-start gap-2 transition hover:-translate-y-0.5" style={{ backgroundColor: "#FFFFFF", border: `1px solid ${BORDER}`, color: TEXT }}>
          <div style={{ color: ACCENT }}>{p.icon}</div>
          <div className="font-display font-bold text-base leading-tight">{tr(p.kFr, p.kEn)}</div>
          <div className="text-xs" style={{ color: MUTED }}>{tr(p.sFr, p.sEn)}</div>
        </div>
      ))}
    </div>
  );
}

function Landing() {
  const { tr } = useLanguage();
  return (
    <div style={{ backgroundColor: BG }}>
      {/* SECTION 1 — HERO */}
      <section style={{ backgroundColor: "#111111" }} className="px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-10 items-center">
          <div className="rounded-2xl overflow-hidden bg-black order-1">
            <div className="relative w-full" style={{ aspectRatio: "9/16", maxHeight: "70vh" }}>
              <video className="absolute inset-0 w-full h-full object-cover" src="/hero-video.mp4" autoPlay muted loop playsInline />
            </div>
          </div>
          <div className="text-white space-y-6 fade-up order-2">
            <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
              {tr("LA BÉQUILLE NOUVELLE GÉNÉRATION", "NEXT-GENERATION CRUTCH")}
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-white">
              {tr("Des mains libres et une autonomie enfin retrouvée.", "Hands free. Independence restored.")}
            </h1>
            <div className="pt-2"><CTA dark /></div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLÈME */}
      <section style={{ backgroundColor: BG }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-3xl mx-auto" style={{ color: TEXT }}>
              {tr("Tu connais déjà le problème. Tu le vis.", "You already know the problem. You live it.")}
            </h2>
          </Reveal>
          <div className="mt-14 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                { img: "/probleme-poignet.jpg", t: tr("Tes épaules, tes poignets, tes mains trinquent.", "Your shoulders, wrists and hands take the hit."), p: tr("La béquille censée t'aider te crée un handicap supplémentaire.", "The crutch meant to help you creates an extra disability.") },
                { img: "/probleme-mains.avif", t: tr("Tes mains sont prises.", "Your hands are taken."), p: tr("Porter un verre, faire ses courses, ouvrir une porte — des gestes devenus négociations.", "Carrying a glass, shopping, opening a door — every gesture becomes a negotiation.") },
                { img: "/probleme-temps.jpg", t: tr("Et tu t'y fais.", "And you get used to it."), p: tr("5 ans, 10 ans, 40 ans en béquilles. Sans qu'on t'ait jamais proposé autre chose.", "5, 10, 40 years on crutches — with no one ever offering another way.") },
              ].map((c, i) => (
                <div key={i} className="card-soft overflow-hidden w-[320px] md:w-[380px]">
                  <div className="aspect-[3/2] overflow-hidden" style={{ filter: "grayscale(1)" }}>
                    <img src={c.img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg" style={{ color: TEXT }}>{c.t}</h3>
                    <p className="mt-3 text-sm" style={{ color: MUTED }}>{c.p}</p>
                  </div>
                </div>
              ))}
            </AutoCarousel>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ILS PARLENT DE NOUS */}
      <section style={{ backgroundColor: BG_ALT }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: TEXT }}>
              {tr("Ils parlent de nous.", "They talk about us.")}
            </h2>
          </Reveal>

          <div className="mt-12 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                ["/logoparisien.png", "Le Parisien"],
                ["/logoTF1.png", "TF1"],
                ["/logofranceTV.png", "France Télévisions"],
              ].map(([src, alt]) => (
                <div key={alt} className="rounded-lg px-6 py-3 flex items-center justify-center" style={{ backgroundColor: "#FFFFFF", border: `1px solid ${BORDER}`, minWidth: 160, height: 72 }}>
                  <img src={src} alt={alt} className="object-contain" style={{ height: 40 }} />
                </div>
              ))}
            </AutoCarousel>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { url: "https://www.instagram.com/reel/DX_Qqp9tbvg/", img: "/insta1.png", stat: tr("3,6M vues", "3.6M views"), label: null as string | null },
              { url: "https://www.instagram.com/reel/DYhaBkRov_C/", img: "/insta2.png", stat: null, label: "Le Mag de la Santé — France TV" },
            ].map((r, i) => (
              <div key={i} className="rounded-2xl overflow-hidden flex flex-col card-soft">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5", backgroundColor: BG_ALT }}>
                  <img src={r.img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
                <div className="p-6 flex flex-col gap-4">
                  {r.stat && <div className="font-display font-bold text-2xl" style={{ color: TEXT }}>{r.stat}</div>}
                  {r.label && <div className="text-sm font-semibold" style={{ color: TEXT }}>{r.label}</div>}
                  <a href={r.url} target="_blank" rel="noreferrer" className="btn-outline-dark inline-flex text-sm">
                    {tr("Voir sur Instagram", "View on Instagram")} <IconArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — USE CASES */}
      <section style={{ backgroundColor: BG }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-3xl mx-auto" style={{ color: TEXT }}>
              {tr("legmio s'adapte à votre vie", "legmio adapts to your life")}
            </h2>
          </Reveal>
          <div className="mt-10 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                { img: "/usecase-quotidien.png", t: tr("Handicap & quotidien long terme", "Long-term disability & daily life"), p: tr("Porter, cuisiner, s'occuper de ses proches.", "Carry, cook, care for your loved ones.") },
                { img: "/usecase-reeducation.png", t: tr("Post-opératoire & rééducation", "Post-op & rehabilitation"), p: tr("Récupère sans sacrifier tes épaules.", "Recover without sacrificing your shoulders.") },
                { img: "/usecase-emploi.png", t: tr("Maintien en emploi", "Staying at work"), p: tr("Rester mobile, autonome, productif.", "Stay mobile, independent, productive.") },
                { img: "/usecase-parental.png", t: tr("Vie parentale", "Parenting life"), p: tr("Porter son enfant, des choses lourdes ou encombrantes. Reprendre ce que tu avais arrêté de demander.", "Carry your child, heavy or bulky things. Take back what you'd stopped asking for.") },
              ].map((c, i) => (
                <div key={i} className="relative w-[280px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden">
                  <img src={c.img} alt={c.t} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.75) 100%)" }} />
                  <div className="absolute top-0 left-0 right-0 p-5 text-white font-display font-bold text-lg leading-tight">{c.t}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm">{c.p}</div>
                </div>
              ))}
            </AutoCarousel>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FONCTIONNALITÉS (specs strip only) */}
      <section style={{ backgroundColor: BG_ALT }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: TEXT }}>
              {tr("Conçue pour durer.", "Built to last.")}
            </h2>
          </Reveal>
          <div className="mt-12">
            <SpecsStrip />
          </div>
        </div>
      </section>

      {/* SECTION 6 — TÉMOIGNAGES */}
      <section style={{ backgroundColor: BG }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: TEXT }}>
              {tr("Ils l'ont testé. Ils témoignent.", "They tested it. They speak up.")}
            </h2>
          </Reveal>
          <div className="mt-14 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                { img: "/pauline.png", n: "Dr Pauline Coignard", p: tr("Médecin MPR · Centre de Kerpape · Présidente APPROCHE · SOFMER", "PM&R physician · Kerpape · President APPROCHE · SOFMER"), q: tr("Une béquille qui rend les mains au patient : une grande avancée !", "A crutch that gives the patient back their hands — a major breakthrough!") },
                { img: "/selim.png", n: "Selim", p: tr("Rupture du ligament · 2 mois d'utilisation", "Ligament rupture · 2 months of use"), q: tr("legmio m'a permis de retrouver une certaine autonomie au quotidien, notamment au travail. J'ai pu me déplacer plus facilement et réaliser seul des tâches simples mais essentielles, comme aller me faire un café :)", "legmio let me regain real day-to-day autonomy, especially at work. I could move around more easily and handle simple but essential tasks on my own — like grabbing a coffee :)") },
                { img: "/joachim.png", n: "Joachim", p: tr("Post-opératoire ligaments croisés · Convalescence à domicile", "Post-op cruciate ligaments · Home recovery"), q: tr("Après mon opération des ligaments croisés, legmio m'a permis d'être autonome chez moi pendant toute ma convalescence. Se déplacer, porter des affaires, faire les choses seul — ça change tout quand on est immobilisé.", "After my cruciate ligament surgery, legmio kept me autonomous at home through my whole recovery. Moving around, carrying things, doing things solo — it changes everything when you're immobilized.") },
              ].map((t, i) => (
                <div key={i} className="card-soft p-6 w-[320px] md:w-[380px] flex flex-col" style={{ minHeight: 340 }}>
                  <div className="flex items-center gap-4">
                    <img src={t.img} alt={t.n} className="w-16 h-16 rounded-full object-cover shrink-0" onError={(e) => (e.currentTarget.style.visibility = 'hidden')} />
                    <div>
                      <div className="font-bold" style={{ color: TEXT }}>{t.n}</div>
                      <div className="text-xs" style={{ color: MUTED }}>{t.p}</div>
                    </div>
                  </div>
                  <p className="mt-5 italic text-sm" style={{ color: "#333" }}>"{t.q}"</p>
                </div>
              ))}
            </AutoCarousel>
          </div>
          <div className="mt-12 text-center"><CTA /></div>
        </div>
      </section>

      {/* SECTION 7 — ILS L'ATTENDENT */}
      <section style={{ backgroundColor: "#111111" }} className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white">
            {tr("Ils l'attendent avec impatience.", "They're waiting for it.")}
          </h2>
        </div>
        <WallOfLove />
      </section>

      {/* SECTION 8 — CRÉDIBILITÉ */}
      <section style={{ backgroundColor: BG }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-4xl mx-auto" style={{ color: TEXT }}>
              {tr("Validée par la science. Récompensée sur le terrain.", "Validated by science. Recognized in the field.")}
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6" /><path d="M8.5 14L6 22l6-3 6 3-2.5-8" /></svg>
                ),
                t: tr("Médaille d'Or", "Gold Medal"),
                s: "Concours Lépine 2026",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ),
                t: tr("Prix de l'Impact", "Impact Award"),
                s: "Le Média Positif 2026",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v6l-4 8a4 4 0 004 4h6a4 4 0 004-4l-4-8V3" /><path d="M9 3h6" /></svg>
                ),
                t: tr("Soutenu par la Recherche", "Backed by Research"),
                s: "CNRS · Sorbonne · SATT Lutech · BPI",
              },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col items-start gap-3" style={{ backgroundColor: "#FFFFFF", border: `1px solid ${BORDER}` }}>
                <div style={{ color: ACCENT }}>{s.icon}</div>
                <div className="font-display font-bold text-xl leading-tight" style={{ color: TEXT }}>{s.t}</div>
                <div className="text-sm" style={{ color: MUTED }}>{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — ROADMAP */}
      <section style={{ backgroundColor: BG_ALT }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: TEXT }}>{tr("Où en sommes-nous ?", "Where are we today?")}</h2>
          </Reveal>
          <Roadmap />
        </div>
      </section>

      {/* SECTION 10 — ACTUALITÉ + CTA */}
      <section id="waitlist" style={{ backgroundColor: BG }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl" style={{ color: TEXT }}>
            {tr("Suis l'actualité de legmio.", "Follow legmio.")}
          </h2>
          <div className="mt-8 flex items-center justify-center gap-6" style={{ color: TEXT }}>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100"><IconInstagram size={28} /></a>
            <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="opacity-80 hover:opacity-100"><IconTiktok size={28} /></a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100"><IconLinkedin size={28} /></a>
          </div>
          <div className="mt-10"><CTA /></div>
          <p className="mt-10 text-xs" style={{ color: MUTED }}>
            {tr("Professionnel de santé ou distributeur ?", "Healthcare professional or distributor?")} <a href="mailto:contact@legmio.com" className="underline">contact@legmio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}

function WallOfLove() {
  const { tr } = useLanguage();
  const quotesFr = [
    "C'est la béquille que j'attends depuis longtemps.",
    "J'ai hâte que ça soit commercialisé, on est des milliers à en avoir besoin !",
    "Une main de libre, un bonheur.",
    "Ça fait longtemps que je me disais : mais c'est fou que personne n'ait encore inventé ça.",
    "Votre invention est révolutionnaire et va changer la vie de beaucoup d'entre nous.",
    "J'utilise des béquilles depuis 20 ans... si le prix est convenable, je prends.",
    "Vos béquilles sont une révolution. On attend avec impatience.",
    "Je marche sans béquilles parce que je ne peux rien faire d'autre si j'ai les béquilles !",
    "Voir votre invention remonte le moral.",
    "Elle a l'air de vraiment redonner de la liberté de mouvement.",
  ];
  const quotesEn = [
    "The crutch I've been waiting for forever.",
    "Can't wait for it to launch — thousands of us need this!",
    "One free hand — pure happiness.",
    "I've been saying for years: it's insane no one had built this yet.",
    "Your invention is revolutionary and will change many lives.",
    "20 years on crutches... if the price is fair, count me in.",
    "Your crutches are a revolution. We're waiting eagerly.",
    "I walk without crutches because I can't do anything else with them!",
    "Seeing your invention lifts my spirits.",
    "It really seems to give back freedom of movement.",
  ];
  const quotes = tr(quotesFr, quotesEn);
  const row1 = [...quotes, ...quotes];
  const row2 = [...quotes.slice().reverse(), ...quotes.slice().reverse()];
  const Card = ({ q }: { q: string }) => (
    <div className="rounded-2xl px-6 py-4 shrink-0 max-w-xs" style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}>
      <p className="italic text-sm">"{q}"</p>
    </div>
  );
  return (
    <div className="mt-14 space-y-6 marquee-pause">
      <div className="overflow-hidden">
        <div className="flex gap-4 marquee-left" style={{ width: "max-content" }}>
          {row1.map((q, i) => <Card key={`a${i}`} q={q} />)}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-4 marquee-right" style={{ width: "max-content" }}>
          {row2.map((q, i) => <Card key={`b${i}`} q={q} />)}
        </div>
      </div>
    </div>
  );
}

// Re-export for legacy imports (produit.tsx used to import FeaturesCarousel)
export function FeaturesCarousel() {
  return <ProductFeatureGrid />;
}

function Roadmap() {
  const { tr } = useLanguage();
  const steps = [
    { t: tr("Brevet déposé", "Patent filed"), s: "FR2411206 · Octobre 2024", state: "done" as const },
    { t: tr("Prototype validé", "Validated prototype"), s: tr("utilisé en conditions réelles", "used in real-world conditions"), state: "done" as const },
    { t: tr("Industrialisation", "Industrialization"), s: tr("en cours", "in progress"), state: "current" as const },
    { t: tr("Certification CE Classe I", "CE Class I certification"), s: "MDR 2017/745", state: "upcoming" as const },
    { t: tr("Commercialisation", "Commercial launch"), s: "2027", state: "upcoming" as const },
  ];
  const currentIdx = steps.findIndex((s) => s.state === "current");
  const progressPct = (currentIdx / (steps.length - 1)) * 100;
  return (
    <div className="mt-16">
      <div className="hidden md:block relative">
        <div className="absolute top-3 left-0 right-0 h-px" style={{ backgroundColor: BORDER }} />
        <div className="absolute top-3 left-0 h-[2px]" style={{ backgroundColor: ACCENT, width: `${progressPct}%` }} />
        <div className="relative flex justify-between">
          {steps.map((s, i) => {
            const done = s.state === "done";
            const isCurrent = s.state === "current";
            const upcoming = s.state === "upcoming";
            return (
              <div key={i} className="flex flex-col items-center gap-3 w-40 text-center">
                <div
                  className="rounded-full"
                  style={{
                    width: isCurrent ? 26 : 14,
                    height: isCurrent ? 26 : 14,
                    backgroundColor: isCurrent ? ACCENT : done ? ACCENT : "#FFFFFF",
                    border: `2px solid ${upcoming ? BORDER : ACCENT}`,
                  }}
                />
                <div className="text-sm" style={{ color: upcoming ? MUTED : TEXT, fontWeight: isCurrent ? 700 : 500, opacity: upcoming ? 0.55 : 1 }}>{s.t}</div>
                <div className="text-xs" style={{ color: isCurrent ? ACCENT : upcoming ? MUTED : MUTED, opacity: upcoming ? 0.55 : 1 }}>{s.s}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:hidden space-y-5">
        {steps.map((s, i) => {
          const done = s.state === "done";
          const isCurrent = s.state === "current";
          const upcoming = s.state === "upcoming";
          return (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-1 rounded-full shrink-0" style={{
                width: isCurrent ? 18 : 12,
                height: isCurrent ? 18 : 12,
                backgroundColor: isCurrent ? ACCENT : done ? ACCENT : "#FFFFFF",
                border: `2px solid ${upcoming ? BORDER : ACCENT}`,
              }} />
              <div>
                <div className="text-sm" style={{ color: upcoming ? MUTED : TEXT, fontWeight: isCurrent ? 700 : 500, opacity: upcoming ? 0.6 : 1 }}>{s.t}</div>
                <div className="text-xs" style={{ color: isCurrent ? ACCENT : MUTED, opacity: upcoming ? 0.6 : 1 }}>{s.s}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
