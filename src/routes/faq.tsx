import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IconChevron } from "@/components/Icons";
import { useLanguage } from "@/lib/i18n";

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

type Item = { q: [string, string]; a: [string, string] };
type Theme = { title: [string, string]; items: Item[] };

const dup = (s: string): [string, string] => [s, s];

const themes: Theme[] = [
  {
    title: dup("Morphologie utilisateur"),
    items: [
      { q: dup("Quelle est la taille et le poids maximum supportés par legmio ?"), a: dup("legmio convient aux utilisateurs mesurant entre 1m50 et 1m95, pour un poids jusqu'à 130 kg. Des travaux sont en cours pour élargir ce spectre.") },
      { q: dup("Comment régler legmio à ma taille ?"), a: dup("La béquille se règle manuellement à deux niveaux — la poignée et l'appui coude — pour s'adapter à votre taille.") },
      { q: dup("legmio est-elle utilisable par des enfants ?"), a: dup("legmio est adaptée aux utilisateurs mesurant au minimum 1m50.") },
    ],
  },
  {
    title: dup("Caractéristiques de la béquille"),
    items: [
      { q: dup("Quel est le poids de legmio ?"), a: dup("850 grammes.") },
      { q: dup("Quelle est la taille de la béquille ?"), a: dup("La béquille mesure entre 1m10 et 1m40, réglable manuellement au niveau de la poignée et de l'appui coude.") },
      { q: dup("Dans quelles matières legmio est-elle fabriquée ?"), a: dup("La structure est en aluminium. La poignée est en nylon renforcé (GF30) avec revêtement TPU et mousse nitrile pour le confort. Le tissu d'appui est synthétique avec laminage TPU. La sangle est synthétique, les attaches en velcro.") },
      { q: dup("Les embouts sont-ils remplaçables ?"), a: dup("Oui. legmio est livrée avec un embout standard en TPU, interchangeable avec les embouts du marché (diamètre 16mm).") },
    ],
  },
  {
    title: dup("Embouts"),
    items: [
      { q: dup("L'embout de legmio est-il interchangeable ?"), a: dup("Oui, très facilement et sans outil. legmio est compatible avec les embouts standards du marché de 16mm de diamètre.") },
      { q: dup("Quel embout pour ne pas glisser ?"), a: dup("L'embout caoutchouc standard convient dans la plupart des situations. Pour plus d'accroche (extérieur, sol mouillé), le Flexyfoot reste en contact permanent avec le sol et offre jusqu'à 50 % d'adhérence supplémentaire par rapport à un embout classique.") },
      { q: dup("legmio peut-elle tenir debout seule ?"), a: dup("Oui, avec un embout trépied stabilisateur compatible 16mm. Un quart de tour suffit pour basculer entre mode marche et mode debout — ainsi la béquille tient seule lors des pauses sans nécessiter de support.") },
      { q: dup("Quand changer l'embout ?"), a: dup("Dès les premiers signes d'usure. En usage quotidien, comptez environ tous les 3 à 6 mois.") },
    ],
  },
  {
    title: dup("Amortissement"),
    items: [
      { q: dup("legmio amortit-elle les chocs ?"), a: dup("Oui, via deux niveaux : une mousse intégrée à la poignée absorbe les vibrations à la prise en main, et l'embout Flexyfoot (en option) ajoute un amortissement au sol via son système de soufflet flexible.") },
      { q: dup("La béquille est-elle confortable sur la durée ?"), a: dup("La mousse de poignée réduit les contraintes au niveau du poignet. La redistribution des zones d'appui limite la fatigue du bras et de l'épaule par rapport à une béquille classique.") },
    ],
  },
  {
    title: dup("Livraison internationale"),
    items: [
      { q: dup("legmio est-elle disponible à l'international ?"), a: dup("Oui. Vous pouvez commander depuis votre pays directement sur notre site. Les frais de douane et taxes locales éventuels sont à votre charge à la réception.") },
    ],
  },
  {
    title: dup("Preuves et certification"),
    items: [
      { q: dup("legmio est-elle un dispositif médical certifié ?"), a: dup("legmio est en cours de certification dispositif médical classe I CE, conformément au Règlement (UE) 2017/745.") },
      { q: dup("legmio est-elle issue de la recherche scientifique ?"), a: dup("Oui. legmio est née des travaux du CNRS/ISIR (Sorbonne Université) dans le cadre du projet ANR ASSISTMOV (programme PEPR O2R), dédié à la mobilité et à l'assistance au mouvement.") },
      { q: dup("legmio est-elle brevetée ?"), a: dup("Oui. legmio fait l'objet d'un brevet déposé en octobre 2024 (FR2411206).") },
      { q: dup("legmio a-t-elle été testée par des professionnels de santé ?"), a: dup("Oui. legmio a été évaluée par des médecins MPR (Médecine Physique et de Réadaptation) de différents centres SMR en France.") },
      { q: dup("legmio a-t-elle été récompensée ?"), a: dup("Oui. legmio a remporté la médaille d'or au Concours Lépine 2026, ainsi que le Prix de l'Impact du Média Positif.") },
    ],
  },
  {
    title: dup("SAV et garantie"),
    items: [
      { q: dup("Comment fonctionne le service après-vente à l'international ?"), a: dup("Notre SAV opère depuis la France. Tout retour ou échange se fait par voie postale internationale, aux frais de l'acheteur.") },
      { q: dup("Peut-on commander des pièces détachées ou des embouts de remplacement ?"), a: dup("Oui.") },
    ],
  },
  {
    title: dup("Tester legmio"),
    items: [
      { q: dup("Peut-on tester legmio avant d'acheter ?"), a: dup("Oui, chez nos différents revendeurs physiques.") },
    ],
  },
  {
    title: dup("Usage & activité"),
    items: [
      { q: dup("Peut-on courir avec legmio ?"), a: dup("Oui. Des utilisateurs ont déjà réalisé des courses entre 6 et 8 km/h sur des distances d'environ 5 km, sans difficulté.") },
      { q: dup("Peut-on utiliser legmio en extérieur / sur terrain irrégulier ?"), a: dup("Oui. L'embout interchangeable permet d'adapter legmio à différents types de sols. Le Flexyfoot (compatible 16mm) est particulièrement recommandé pour l'extérieur et les sols irréguliers.") },
      { q: dup("Peut-on monter des escaliers avec legmio ?"), a: dup("Oui.") },
      { q: dup("legmio est-elle adaptée à un usage quotidien prolongé ?"), a: dup("Oui. La mousse nitrile de la poignée et la structure aluminium légère (850g) sont conçues pour un confort sur la durée.") },
      { q: dup("legmio est-elle utilisable en cas de faiblesse ou perte de force dans les mains ?"), a: dup("Oui. legmio ne nécessite pas de poigne ni de capacité à fermer la main — un simple appui du poignet suffit.") },
      { q: dup("legmio est-elle utilisable en cas d'amputation d'un membre inférieur, avec ou sans prothèse ?"), a: dup("Oui dans les deux cas. legmio nécessite uniquement un appui podal partiel côté controlatéral. Avec prothèse : legmio se positionne côté valide pour décharger le côté prothétique. À valider avec votre médecin MPR ou prothésiste selon le niveau d'amputation. Sans prothèse : utilisable notamment en post-op ou hors appareillage, sous réserve d'un appui controlatéral suffisant.") },
      { q: dup("Pour quels types de pathologies legmio est-elle recommandée ?"), a: dup("legmio convient aux mêmes indications que les béquilles classiques : fractures, entorses, suites opératoires des membres inférieurs, pathologies chroniques réduisant l'appui podal, ou tout contexte nécessitant un soulagement partiel ou total d'un membre inférieur.") },
      { q: dup("Combien de temps faut-il pour s'adapter à legmio ?"), a: dup("La plupart des utilisateurs s'adaptent en 1 à 2 semaines. Comme toute aide à la marche, une période de prise en main est normale avant d'en tirer le plein bénéfice.") },
      { q: dup("legmio est-elle compatible avec un plâtre ou une orthèse ?"), a: dup("Oui, legmio est compatible avec le port d'un plâtre ou d'une orthèse.") },
    ],
  },
  {
    title: dup("Fabrication et origine"),
    items: [
      { q: dup("Où est fabriquée et assemblée legmio ?"), a: dup("Les pièces en plastique injecté sont fabriquées en France, la structure aluminium en Chine. L'assemblage final est réalisé en France.") },
    ],
  },
  {
    title: dup("Remboursement et prise en charge"),
    items: [
      { q: dup("legmio est-elle remboursée par la Sécurité Sociale ?"), a: dup("Une prise en charge partielle est prévue sur prescription médicale, sur la base de la nomenclature béquille (LPP), entre 12,20€ et 18,29€.") },
      { q: dup("Ma mutuelle peut-elle compléter le remboursement ?"), a: dup("Oui, selon votre contrat. Vous pouvez également vous rapprocher d'une équipe locale d'accompagnement aides techniques (EqLAAT) pour une évaluation et une aide au montage PCH/MDPH.") },
      { q: dup("Existe-t-il une prise en charge dans le cadre professionnel ?"), a: dup("Oui. En contexte emploi, legmio peut être prise en charge jusqu'à 90% via l'Agefiph (secteur privé, sous condition RQTH) ou le FIPHFP (fonction publique), avec un reste à charge quasi nul.") },
    ],
  },
  {
    title: dup("Commande et prix"),
    items: [
      { q: dup("Quel est le prix de legmio ?"), a: dup("legmio sera très probablement disponible au prix de 150€ TTC.") },
      { q: dup("Où acheter legmio ?"), a: dup("Directement sur legmio.com ou auprès de nos futurs revendeurs partenaires.") },
      { q: dup("Quels sont les délais de livraison ?"), a: dup("Livraison standard en 3 à 5 jours ouvrés. Une option express 24-48h sera disponible.") },
      { q: dup("Quels sont les frais de livraison ?"), a: dup("La livraison sera a priori gratuite pour toute commande en France métropolitaine.") },
      { q: dup("Est-il possible de louer legmio ?"), a: dup("La location est en cours de réflexion avec nos revendeurs/distributeurs physiques.") },
    ],
  },
  {
    title: dup("Entretien"),
    items: [
      { q: dup("Comment nettoyer legmio ?"), a: dup("Un nettoyage à l'eau savonneuse avec un chiffon humide suffit pour l'ensemble de la béquille. Évitez l'immersion et les produits abrasifs. La structure aluminium et les pièces plastique TPU/nylon supportent un essuyage régulier. Le tissu synthétique peut être nettoyé avec un chiffon légèrement humide.") },
      { q: dup("Quelles pièces sont remplaçables ?"), a: dup("Les embouts, les poignées et les sangles sont remplaçables. Elles seront disponibles directement sur notre site ou auprès de nos revendeurs agréés.") },
      { q: dup("Pourquoi avoir conçu legmio avec des pièces interchangeables ?"), a: dup("La plupart des béquilles sont conçues comme des produits jetables — dès qu'une pièce s'use, c'est l'ensemble qui est remplacé. Chez legmio, le choix inverse a été fait dès la conception : chaque composant d'usure (embout, sangle, poignée) est remplaçable séparément, ce qui prolonge la durée de vie du produit, réduit le coût global pour l'utilisateur et limite les déchets.") },
    ],
  },
];

function Faq() {
  const { lang, tr } = useLanguage();
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <section className="px-4 sm:px-6 py-20">
        <h1 className="text-4xl sm:text-5xl text-center" style={{ color: "#111" }}>
          {tr("Tout ce que tu veux savoir.", "Everything you want to know.")}
        </h1>
      </section>
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-10">
          {themes.map((th, ti) => (
            <div key={ti}>
              <h2 className="text-xl mb-2 font-display font-bold" style={{ color: "#111" }}>{th.title[lang === "en" ? 1 : 0]}</h2>
              <div>
                {th.items.map((it, ii) => {
                  const key = `${ti}-${ii}`;
                  const isOpen = open === key;
                  const idx = lang === "en" ? 1 : 0;
                  return (
                    <div key={ii} className="border-b" style={{ borderColor: "#EEEEEE" }}>
                      <button onClick={() => setOpen(isOpen ? null : key)} className="w-full flex justify-between items-center py-4 text-left" style={{ color: "#111" }}>
                        <span>{it.q[idx]}</span>
                        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}><IconChevron size={18} /></span>
                      </button>
                      {isOpen && <div className="pb-4 text-sm" style={{ color: "#666" }}>{it.a[idx]}</div>}
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
