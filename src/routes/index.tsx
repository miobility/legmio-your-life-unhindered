import { metaDe } from "@/lib/meta";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { SOCIAL } from "@/components/Layout";
import {
  IconArrowRight, IconInstagram, IconTiktok, IconLinkedin,
} from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { Carousel } from "@/components/Carousel";
import { Marquee } from "@/components/Marquee";
import { Compteur } from "@/components/Compteur";
import { MARGE_TEMPS_FORT, SEUIL } from "@/lib/apparition";
import { AWARD, CTA, INK, INK_SOFT, LINE, LINE_INK, MUTED, MUTED_INK, SAND, WHITE } from "@/lib/couleurs";

export const Route = createFileRoute("/")({
  head: () => metaDe("fr", "accueil"),
  component: Landing,
});

// Palette

function CTADark({ block }: { block?: boolean }) {
  // For INK sections: gold bg, navy text
  const { t, hubspotUrl } = useLanguage();
  return (
    <a href={hubspotUrl} target="_blank" rel="noreferrer" className={`btn-dark btn-dark-hover ${block ? "w-full" : ""}`}>
      {t("cta_interested")} <IconArrowRight size={16} />
    </a>
  );
}

function CTALight({ block }: { block?: boolean }) {
  // For WHITE/SAND sections: navy bg, white text
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

// SpecsStrip on SAND section: white cards, navy text/icons
export function SpecsStrip() {
  const { tr } = useLanguage();
  const pills = specsItems();
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {pills.map((p, i) => (
        <div key={i} className="fade-up carte-survol rounded-2xl p-5 flex flex-col items-start gap-2" style={{ backgroundColor: WHITE, border: `1px solid ${LINE}`, color: INK, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", transitionDelay: `${i * 60}ms` }}>
          <div style={{ color: INK }}>{p.icon}</div>
          <div className="font-display font-bold text-base leading-tight">{tr(p.kFr, p.kEn, p.kDe)}</div>
          <div className="mention" style={{ color: MUTED }}>{tr(p.sFr, p.sEn, p.sDe)}</div>
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
    { icon: <IconRest />, kFr: "Position de repos", kEn: "Rest position", kDe: "Ruheposition", sFr: "Vous pouvez vous appuyer sur legmio pour récupérer", sEn: "You can lean on legmio to rest", sDe: "Sie können sich zum Ausruhen auf legmio stützen" },
    { icon: <IconWall />, kFr: "Tient seule", kEn: "Stands alone", kDe: "Steht allein", sFr: "legmio tient debout contre un mur sans tomber", sEn: "legmio stands against a wall without falling", sDe: "legmio steht gegen eine Wand ohne umzufallen" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((p, i) => (
        <div key={i} className="fade-up carte-survol rounded-2xl p-5 flex flex-col items-start gap-2" style={{ backgroundColor: SAND, border: `1px solid ${LINE}`, color: INK, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", transitionDelay: `${i * 60}ms` }}>
          <div style={{ color: INK }}>{p.icon}</div>
          <div className="font-display font-bold text-base leading-tight">{tr(p.kFr, p.kEn, p.kDe)}</div>
          <div className="mention" style={{ color: MUTED }}>{tr(p.sFr, p.sEn, p.sDe)}</div>
        </div>
      ))}
    </div>
  );
}

export function Landing() {
  const { tr, lien, lang } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  // La piste se choisissait par index : « fr » donnait 0, tout le reste 1.
  // Un visiteur allemand recevait donc les sous-titres anglais. On compare
  // desormais le code de langue. C'est aussi ce qui permet de changer de
  // piste apres le chargement : l'attribut `default` n'est lu qu'une fois.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tracks = video.textTracks;
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].mode = tracks[i].language === lang ? "showing" : "disabled";
    }
  }, [lang]);

  

  return (
    <div style={{ backgroundColor: INK }}>
      {/* 1 — HERO (INK) */}
      <section style={{ backgroundColor: INK }} className="grain relative jonction-bas halo-or-hero px-4 sm:px-6 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[380px_1fr] gap-8 md:gap-24 items-center">
          {/* Sur mobile le titre passe devant : la video seule occupait tout le
              premier ecran, le visiteur n'y lisait aucune promesse. */}
          <div className="order-2 md:order-1 w-full max-w-[300px] md:max-w-[380px] mx-auto md:mx-0 rounded-2xl overflow-hidden" style={{ backgroundColor: INK_SOFT }}>
            <div className="relative w-full" style={{ aspectRatio: "9/16", maxHeight: "80vh" }}>
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay muted loop playsInline
                poster="/hero-poster.jpg"
                preload="metadata"
                width={1080}
                height={1920}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                {/* Aucune piste ne portait `default` : le navigateur choisissait,
                    et un visiteur allemand pouvait ne rien voir du tout. */}
                {[["fr", "Français"], ["en", "English"], ["de", "Deutsch"]].map(([code, nom]) => (
                  <track key={code} src={`/subtitles_${code}.vtt`} kind="subtitles"
                         srcLang={code} label={nom} default={code === lang} />
                ))}
              </video>
            </div>
          </div>
          {/* Centre sur mobile : la grille a deux colonnes disparait, et tout
              le reste de la page est centre. A gauche, le bloc detonnait. */}
          <div className="order-1 md:order-2 space-y-6 fade-up text-center md:text-left" style={{ color: WHITE }}>
            <div className="mention tracking-[0.2em] uppercase" style={{ color: MUTED_INK }}>
              {tr("LA BÉQUILLE NOUVELLE GÉNÉRATION", "THE NEXT GENERATION CRUTCH", "DIE KRÜCKE DER NEUEN GENERATION")}
            </div>
            <h1 className="titre-page leading-[1.05]" style={{ color: WHITE }}>
              {tr(
                <>Des mains libres<br />et une autonomie<br />enfin retrouvée.</>,
                <>Free hands<br />and newfound<br />independence.</>,
                <>Freie Hände<br />und neu gewonnene<br />Selbstständigkeit.</>
              )}
            </h1>
            <div className="pt-2"><CTADark /></div>
              {/* La medaille compte, mais le Concours Lepine ne voyage pas :
                  hors de France, le nom seul ne dit rien, d'ou la glose. */}
              <p className="pt-1 text-base" style={{ color: MUTED_INK }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={AWARD}
                     strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                     className="inline-block align-[-2px] mr-1.5" aria-hidden="true">
                  <circle cx="12" cy="9" r="6" /><path d="M8.5 14L6 22l6-3 6 3-2.5-8" />
                </svg>
                {tr(
                  <>Médaille d'Or du <strong style={{ color: WHITE, fontWeight: 600 }}>Concours Lépine 2026</strong></>,
                  <>Gold Medal, <strong style={{ color: WHITE, fontWeight: 600 }}>Concours Lépine 2026</strong> — France's national inventors' award</>,
                  <>Goldmedaille des <strong style={{ color: WHITE, fontWeight: 600 }}>Concours Lépine 2026</strong> — Frankreichs nationaler Erfinderpreis</>
                )}
              </p>
          </div>
        </div>
      </section>


      {/* 2 — PROBLÈME (WHITE) */}
      <section style={{ backgroundColor: WHITE }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="titre-section text-center max-w-3xl mx-auto" style={{ color: INK }}>
              {tr("Les béquilles classiques ont leurs limites.", "Classic crutches have their limits.", "Herkömmliche Krücken haben ihre Grenzen.")}
            </h2>
          </Reveal>
          <div className="mt-14">
            <Carousel label={tr("Les limites des béquilles classiques", "The limits of classic crutches", "Die Grenzen herkömmlicher Krücken")}>
              {[
                { img: "/compression-nerf.jpg", alt: tr("Un soignant examine le coude d'un patient, à l'endroit où le nerf ulnaire est le plus exposé.", "A clinician examines a patient's elbow, where the ulnar nerve is most exposed.", "Eine Fachkraft untersucht den Ellbogen eines Patienten an der Stelle, an der der Ellennerv am stärksten exponiert ist."), t: tr("Les zones de passage des nerfs sont comprimées.", "Nerve pathways get compressed.", "Die Nervenbahnen werden zusammengedrückt."), p: tr("Le nerf ulnaire passe juste sous la peau : une pression répétée au même endroit finit par l'irriter.", "The ulnar nerve runs just beneath the skin: repeated pressure in the same spot ends up irritating it.", "Der Ellennerv verläuft direkt unter der Haut: wiederholter Druck an derselben Stelle reizt ihn mit der Zeit.") },
                { img: "/probleme-mains.avif", alt: "", t: tr("Les deux mains sont mobilisées pour se déplacer.", "Both hands are needed just to move.", "Beide Hände werden zum Gehen benötigt."), p: tr("Porter, cuisiner, travailler, ouvrir une porte — autant de gestes qui nécessitent de s'arrêter.", "Carrying, cooking, working, opening a door — all things that require stopping.", "Tragen, kochen, arbeiten, eine Tür öffnen — all das erfordert einen Stopp.") },
                { img: "/canne-anglaise.jpg", alt: tr("Une femme marche avec deux cannes anglaises classiques, les deux mains occupées par les poignées.", "A woman walks with two standard forearm crutches, both hands occupied by the grips.", "Eine Frau geht mit zwei herkömmlichen Unterarmgehstützen, beide Hände an den Griffen."), t: tr("La conception n'a pas fondamentalement évolué.", "The design hasn't fundamentally changed.", "Das Design hat sich grundlegend nicht verändert."), p: tr("Les béquilles disponibles aujourd'hui reposent sur les mêmes principes depuis des décennies.", "Today's crutches are built on the same principles as decades ago.", "Die heute erhältlichen Krücken beruhen seit Jahrzehnten auf denselben Prinzipien.") },
              ].map((c, i) => (
                <div key={i} className="fade-up card-cream overflow-hidden h-full flex flex-col" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="aspect-[3/2] overflow-hidden" style={{ backgroundColor: WHITE }}>
                    <img src={c.img} alt={c.alt} className="w-full h-full object-cover" loading="lazy" width={600} height={400} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg" style={{ color: INK }}>{c.t}</h3>
                    <p className="mt-3 legende" style={{ color: MUTED }}>{c.p}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* 3 — FONCTIONNALITÉS (SAND) */}
      <section style={{ backgroundColor: SAND }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="titre-section text-center" style={{ color: INK }}>
              {tr("legmio a tout repensé.", "legmio rethought everything.", "legmio hat alles neu gedacht.")}
            </h2>
          </Reveal>
          <div className="mt-12">
            <SpecsStrip />
          </div>
          <div className="mt-12 text-center">
            <Link to={lien("/produit")} className="btn-light btn-light-hover">
              {tr("Découvrir la béquille", "Discover the crutch", "Die Krücke entdecken")} <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4 — USE CASES (WHITE) */}
      <section style={{ backgroundColor: WHITE }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="titre-section text-center max-w-3xl mx-auto" style={{ color: INK }}>
              <span className="hidden md:inline">{tr("À chaque fois que vous en avez besoin.", "Whenever you need it.", "Wann immer Sie sie brauchen.")}</span>
              <span className="md:hidden">{tr(<>À chaque fois<br />que vous en avez besoin.</>, <>Whenever<br />you need it.</>, <>Wann immer<br />Sie sie brauchen.</>)}</span>
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
              <div key={i} className="fade-up carte-survol card-cream p-6 flex flex-col items-start gap-3" style={{ transitionDelay: `${i * 60}ms` }}>
                <div style={{ color: INK }}>{c.icon}</div>
                <h3 className="font-display font-bold text-lg leading-tight" style={{ color: INK }}>{c.t}</h3>
                <p className="legende" style={{ color: MUTED }}>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 5 — TÉMOIGNAGES (SAND) */}
      <section style={{ backgroundColor: SAND }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="titre-section text-center" style={{ color: INK }}>
              {tr("Testée et approuvée.", "Tested and approved.", "Getestet und bewährt.")}
            </h2>
          </Reveal>
          <div className="mt-14">
            <Carousel label={tr("Témoignages", "Testimonials", "Erfahrungsberichte")}>
              {[
                { img: "/pauline.png", n: "Dr Pauline Coignard", p: tr("Médecin MPR · Centre de Kerpape · Présidente APPROCHE · SOFMER", "MPR Physician · Kerpape Centre · President APPROCHE · SOFMER", "MPR-Ärztin · Kerpape Zentrum · Präsidentin APPROCHE · SOFMER"), q: tr("Une béquille qui rend les mains au patient : une grande avancée !", "A crutch that gives patients their hands back: a major step forward!", "Eine Krücke, die dem Patienten die Hände zurückgibt: ein großer Fortschritt!") },
                { img: undefined as string | undefined, n: "Salim", p: tr("Rupture du ligament · 2 mois d'utilisation", "Ligament tear · 2 months of use", "Bänderriss · 2 Monate Nutzung"), q: tr("legmio m'a permis de retrouver une certaine autonomie au quotidien, notamment au travail. J'ai pu me déplacer plus facilement et réaliser seul des tâches simples mais essentielles, comme aller me faire un café :)", "legmio gave me back a real degree of day-to-day independence, especially at work. I could move around more easily and do simple but essential things on my own, like going to make myself a coffee :)", "legmio hat mir im Alltag ein Stück Selbstständigkeit zurückgegeben, vor allem bei der Arbeit. Ich konnte mich leichter bewegen und einfache, aber wichtige Dinge allein erledigen — zum Beispiel mir einen Kaffee holen :)") },
                { img: undefined as string | undefined, n: "Joachim", p: tr("Post-opératoire ménisque · Convalescence à domicile", "Post-operative meniscus · Home recovery", "Postoperativer Meniskus · Genesung zu Hause"), q: tr("Après mon opération du ménisque, legmio m'a permis d'être autonome chez moi pendant toute ma convalescence. Se déplacer, porter des affaires, faire les choses seul — ça change tout quand on est immobilisé.", "After my meniscus surgery, legmio let me stay independent at home throughout my recovery. Moving around, carrying things, doing things on my own — it changes everything when you are immobilised.", "Nach meiner Meniskus-Operation konnte ich dank legmio während meiner ganzen Genesung zu Hause selbstständig bleiben. Sich bewegen, Dinge tragen, alles allein erledigen — das ändert alles, wenn man bewegungsunfähig ist.") },
              ].map((t, i) => (
                <div key={i} className="fade-up card-white p-5 h-full flex flex-col" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="flex items-center gap-4">
                    {t.img && (
                      <img src={t.img} alt={t.n} className="w-16 h-16 rounded-full object-cover shrink-0" loading="lazy" width={64} height={64} />
                    )}
                    <div>
                      <div className="font-bold" style={{ color: INK }}>{t.n}</div>
                      <div className="mention" style={{ color: MUTED }}>{t.p}</div>
                    </div>
                  </div>
                  {/* mt-auto : la citation tombe en bas de carte. Sans cela,
                      celle du Dr Coignard, deux fois plus courte, laissait un
                      tiers de vide sous elle. */}
                  <p className="mt-5 md:mt-auto md:pt-6 italic legende" style={{ color: MUTED }}>"{t.q}"</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* 6 — CRÉDIBILITÉ (WHITE) */}
      <section style={{ backgroundColor: WHITE }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="titre-section text-center max-w-4xl mx-auto" style={{ color: INK }}>
              {tr("Une innovation récompensée.", "An award-winning innovation.", "Eine ausgezeichnete Innovation.")}
            </h2>
          </Reveal>
            {/* Ni cadre ni filet : le contenu tenait sur un tiers de sa carte,
                et un filet aurait ete le seul de son espece sur le site. C'est
                l'espacement qui groupe, comme partout ailleurs. */}
          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
            {[
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6" /><path d="M8.5 14L6 22l6-3 6 3-2.5-8" /></svg>, t: tr("Médaille d'Or", "Gold Medal", "Goldmedaille"), s: "Concours Lépine 2026" },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>, t: tr("Prix de l'Impact", "Impact Award", "Impact-Preis"), s: "Le Média Positif 2026" },
              { icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v6l-4 8a4 4 0 004 4h6a4 4 0 004-4l-4-8V3" /><path d="M9 3h6" /></svg>, t: tr("Soutenu par la recherche", "Backed by Research", "Unterstützt durch die Forschung"), s: "CNRS · Sorbonne · SATT Lutech · BPI" },
            ].map((s, i) => (
              <div key={i} className="fade-up flex flex-col items-center text-center gap-2.5 md:px-4" style={{ transitionDelay: `${i * 60}ms` }}>
                <div style={{ color: INK }}>{s.icon}</div>
                <div className="font-display font-bold text-lg leading-tight" style={{ color: INK }}>{s.t}</div>
                <div className="legende" style={{ color: MUTED }}>{s.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — ILS PARLENT DE NOUS (INK) */}
      <section style={{ backgroundColor: INK }} className="grain relative jonction-haut jonction-bas halo-or px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="titre-section text-center" style={{ color: WHITE }}>
              {tr("Ils parlent de nous.", "They talk about us.", "Sie berichten über uns.")}
            </h2>
          </Reveal>

          <div className="mt-12">
            <Marquee
              label={tr("Médias qui parlent de legmio", "Media covering legmio", "Medien über legmio")}
              seconds={30}
              tone="light"
              rows={[[
                // `h` : hauteur propre a chaque logo. A hauteur egale, un logo
                // empile (CNRS Innovation) parait deux fois plus petit qu'un
                // logo en bandeau (Hacavie).
                { src: "/logoparisien.png", alt: "Le Parisien", h: 46 },
                { src: "/logoTF1.png", alt: "TF1", h: 52 },
                { src: "/logofranceTV2.jpg", alt: "France Télévisions", h: 52 },
                { src: "/mediapositif.png", alt: "Le Média Positif", h: 52 },
                { src: "/logohospimedia.png", alt: "Hospimedia", h: 40 },
                { src: "/logoautonomia.png", alt: "Autonomia", h: 46 },
                { src: "/logoAPF.jpg", alt: "APF France handicap", h: 62 },
                { src: "/logofaireface.jpg", alt: "Faire Face", h: 46 },
                { src: "/logohacavie.png", alt: "Hacavie", h: 44 },
                { src: "/logocnrsinnovation.png", alt: "CNRS Innovation", h: 70 },
              ].map(({ src, alt, h }) => (
                <div key={alt} className="rounded-lg px-6 py-3 flex items-center justify-center" style={{ backgroundColor: WHITE, border: `1px solid ${LINE_INK}`, minWidth: 170, height: 88 }}>
                  <img src={src} alt={alt} className="object-contain" style={{ maxHeight: h, maxWidth: 150 }} loading="lazy" width={150} height={h} />
                </div>
              ))]}
            />
          </div>

          <InstaCards />

        </div>
      </section>

      {/* 8 — WALL OF LOVE (WHITE) */}
      <section style={{ backgroundColor: WHITE }} className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="titre-section text-center" style={{ color: INK }}>
            {tr("Bientôt disponible.", "Coming soon.", "Bald verfügbar.")}
          </h2>
        </div>
        <WallOfLove />
      </section>

      {/* 9 — ROADMAP (SAND) */}
      <section style={{ backgroundColor: SAND }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="titre-section text-center" style={{ color: INK }}>{tr("Où en sommes-nous ?", "Where are we?", "Wo stehen wir?")}</h2>
          </Reveal>
          <Roadmap />
        </div>
      </section>

      {/* 10 — ACTUALITÉ + CTA (WHITE) */}
      <section id="waitlist" style={{ backgroundColor: WHITE }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="titre-section" style={{ color: INK }}>
            {tr(<>Suivez l'actualité<br />de legmio.</>, <>Follow<br />legmio's news.</>, <>Folgen Sie den<br />Neuigkeiten von legmio.</>)}
          </h2>
          <div className="mt-8 flex items-center justify-center gap-6" style={{ color: INK }}>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100"><IconInstagram size={28} /></a>
            <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="opacity-80 hover:opacity-100"><IconTiktok size={28} /></a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100"><IconLinkedin size={28} /></a>
          </div>
          <div className="mt-10"><CTALight /></div>
          <p className="mt-10 text-base" style={{ color: MUTED }}>
            {tr("Professionnel de santé ou distributeur ?", "Healthcare professional or distributor?", "Gesundheitsfachkraft oder Händler?")}
            <br className="sm:hidden" />{" "}
            <a href={lien("/pro")} className="underline" style={{ color: INK }}>{tr("Espace pro", "Pro space", "Fachbereich")} →</a>
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
  const Card = ({ q }: { q: string }) => (
    <div className="rounded-2xl px-6 py-4 shrink-0 max-w-xs" style={{ backgroundColor: SAND, border: `1px solid ${LINE}`, color: INK, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
      <p className="italic legende">"{q}"</p>
    </div>
  );
  return (
    <div className="mt-14">
      <Marquee
        label={tr("Ce qu'on nous écrit", "What people write to us", "Was man uns schreibt")}
        rows={[
          row1.map((q, i) => <Card key={`a${i}`} q={q} />),
          row2.map((q, i) => <Card key={`b${i}`} q={q} />),
        ]}
      />
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
  // Le trait se remplit quand la section entre a l'ecran : la progression
  // se raconte au lieu de s'afficher deja faite.
  const bloc = useRef<HTMLDivElement>(null);
  const [tracee, setTracee] = useState(false);
  useEffect(() => {
    const el = bloc.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setTracee(true); return; }
    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting) { setTracee(true); io.disconnect(); }
    }, { threshold: SEUIL, rootMargin: MARGE_TEMPS_FORT });
    io.observe(el);
    return () => io.disconnect();
  }, []);
    return (
    <div className="mt-16" ref={bloc}>
      <div className="hidden md:block relative pt-16 pb-4">
        <div className="absolute h-px" style={{ left: "10%", right: "10%", top: `calc(4rem + ${CIRCLE / 2}px)`, backgroundColor: LINE }} />
        <div className="absolute h-[2px] ligne-progression" style={{ left: "10%", top: `calc(4rem + ${CIRCLE / 2 - 1}px)`, backgroundColor: INK, width: `${tracee ? progressPct * 0.8 : 0}%` }} />
        <div className="relative grid grid-cols-5 gap-4">
          {steps.map((s, i) => {
            const done = s.state === "done";
            const isCurrent = s.state === "current";
            const upcoming = s.state === "upcoming";
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="h-12 flex items-end justify-center px-2">
                  <div className="legende leading-tight" style={{ color: upcoming ? MUTED : INK, fontWeight: isCurrent ? 700 : 500 }}>{s.t}</div>
                </div>
                <div className="my-3 flex items-center justify-center" style={{ height: CIRCLE + 6 }}>
                  <div
                    className={`rounded-full ${isCurrent ? "etape-active" : ""}`}
                    style={{
                      width: isCurrent ? CIRCLE + 6 : CIRCLE,
                      height: isCurrent ? CIRCLE + 6 : CIRCLE,
                      backgroundColor: (done || isCurrent) ? INK : WHITE,
                      border: `2px solid ${upcoming ? LINE : INK}`,
                      boxShadow: isCurrent ? `0 0 0 5px rgba(255,202,117,0.28)` : "none",
                    }}
                  />
                </div>
                <div className="mention px-2 leading-snug mt-2" style={{ color: upcoming ? MUTED : MUTED, fontWeight: isCurrent ? 600 : 400 }}>{s.s}</div>
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
                backgroundColor: isCurrent || done ? INK : WHITE,
                border: `2px solid ${upcoming ? LINE : INK}`,
              }} />
              <div>
                <div className="legende" style={{ color: upcoming ? MUTED : INK, fontWeight: isCurrent ? 700 : 500 }}>{s.t}</div>
                <div className="mention" style={{ color: upcoming ? MUTED : MUTED }}>{s.s}</div>
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
  // Les vues sont l'argument de cette section : elles se comptent a l'ecran.
  const items = [
    { url: "https://www.instagram.com/reel/DYCL7AGKGrK/", img: "/insta5.jpg", vues: 1, decimales: 0, titre: null, label: tr("de vues", "views", "Aufrufe") },
    { url: "https://www.instagram.com/reel/DX_Qqp9tbvg/", img: "/insta1.jpg", vues: 3.6, decimales: 1, titre: null, label: tr("de vues", "views", "Aufrufe") },
    // Pas de chiffre ici : c'est la chaine qui fait la preuve, l'emission tient
    // la place de la legende. Meme structure que les deux autres cartes.
    { url: "https://www.instagram.com/reel/DYhaBkRov_C/", img: "/insta2.jpg", vues: null, decimales: 0, titre: "France TV", label: "Le Mag de la Santé" },
  ];
  // Meme mecanique que les autres carrousels de contenu du site.
  return (
    <div className="mt-16 max-w-6xl mx-auto">
      <Carousel label={tr("Nos vidéos les plus vues", "Our most watched videos", "Unsere meistgesehenen Videos")}>
        {items.map((r, i) => (
          <InstaCard key={i} r={r} />
        ))}
      </Carousel>
    </div>
  );
}

function InstaCard({ r }: { r: { url: string; img: string; label: string; vues: number | null; decimales: number; titre: string | null } }) {
  const { tr } = useLanguage();
  return (
    <div className="fade-up rounded-2xl overflow-hidden flex flex-col h-full card-soft w-full max-w-[350px] mx-auto">
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5", backgroundColor: INK_SOFT }}>
        <img src={r.img} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]" loading="lazy" width={400} height={500} onError={(e) => (e.currentTarget.style.display = 'none')} />
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Une information forte, sa legende, puis le bouton : les trois cartes
            partagent la meme structure, qu'il s'agisse d'un chiffre ou d'une chaine. */}
        <div>
          <div
            /* Meme calibre pour les trois : la carte France TV etait d'un cran
               plus petite, ce qui la faisait lire comme une anomalie. */
            className="font-display font-bold leading-none text-4xl"
            style={{ color: CTA }}
          >
            {r.vues !== null ? (
              <Compteur valeur={r.vues} suffixe="M" decimales={r.decimales} />
            ) : (
              r.titre
            )}
          </div>
          <div className="mt-1.5 legende" style={{ color: MUTED_INK }}>{r.label}</div>
        </div>
        <a href={r.url} target="_blank" rel="noreferrer" className="btn-outline-dark inline-flex legende mt-auto self-start">
          {tr("Voir sur Instagram", "View on Instagram", "Auf Instagram ansehen")} <IconArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

