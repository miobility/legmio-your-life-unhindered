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

// ============= Icones des caracteristiques =============
// Jeu homogene : viewBox 24, trait 1.6, extremites arrondies, dessin contenu entre 3 et 21
// pour que toutes les icones aient le meme poids optique a 28px.
const Ico = ({ size = 28, children }: { size?: number; children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

// Legere — une plume : silhouette pleine + nervure centrale
const IconFeather = ({ size = 28 }: { size?: number }) => (
  <Ico size={size}><path d="M19.5 4.5C21 12 15.5 18 8 18H4.5v-3.5C4.5 7 10.5 3 19.5 4.5z" /><path d="M4.5 19.5L13 11" /></Ico>
);

// Deux modes — un interrupteur a deux positions
const IconDualMode = ({ size = 28 }: { size?: number }) => (
  <Ico size={size}><rect x="2.5" y="7" width="19" height="10" rx="5" /><circle cx="16.5" cy="12" r="2.6" fill="currentColor" stroke="none" /></Ico>
);

// Robuste — un halterain (charge supportee)
const IconWeight = ({ size = 28 }: { size?: number }) => (
  <Ico size={size}><path d="M7.5 12h9" /><rect x="4.5" y="8" width="3.5" height="8" rx="1.2" fill="currentColor" /><rect x="16" y="8" width="3.5" height="8" rx="1.2" fill="currentColor" /><path d="M2.5 10v4M21.5 10v4" /></Ico>
);

// Ergonomique — des doigts poses sur une poignee rembourree
const IconGrip = ({ size = 28 }: { size?: number }) => (
  <Ico size={size}><rect x="3" y="13.5" width="18" height="6" rx="3" /><path d="M8 13.5V9M12 13.5V7M16 13.5V9" /></Ico>
);

// Protectrice — un bouclier, avec le trace d'un nerf a l'interieur
const IconNerve = ({ size = 28 }: { size?: number }) => (
  <Ico size={size}><path d="M12 3l8 3.2v5.3c0 4.9-3.4 8-8 9.5-4.6-1.5-8-4.6-8-9.5V6.2L12 3z" /><path d="M8.5 12c1.2-1.5 2.3 1.5 3.5 0s2.3 1.5 3.5 0" /></Ico>
);

// Reglable — deux curseurs, pour les deux points de reglage
const IconSliders = ({ size = 28 }: { size?: number }) => (
  <Ico size={size}><path d="M4 8.5h16M4 15.5h16" /><circle cx="9" cy="8.5" r="2.4" fill="currentColor" stroke="none" /><circle cx="15" cy="15.5" r="2.4" fill="currentColor" stroke="none" /></Ico>
);

// Durable — un cycle ferme (pieces remplacees, pas le produit)
const IconRecycle = ({ size = 28 }: { size?: number }) => (
  <Ico size={size}><path d="M4.5 12a7.5 7.5 0 0112.8-5.3L19.5 9" /><path d="M19.5 4.5V9h-4.5" /><path d="M19.5 12a7.5 7.5 0 01-12.8 5.3L4.5 15" /><path d="M4.5 19.5V15H9" /></Ico>
);

// Universelle — une plage de tailles, bornee en haut et en bas
const IconRange = ({ size = 28 }: { size?: number }) => (
  <Ico size={size}><path d="M12 4.5v15" /><path d="M8.8 7.7L12 4.5l3.2 3.2M8.8 16.3L12 19.5l3.2-3.2" /><path d="M5 4.5h3M16 4.5h3M5 19.5h3M16 19.5h3" /></Ico>
);

// Position de repos — une assise
const IconRest = ({ size = 28 }: { size?: number }) => (
  <Ico size={size}><path d="M3 13.5h18" /><path d="M5.5 13.5V19M18.5 13.5V19" /><path d="M6.5 13.5V8a2 2 0 012-2h7a2 2 0 012 2v5.5" /></Ico>
);

// Tient seule — la bequille appuyee contre un mur
const IconWall = ({ size = 28 }: { size?: number }) => (
  <Ico size={size}><path d="M4 3.5v17M4 20.5h16" /><path d="M14.5 4.5L9.5 20.5" /><path d="M12.5 10.5h3" /></Ico>
);

const specsItems = () => [
  { icon: <IconFeather />, kFr: "Légère", kEn: "Light", kDe: "Leicht", sFr: "850 g", sEn: "850 g", sDe: "850 g" },
  { icon: <IconDualMode />, kFr: "Deux modes d'utilisation", kEn: "Two modes of use", kDe: "Zwei Nutzungsmodi", sFr: "Appui sur le coude quand nécessaire", sEn: "Elbow support when needed", sDe: "Ellbogenstütze bei Bedarf" },
  { icon: <IconWeight />, kFr: "Robuste", kEn: "Robust", kDe: "Robust", sFr: "Supporte jusqu'à 130kg", sEn: "Supports up to 130kg", sDe: "Trägt bis zu 130kg" },
  { icon: <IconGrip />, kFr: "Ergonomique", kEn: "Ergonomic", kDe: "Ergonomisch", sFr: "Poignée qui redistribue les contraintes d'appui", sEn: "Grip that redistributes load", sDe: "Griff der die Stützbelastung umverteilt" },
  { icon: <IconNerve />, kFr: "Protectrice", kEn: "Protective", kDe: "Schützend", sFr: "Zones d'appui qui protègent les nerfs", sEn: "Support zones that protect nerves", sDe: "Stützzonen die die Nerven schützen" },
  { icon: <IconSliders />, kFr: "Réglable", kEn: "Adjustable", kDe: "Verstellbar", sFr: "Double réglage en longueur et au niveau de la poignée", sEn: "Dual adjustment in length and grip", sDe: "Doppelverstellung in Länge und Griff" },
  { icon: <IconRecycle />, kFr: "Durable", kEn: "Durable", kDe: "Langlebig", sFr: "Embouts, poignée, sangles remplaçables", sEn: "Tips, grip, straps replaceable", sDe: "Aufsätze, Griff, Gurte austauschbar" },
  { icon: <IconRange />, kFr: "Universelle", kEn: "Universal", kDe: "Universell", sFr: "Convient de 1m50 à 1m95", sEn: "Fits users from 1.50m to 1.95m", sDe: "Geeignet für 1,50m bis 1,95m" },
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
          <div className="font-display font-bold text-base leading-tight">{tr(p.kFr, p.kEn, p.kDe)}</div>
          <div className="text-xs" style={{ color: INK_MUTED }}>{tr(p.sFr, p.sEn, p.sDe)}</div>
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
    { icon: <IconRest />, kFr: "Position de repos", kEn: "Rest position", kDe: "Ruheposition", sFr: "Tu peux t'appuyer sur legmio pour récupérer", sEn: "You can lean on legmio to rest", sDe: "Du kannst dich zum Ausruhen auf legmio stützen" },
    { icon: <IconWall />, kFr: "Tient seule", kEn: "Stands alone", kDe: "Steht allein", sFr: "legmio tient debout contre un mur sans tomber", sEn: "legmio stands against a wall without falling", sDe: "legmio steht gegen eine Wand ohne umzufallen" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((p, i) => (
        <div key={i} className="rounded-2xl p-5 flex flex-col items-start gap-2 transition hover:-translate-y-0.5" style={{ backgroundColor: CREAM, border: `1px solid ${BORDER_LIGHT}`, color: INK, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          <div style={{ color: NAVY }}>{p.icon}</div>
          <div className="font-display font-bold text-base leading-tight">{tr(p.kFr, p.kEn, p.kDe)}</div>
          <div className="text-xs" style={{ color: INK_MUTED }}>{tr(p.sFr, p.sEn, p.sDe)}</div>
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
    const trackIndex = tr("fr", "en", "de") === "fr" ? 0 : 1;
    if (tracks[trackIndex]) tracks[trackIndex].mode = "showing";
  });

  

  return (
    <div style={{ backgroundColor: NAVY }}>
      {/* 1 — HERO (NAVY) */}
      <section style={{ backgroundColor: NAVY }} className="px-4 sm:px-6 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[35%_65%] gap-8 md:gap-10 items-center">
          <div className="w-full max-w-[300px] mx-auto md:mx-0 rounded-2xl overflow-hidden" style={{ backgroundColor: "#000" }}>
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
              {tr("LA BÉQUILLE NOUVELLE GÉNÉRATION", "THE NEXT GENERATION CRUTCH", "DIE KRÜCKE DER NEUEN GENERATION")}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05]" style={{ color: WHITE }}>
              {tr(
                <>Des mains libres<br />et une autonomie<br />enfin retrouvée.</>,
                <>Free hands<br />and newfound<br />independence.</>,
                <>Freie Hände<br />und neu gewonnene<br />Selbstständigkeit.</>
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
              {tr("Les béquilles classiques ont leurs limites.", "Classic crutches have their limits.", "Herkömmliche Krücken haben ihre Grenzen.")}
            </h2>
          </Reveal>
          <div className="mt-14 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                { img: "/nerf-ulnaire.jpg", fit: "contain", alt: tr("Schéma du bras montrant le trajet du nerf ulnaire et son point de compression au coude.", "Diagram of the arm showing the ulnar nerve pathway and its compression point at the elbow.", "Schema des Arms mit dem Verlauf des Ellennervs und seiner Kompressionsstelle am Ellbogen."), t: tr("Les zones de passage des nerfs sont comprimées.", "Nerve pathways get compressed.", "Die Nervenbahnen werden zusammengedrückt."), p: tr("Le nerf ulnaire chemine juste sous la peau. Une pression répétée au même endroit peut provoquer engourdissements et fourmillements dans la main.", "The ulnar nerve runs just beneath the skin. Repeated pressure at the same spot can cause numbness and tingling in the hand.", "Der Ellennerv verläuft direkt unter der Haut. Wiederholter Druck an derselben Stelle kann zu Taubheit und Kribbeln in der Hand führen.") },
                { img: "/probleme-mains.avif", fit: "cover", alt: "", t: tr("Les deux mains sont mobilisées pour se déplacer.", "Both hands are needed just to move.", "Beide Hände werden zum Gehen benötigt."), p: tr("Porter, cuisiner, travailler, ouvrir une porte — autant de gestes qui nécessitent de s'arrêter.", "Carrying, cooking, working, opening a door — all things that require stopping.", "Tragen, kochen, arbeiten, eine Tür öffnen — all das erfordert einen Stopp.") },
                { img: "/probleme-temps.jpg", fit: "cover", alt: "", t: tr("La conception n'a pas fondamentalement évolué.", "The design hasn't fundamentally changed.", "Das Design hat sich grundlegend nicht verändert."), p: tr("Les béquilles disponibles aujourd'hui reposent sur les mêmes principes depuis des décennies.", "Today's crutches are built on the same principles as decades ago.", "Die heute erhältlichen Krücken beruhen seit Jahrzehnten auf denselben Prinzipien.") },
              ].map((c, i) => (
                <div key={i} className="card-cream overflow-hidden w-[320px] md:w-[380px] h-full flex flex-col">
                  <div className="aspect-[3/2] overflow-hidden" style={{ backgroundColor: WHITE }}>
                    <img src={c.img} alt={c.alt} className={`w-full h-full ${c.fit === "contain" ? "object-contain" : "object-cover"}`} loading="lazy" />
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
              {tr("legmio a tout repensé.", "legmio rethought everything.", "legmio hat alles neu gedacht.")}
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
              <span className="hidden md:inline">{tr("À chaque fois que tu en as besoin.", "Whenever you need it.", "Wann immer du sie brauchst.")}</span>
              <span className="md:hidden">{tr(<>À chaque fois<br />que tu en as besoin.</>, <>Whenever<br />you need it.</>, <>Wann immer.<br />du sie brauchst.</>)}</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>
                ),
                t: tr("Handicap au quotidien", "Disability & daily life", "Behinderung im Alltag"),
                p: tr("Sur le long terme, devenir plus autonome et indépendant au quotidien.", "Over the long term, becoming more autonomous and independent day to day.", "Langfristig selbstständiger und unabhängiger im Alltag werden."),
              },
              {
                icon: (
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" /><path d="M3 13h18" /></svg>
                ),
                t: tr("Maintien en emploi", "Staying employed", "Beschäftigungserhalt"),
                p: tr("Récupérer sans tout sacrifier, et rester autonome au travail. Aides RQTH mobilisables.", "Recovering without giving everything up, and staying independent at work.", "Sich erholen ohne auf alles zu verzichten und bei der Arbeit selbstständig bleiben."),
              },
              {
                icon: (
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="5" r="2.2" /><circle cx="16" cy="8" r="1.6" /><path d="M6 21v-6l-2-4a2 2 0 013.6-1.6L9 12h3l2 3v6" /><path d="M14 21v-5l2-3" /></svg>
                ),
                t: tr("Vie parentale", "Parenting", "Elternleben"),
                p: tr("Gagner en autonomie au quotidien avec des enfants.", "Gaining day-to-day independence with children.", "Im Alltag mit Kindern selbstständiger werden."),
              },
            ].map((c, i) => (
              <div key={i} className="card-cream p-6 flex flex-col items-start gap-3">
                <div style={{ color: NAVY }}>{c.icon}</div>
                <h3 className="font-display font-bold text-lg leading-tight" style={{ color: INK }}>{c.t}</h3>
                <p className="text-sm" style={{ color: INK_MUTED }}>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 5 — TÉMOIGNAGES (CREAM) */}
      <section style={{ backgroundColor: CREAM }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: INK }}>
              {tr("Testée et approuvée.", "Tested and approved.", "Getestet und bewährt.")}
            </h2>
          </Reveal>
          <div className="mt-14 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                { img: "/pauline.png", n: "Dr Pauline Coignard", p: tr("Médecin MPR · Centre de Kerpape · Présidente APPROCHE · SOFMER", "MPR Physician · Kerpape Centre · President APPROCHE · SOFMER", "MPR-Ärztin · Kerpape Zentrum · Präsidentin APPROCHE · SOFMER"), q: tr("Une béquille qui rend les mains au patient : une grande avancée !", "Une béquille qui rend les mains au patient : une grande avancée !", "Une béquille qui rend les mains au patient : une grande avancée !") },
                { img: undefined as string | undefined, n: "Salim", p: tr("Rupture du ligament · 2 mois d'utilisation", "Ligament tear · 2 months of use", "Bänderriss · 2 Monate Nutzung"), q: tr("legmio m'a permis de retrouver une certaine autonomie au quotidien, notamment au travail. J'ai pu me déplacer plus facilement et réaliser seul des tâches simples mais essentielles, comme aller me faire un café :)", "legmio m'a permis de retrouver une certaine autonomie au quotidien, notamment au travail. J'ai pu me déplacer plus facilement et réaliser seul des tâches simples mais essentielles, comme aller me faire un café :)", "legmio m'a permis de retrouver une certaine autonomie au quotidien, notamment au travail. J'ai pu me déplacer plus facilement et réaliser seul des tâches simples mais essentielles, comme aller me faire un café :)") },
                { img: undefined as string | undefined, n: "Marc", p: tr("Post-opératoire ménisque · Convalescence à domicile", "Post-operative meniscus · Home recovery", "Postoperativer Meniskus · Genesung zu Hause"), q: tr("Après mon opération du ménisque, legmio m'a permis d'être autonome chez moi pendant toute ma convalescence. Se déplacer, porter des affaires, faire les choses seul — ça change tout quand on est immobilisé.", "Après mon opération du ménisque, legmio m'a permis d'être autonome chez moi pendant toute ma convalescence. Se déplacer, porter des affaires, faire les choses seul — ça change tout quand on est immobilisé.", "Après mon opération du ménisque, legmio m'a permis d'être autonome chez moi pendant toute ma convalescence. Se déplacer, porter des affaires, faire les choses seul — ça change tout quand on est immobilisé.") },
              ].map((t, i) => (
                <div key={i} className="card-white p-5 w-[320px] md:w-[380px] h-full flex flex-col">
                  <div className="flex items-center gap-4">
                    {t.img && (
                      <img src={t.img} alt={t.n} className="w-16 h-16 rounded-full object-cover shrink-0" />
                    )}
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
              {tr("Une innovation récompensée.", "An award-winning innovation.", "Eine ausgezeichnete Innovation.")}
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6" /><path d="M8.5 14L6 22l6-3 6 3-2.5-8" /></svg>, t: tr("Médaille d'Or", "Gold Medal", "Goldmedaille"), s: "Concours Lépine 2026" },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>, t: tr("Prix de l'Impact", "Impact Award", "Impact-Preis"), s: "Le Média Positif 2026" },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v6l-4 8a4 4 0 004 4h6a4 4 0 004-4l-4-8V3" /><path d="M9 3h6" /></svg>, t: tr("Soutenu par la Recherche", "Backed by Research", "Unterstützt durch die Forschung"), s: "CNRS · Sorbonne · SATT Lutech · BPI" },
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
              {tr("Ils parlent de nous.", "They talk about us.", "Sie berichten über uns.")}
            </h2>
          </Reveal>

          <div className="mt-12 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                ["/logoparisien.png", "Le Parisien"],
                ["/logoTF1.png", "TF1"],
                ["/logofranceTV2.jpg", "France Télévisions"],
                ["/mediapositif.png", "Le Média Positif"],
                ["/logofaireface.jpg", "Faire Face"],
                ["/logohacavie.png", "Hacavie"],
                ["/logocnrsinnovation.png", "CNRS Innovation"],
              ].map(([src, alt]) => (
                <div key={alt} className="rounded-lg px-6 py-3 flex items-center justify-center" style={{ backgroundColor: "#FFFFFF", border: `1px solid ${BORDER_NAVY}`, minWidth: 170, height: 80 }}>
                  <img src={src} alt={alt} className="object-contain" style={{ maxHeight: 52, maxWidth: 150 }} />
                </div>
              ))}
            </AutoCarousel>
          </div>

          <InstaCards />

        </div>
      </section>

      {/* 8 — WALL OF LOVE (WHITE) */}
      <section style={{ backgroundColor: WHITE }} className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: INK }}>
            {tr("Bientôt disponible.", "Coming soon.", "Bald verfügbar.")}
          </h2>
        </div>
        <WallOfLove />
      </section>

      {/* 9 — ROADMAP (CREAM) */}
      <section style={{ backgroundColor: CREAM }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: INK }}>{tr("Où en sommes-nous ?", "Where are we?", "Wo stehen wir?")}</h2>
          </Reveal>
          <Roadmap />
        </div>
      </section>

      {/* 10 — ACTUALITÉ + CTA (WHITE) */}
      <section id="waitlist" style={{ backgroundColor: WHITE }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl" style={{ color: INK }}>
            {tr(<>Suis l'actualité<br />de legmio.</>, <>Follow<br />legmio's news.</>, <>Folge den Neuigkeiten<br />von legmio.</>)}
          </h2>
          <div className="mt-8 flex items-center justify-center gap-6" style={{ color: INK }}>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100"><IconInstagram size={28} /></a>
            <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="opacity-80 hover:opacity-100"><IconTiktok size={28} /></a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100"><IconLinkedin size={28} /></a>
          </div>
          <div className="mt-10"><CTALight /></div>
          <p className="mt-10 text-base" style={{ color: INK_MUTED }}>
            {tr("Professionnel de santé ou distributeur ?", "Healthcare professional or distributor?", "Gesundheitsfachkraft oder Händler?")}
            <br className="sm:hidden" />{" "}
            <a href="/pro" className="underline" style={{ color: NAVY }}>{tr("Espace pro", "Pro space", "Fachbereich")} →</a>
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
  const row1 = tr(row1Fr, row1Fr, row1Fr);
  const row2 = tr(row2Fr, row2Fr, row2Fr);
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
    { t: tr("Brevet déposé", "Patent filed", "Patent angemeldet"), s: "FR2411206 · Octobre 2024", state: "done" as const },
    { t: tr("Prototype validé", "Prototype validated", "Prototyp validiert"), s: tr("utilisé en conditions réelles", "used in real conditions", "in realen Bedingungen getestet"), state: "done" as const },
    { t: tr("Industrialisation", "Industrialisation", "Industrialisierung"), s: tr("en cours", "in progress", "laufend"), state: "current" as const },
    { t: tr("Dispositif médical C1 & Marquage CE", "Class I Medical Device & CE Marking", "Medizinprodukt Kl. I & CE-Kennzeichnung"), s: "MDR 2017/745", state: "upcoming" as const },
    { t: tr("Commercialisation", "Commercial launch", "Markteinführung"), s: "2027", state: "upcoming" as const },
  ];
  const currentIdx = steps.findIndex((s) => s.state === "current");
  const progressPct = (currentIdx / (steps.length - 1)) * 100;
  const CIRCLE = 18;
  const UPCOMING_TEXT = "#686D83";
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

function InstaCards() {
  const { tr } = useLanguage();
  const items = [
    { url: "https://www.instagram.com/reel/DYCL7AGKGrK/", img: "/insta5.png", label: tr("1M de vues", "1M views", "1 Mio. Aufrufe") },
    { url: "https://www.instagram.com/reel/DX_Qqp9tbvg/", img: "/insta1.png", label: tr("3,6M de vues", "3.6M views", "3,6 Mio. Aufrufe") },
    { url: "https://www.instagram.com/reel/DYhaBkRov_C/", img: "/insta2.png", label: tr("Le Mag de la Santé — France TV", "Le Mag de la Santé — France TV", "Le Mag de la Santé — France TV") },
  ];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActive(Math.max(0, Math.min(items.length - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items.length]);
  const goTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };
  return (
    <div className="mt-16 max-w-6xl mx-auto">
      {/* Desktop: grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {items.map((r, i) => (
          <InstaCard key={i} r={r} />
        ))}
      </div>
      {/* Mobile: snap carousel + dots */}
      <div className="md:hidden -mx-4 sm:-mx-6">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((r, i) => (
            <div key={i} className="snap-center shrink-0 w-full flex justify-center px-4 sm:px-6">
              <InstaCard r={r} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="rounded-full transition"
              style={{
                width: 8,
                height: 8,
                backgroundColor: i === active ? ACCENT : "#4B3C8F",
                opacity: i === active ? 1 : 0.7,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function InstaCard({ r }: { r: { url: string; img: string; label: string } }) {
  const { tr } = useLanguage();
  return (
    <div className="rounded-2xl overflow-hidden flex flex-col card-soft w-full max-w-[350px] mx-auto">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5", backgroundColor: NAVY_ALT }}>
        <img src={r.img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="text-base font-semibold" style={{ color: WHITE }}>{r.label}</div>
        <a href={r.url} target="_blank" rel="noreferrer" className="btn-outline-dark inline-flex text-sm">
          {tr("Voir sur Instagram", "View on Instagram", "Auf Instagram ansehen")} <IconArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

