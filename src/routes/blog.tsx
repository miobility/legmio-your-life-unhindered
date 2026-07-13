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

function Placeholder({ label, aspect = "aspect-video" }: { label: string; aspect?: string }) {
  return (
    <div
      className={`w-full ${aspect} flex items-center justify-center text-xs uppercase tracking-wide`}
      style={{ background: "linear-gradient(135deg, #F5F5F5, #E8E8E8)", color: "#999" }}
    >{label}</div>
  );
}

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

function Blog() {
  const { tr, lang } = useLanguage();
  const [openGenesis, setOpenGenesis] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const articles = [
    {
      cat: tr("Comparatif", "Comparison"),
      title: tr(
        "legmio vs iWalk : quelle béquille mains libres choisir selon votre situation ?",
        "legmio vs iWalk: which hands-free crutch fits your situation?"
      ),
      img: "legmio vs iWalk",
      body: tr(
        "Deux béquilles, une même promesse — les mains libres. Mais des réalités très différentes. L'iWalk est conçue exclusivement pour les blessures sous le genou. legmio part d'un principe différent — une béquille avant-bras repensée de fond en comble, pour tous ceux qui béquillent, quelle que soit la localisation ou la durée.",
        "Two crutches, one promise — hands free. But very different realities. iWalk is designed exclusively for below-knee injuries. legmio takes a different approach — a fully redesigned forearm crutch for anyone on crutches, whatever the injury or duration."
      ),
    },
    {
      cat: tr("Comparatif", "Comparison"),
      title: tr(
        "Béquilles classiques, béquilles anglaises, iWalk, legmio : comment choisir ?",
        "Classic crutches, forearm crutches, iWalk, legmio: how to choose?"
      ),
      img: "Comparatif complet",
      body: tr(
        "Tour d'horizon pour choisir la béquille adaptée à votre situation, entre béquilles axillaires, béquilles anglaises, iWalk et legmio.",
        "A full overview to pick the right crutch — axillary crutches, forearm crutches, iWalk, and legmio."
      ),
    },
    {
      cat: tr("Autonomie", "Independence"),
      title: tr("Comment choisir ses béquilles quand on béquille au quotidien", "How to choose crutches when you use them daily"),
      img: "Autonomie · quotidien",
      body: tr("Article à venir.", "Coming soon."),
    },
    {
      cat: tr("Emploi & handicap", "Work & disability"),
      title: tr("Béquilles et maintien en emploi : ce que vous pouvez demander à votre employeur", "Crutches and staying at work: what you can ask your employer"),
      img: "Emploi & handicap",
      body: tr("Article à venir.", "Coming soon."),
    },
  ];

  const genesisBody = lang === "en" ? genesisEn : genesisFr;

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <section style={{ backgroundColor: "#F5F5F5" }} className="px-4 sm:px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl" style={{ color: "#111" }}>{tr("Conseils & ressources", "Advice & resources")}</h1>
        <p className="mt-4" style={{ color: "#666" }}>{tr("Autonomie · Rééducation · Emploi & handicap · Vie quotidienne", "Independence · Rehab · Work & disability · Daily life")}</p>
      </section>

      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <article className="card-soft overflow-hidden mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Placeholder label={tr("Nicolas — ISIR", "Nicolas — ISIR")} aspect="aspect-video md:aspect-auto md:h-full" />
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "#111", color: "#FFF" }}>{tr("Genèse", "Origin")}</span>
                <h2 className="mt-4 text-2xl md:text-3xl font-display font-bold" style={{ color: "#111" }}>
                  {tr('"F*ck cancer. Et si on inventait la béquille qu\'on n\'avait jamais faite ?"', '"F*ck cancer. What if we invented the crutch no one ever built?"')}
                </h2>
                <p className="mt-4 text-sm" style={{ color: "#666" }}>
                  {tr("En 2020, j'ai subi une lourde opération pour retirer le cancer des os…", "In 2020, I underwent major surgery for bone cancer…")}
                </p>
                <button onClick={() => setOpenGenesis(!openGenesis)} className="mt-4 inline-flex items-center gap-1 text-sm font-bold" style={{ color: "#111" }}>
                  {openGenesis ? tr("Réduire", "Collapse") : tr("Lire l'article", "Read article")}
                  <span className={`transition-transform ${openGenesis ? "rotate-180" : ""}`}><IconChevron size={16} /></span>
                </button>
                {openGenesis && (
                  <div className="mt-6 space-y-4 text-sm leading-relaxed" style={{ color: "#333" }}>
                    {genesisBody.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
                    <div className="pt-4 border-t" style={{ borderColor: "#EEE" }}>
                      <div className="font-bold" style={{ color: "#111" }}>Nicolas Perrin-Gilbert</div>
                      <div style={{ color: "#666" }}>{tr("Co-fondateur & CEO · Chercheur CNRS, ISIR Sorbonne Université", "Co-founder & CEO · CNRS researcher, ISIR Sorbonne Université")}</div>
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
                    {openIdx === i ? tr("Réduire", "Collapse") : tr("Lire", "Read")}
                    <span className={`transition-transform ${openIdx === i ? "rotate-180" : ""}`}><IconChevron size={16} /></span>
                  </button>
                  {openIdx === i && (
                    <div className="mt-4 text-sm leading-relaxed" style={{ color: "#333" }}>
                      <p>{a.body}</p>
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
