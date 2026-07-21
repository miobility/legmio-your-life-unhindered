import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
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

// Palette
const NAVY = "#120B3B";
const NAVY_ALT = "#1A1040";
const WHITE = "#FFFFFF";
const CREAM = "#FAFAF8";
const INK = "#1A1040";
const INK_MUTED = "#6B6B6B";
const BORDER_LIGHT = "#E8E4DC";
const BORDER_NAVY = "#2A1F6B";
const MUTED_NAVY = "#A89ED0";
const ACCENT = "#F5C842";

function CTADark({ block }: { block?: boolean }) {
  // For NAVY sections: gold bg, navy text
  const { t, hubspotUrl } = useLanguage();
  return (
    <a href={hubspotUrl} target="_blank" rel="noreferrer" className={`btn-dark btn-dark-hover ${block ? "w-full" : ""}`}>
      {t("cta_interested")} <IconArrowRight size={16} />
    </a>
  );
}

function CTALight({ block }: { block?: boolean }) {
  // For WHITE/CREAM sections: navy bg, white text
  const { t, hubspotUrl } = useLanguage();
  return (
    <a href={hubspotUrl} target="_blank" rel="noreferrer" className={`btn-light btn-light-hover ${block ? "w-full" : ""}`}>
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
const IconFeather = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4c-6 0-11 5-11 11v4h4c6 0 11-5 11-11" /><path d="M4 20l9-9" />
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

// SpecsStrip on CREAM section: white cards, navy text/icons
export function SpecsStrip() {
  const { tr } = useLanguage();
  const pills = specsItems();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {pills.map((p, i) => (
        <div key={i} className="rounded-2xl p-5 flex flex-col items-start gap-2 transition hover:-translate-y-0.5" style={{ backgroundColor: WHITE, border: `1px solid ${BORDER_LIGHT}`, color: INK, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          <div style={{ color: NAVY }}>{p.icon}</div>
          <div className="font-display font-bold text-base leading-tight">{tr(p.kFr, p.kEn)}</div>
          <div className="text-xs" style={{ color: INK_MUTED }}>{tr(p.sFr, p.sEn)}</div>
        </div>
      ))}
    </div>
  );
}

// Product feature grid: used on WHITE section (produit page)
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
        <div key={i} className="rounded-2xl p-5 flex flex-col items-start gap-2 transition hover:-translate-y-0.5" style={{ backgroundColor: CREAM, border: `1px solid ${BORDER_LIGHT}`, color: INK, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          <div style={{ color: NAVY }}>{p.icon}</div>
          <div className="font-display font-bold text-base leading-tight">{tr(p.kFr, p.kEn)}</div>
          <div className="text-xs" style={{ color: INK_MUTED }}>{tr(p.sFr, p.sEn)}</div>
        </div>
      ))}
    </div>
  );
}

function Landing() {
  const { tr } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tracks = video.textTracks;
    for (let i = 0; i < tracks.length; i++) tracks[i].mode = "disabled";
    const trackIndex = tr("fr", "en") === "fr" ? 0 : 1;
    if (tracks[trackIndex]) tracks[trackIndex].mode = "showing";
  });

  

  return (
    <div style={{ backgroundColor: NAVY }}>
      {/* 1 — HERO (NAVY) */}
      <section style={{ backgroundColor: NAVY }} className="px-4 sm:px-6 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="w-full max-w-[300px] mx-auto md:mx-0 md:justify-self-end rounded-2xl overflow-hidden" style={{ backgroundColor: "#000" }}>
            <div className="relative w-full" style={{ aspectRatio: "9/16", maxHeight: "80vh" }}>
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay muted loop playsInline
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                <track src="/subtitles_fr.vtt" kind="subtitles" srcLang="fr" label="Français" />
                <track src="/subtitles_en.vtt" kind="subtitles" srcLang="en" label="English" />
              </video>
            </div>
          </div>
          <div className="space-y-6 fade-up order-2" style={{ color: WHITE }}>
            <div className="text-xs tracking-[0.2em] uppercase" style={{ color: MUTED_NAVY }}>
              {tr("LA BÉQUILLE NOUVELLE GÉNÉRATION", "THE NEXT-GENERATION CRUTCH")}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05]" style={{ color: WHITE }}>
              {tr(
                <>Des mains libres<br />et une autonomie<br />enfin retrouvée.</>,
                <>Hands free.<br />Independence,<br />finally restored.</>
              )}
            </h1>
            <div className="pt-2"><CTADark /></div>
          </div>
        </div>
      </section>


      {/* 2 — PROBLÈME (WHITE) */}
      <section style={{ backgroundColor: WHITE }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-3xl mx-auto" style={{ color: INK }}>
              {tr("Les béquilles classiques ont leurs limites.", "Classic crutches have their limits.")}
            </h2>
          </Reveal>
          <div className="mt-14 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                { img: "/probleme-poignet.jpg", t: tr("Appui concentré sur le poignet et l'épaule.", "Load concentrated on wrist and shoulder."), p: tr("À force d'utilisation, les contraintes s'accumulent sur les mêmes zones articulaires.", "Over time, stress builds up on the same joint zones.") },
                { img: "/probleme-mains.avif", t: tr("Les deux mains sont mobilisées pour se déplacer.", "Both hands are taken to move."), p: tr("Porter, cuisiner, travailler, tenir son enfant — autant de gestes qui nécessitent de s'arrêter.", "Carrying, cooking, working, holding your child — every gesture requires a pause.") },
                { img: "/probleme-temps.jpg", t: tr("La conception n'a pas fondamentalement évolué.", "The design hasn't fundamentally evolved."), p: tr("Les béquilles disponibles aujourd'hui reposent sur les mêmes principes depuis des décennies.", "Today's crutches rely on principles decades old.") },
              ].map((c, i) => (
                <div key={i} className="card-cream overflow-hidden w-[320px] md:w-[380px]">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={c.img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg" style={{ color: INK }}>{c.t}</h3>
                    <p className="mt-3 text-sm" style={{ color: INK_MUTED }}>{c.p}</p>
                  </div>
                </div>
              ))}
            </AutoCarousel>
          </div>
        </div>
      </section>

      {/* 3 — FONCTIONNALITÉS (CREAM) */}
      <section style={{ backgroundColor: CREAM }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: INK }}>
              {tr("legmio a tout repensé.", "legmio rethought everything.")}
            </h2>
          </Reveal>
          <div className="mt-12">
            <SpecsStrip />
          </div>
        </div>
      </section>

      {/* 4 — USE CASES (WHITE) */}
      <section style={{ backgroundColor: WHITE }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-3xl mx-auto" style={{ color: INK }}>
              {tr("Partout où tu en as besoin.", "Wherever you need it.")}
            </h2>
          </Reveal>
          <div className="mt-10 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                { img: "/usecase-quotidien.png", t: tr("Handicap & quotidien long terme", "Long-term disability & daily life"), p: tr("Porter, cuisiner, s'occuper de ses proches.", "Carry, cook, care for your loved ones.") },
                { img: "/usecase-reeducation.png", t: tr("Post-opératoire & rééducation", "Post-op & rehabilitation"), p: tr("Récupère sans sacrifier tes épaules.", "Recover without sacrificing your shoulders.") },
                { img: "/usecase-emploi.png", t: tr("Maintien en emploi", "Staying at work"), p: tr("Rester mobile, autonome, productif.", "Stay mobile, independent, productive.") },
                { img: "/usecase-parental.png", t: tr("Vie parentale", "Parenting life"), p: tr("Porter son enfant, des choses lourdes ou encombrantes.", "Carry your child, heavy or bulky things.") },
              ].map((c, i) => (
                <div key={i} className="relative w-[280px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                  <img src={c.img} alt={c.t} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.85) 100%)" }} />
                  <div className="absolute top-0 left-0 right-0 p-5 text-white font-display font-bold text-lg leading-tight">{c.t}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm">
                    <div>{c.p}</div>
                  </div>
                </div>
              ))}
            </AutoCarousel>
          </div>
        </div>
      </section>


      {/* 5 — TÉMOIGNAGES (CREAM) */}
      <section style={{ backgroundColor: CREAM }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: INK }}>
              {tr("Testé. Approuvé.", "Tested. Approved.")}
            </h2>
          </Reveal>
          <div className="mt-14 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                { img: "/pauline.png", n: "Dr Pauline Coignard", p: tr("Médecin MPR · Centre de Kerpape · Présidente APPROCHE · SOFMER", "PM&R physician · Kerpape · President APPROCHE · SOFMER"), q: tr("Une béquille qui rend les mains au patient : une grande avancée !", "A crutch that gives the patient back their hands — a major breakthrough!") },
                { img: "/selim.png", n: "Salim", p: tr("Rupture du ligament · 2 mois d'utilisation", "Ligament rupture · 2 months of use"), q: tr("legmio m'a permis de retrouver une certaine autonomie au quotidien, notamment au travail. J'ai pu me déplacer plus facilement et réaliser seul des tâches simples mais essentielles, comme aller me faire un café :)", "legmio let me regain real day-to-day autonomy, especially at work. I could move around more easily and handle simple but essential tasks on my own — like grabbing a coffee :)") },
                { img: "/marc.jpg", n: "Marc", p: tr("Post-opératoire ménisque · Convalescence à domicile", "Post-op meniscus · Home recovery"), q: tr("Après mon opération du ménisque, legmio m'a permis d'être autonome chez moi pendant toute ma convalescence. Se déplacer, porter des affaires, faire les choses seul — ça change tout quand on est immobilisé.", "After my meniscus surgery, legmio kept me autonomous at home through my whole recovery. Moving around, carrying things, doing things solo — it changes everything when you're immobilized.") },
              ].map((t, i) => (
                <div key={i} className="card-white p-5 w-[320px] md:w-[380px] flex flex-col">
                  <div className="flex items-center gap-4">
                    <img src={t.img} alt={t.n} className="w-16 h-16 rounded-full object-cover shrink-0" onError={(e) => (e.currentTarget.style.visibility = 'hidden')} />
                    <div>
                      <div className="font-bold" style={{ color: INK }}>{t.n}</div>
                      <div className="text-xs" style={{ color: INK_MUTED }}>{t.p}</div>
                    </div>
                  </div>
                  <p className="mt-5 italic text-sm" style={{ color: INK_MUTED }}>"{t.q}"</p>
                </div>
              ))}
            </AutoCarousel>
          </div>
        </div>
      </section>

      {/* 6 — CRÉDIBILITÉ (WHITE) */}
      <section style={{ backgroundColor: WHITE }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-4xl mx-auto" style={{ color: INK }}>
              {tr("Validée scientifiquement. Récompensée sur le terrain.", "Scientifically validated. Recognized in the field.")}
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6" /><path d="M8.5 14L6 22l6-3 6 3-2.5-8" /></svg>, t: tr("Médaille d'Or", "Gold Medal"), s: "Concours Lépine 2026" },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>, t: tr("Prix de l'Impact", "Impact Award"), s: "Le Média Positif 2026" },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v6l-4 8a4 4 0 004 4h6a4 4 0 004-4l-4-8V3" /><path d="M9 3h6" /></svg>, t: tr("Soutenu par la Recherche", "Backed by Research"), s: "CNRS · Sorbonne · SATT Lutech · BPI" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-6 flex flex-col items-start gap-3 card-cream">
                <div style={{ color: NAVY }}>{s.icon}</div>
                <div className="font-display font-bold text-xl leading-tight" style={{ color: INK }}>{s.t}</div>
                <div className="text-sm" style={{ color: INK_MUTED }}>{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — ILS PARLENT DE NOUS (NAVY) */}
      <section style={{ backgroundColor: NAVY }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: WHITE }}>
              {tr("Ils parlent de nous.", "They talk about us.")}
            </h2>
          </Reveal>

          <div className="mt-12 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                ["/logoparisien.png", "Le Parisien"],
                ["/logoTF1.png", "TF1"],
                ["/logofranceTV2.jpg", "France Télévisions"],
              ].map(([src, alt]) => (
                <div key={alt} className="rounded-lg px-6 py-3 flex items-center justify-center" style={{ backgroundColor: "#FFFFFF", border: `1px solid ${BORDER_NAVY}`, minWidth: 160, height: 72 }}>
                  <img src={src} alt={alt} className="object-contain" style={{ height: 40 }} />
                </div>
              ))}
            </AutoCarousel>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { url: "https://www.instagram.com/reel/DX_Qqp9tbvg/", img: "/insta1.png", label: tr("3,6M de vues", "3.6M views") },
              { url: "https://www.instagram.com/reel/DYhaBkRov_C/", img: "/insta2.png", label: tr("Le Mag de la Santé — France TV", "Le Mag de la Santé — France TV") },
              { url: "https://www.instagram.com/reel/DYCL7AGKGrK/", img: "/insta5.png", label: tr("1M de vues", "1M views") },
            ].map((r, i) => (
              <div key={i} className="rounded-2xl overflow-hidden flex flex-col card-soft w-full max-w-[350px] mx-auto">
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5", backgroundColor: NAVY_ALT }}>
                  <img src={r.img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div className="text-base font-semibold" style={{ color: WHITE }}>{r.label}</div>
                  <a href={r.url} target="_blank" rel="noreferrer" className="btn-outline-dark inline-flex text-sm">
                    {tr("Voir sur Instagram", "View on Instagram")} <IconArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — WALL OF LOVE (WHITE) */}
      <section style={{ backgroundColor: WHITE }} className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: INK }}>
            {tr("Des milliers de personnes attendent legmio.", "Thousands of people are waiting for legmio.")}
          </h2>
        </div>
        <WallOfLove />
      </section>

      {/* 9 — ROADMAP (CREAM) */}
      <section style={{ backgroundColor: CREAM }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: INK }}>{tr("Où en sommes-nous ?", "Where are we today?")}</h2>
          </Reveal>
          <Roadmap />
        </div>
      </section>

      {/* 10 — ACTUALITÉ + CTA (WHITE) */}
      <section id="waitlist" style={{ backgroundColor: WHITE }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl" style={{ color: INK }}>
            {tr("Suis l'actualité de legmio.", "Follow legmio.")}
          </h2>
          <div className="mt-8 flex items-center justify-center gap-6" style={{ color: INK }}>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100"><IconInstagram size={28} /></a>
            <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="opacity-80 hover:opacity-100"><IconTiktok size={28} /></a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100"><IconLinkedin size={28} /></a>
          </div>
          <div className="mt-10"><CTALight /></div>
          <p className="mt-10 text-xs" style={{ color: INK_MUTED }}>
            {tr("Professionnel de santé ou distributeur ?", "Healthcare professional or distributor?")}{" "}
            <a href="/pro" className="underline" style={{ color: NAVY }}>{tr("Espace pro", "Pro area")} →</a>
          </p>
        </div>
      </section>
    </div>
  );
}

function WallOfLove() {
  const { tr } = useLanguage();
  const row1Fr = [
    "C'est la béquille que j'attends depuis longtemps.",
    "J'ai hâte que ça soit commercialisé, on est des milliers à en avoir besoin !",
    "Une main de libre, un bonheur.",
    "Ça fait longtemps que je me disais : mais c'est fou que personne n'ait encore inventé ça.",
    "Votre invention est révolutionnaire et va changer la vie de beaucoup d'entre nous.",
  ];
  const row2Fr = [
    "J'utilise des béquilles depuis 20 ans... si le prix est convenable, je prends.",
    "Vos béquilles sont une révolution. On attend avec impatience.",
    "Je marche sans béquilles parce que je ne peux rien faire d'autre si j'ai les béquilles !",
    "Voir votre invention remonte le moral.",
    "Elle a l'air de vraiment redonner de la liberté de mouvement.",
  ];
  const row1En = [
    "The crutch I've been waiting for forever.",
    "Can't wait for launch — thousands of us need this!",
    "One free hand — pure happiness.",
    "I've been saying for years: crazy no one built this yet.",
    "Your invention is revolutionary and will change many lives.",
  ];
  const row2En = [
    "20 years on crutches... if the price is fair, count me in.",
    "Your crutches are a revolution. We're waiting eagerly.",
    "I walk without crutches because I can't do anything else with them!",
    "Seeing your invention lifts my spirits.",
    "It really seems to give back freedom of movement.",
  ];
  const row1 = tr(row1Fr, row1En);
  const row2 = tr(row2Fr, row2En);
  const dup1 = [...row1, ...row1];
  const dup2 = [...row2, ...row2];
  const Card = ({ q }: { q: string }) => (
    <div className="rounded-2xl px-6 py-4 shrink-0 max-w-xs" style={{ backgroundColor: CREAM, border: `1px solid ${BORDER_LIGHT}`, color: INK, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
      <p className="italic text-sm">"{q}"</p>
    </div>
  );
  return (
    <div className="mt-14 space-y-6 marquee-pause">
      <div className="overflow-hidden">
        <div className="flex gap-4 marquee-left" style={{ width: "max-content" }}>
          {dup1.map((q, i) => <Card key={`a${i}`} q={q} />)}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-4 marquee-right" style={{ width: "max-content" }}>
          {dup2.map((q, i) => <Card key={`b${i}`} q={q} />)}
        </div>
      </div>
    </div>
  );
}

export function FeaturesCarousel() {
  return <ProductFeatureGrid />;
}

function Roadmap() {
  // Cream section: dark text, navy for done/current, light border for upcoming.
  const { tr } = useLanguage();
  const steps = [
    { t: tr("Brevet déposé", "Patent filed"), s: "FR2411206 · Octobre 2024", state: "done" as const },
    { t: tr("Prototype validé", "Validated prototype"), s: tr("utilisé en conditions réelles", "used in real-world conditions"), state: "done" as const },
    { t: tr("Industrialisation", "Industrialization"), s: tr("en cours", "in progress"), state: "current" as const },
    { t: tr("Dispositif médical C1 & Marquage CE", "Class I medical device & CE marking"), s: "MDR 2017/745", state: "upcoming" as const },
    { t: tr("Commercialisation", "Commercial launch"), s: "2027", state: "upcoming" as const },
  ];
  const currentIdx = steps.findIndex((s) => s.state === "current");
  const progressPct = (currentIdx / (steps.length - 1)) * 100;
  const CIRCLE = 18;
  const UPCOMING_TEXT = "#A89ED0";
  return (
    <div className="mt-16">
      <div className="hidden md:block relative pt-16 pb-4">
        <div className="absolute left-0 right-0 h-px" style={{ top: `calc(4rem + ${CIRCLE / 2}px)`, backgroundColor: BORDER_LIGHT }} />
        <div className="absolute left-0 h-[2px]" style={{ top: `calc(4rem + ${CIRCLE / 2 - 1}px)`, backgroundColor: ACCENT, width: `${progressPct}%` }} />
        <div className="relative grid grid-cols-5 gap-4">
          {steps.map((s, i) => {
            const done = s.state === "done";
            const isCurrent = s.state === "current";
            const upcoming = s.state === "upcoming";
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="h-12 flex items-end justify-center px-2">
                  <div className="text-sm leading-tight" style={{ color: upcoming ? UPCOMING_TEXT : INK, fontWeight: isCurrent ? 700 : 500 }}>{s.t}</div>
                </div>
                <div className="my-3 flex items-center justify-center" style={{ height: CIRCLE + 6 }}>
                  <div
                    className="rounded-full"
                    style={{
                      width: isCurrent ? CIRCLE + 6 : CIRCLE,
                      height: isCurrent ? CIRCLE + 6 : CIRCLE,
                      backgroundColor: (done || isCurrent) ? ACCENT : WHITE,
                      border: `2px solid ${upcoming ? BORDER_LIGHT : ACCENT}`,
                      boxShadow: isCurrent ? `0 0 0 6px rgba(245,200,66,0.25)` : "none",
                    }}
                  />
                </div>
                <div className="text-xs px-2 leading-snug mt-2" style={{ color: upcoming ? UPCOMING_TEXT : INK_MUTED, fontWeight: isCurrent ? 600 : 400 }}>{s.s}</div>
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
                backgroundColor: isCurrent || done ? ACCENT : WHITE,
                border: `2px solid ${upcoming ? BORDER_LIGHT : ACCENT}`,
              }} />
              <div>
                <div className="text-sm" style={{ color: upcoming ? UPCOMING_TEXT : INK, fontWeight: isCurrent ? 700 : 500 }}>{s.t}</div>
                <div className="text-xs" style={{ color: upcoming ? UPCOMING_TEXT : INK_MUTED }}>{s.s}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
