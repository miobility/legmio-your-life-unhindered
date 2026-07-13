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
  const genesisBody = lang === "en" ? genesisEn : genesisFr;

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <section style={{ backgroundColor: "#F5F5F5" }} className="px-4 sm:px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl" style={{ color: "#111" }}>{tr("Conseils & ressources", "Advice & resources")}</h1>
        <p className="mt-4" style={{ color: "#666" }}>{tr("Autonomie · Rééducation · Emploi & handicap · Vie quotidienne", "Independence · Rehab · Work & disability · Daily life")}</p>
      </section>

      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <article className="card-soft overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-video md:aspect-auto md:h-full overflow-hidden" style={{ backgroundColor: "#F5F5F5" }}>
                <img src="/usecase-quotidien.png" alt={tr("Genèse", "Origin")} className="w-full h-full object-cover" />
              </div>
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
        </div>
      </section>
    </div>
  );
}
