import { metaDe } from "@/lib/meta";
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { MeetingsEmbed } from "@/components/MeetingsEmbed";

export const Route = createFileRoute("/pro")({
  head: () => metaDe("fr", "pro"),
  component: ProPage,
});

const NAVY = "#0D0D29";
const WHITE = "#FFFFFF";
const CREAM = "#FAFAF8";
const INK_MUTED = "#6B6B6B";
const MUTED_NAVY = "#A89ED0";
const BORDER_LIGHT = "#E8E4DC";
const INK = "#15122E";
const ACCENT = "#FFCA75";

const MEETING_URL = "https://meetings-eu1.hubspot.com/benjamin-rajjou";

export function ProPage() {
  const { tr, lien } = useLanguage();

  // Le dispositif n'est pas encore marque CE et ne sera pas disponible avant
  // fin 2027 : cette page ne vend rien. Elle donne a un prescripteur de quoi
  // se faire un avis, et lui propose d'entrer maintenant dans la boucle.
  const preuves = [
    {
      t: tr("Née de la recherche publique", "Born from public research", "Aus der öffentlichen Forschung"),
      d: tr(
        "Travaux du CNRS/ISIR (Sorbonne Université), projet ANR ASSISTMOV, programme PEPR O2R.",
        "Work by CNRS/ISIR (Sorbonne University), ANR ASSISTMOV project, PEPR O2R programme.",
        "Arbeiten des CNRS/ISIR (Sorbonne Université), Projekt ANR ASSISTMOV, Programm PEPR O2R."
      ),
    },
    {
      t: tr("Brevet déposé", "Patent filed", "Patent angemeldet"),
      d: tr("FR2411206, octobre 2024.", "FR2411206, October 2024.", "FR2411206, Oktober 2024."),
    },
    {
      t: tr("Évaluée en centre", "Assessed in rehabilitation centres", "In Zentren bewertet"),
      d: tr(
        "Par des médecins MPR de plusieurs centres SMR en France.",
        "By physical and rehabilitation medicine physicians in several French rehabilitation centres.",
        "Von Fachärztinnen und Fachärzten für Physikalische und Rehabilitative Medizin in mehreren französischen Zentren."
      ),
    },
    {
      t: tr("Médaille d'Or", "Gold Medal", "Goldmedaille"),
      d: tr("Concours Lépine 2026, et Prix de l'Impact du Média Positif.",
            "Concours Lépine 2026, and Le Média Positif's Impact Award.",
            "Concours Lépine 2026 und Impact-Preis von Le Média Positif."),
    },
  ];

  const caracteristiques = [
    [tr("Poids", "Weight", "Gewicht"), "850 g"],
    [tr("Charge maximale", "Maximum load", "Maximallast"), "130 kg"],
    [tr("Taille utilisateur", "User height", "Körpergröße"), "1,50 m – 1,95 m"],
    [tr("Hauteur réglable", "Adjustable height", "Verstellbare Höhe"), "1,10 m – 1,40 m"],
    [tr("Structure", "Frame", "Struktur"), tr("Aluminium", "Aluminium", "Aluminium")],
    [tr("Embouts", "Tips", "Aufsätze"), tr("interchangeables 18/19 mm", "interchangeable 18/19 mm", "austauschbar 18/19 mm")],
    [tr("Réglages", "Adjustments", "Einstellungen"), tr("poignée et appui coude", "handle and elbow rest", "Griff und Ellenbogenstütze")],
    [tr("Pièces d'usure", "Wear parts", "Verschleißteile"), tr("embout, poignée, sangle remplaçables", "tip, handle and strap replaceable", "Aufsatz, Griff und Gurt austauschbar")],
  ];

  const indications = [
    tr("Fractures, entorses, suites opératoires des membres inférieurs.",
       "Fractures, sprains, post-operative care of the lower limbs.",
       "Frakturen, Verstauchungen, postoperative Versorgung der unteren Gliedmaßen."),
    tr("Pathologies chroniques réduisant l'appui podal.",
       "Chronic conditions reducing weight-bearing.",
       "Chronische Erkrankungen mit eingeschränkter Belastbarkeit."),
    tr("Compatible avec le port d'un plâtre ou d'une orthèse.",
       "Compatible with a cast or an orthosis.",
       "Kompatibel mit Gips oder Orthese."),
    tr("Amputation d'un membre inférieur, avec ou sans prothèse, sous réserve d'un appui controlatéral suffisant.",
       "Lower-limb amputation, with or without a prosthesis, provided contralateral support is sufficient.",
       "Amputation eines Beines, mit oder ohne Prothese, sofern die kontralaterale Belastung ausreicht."),
    tr("Faiblesse de préhension : la poignée réduit nettement la force nécessaire.",
       "Reduced grip strength: the handle clearly lowers the force needed.",
       "Eingeschränkte Greifkraft: Der Griff senkt den nötigen Kraftaufwand deutlich."),
  ];

  return (
    <div style={{ backgroundColor: CREAM }}>
      <section className="grain relative jonction-bas px-4 sm:px-6 py-20 md:py-28" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="titre-page leading-tight" style={{ color: WHITE }}>
            {tr(
              "Vous découvrez legmio avant sa mise sur le marché.",
              "You are discovering legmio before it reaches the market.",
              "Sie entdecken legmio vor der Markteinführung."
            )}
          </h1>
          <p className="sous-titre mt-6" style={{ color: MUTED_NAVY }}>
            {tr(
              "Professionnel de santé, centre de rééducation, distributeur : voici où en est le projet, ce que la béquille change pour vos patients, et comment entrer dans la boucle dès maintenant.",
              "Healthcare professional, rehabilitation centre, distributor: here is where the project stands, what the crutch changes for your patients, and how to get involved now.",
              "Gesundheitsfachkraft, Reha-Zentrum, Händler: Hier finden Sie den Stand des Projekts, was die Krücke für Ihre Patienten verändert, und wie Sie schon jetzt dabei sind."
            )}
          </p>
        </div>
      </section>

      {/* Le calendrier, annonce d'emblee et sans detour : c'est la premiere
          question d'un professionnel, et la reponse honnete est « pas encore ». */}
      <section className="px-4 sm:px-6 py-16 md:py-20" style={{ backgroundColor: WHITE }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="titre-section text-center" style={{ color: INK }}>
            {tr("Où en est le projet", "Where the project stands", "Stand des Projekts")}
          </h2>
          <div className="mt-10 space-y-5">
            {[
              [tr("Aujourd'hui", "Today", "Heute"),
               tr("Industrialisation en cours. Des prototypes sont utilisés en conditions réelles.",
                  "Industrialisation under way. Prototypes are in use in real conditions.",
                  "Industrialisierung läuft. Prototypen sind im realen Einsatz.")],
              [tr("Été 2027", "Summer 2027", "Sommer 2027"),
               tr("Marquage CE classe I visé, conformément au règlement (UE) 2017/745.",
                  "CE class I marking targeted, under Regulation (EU) 2017/745.",
                  "CE-Kennzeichnung Klasse I angestrebt, gemäß Verordnung (EU) 2017/745.")],
              [tr("Fin 2027", "Late 2027", "Ende 2027"),
               tr("Première mise à disposition, en direct puis via nos revendeurs partenaires.",
                  "First availability, directly and then through our reseller partners.",
                  "Erste Verfügbarkeit, direkt und anschließend über unsere Vertriebspartner.")],
            ].map(([q, r]) => (
              <div key={q as string} className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-5 border-b" style={{ borderColor: BORDER_LIGHT }}>
                <div className="sm:w-52 shrink-0 font-display font-bold" style={{ color: INK }}>{q}</div>
                <div className="text-sm" style={{ color: INK_MUTED }}>{r}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-center" style={{ color: INK_MUTED }}>
            {tr(
              "Ces échéances sont celles que nous visons. Nous les tenons à jour ici plutôt que de les promettre ailleurs.",
              "These are the milestones we are aiming for. We keep them up to date here rather than promising them elsewhere.",
              "Dies sind die angestrebten Termine. Wir halten sie hier aktuell, statt sie anderswo zu versprechen."
            )}
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-20" style={{ backgroundColor: CREAM }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="titre-section text-center" style={{ color: INK }}>
            {tr("Ce que legmio change", "What legmio changes", "Was legmio verändert")}
          </h2>
          <div className="mt-8 space-y-4 text-sm leading-relaxed" style={{ color: INK_MUTED }}>
            <p>{tr(
              "Sur une canne anglaise, l'appui se concentre sur la paume et le poignet. Les zones de passage des nerfs sont comprimées, et la contrainte remonte vers l'épaule. C'est le motif de plainte le plus fréquent chez vos patients en appui prolongé.",
              "On a standard forearm crutch, the load concentrates on the palm and wrist. The areas where the nerves run are compressed, and the strain travels up to the shoulder. This is the most frequent complaint among patients using crutches over long periods.",
              "Bei einer gewöhnlichen Unterarmgehstütze konzentriert sich die Last auf Handfläche und Handgelenk. Die Nervenbahnen werden komprimiert, und die Belastung wandert zur Schulter. Das ist die häufigste Beschwerde bei längerer Nutzung."
            )}</p>
            <p>{tr(
              "legmio répartit les appuis sur l'avant et l'arrière du bras et dégage les zones nerveuses. En mode mains libres, l'appui passe au coude : le patient garde la béquille et récupère ses deux mains — pour ouvrir une porte, porter un plateau, tenir un enfant.",
              "legmio spreads the load across the front and the back of the arm and clears the nerve pathways. In hands-free mode, support shifts to the elbow: the patient keeps the crutch and gets both hands back — to open a door, carry a tray, hold a child.",
              "legmio verteilt die Last auf Vorder- und Rückseite des Arms und entlastet die Nervenbahnen. Im Freihand-Modus wandert die Stütze zum Ellbogen: Die Krücke bleibt am Arm, beide Hände werden frei — zum Öffnen einer Tür, Tragen eines Tabletts, Halten eines Kindes."
            )}</p>
            <p>{tr(
              "La prise en main est immédiate : legmio s'utilise comme une canne anglaise dès les premiers pas. Le mode mains libres demande quelques heures à quelques jours d'habitude.",
              "There is nothing to relearn: from the first steps, legmio works like an ordinary forearm crutch. The hands-free mode takes a few hours to a few days to become second nature.",
              "Es gibt nichts umzulernen: Ab dem ersten Schritt funktioniert legmio wie eine gewöhnliche Unterarmgehstütze. Der Freihand-Modus braucht wenige Stunden bis wenige Tage."
            )}</p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-20" style={{ backgroundColor: WHITE }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="titre-appui" style={{ color: INK }}>
              {tr("Indications", "Indications", "Indikationen")}
            </h2>
            <p className="mt-3 text-sm" style={{ color: INK_MUTED }}>
              {tr("Les mêmes que pour une béquille classique.", "The same as for a standard crutch.", "Dieselben wie bei einer gewöhnlichen Krücke.")}
            </p>
            <ul className="mt-5 space-y-3 text-sm" style={{ color: INK_MUTED }}>
              {indications.map((i) => (
                <li key={i} className="pl-4 border-l-2" style={{ borderColor: ACCENT }}>{i}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="titre-appui" style={{ color: INK }}>
              {tr("Caractéristiques", "Specifications", "Technische Daten")}
            </h2>
            <ul className="mt-5 space-y-2 text-sm">
              {caracteristiques.map(([k, v]) => (
                <li key={k as string} className="flex justify-between gap-4 pb-2 border-b" style={{ borderColor: BORDER_LIGHT }}>
                  <span style={{ color: INK_MUTED }}>{k}</span>
                  <span style={{ color: INK }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-20" style={{ backgroundColor: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="titre-section text-center" style={{ color: INK }}>
            {tr("Sur quoi cela repose", "What this rests on", "Worauf das beruht")}
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {preuves.map((p) => (
              <div key={p.t} className="rounded-2xl p-6" style={{ backgroundColor: WHITE, border: `1px solid ${BORDER_LIGHT}` }}>
                <div className="font-display font-bold text-lg" style={{ color: INK }}>{p.t}</div>
                <div className="mt-2 text-sm" style={{ color: INK_MUTED }}>{p.d}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-center" style={{ color: INK_MUTED }}>
            {tr("Le détail technique est dans la ", "Full technical detail is in the ", "Alle technischen Angaben finden Sie in den ")}
            <a href={lien("/faq")} className="underline" style={{ color: NAVY }}>{tr("foire aux questions", "FAQ", "häufigen Fragen")}</a>
            {tr(" — prise en charge LPP, Agefiph et FIPHFP comprises.", " — including LPP, Agefiph and FIPHFP coverage.", " — einschließlich LPP-, Agefiph- und FIPHFP-Kostenübernahme.")}
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-20" style={{ backgroundColor: WHITE }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="titre-section text-center" style={{ color: INK }}>
            {tr("Échanger avec nous", "Talk to us", "Sprechen Sie mit uns")}
          </h2>
          <p className="mt-4 text-center text-sm max-w-2xl mx-auto" style={{ color: INK_MUTED }}>
            {tr(
              "Trente minutes en visio, avec le fondateur. Que vous vouliez faire tester la béquille à vos patients, en discuter pour votre centre, ou parler distribution : c'est le moment où votre avis pèse le plus, avant que le produit soit figé.",
              "Thirty minutes by video, with the founder. Whether you want your patients to try the crutch, discuss it for your centre, or talk distribution: this is when your input carries the most weight, before the product is finalised.",
              "Dreißig Minuten per Video, mit dem Gründer. Ob Sie die Krücke von Ihren Patienten testen lassen, sie für Ihr Zentrum besprechen oder über den Vertrieb sprechen möchten: Jetzt zählt Ihre Rückmeldung am meisten, bevor das Produkt feststeht."
            )}
          </p>
          <div className="mt-10 rounded-2xl overflow-hidden" style={{ backgroundColor: WHITE, border: `1px solid ${BORDER_LIGHT}` }}>
            <MeetingsEmbed url={MEETING_URL} />
          </div>
          <p className="text-center mt-6 text-sm" style={{ color: INK_MUTED }}>
            {tr("Une question ?", "Any question?", "Eine Frage?")}{" "}
            <a href="mailto:contact@legmio.com" style={{ color: NAVY }} className="underline">contact@legmio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
