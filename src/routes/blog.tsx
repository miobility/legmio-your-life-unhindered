import { metaDe, SITE_URL } from "@/lib/meta";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IconChevron } from "@/components/Icons";
import { useLanguage, cheminDe } from "@/lib/i18n";

export const Route = createFileRoute("/blog")({
  head: () => metaDe("fr", "blog"),
  component: Blog,
});

const NAVY = "#0D0D29";
const WHITE = "#FFFFFF";
const CREAM = "#FAFAF8";
const INK = "#15122E";
const INK_MUTED = "#6B6B6B";
const MUTED_NAVY = "#A89ED0";
const BORDER_LIGHT = "#E8E4DC";
const ACCENT = "#FFCA75";

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
  tagDe: string;
  titleFr: string;
  titleEn: string;
  titleDe: string;
  excerptFr: string;
  excerptEn: string;
  bodyFr: string;
  bodyEn: string;
  date: string;
};

const articles: Article[] = [
  {
    id: "genese",
    cover: "/usecase-quotidien.jpg",
    tag: "Genèse",
    tagEn: "Origin",
    tagDe: "Geschichte",
    titleFr: '"F*ck cancer. Et si on inventait la béquille qu\'on n\'avait jamais faite ?"',
    titleEn: '"F*ck cancer. What if we invented the crutch no one ever built?"',
    titleDe: '"F*ck Cancer. Was, wenn wir die Krücke erfinden würden, die es nie gab?"',
    excerptFr: "En 2020, j'ai subi une lourde opération pour retirer le cancer des os…",
    excerptEn: "In 2020, I underwent major surgery for bone cancer…",
    bodyFr: genesisFr,
    bodyEn: genesisEn,
    date: "Juin 2026",
  },
];

function ArticleCard({ a }: { a: Article }) {
  const { tr, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const title = lang === "en" ? a.titleEn : lang === "de" ? a.titleDe : a.titleFr;
  const excerpt = lang === "en" ? a.excerptEn : a.excerptFr;
  const body = lang === "en" ? a.bodyEn : a.bodyFr;
  const tag = lang === "en" ? a.tagEn : lang === "de" ? a.tagDe : a.tag;
  return (
    <article className="card-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-video md:aspect-auto md:h-full overflow-hidden" style={{ backgroundColor: CREAM }}>
          <img src={a.cover} alt={title} className="w-full h-full object-cover" loading="lazy" width={600} height={400} onError={(e) => (e.currentTarget.src = "/usecase-quotidien.jpg")} />
        </div>
        <div className="p-8">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: ACCENT, color: NAVY }}>{tag}</span>
          <h2 className="titre-section mt-4 font-display font-bold" style={{ color: INK }}>{title}</h2>
          <p className="mt-4 text-sm" style={{ color: INK_MUTED }}>{excerpt}</p>
          <button onClick={() => setOpen(!open)} className="mt-4 inline-flex items-center gap-1 text-sm font-bold" style={{ color: NAVY }}>
            {open ? tr("Réduire", "Collapse", "Zuklappen") : tr("Lire l'article", "Read article", "Artikel lesen")}
            <span className={`transition-transform ${open ? "rotate-180" : ""}`}><IconChevron size={16} /></span>
          </button>
          {/* Le corps reste dans le HTML : replie, pas retire. */}
          <div className={`repli ${open ? "repli-ouvert" : ""}`}>
           <div>
            <div className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: INK_MUTED }}>
              {lang === "de" && (
                <div className="rounded-xl p-4" style={{ backgroundColor: CREAM, color: INK }}>
                  Dieser Artikel ist derzeit nur auf Französisch verfügbar. Deutsche Version folgt in Kürze.
                </div>
              )}
              {body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
              {a.id === "genese" && (
                <div className="pt-4 border-t" style={{ borderColor: BORDER_LIGHT }}>
                  <div className="font-bold" style={{ color: INK }}>Nicolas Perrin-Gilbert</div>
                  <div style={{ color: INK_MUTED }}>{tr("Co-fondateur & CEO · Chercheur CNRS, ISIR Sorbonne Université", "Co-founder & CEO · CNRS researcher, ISIR Sorbonne Université", "Mitgründer & CEO · CNRS-Forscher, ISIR Sorbonne Université")}</div>
                </div>
              )}
            </div>
           </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Blog() {
  const { tr, lang } = useLanguage();
  // Le blog ne declarait rien : ni article, ni auteur. Or c'est la page qui
  // rattache legmio a une personne reelle et a ses travaux — exactement ce
  // qu'un moteur cherche pour reconnaitre une entite.
  const nicolas = {
    "@type": "Person",
    "@id": `${SITE_URL}/#nicolas`,
    name: "Nicolas Perrin-Gilbert",
    jobTitle: tr("Co-fondateur & CEO, chercheur CNRS", "Co-founder & CEO, CNRS researcher", "Mitgruender & CEO, CNRS-Forscher"),
    affiliation: [
      { "@type": "Organization", name: "CNRS" },
      { "@type": "Organization", name: "ISIR, Sorbonne Universite" },
      { "@type": "Organization", "@id": `${SITE_URL}/#organization` },
    ],
    url: `${SITE_URL}${cheminDe(lang, "blog")}`,
  };
  const donneesBlog = {
    "@context": "https://schema.org",
    "@graph": [
      nicolas,
      ...articles.map((a) => ({
        "@type": "Article",
        "@id": `${SITE_URL}${cheminDe(lang, "blog")}#${a.id}`,
        headline: lang === "en" ? a.titleEn : lang === "de" ? a.titleDe : a.titleFr,
        description: lang === "en" ? a.excerptEn : a.excerptFr,
        image: `${SITE_URL}${a.cover}`,
        datePublished: "2026-06-01",
        author: { "@id": `${SITE_URL}/#nicolas` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: lang,
      })),
    ],
  };
  return (
    <div style={{ backgroundColor: WHITE }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesBlog) }} />
      <section style={{ backgroundColor: NAVY }} className="px-4 sm:px-6 py-20 md:py-28 text-center">
        <h1 className="titre-page" style={{ color: WHITE }}>{tr("L'histoire de legmio", "The legmio story", "Die Geschichte von legmio")}</h1>
        <p className="sous-titre mt-4" style={{ color: MUTED_NAVY }}>{tr("Pourquoi cette béquille existe.", "Why this crutch exists.", "Warum es diese Krücke gibt.")}</p>
      </section>

      <section className="px-4 sm:px-6 py-20 md:py-28" style={{ backgroundColor: WHITE }}>
        <div className="max-w-6xl mx-auto space-y-8">
          {articles.map((a) => <ArticleCard key={a.id} a={a} />)}
        </div>
      </section>
    </div>
  );
}
