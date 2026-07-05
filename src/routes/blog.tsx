import { createFileRoute } from "@tanstack/react-router";

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

const articles = [
  { cat: "Autonomie", title: "Comment choisir ses béquilles quand on béquille au quotidien", date: "12 janvier 2026" },
  { cat: "Emploi", title: "Béquilles et maintien en emploi : ce que vous pouvez demander à votre employeur", date: "3 février 2026" },
  { cat: "Rééducation", title: "Après une opération : comment récupérer sans sacrifier son autonomie", date: "24 février 2026" },
];

function Blog() {
  return (
    <div>
      <section className="px-4 sm:px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl text-white">Conseils & ressources</h1>
        <p className="mt-4" style={{ color: "#A0A8C0" }}>Autonomie · Rééducation · Emploi & handicap · Vie quotidienne</p>
      </section>
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <article key={i} className="rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition" style={{ backgroundColor: "#12183A" }}>
              <div className="aspect-video" style={{ backgroundColor: "rgba(232,193,112,0.08)" }} />
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "rgba(232,193,112,0.15)", color: "#E8C170" }}>{a.cat}</span>
                <h2 className="mt-4 text-lg text-white leading-snug">{a.title}</h2>
                <div className="mt-4 flex items-center justify-between text-sm" style={{ color: "#A0A8C0" }}>
                  <span>{a.date}</span>
                  <a href="#" className="font-bold" style={{ color: "#E8C170" }}>Lire →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
