import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IconChevron } from "@/components/Icons";

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

function Placeholder({ label, aspect = "aspect-video" }: { label: string; aspect?: string }) {
  return (
    <div
      className={`w-full ${aspect} flex items-center justify-center text-xs uppercase tracking-wide`}
      style={{ background: "linear-gradient(135deg, #F5F5F5, #E8E8E8)", color: "#999" }}
    >{label}</div>
  );
}

const genesisBody = `En 2020, j'ai subi une lourde opération pour retirer le cancer des os qui rongeait mon bassin. Elle fut un succès — et le début d'un nouveau parcours, à la fois difficile et joyeux.

La maladie m'a beaucoup pris. Mais elle m'a aussi appris à mesurer ce qui compte.

L'une des choses les plus dures : ne pas pouvoir porter mon fils quand il avait un ou deux ans. Je devais négocier pour qu'il me suive de son plein gré. Disons qu'il est coriace en négociation.

Peu à peu, le sentiment d'impuissance est devenu familier. Et il n'existait aucune solution adaptée.

Alors j'en ai inventé une.

En tant que roboticien, j'ai d'abord créé des prototypes motorisés. Puis j'ai réalisé qu'un dispositif passif pouvait suffire — et c'est là que les choses sont devenues vraiment intéressantes.

Après de nombreuses itérations : legmio. Une béquille qui libère la main.

Je l'utilise quotidiennement depuis plus d'un an. Je peux porter mon fils — même s'il a grandi — et sa petite sœur, arrivée entre-temps. Je fais les courses sans sac à dos. Je porte mon plateau à la cantine.

Le gain d'autonomie est énorme.

Et f*ck cancer.`;

const article2 = `Deux béquilles, une même promesse — les mains libres. Mais des réalités très différentes.

L'iWalk est conçue exclusivement pour les blessures sous le genou. Fracture de cheville, chirurgie du pied, rupture du tendon d'Achille — si votre blessure est dans cette zone et que vous avez un bon équilibre, l'iWalk peut être une solution temporaire efficace. Mais elle pose des conditions strictes : il faut pouvoir tenir sur une jambe pendant 30 secondes, monter les escaliers sans main courante, avoir une condition physique moyenne ou supérieure. Les personnes âgées, en situation de handicap chronique ou avec des pathologies neurologiques ne peuvent généralement pas l'utiliser.

legmio part d'un principe différent. C'est une béquille avant-bras repensée de fond en comble — pas un substitut temporaire, mais un équipement de vie. Elle s'adresse à tous ceux qui béquillent, quelle que soit la localisation de la blessure ou du handicap, quel que soit l'âge, quelle que soit la durée. L'appui se fait sur l'avant-bras, pas sur le genou — ce qui la rend compatible avec les pathologies au genou, à la hanche, au bassin, les maladies chroniques, les handicaps permanents.

En résumé :
- iWalk : blessure sous le genou uniquement, bon équilibre requis, solution temporaire
- legmio : toutes pathologies, tous profils, court terme ou long terme, quotidien et travail

Si vous cherchez une solution pour quelques semaines après une fracture de cheville et que vous êtes en bonne condition physique — l'iWalk peut convenir. Si vous béquillez au quotidien, depuis des mois ou des années, ou si votre blessure est au-dessus du genou — legmio est conçue pour vous.`;

const article3 = `Il existe plusieurs types de béquilles sur le marché. Tour d'horizon pour choisir celle qui correspond à votre situation.

Les béquilles axillaires (ou béquilles classiques) — les béquilles qui passent sous les bras. Très répandues, peu coûteuses. Elles posent deux problèmes majeurs : elles compriment les nerfs axillaires (risque de paralysie temporaire du bras) et elles mobilisent entièrement les deux mains. Recommandées uniquement pour de très courtes durées.

Les béquilles avant-bras (ou béquilles anglaises) — l'amélioration standard. L'appui se fait sur l'avant-bras plutôt que sous l'aisselle. Moins dangereuses pour les nerfs, mais les mains restent occupées. Après plusieurs semaines ou mois, les douleurs aux épaules, poignets et coudes s'accumulent.

L'iWalk — une béquille mains libres pour les blessures sous le genou uniquement. Efficace pour une fracture de cheville chez quelqu'un en bonne condition physique. Inadaptée aux blessures au-dessus du genou, aux personnes âgées, aux handicaps chroniques.

legmio — une béquille avant-bras repensée qui libère complètement la main. L'appui est redistribué sur l'avant-bras entier grâce à un système ergonomique breveté, ce qui protège les poignets, les épaules et les nerfs. Compatible avec toutes les pathologies et tous les profils. Conçue par des chercheurs du CNRS et de l'ISIR Sorbonne Université pour durer dans le temps.

Quel type de béquille pour quelle situation :
- Quelques jours post-opératoire : béquilles axillaires (court terme uniquement)
- Quelques semaines, blessure sous le genou, bonne condition physique : iWalk
- Plusieurs mois ou années, toutes pathologies : béquilles anglaises classiques ou legmio (recommandé)
- Handicap permanent, maladie chronique, maintien en emploi : legmio`;

const articles = [
  { cat: "Comparatif", title: "legmio vs iWalk : quelle béquille mains libres choisir selon votre situation ?", img: "legmio vs iWalk", body: article2 },
  { cat: "Comparatif", title: "Béquilles classiques, béquilles anglaises, iWalk, legmio : comment choisir ?", img: "Comparatif complet", body: article3 },
  { cat: "Autonomie", title: "Comment choisir ses béquilles quand on béquille au quotidien", img: "Autonomie · quotidien", body: "Article à venir." },
  { cat: "Emploi & handicap", title: "Béquilles et maintien en emploi : ce que vous pouvez demander à votre employeur", img: "Emploi & handicap", body: "Article à venir." },
];

function Blog() {
  const [openGenesis, setOpenGenesis] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <section style={{ backgroundColor: "#F5F5F5" }} className="px-4 sm:px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl" style={{ color: "#111" }}>Conseils & ressources</h1>
        <p className="mt-4" style={{ color: "#666" }}>Autonomie · Rééducation · Emploi & handicap · Vie quotidienne</p>
      </section>

      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Featured article — Genèse */}
          <article className="card-soft overflow-hidden mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Placeholder label="Nicolas — Laboratoire ISIR" aspect="aspect-video md:aspect-auto md:h-full" />
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "#111", color: "#FFF" }}>Genèse</span>
                <h2 className="mt-4 text-2xl md:text-3xl font-display font-bold" style={{ color: "#111" }}>
                  "F*ck cancer. Et si on inventait la béquille qu'on n'avait jamais faite ?"
                </h2>
                <p className="mt-4 text-sm" style={{ color: "#666" }}>
                  En 2020, j'ai subi une lourde opération pour retirer le cancer des os qui rongeait mon bassin…
                </p>
                <button onClick={() => setOpenGenesis(!openGenesis)} className="mt-4 inline-flex items-center gap-1 text-sm font-bold" style={{ color: "#111" }}>
                  {openGenesis ? "Réduire" : "Lire l'article"}
                  <span className={`transition-transform ${openGenesis ? "rotate-180" : ""}`}><IconChevron size={16} /></span>
                </button>
                {openGenesis && (
                  <div className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: "#333" }}>
                    {genesisBody.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
                    <div className="pt-4 border-t" style={{ borderColor: "#EEE" }}>
                      <div className="font-bold" style={{ color: "#111" }}>Nicolas Perrin-Gilbert</div>
                      <div style={{ color: "#666" }}>Co-fondateur & CEO · Chercheur CNRS, ISIR Sorbonne Université</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <article key={i} className="card-soft overflow-hidden flex flex-col">
                <Placeholder label={a.img} />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "#F5F5F5", color: "#111" }}>{a.cat}</span>
                  <h3 className="mt-4 text-lg font-display font-bold leading-snug flex-1" style={{ color: "#111" }}>{a.title}</h3>
                  <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="mt-4 self-start text-sm font-bold inline-flex items-center gap-1" style={{ color: "#111" }}>
                    {openIdx === i ? "Réduire" : "Lire"}
                    <span className={`transition-transform ${openIdx === i ? "rotate-180" : ""}`}><IconChevron size={16} /></span>
                  </button>
                  {openIdx === i && (
                    <div className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: "#333" }}>
                      {a.body.split("\n\n").map((p, k) => <p key={k}>{p}</p>)}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
