import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IconChevron } from "@/components/Icons";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "legmio — Blog" },
      { name: "description", content: "Conseils et ressources : autonomie, rééducation, emploi & handicap, vie quotidienne." },
      { property: "og:title", content: "legmio — Blog" },
      { property: "og:description", content: "Autonomie · Rééducation · Emploi & handicap · Vie quotidienne." },
    ],
  }),
  component: Blog,
});

const NAVY = "#120B3B";
const WHITE = "#FFFFFF";
const CREAM = "#FAFAF8";
const INK = "#1A1040";
const INK_MUTED = "#6B6B6B";
const MUTED_NAVY = "#A89ED0";
const BORDER_LIGHT = "#E8E4DC";
const ACCENT = "#F5C842";

const genesisFr = `En 2020, j'ai subi une lourde opération pour retirer le cancer des os qui rongeait mon bassin. Elle fut un succès — et le début d'un nouveau parcours, à la fois difficile et joyeux.

La maladie m'a beaucoup pris. Mais elle m'a aussi appris à mesurer ce qui compte.

L'une des choses les plus dures : ne pas pouvoir porter mon fils quand il avait un ou deux ans. Je devais négocier pour qu'il me suive de son plein gré.

Peu à peu, le sentiment d'impuissance est devenu familier. Et il n'existait aucune solution adaptée.

Alors j'en ai inventé une.

En tant que roboticien, j'ai d'abord créé des prototypes motorisés. Puis j'ai réalisé qu'un dispositif passif pouvait suffire.

Après de nombreuses itérations : legmio. Une béquille qui libère la main.

Je l'utilise quotidiennement depuis plus d'un an. Je peux porter mon fils, ma fille, faire les courses sans sac à dos, porter mon plateau à la cantine.

Le gain d'autonomie est énorme.

Et f*ck cancer.`;

const genesisEn = `In 2020, I underwent major surgery to remove the bone cancer that had invaded my pelvis. It was a success — and the start of a new journey, both hard and joyful.

The illness took a lot from me. But it also taught me what matters.

One of the hardest things: not being able to carry my son when he was one or two years old.

Bit by bit, the feeling of helplessness became familiar. And no suitable solution existed.

So I invented one.

As a roboticist, I first built motorized prototypes. Then I realized a passive device could be enough.

After many iterations: legmio. A crutch that frees the hand.

I've used it daily for over a year. I can carry my son and daughter, shop without a backpack, carry my tray at lunch.

The gain in independence is huge.

And f*ck cancer.`;

type Article = {
  id: string;
  cover: string;
  tag: string;
  tagEn: string;
  titleFr: string;
  titleEn: string;
  excerptFr: string;
  excerptEn: string;
  bodyFr: string;
  bodyEn: string;
  date: string;
};

const articles: Article[] = [
  {
    id: "genese",
    cover: "/usecase-quotidien.png",
    tag: "Genèse",
    tagEn: "Origin",
    titleFr: '"F*ck cancer. Et si on inventait la béquille qu\'on n\'avait jamais faite ?"',
    titleEn: '"F*ck cancer. What if we invented the crutch no one ever built?"',
    excerptFr: "En 2020, j'ai subi une lourde opération pour retirer le cancer des os…",
    excerptEn: "In 2020, I underwent major surgery for bone cancer…",
    bodyFr: genesisFr,
    bodyEn: genesisEn,
    date: "Juin 2026",
  },
  {
    id: "article-1",
    cover: "/photo-blog-1.jpg",
    tag: "Innovation",
    tagEn: "Innovation",
    titleFr: "Pourquoi la béquille n'a (presque) pas changé depuis 30 ans",
    titleEn: "Why the crutch has (barely) changed in 30 years",
    excerptFr: "Les innovations portent sur la poignée, les matériaux, le réglage. La structure, elle, reste la même.",
    excerptEn: "Innovations touch the grip, the materials, the adjustments. The structure stays the same.",
    bodyFr: `Les principaux axes de développement dans le domaine des béquilles médicales se concentrent sur trois zones : l'amélioration de la prise en main, avec des poignées ergonomiques en mousse, silicone ou gel pour réduire les douleurs aux mains et aux poignets ; la réduction des chocs, avec des systèmes d'amortissement limitant l'impact sur les bras et les épaules ; et l'ajustabilité, avec des béquilles réglables en hauteur et adaptées à différentes morphologies.

Côté matériaux, l'évolution porte sur des matériaux plus légers — fibre de carbone, aluminium aéronautique — pour réduire la fatigue physique, avec une résistance accrue pour supporter un usage quotidien intense.

Ce sont des ajustements réels, mais qui portent sur la même structure depuis longtemps : la béquille reste un objet qu'on tient, avec un appui concentré sous l'aisselle ou sur la main et le poignet selon le modèle.

legmio a été conçu à l'ISIR (Sorbonne Université / CNRS), dans le cadre du projet ANR ASSISTMOV, à partir d'une approche différente : redistribuer l'appui sur l'avant-bras plutôt que sur la seule main ou l'aisselle, ce qui protège les nerfs et libère la main, tout en travaillant aussi la poignée elle-même, avec une mousse d'amortissement qui réduit les contraintes à la prise en main. Une innovation biomécanique protégée par un brevet déposé en octobre 2024, distinguée par la médaille d'or au Concours Lépine 2025.`,
    bodyEn: `The main development axes in medical crutches focus on three areas: improving grip with ergonomic foam, silicone or gel handles to reduce hand and wrist pain; shock absorption to limit impact on arms and shoulders; and adjustability with height-adjustable models fitting varied body sizes.

Materials evolve too — carbon fiber, aeronautical aluminum — to reduce physical fatigue while supporting intensive daily use.

These are real adjustments, but they act on the same structure the crutch has had for decades: an object you hold, with load concentrated under the armpit or on the hand and wrist.

legmio was designed at ISIR (Sorbonne Université / CNRS), within the ANR ASSISTMOV project, from a different approach: redistribute the load onto the forearm rather than the hand or armpit alone, which protects the nerves and frees the hand — while also reworking the grip itself with damping foam. A biomechanical innovation protected by a patent filed in October 2024, awarded the gold medal at the Concours Lépine 2025.`,
    date: "Juillet 2026",
  },
  {
    id: "article-2",
    cover: "/photo-blog-2.webp",
    tag: "Chiffres",
    tagEn: "Data",
    titleFr: "1,5 million de Français sous béquilles chaque année : le chiffre que personne ne regarde",
    titleEn: "1.5 million French people on crutches each year — the number no one looks at",
    excerptFr: "Fractures, blessures sportives, chirurgie, troubles neurologiques — qui béquille vraiment en France ?",
    excerptEn: "Fractures, sports injuries, surgery, neurological conditions — who actually uses crutches in France?",
    bodyFr: `Chaque année en France, environ 1,5 million de personnes se voient prescrire des béquilles. Les pathologies et blessures les plus fréquemment associées à ces prescriptions incluent les fractures osseuses (jambe, genou, cheville, pied), les blessures sportives (entorses, rupture du ligament croisé antérieur ou du ménisque), les blessures de tendons ou ligaments (tendon d'Achille, tendinite), les suites de chirurgie du bas du corps, et certains troubles neurologiques (sclérose en plaques, rééducation après un AVC, paralysie cérébrale).

Le segment des adultes domine largement le marché. Le secteur compte plus de 1 800 établissements, services et centres de médecine physique et de réadaptation en France, avec une moyenne de 65 lits et places par établissement, aux côtés de plus de 20 000 pharmacies.

C'est ce terrain que legmio adresse : un usage quotidien et prolongé, avec un dispositif pensé pour ne pas nécessiter de poigne — une main affaiblie ou une prise fragile n'empêche pas son utilisation — et pour libérer la main pendant la marche, à un poids de 850g.`,
    bodyEn: `Each year in France, around 1.5 million people are prescribed crutches. The most common conditions include bone fractures (leg, knee, ankle, foot), sports injuries (sprains, ACL or meniscus tears), tendon or ligament injuries (Achilles, tendinitis), lower-body post-surgery, and some neurological conditions (multiple sclerosis, post-stroke rehab, cerebral palsy).

The adult segment dominates the market. The sector includes more than 1,800 physical medicine and rehab centers in France, alongside 20,000+ pharmacies.

This is the ground legmio addresses: daily, prolonged use, with a device designed not to require grip strength — a weakened hand does not prevent its use — and to free the hand while walking, at 850g.`,
    date: "Juillet 2026",
  },
  {
    id: "article-3",
    cover: "/photo-blog-3.jpg",
    tag: "Marché",
    tagEn: "Market",
    titleFr: "Béquille axillaire, canadienne, tripode : ce qui existe sur le marché",
    titleEn: "Axillary, forearm, tripod: what's on the market",
    excerptFr: "Tour d'horizon des grandes familles de béquilles et de ce qui les distingue vraiment.",
    excerptEn: "An overview of crutch families and what really sets them apart.",
    bodyFr: `Le marché des béquilles médicales se structure autour de plusieurs grandes catégories.

La béquille axillaire se glisse sous l'aisselle. Ajustable en hauteur, souvent en aluminium ou en bois, elle offre une bonne stabilité et cible surtout les enfants et adultes en situation de handicap temporaire.

La béquille canadienne (ou béquille d'avant-bras) propose un manche ergonomique avec appui sur l'avant-bras, léger et durable. Elle cible aussi bien les handicaps temporaires que permanents. C'est le modèle le plus répandu en Europe, apprécié pour son ergonomie, sa maniabilité et son confort.

Les béquilles tripode et quadripode proposent une base élargie à trois ou quatre pieds pour plus de stabilité, avec un revêtement antidérapant pour le quadripode. Elles ciblent surtout les personnes âgées en situation de handicap permanent.

Il existe aussi des béquilles enfant, plus légères et colorées, des béquilles sportives, à la conception ergonomique adaptée à une activité modérée, des béquilles pliantes, faciles à transporter, et des béquilles mains libres, fixées directement à la jambe pour libérer les mains, adaptées aux blessures temporaires.`,
    bodyEn: `The market for medical crutches breaks down into a few major categories.

The axillary crutch slides under the armpit. Height-adjustable, often aluminum or wood, it offers good stability and mainly targets children and adults with temporary disability.

The forearm crutch (Canadian) has an ergonomic handle with forearm support — light and durable. It suits temporary and permanent disability alike. It's the most common model in Europe, valued for ergonomics, handling, and comfort.

Tripod and quadripod crutches offer a wider three- or four-legged base for more stability, with anti-slip coatings for the quadripod. They mostly target elderly users with permanent disability.

There are also child crutches (lighter, colorful), sport crutches (ergonomic, moderate activity), folding crutches (portable), and hands-free crutches strapped to the leg to free the hands — suited to temporary injuries.`,
    date: "Juillet 2026",
  },
  {
    id: "article-4",
    cover: "/photo-blog-4.jpg",
    tag: "Ergonomie",
    tagEn: "Ergonomics",
    titleFr: "La vraie raison pour laquelle votre béquille vous fait mal sous l'aisselle",
    titleEn: "The real reason your crutch hurts under the armpit",
    excerptFr: "Ce n'est pas une question d'habitude. C'est une question de mécanique.",
    excerptEn: "It's not a matter of habit. It's mechanics.",
    bodyFr: `Parmi les facteurs limitant l'usage prolongé des béquilles, on retrouve les risques et blessures associés à une utilisation continue — en particulier la gêne au niveau de la zone d'appui sous l'aisselle, propre aux béquilles axillaires. C'est un compromis connu de ce type de béquille : bonne stabilité pour un usage temporaire, mais inconfort qui s'installe sur la durée.

C'est l'un des éléments qui explique la préférence, en Europe notamment, pour les béquilles d'avant-bras : le point d'appui se déplace de l'aisselle vers le bras et la main, ce qui limite ce problème spécifique tout en sollicitant différemment le poignet.

C'est ce compromis que legmio a directement retravaillé : en concentrant l'appui sur l'avant-bras plutôt que sur l'aisselle ou la main, la conception protège les nerfs et redistribue les contraintes, sans exiger de force de préhension. Une innovation validée par plus de 6 médecins MPR et testée en usage réel sur plus d'un mois avant son lancement.`,
    bodyEn: `Among the factors limiting long-term crutch use are the risks and injuries linked to continuous use — especially discomfort under the armpit, specific to axillary crutches. It's a known trade-off: good stability for temporary use, but discomfort that sets in over time.

That's one reason Europe leans toward forearm crutches: the load shifts from armpit to arm and hand, which limits this specific issue while stressing the wrist differently.

That trade-off is exactly what legmio reworked: by concentrating the load on the forearm rather than the armpit or the hand, the design protects the nerves and redistributes the load, without requiring grip strength. An innovation validated by 6+ PM&R physicians and tested in real use for over a month before launch.`,
    date: "Juillet 2026",
  },
  {
    id: "article-5",
    cover: "/photo-blog-5.jpg",
    tag: "Convalescence",
    tagEn: "Recovery",
    titleFr: "Entorse, ligaments, tendinite : pourquoi votre béquille freine votre convalescence",
    titleEn: "Sprain, ligaments, tendinitis: why your crutch slows recovery",
    excerptFr: "Les béquilles classiques vous immobilisent les mains au moment où vous en avez le plus besoin.",
    excerptEn: "Classic crutches lock your hands at the moment you need them most.",
    bodyFr: `Parmi les pathologies et blessures fréquemment associées à la prescription de béquilles : les blessures sportives, de l'entorse à la déchirure du ligament croisé antérieur ou du ménisque, ainsi que les blessures de tendons ou ligaments comme la rupture du tendon d'Achille ou la tendinite. Ce sont des motifs de convalescence temporaire, souvent chez des personnes par ailleurs actives.

Le marché propose déjà un segment dédié aux béquilles sportives, à la conception ergonomique et légère, adaptée à une activité modérée avec soutien.

legmio s'inscrit dans cette même logique d'usage, avec un avantage concret pour une personne en rééducation : les mains restent libres pour porter un sac, utiliser son téléphone ou simplement se reposer sans lâcher l'appui — pour une convalescence qui n'impose pas de mettre la vie active entre parenthèses.`,
    bodyEn: `Among the injuries commonly leading to a crutch prescription: sports injuries — sprains, ACL and meniscus tears — plus tendon and ligament injuries like Achilles rupture and tendinitis. These are temporary-recovery cases, often in otherwise active people.

The market already includes a sport-crutch segment: ergonomic, lightweight, suited to moderate activity with support.

legmio fits that same use pattern, with a concrete advantage during rehab: hands stay free to carry a bag, use a phone or simply rest without letting go of the support — recovery that doesn't require putting active life on hold.`,
    date: "Juillet 2026",
  },
];

function ArticleCard({ a }: { a: Article }) {
  const { tr, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const title = lang === "en" ? a.titleEn : a.titleFr;
  const excerpt = lang === "en" ? a.excerptEn : a.excerptFr;
  const body = lang === "en" ? a.bodyEn : a.bodyFr;
  const tag = lang === "en" ? a.tagEn : a.tag;
  return (
    <article className="card-soft overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-video md:aspect-auto md:h-full overflow-hidden" style={{ backgroundColor: BG_ALT }}>
          <img src={a.cover} alt={title} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = "/usecase-quotidien.png")} />
        </div>
        <div className="p-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "#F5C842", color: "#FFF" }}>{tag}</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-display font-bold" style={{ color: TEXT }}>{title}</h2>
          <p className="mt-4 text-sm" style={{ color: MUTED }}>{excerpt}</p>
          <button onClick={() => setOpen(!open)} className="mt-4 inline-flex items-center gap-1 text-sm font-bold" style={{ color: "#F5C842" }}>
            {open ? tr("Réduire", "Collapse") : tr("Lire l'article", "Read article")}
            <span className={`transition-transform ${open ? "rotate-180" : ""}`}><IconChevron size={16} /></span>
          </button>
          {open && (
            <div className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: "#333" }}>
              {body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
              {a.id === "genese" && (
                <div className="pt-4 border-t" style={{ borderColor: BORDER }}>
                  <div className="font-bold" style={{ color: TEXT }}>Nicolas Perrin-Gilbert</div>
                  <div style={{ color: MUTED }}>{tr("Co-fondateur & CEO · Chercheur CNRS, ISIR Sorbonne Université", "Co-founder & CEO · CNRS researcher, ISIR Sorbonne Université")}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function Blog() {
  const { tr } = useLanguage();
  return (
    <div style={{ backgroundColor: BG }}>
      <section style={{ backgroundColor: BG_ALT }} className="px-4 sm:px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl" style={{ color: TEXT }}>{tr("Conseils & ressources", "Advice & resources")}</h1>
        <p className="mt-4" style={{ color: MUTED }}>{tr("Autonomie · Rééducation · Emploi & handicap · Vie quotidienne", "Independence · Rehab · Work & disability · Daily life")}</p>
      </section>

      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          {articles.map((a) => <ArticleCard key={a.id} a={a} />)}
        </div>
      </section>
    </div>
  );
}
