import { metaDe } from "@/lib/meta";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IconChevron, IconCheck, IconArrowRight } from "@/components/Icons";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { ProductFeatureGrid } from "@/routes/index";

const NAVY = "#0D0D29";
const WHITE = "#FFFFFF";
const CREAM = "#FAFAF8";
const INK = "#15122E";
const INK_MUTED = "#6B6B6B";
const MUTED_NAVY = "#A89ED0";
const BORDER_LIGHT = "#E8E4DC";
const ACCENT = "#FFCA75";

export const Route = createFileRoute("/produit")({
  head: () => metaDe("fr", "produit"),
  component: Produit,
});

let compteurAccordeon = 0;

function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const [id] = useState(() => `accordeon-${++compteurAccordeon}`);
  return (
    <div className="border-b" style={{ borderColor: BORDER_LIGHT }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full flex justify-between items-center py-4 text-left gap-4"
        style={{ color: INK }}
      >
        <span className="font-semibold">{title}</span>
        <span className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}><IconChevron size={18} /></span>
      </button>
      {/* Contenu replie, pas retire : sans cela il est absent du HTML servi. */}
      <div id={id} role="region" className={`repli ${open ? "repli-ouvert" : ""}`}>
        <div>
          <div className="pb-5 text-sm" style={{ color: INK_MUTED }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

type Review = { title: string; quote: string; name: string; profile: string; date: string; img?: string };

export function Produit() {
  const { tr, hubspotUrl, lien } = useLanguage();
  const gallery = [
    { src: "/bequille.png", alt: tr("La béquille legmio vue de profil.", "The legmio crutch seen from the side.", "Die legmio-Krücke von der Seite.") },
    { src: "/mode-bequille.jpg", alt: tr("Un utilisateur marche avec deux béquilles legmio, les mains posées sur les poignées.", "A user walks with two legmio crutches, hands resting on the grips.", "Ein Nutzer geht mit zwei legmio-Krücken, die Hände auf den Griffen.") },
    { src: "/mode-mains-libres.jpg", alt: tr("Le même utilisateur, les béquilles maintenues par les coudes, se sert un verre à deux mains.", "The same user, crutches held by the elbows, pours a drink using both hands.", "Derselbe Nutzer hält die Krücken mit den Ellbogen und schenkt sich mit beiden Händen ein.") },
  ];
  const [sel, setSel] = useState(0);

  const reviews: Review[] = [
    { img: "/pauline.png", title: tr("Une grande avancée !", "A major step forward!", "Ein großer Fortschritt!"), quote: tr("Une béquille qui rend les mains au patient : une grande avancée !", "A crutch that gives patients their hands back: a major step forward!", "Eine Krücke, die dem Patienten die Hände zurückgibt: ein großer Fortschritt!"), name: "Dr Pauline Coignard", profile: tr("Médecin MPR · Centre de Kerpape · Présidente APPROCHE · SOFMER", "MPR Physician · Kerpape Centre · President APPROCHE · SOFMER", "MPR-Ärztin · Kerpape Zentrum · Präsidentin APPROCHE · SOFMER"), date: tr("Mars 2026", "March 2026", "März 2026") },
    { title: tr("Retrouver une certaine autonomie au quotidien.", "Getting back a real degree of day-to-day independence.", "Ein Stück Selbstständigkeit im Alltag zurückgewinnen."), quote: tr("legmio m'a permis de retrouver une certaine autonomie au quotidien, notamment au travail. J'ai pu me déplacer plus facilement et réaliser seul des tâches simples mais essentielles, comme aller me faire un café :)", "legmio gave me back a real degree of day-to-day independence, especially at work. I could move around more easily and do simple but essential things on my own, like going to make myself a coffee :)", "legmio hat mir im Alltag ein Stück Selbstständigkeit zurückgegeben, vor allem bei der Arbeit. Ich konnte mich leichter bewegen und einfache, aber wichtige Dinge allein erledigen — zum Beispiel mir einen Kaffee holen :)"), name: "Salim", profile: tr("Rupture du ligament · 2 mois d'utilisation", "Ligament tear · 2 months of use", "Bänderriss · 2 Monate Nutzung"), date: tr("Février 2026", "February 2026", "Februar 2026") },
    { title: tr("Ça change tout quand on est immobilisé.", "It changes everything when you are immobilised.", "Das ändert alles, wenn man bewegungsunfähig ist."), quote: tr("Après mon opération du ménisque, legmio m'a permis d'être autonome chez moi pendant toute ma convalescence. Se déplacer, porter des affaires, faire les choses seul — ça change tout quand on est immobilisé.", "After my meniscus surgery, legmio let me stay independent at home throughout my recovery. Moving around, carrying things, doing things on my own — it changes everything when you are immobilised.", "Nach meiner Meniskus-Operation konnte ich dank legmio während meiner ganzen Genesung zu Hause selbstständig bleiben. Sich bewegen, Dinge tragen, alles allein erledigen — das ändert alles, wenn man bewegungsunfähig ist."), name: "Joachim", profile: tr("Post-opératoire ménisque · Convalescence à domicile", "Post-operative meniscus · Home recovery", "Postoperativer Meniskus · Genesung zu Hause"), date: tr("Janvier 2026", "January 2026", "Januar 2026") },
  ];
  const galleryPrev = () => setSel((s) => (s - 1 + gallery.length) % gallery.length);
  const galleryNext = () => setSel((s) => (s + 1) % gallery.length);

  return (
    <div style={{ backgroundColor: CREAM }}>
      {/* SECTION 1 — HERO PRODUIT (CREAM) */}
      <section style={{ backgroundColor: CREAM }} className="px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]" style={{ backgroundColor: WHITE, border: `1px solid ${BORDER_LIGHT}` }}>
              <img src={gallery[sel].src} alt={gallery[sel].alt} className="w-full h-full object-contain" width={900} height={900} />
              <button aria-label="Previous" onClick={galleryPrev} className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: NAVY, color: WHITE }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button aria-label="Next" onClick={galleryNext} className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: NAVY, color: WHITE }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
            <div className="mt-4 flex gap-3 overflow-x-auto overflow-y-hidden" style={{ overscrollBehaviorX: "contain" }}>
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setSel(i)}
                  className="shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition"
                  style={{ borderColor: sel === i ? NAVY : BORDER_LIGHT, backgroundColor: WHITE }}
                  aria-label={g.alt}
                  aria-current={sel === i}
                >
                  <img src={g.src} alt="" className="w-full h-full object-contain" loading="lazy" width={160} height={160} />
                </button>
              ))}
            </div>
          </div>

          <div className="md:sticky md:top-32 md:self-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold" style={{ color: INK }}>
              {tr("Béquille legmio", "legmio crutch", "legmio Krücke")}
            </h1>
            <p className="mt-4 text-base leading-relaxed" style={{ color: INK_MUTED }}>
              {tr(
                "La première béquille ergonomique avec un mode mains libres.",
                "The first ergonomic crutch with a hands-free mode.",
                "Die erste ergonomische Krücke mit einem Freihand-Modus."
              )}
              <br />
              {tr(
                "Plus confortable, elle libère les mains lorsque nécessaire.",
                "More comfortable, it frees your hands when needed.",
                "Komfortabler befreit sie die Hände wenn nötig."
              )}
            </p>
            <div className="mt-4 inline-block px-3 py-1 rounded-full text-xs" style={{ backgroundColor: WHITE, color: INK, border: `1px solid ${BORDER_LIGHT}` }}>
              {tr("Dispositif médical CE Classe I (en cours)", "CE Class I Medical Device (pending)", "CE Medizinprodukt Klasse I (ausstehend)")}
            </div>

            <div className="mt-8">
              <Accordion title={tr("Taille", "Size", "Größe")}>
                {tr("legmio convient aux utilisateurs mesurant entre 1m50 et 1m95, pour un poids jusqu'à 130 kg.", "legmio is suitable for users between 1.50m and 1.95m tall, weighing up to 130 kg.", "legmio ist für Nutzer zwischen 1,50m und 1,95m geeignet, mit einem Gewicht bis zu 130 kg.")}
              </Accordion>
              <Accordion title={tr("Caractéristiques", "Specifications", "Eigenschaften")}>
                <ul className="space-y-2">
                  {[
                    [tr("Poids", "Weight", "Gewicht"), "850g"],
                    [tr("Matériau", "Material", "Material"), tr("Aluminium", "Aluminum", "Aluminium")],
                    [tr("Hauteur réglable", "Adjustable height", "Verstellbare Höhe"), tr("1m10 à 1m40", "1.10m to 1.40m", "1,10m bis 1,40m")],
                    [tr("Pour", "For", "Für"), tr("utilisateurs 1m50 à 1m95", "users 1m50 to 1m95", "Nutzer 1,50m bis 1,95m")],
                    [tr("Charge max", "Max load", "Maximallast"), "130kg"],
                    [tr("Embouts", "Tips", "Aufsätze"), tr("interchangeables 16mm", "interchangeable 16mm", "austauschbar 16mm")],
                    [tr("Assemblage", "Assembly", "Montage"), tr("France", "France", "Frankreich")],
                    [tr("Brevet", "Patent", "Patent"), "FR2411206"],
                    [tr("Certification", "Certification", "Zertifizierung"), tr("CE Classe I en cours · MDR 2017/745", "CE Class I in progress · MDR 2017/745", "CE Klasse I ausstehend · MDR 2017/745")],
                  ].map(([k, v]) => (
                    <li key={k} className="flex justify-between gap-4"><span style={{ color: INK_MUTED }}>{k}</span><span style={{ color: INK }}>{v}</span></li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title={tr("Idéal pour", "Ideal for", "Ideal für")}>
                <ul className="space-y-2">
                  {[
                    tr("Retrouver l'usage complet de ses mains au quotidien", "Regaining full use of your hands", "Vollständige Handnutzung zurückgewinnen"),
                    tr("Réduire les douleurs aux épaules et aux poignets", "Reducing shoulder and wrist pain", "Schulter- und Handgelenkschmerzen reduzieren"),
                    tr("Maintenir son autonomie en famille, au travail, en déplacement", "Maintaining independence in daily life, at work, and with family", "Selbstständigkeit im Alltag, bei der Arbeit und in der Familie erhalten"),
                    tr("Rééducation post-opératoire sans contrainte", "Post-operative recovery without constraints", "Postoperative Genesung ohne Einschränkungen"),
                  ].map((i) => (
                    <li key={i} className="flex gap-2" style={{ color: NAVY }}><IconCheck size={16} /> <span style={{ color: INK_MUTED }}>{i}</span></li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title={tr("Ce qui est inclus", "What's included", "Lieferumfang")}>
                <ul className="space-y-1" style={{ color: INK_MUTED }}>
                  <li>· {tr("1 béquille legmio (disponible pour main droite ou gauche)", "1 legmio crutch (right or left)", "1 legmio Krücke (rechts oder links)")}</li>
                  <li>· {tr("1 embout (remplaçable)", "1 tip (replaceable)", "1 Aufsatz (austauschbar)")}</li>
                  <li>· {tr("1 notice de réglage", "1 adjustment guide", "1 Einstellungsanleitung")}</li>
                  <li>· {tr("Garantie 2 ans", "2-year warranty", "2 Jahre Garantie")}</li>
                </ul>
              </Accordion>

              <a href={hubspotUrl} target="_blank" rel="noreferrer" className="btn-light btn-light-hover w-full mt-8">
                {tr("Je suis intéressé(e)", "I'm interested", "Ich bin interessiert")} <IconArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — DEUX MODES (NAVY) */}
      <section style={{ backgroundColor: NAVY }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: WHITE }}>
              {tr("Deux modes d'utilisation.", "Two modes of use.", "Zwei Nutzungsmodi.")}
            </h2>
            <p className="mt-5 text-base max-w-xl mx-auto text-center" style={{ color: MUTED_NAVY }}>
              {tr(
                "Tu marches normalement, et tu libères les mains lorsque nécessaire.",
                "You walk normally, and free your hands when needed.",
                "Du gehst normal und machst die Hände frei, wenn nötig."
              )}
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                img: "/mode-bequille.jpg",
                n: "01",
                alt: tr(
                  "Un utilisateur marche avec deux béquilles legmio, les mains posées sur les poignées.",
                  "A user walks with two legmio crutches, hands resting on the grips.",
                  "Ein Nutzer geht mit zwei legmio-Krücken, die Hände auf den Griffen."
                ),
                t: tr("Mode classique", "Classic mode", "Klassischer Modus"),
                p: tr(
                  "Les appuis sont répartis sur l'avant et l'arrière du bras.",
                  "The load is spread across the front and the back of the arm.",
                  "Die Last verteilt sich auf die Vorder- und Rückseite des Arms."
                ),
              },
              {
                img: "/mode-mains-libres.jpg",
                n: "02",
                alt: tr(
                  "Le même utilisateur, les béquilles maintenues par les coudes, se sert un verre à deux mains.",
                  "The same user, crutches held by the elbows, pours a drink using both hands.",
                  "Derselbe Nutzer hält die Krücken mit den Ellbogen und schenkt sich mit beiden Händen ein."
                ),
                t: tr("Mode mains libres", "Hands-free mode", "Freihand-Modus"),
                p: tr(
                  "L'appui passe sur le coude : les deux mains redeviennent disponibles.",
                  "The support shifts to the elbow: both hands become available again.",
                  "Die Stütze wandert zum Ellbogen: Beide Hände werden wieder frei."
                ),
              },
            ].map((m, i) => (
              <figure key={i} className="card-soft overflow-hidden w-full max-w-[340px] mx-auto">
                <div className="w-full overflow-hidden" style={{ aspectRatio: "9/16" }}>
                  <img src={m.img} alt={m.alt} className="w-full h-full object-cover" loading="lazy" width={900} height={1600} />
                </div>
                <figcaption className="p-6">
                  <div className="text-xs font-bold tracking-[0.18em]" style={{ color: ACCENT }}>{m.n}</div>
                  <h3 className="mt-2 font-display font-bold text-xl leading-tight" style={{ color: WHITE }}>{m.t}</h3>
                  <p className="mt-2 text-sm" style={{ color: MUTED_NAVY }}>{m.p}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURES GRID (WHITE) */}
      <section id="features" style={{ backgroundColor: WHITE }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: INK }}>{tr("Fonctionnalités", "Features", "Funktionen")}</h2>
          </Reveal>
          <div className="mt-10">
            <ProductFeatureGrid />
          </div>
        </div>
      </section>

      {/* SECTION 4 — TÉMOIGNAGES (CREAM) */}
      <section id="reviews" style={{ backgroundColor: CREAM }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: INK }}>{tr("Témoignages", "Testimonials", "Erfahrungsberichte")}</h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="card-white p-5 flex flex-col">
                <h3 className="font-display font-bold text-lg leading-snug" style={{ color: INK }}>{r.title}</h3>
                <p className="mt-2 text-sm" style={{ color: INK_MUTED }}>{r.quote}</p>
                {/* mt-auto : les trois signatures s'alignent en bas, quelle que
                    soit la longueur de la citation. */}
                <div className="mt-auto pt-5 flex items-center gap-3">
                  {r.img && (
                    <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" width={48} height={48} />
                  )}
                  <div className="text-sm">
                    <div className="font-bold" style={{ color: INK }}>{r.name}</div>
                    <div style={{ color: INK_MUTED }}>{r.profile}{r.profile ? " · " : ""}{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 5 — FAQ PRODUIT (WHITE) */}
      <section style={{ backgroundColor: WHITE }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl" style={{ color: INK }}>{tr("Questions fréquentes", "Frequently asked questions", "Häufig gestellte Fragen")}</h2>
            <a href={lien("/faq")} className="mt-4 inline-block text-sm underline" style={{ color: INK }}>{tr("Voir toutes les questions", "See all questions", "Alle Fragen ansehen")}</a>
          </div>
          <div className="max-w-3xl mx-auto">
            {[
              [tr("legmio est-elle réglable ?", "Is legmio adjustable?", "Ist legmio verstellbar?"), tr("Oui. Deux points de réglage indépendants : la poignée et l'appui coude. Universelle de 1m50 à 1m95.", "Yes. Two independent adjustment points: grip and elbow rest. Universal from 1m50 to 1m95.", "Ja. Zwei unabhängige Einstellpunkte: Griff und Ellbogenstütze. Universell von 1,50m bis 1,95m.")],
              [tr("Faut-il de la force dans les mains ?", "Do I need hand strength?", "Braucht man Kraft in den Händen?"), tr("Un peu, mais la poignée réduit le besoin en force de préhension.", "A little, but the grip reduces the need for gripping strength.", "Ein wenig, aber der Griff verringert den Bedarf an Greifkraft.")],
              [tr("Combien de temps pour s'adapter ?", "How long does it take to adapt?", "Wie lange dauert die Eingewöhnung?"), tr("Environ 1 à 2 semaines. La plupart des utilisateurs trouvent leur rythme en quelques jours.", "About 1 to 2 weeks. Most users find their rhythm within a few days.", "Etwa 1 bis 2 Wochen. Die meisten Nutzer finden innerhalb weniger Tage ihren Rhythmus.")],
              [tr("Est-elle remboursée ?", "Is it reimbursed?", "Wird sie erstattet?"), tr("Ce que nous visons : un remboursement partiel sur prescription médicale (LPPR), puis un remboursement spécifique. En contexte emploi RQTH, nous visons une prise en charge via l'Agefiph ou le FIPHFP.", "What we are aiming for: partial reimbursement on medical prescription (LPPR), then specific reimbursement. In an RQTH employment context, we are aiming for coverage via Agefiph or FIPHFP.", "Unser Ziel: eine teilweise Erstattung auf ärztliche Verordnung (LPPR), anschließend eine spezifische Erstattung. Im RQTH-Beschäftigungskontext streben wir eine Übernahme über Agefiph oder FIPHFP an.")],
              [tr("Quel est le prix ?", "What's the price?", "Wie hoch ist der Preis?"), tr("Le prix sera communiqué au lancement.", "The price will be announced at launch.", "Der Preis wird zum Marktstart bekannt gegeben.")],
              [tr("Où est-elle fabriquée ?", "Where is it made?", "Wo wird sie hergestellt?"), tr("Conçue et assemblée en France. Structure en aluminium.", "Designed and assembled in France. Aluminum frame.", "Entworfen und montiert in Frankreich. Aluminiumstruktur.")],
              [tr("Convient-elle aux utilisateurs d'une seule béquille ?", "Suitable for single-crutch users?", "Geeignet für Nutzer einer einzigen Krücke?"), tr("Oui. legmio est disponible à l'unité, droite ou gauche.", "Yes. legmio is sold individually, right or left.", "Ja. legmio ist einzeln erhältlich, rechts oder links.")],
            ].map(([q, a], i) => (
              <Accordion key={i} title={q as string}>{a}</Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA FINAL (NAVY) */}
      <section style={{ backgroundColor: NAVY }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl" style={{ color: WHITE }}>
            {tr(<>Prêt à retrouver<br />tes mains libres ?</>, <>Ready to get<br />your hands back?</>, <>Bereit deine<br />Hände zurückzubekommen?</>)}
          </h2>
          <div className="mt-8">
            <a href={hubspotUrl} target="_blank" rel="noreferrer" className="btn-dark btn-dark-hover inline-flex">
              {tr("Je suis intéressé(e)", "I'm interested", "Ich bin interessiert")} <IconArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
