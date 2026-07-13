import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { SOCIAL } from "@/components/Layout";
import {
  IconArrowRight, IconInstagram, IconTiktok, IconLinkedin,
} from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { AutoCarousel } from "@/components/AutoCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "legmio — La béquille qui libère les mains" },
      { name: "description", content: "legmio est la seule béquille ergonomique mains libres. Née de la recherche CNRS/Sorbonne Université. Commercialisation courant 2027." },
      { property: "og:title", content: "legmio — La béquille qui libère les mains" },
      { property: "og:description", content: "Des mains libres et une autonomie enfin retrouvée." },
    ],
  }),
  component: Landing,
});

function CTA({ dark, block }: { dark?: boolean; block?: boolean }) {
  const { t, hubspotUrl } = useLanguage();
  return (
    <a
      href={hubspotUrl}
      target="_blank"
      rel="noreferrer"
      className={`${dark ? "btn-light btn-light-hover" : "btn-dark btn-dark-hover"} ${block ? "w-full" : ""}`}
    >
      {t("cta_interested")} <IconArrowRight size={16} />
    </a>
  );
}

function Landing() {
  const { tr } = useLanguage();
  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section style={{ backgroundColor: "#111111" }} className="px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-10 items-center">
          <div className="rounded-2xl overflow-hidden bg-black order-1">
            <div className="relative w-full" style={{ aspectRatio: "9/16", maxHeight: "70vh" }}>
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
          <div className="text-white space-y-6 fade-up order-2">
            <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
              {tr("LA BÉQUILLE NOUVELLE GÉNÉRATION", "NEXT-GENERATION CRUTCH")}
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-white">
              {tr("Des mains libres et une autonomie enfin retrouvée.", "Hands free. Independence restored.")}
            </h1>
            <div className="pt-2"><CTA dark /></div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLÈME */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-3xl mx-auto" style={{ color: "#111111" }}>
              {tr("Tu connais déjà le problème. Tu le vis.", "You already know the problem. You live it.")}
            </h2>
          </Reveal>
          <div className="mt-14 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                { img: "/probleme-poignet.jpg", t: tr("Tes épaules, tes poignets, tes mains trinquent.", "Your shoulders, wrists and hands take the hit."), p: tr("La béquille censée t'aider te crée un handicap supplémentaire.", "The crutch meant to help you creates an extra disability.") },
                { img: "/probleme-mains.avif", t: tr("Tes mains sont prises.", "Your hands are taken."), p: tr("Porter un verre, faire ses courses, ouvrir une porte — des gestes devenus négociations.", "Carrying a glass, shopping, opening a door — every gesture becomes a negotiation.") },
                { img: "/probleme-temps.jpg", t: tr("Et tu t'y fais.", "And you get used to it."), p: tr("5 ans, 10 ans, 40 ans en béquilles. Sans qu'on t'ait jamais proposé autre chose.", "5, 10, 40 years on crutches — with no one ever offering another way.") },
              ].map((c, i) => (
                <div key={i} className="card-soft overflow-hidden w-[320px] md:w-[380px]">
                  <div className="aspect-[3/2] overflow-hidden" style={{ filter: "grayscale(1)" }}>
                    <img src={c.img} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg" style={{ color: "#111111" }}>{c.t}</h3>
                    <p className="mt-3 text-sm" style={{ color: "#666666" }}>{c.p}</p>
                  </div>
                </div>
              ))}
            </AutoCarousel>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ILS PARLENT DE NOUS */}
      <section style={{ backgroundColor: "#111111" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white">
              {tr("Ils l'ont vu. Ils en parlent.", "They saw it. They're talking about it.")}
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {[
              ["/logoparisien.png", "Le Parisien"],
              ["/logoTF1.png", "TF1"],
              ["/logoFR2.jpg", "France 2"],
              ["/logoFR5.svg", "France 5"],
            ].map(([src, alt]) => (
              <div key={alt} className="bg-white rounded-lg px-4 py-2">
                <img src={src} alt={alt} className="h-10 object-contain" />
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { url: "https://www.instagram.com/reel/DX_Qqp9tbvg/", handle: "@legmio.official", views: "3,6 M", likes: "120 K", cmt: "2 200" },
              { url: "https://www.instagram.com/reel/DYhaBkRov_C/", handle: "@legmio.official", views: "1,2 M", likes: "45 K", cmt: "800" },
            ].map((r, i) => (
              <div key={i} className="rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}>
                <div className="relative w-full flex items-center justify-center" style={{ aspectRatio: "9/16", maxHeight: 420, background: "radial-gradient(circle at 30% 20%, #2a2a2a, #0a0a0a)" }}>
                  <div className="flex flex-col items-center gap-3 text-white/80">
                    <IconInstagram size={64} />
                    <div className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>Reel</div>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4 text-white">
                  <div className="text-sm" style={{ color: "#bbb" }}>{r.handle}</div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div><div className="text-lg font-display font-bold">{r.views}</div><div className="text-xs" style={{ color: "#999" }}>{tr("vues", "views")}</div></div>
                    <div><div className="text-lg font-display font-bold">{r.likes}</div><div className="text-xs" style={{ color: "#999" }}>{tr("likes", "likes")}</div></div>
                    <div><div className="text-lg font-display font-bold">{r.cmt}</div><div className="text-xs" style={{ color: "#999" }}>{tr("commentaires", "comments")}</div></div>
                  </div>
                  <a href={r.url} target="_blank" rel="noreferrer" className="btn-outline-light inline-flex text-sm">
                    {tr("Voir sur Instagram", "View on Instagram")} <IconArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — TÉMOIGNAGES */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: "#111111" }}>
              {tr("Ils l'ont testé. Ils témoignent.", "They tested it. They speak up.")}
            </h2>
          </Reveal>
          <div className="mt-14 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                { img: "/sophie.jpg", n: "Sophie", a: tr("34 ans", "34"), p: tr("Sclérose en plaques", "Multiple sclerosis"), b: tr("3 ans de béquilles", "3 years on crutches"), q: tr("Avant legmio, chaque sortie était une négociation. Le premier jour où j'ai pu rentrer des courses seule — j'ai pleuré. Ça paraît rien. C'est tout.", "Before legmio, every outing was a negotiation. The first day I could bring groceries home alone — I cried. It sounds like nothing. It's everything.") },
                { img: "/marc.jpg", n: "Marc", a: tr("47 ans", "47"), p: tr("Post-opératoire hanche", "Post-op hip"), b: tr("6 mois de rééducation", "6 months of rehab"), q: tr("Je pensais que six mois de béquilles c'était six mois à mettre ma vie entre parenthèses. Mes épaules ont tenu. Moi aussi.", "I thought six months on crutches meant six months on hold. My shoulders held up. So did I.") },
                { img: "/camille.jpg", n: "Camille", a: tr("28 ans", "28"), p: tr("Sarcome d'Ewing", "Ewing sarcoma"), b: tr("Béquilles au quotidien", "Daily crutches"), q: tr("J'avais accepté que mes mains ne m'appartiendraient plus vraiment. legmio m'a prouvé que c'était faux.", "I'd accepted my hands weren't really mine anymore. legmio proved that wrong.") },
              ].map((t, i) => (
                <div key={i} className="card-soft p-6 w-[320px] md:w-[380px] h-full">
                  <div className="flex items-center gap-4">
                    <img src={t.img} alt={t.n} className="w-20 h-20 rounded-full object-cover" />
                    <div>
                      <div className="font-bold" style={{ color: "#111" }}>{t.n}, {t.a}</div>
                      <div className="text-sm" style={{ color: "#666" }}>{t.p}</div>
                    </div>
                  </div>
                  <div className="mt-4 inline-block px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#F5F5F5", color: "#111" }}>{t.b}</div>
                  <p className="mt-4 italic text-sm" style={{ color: "#333" }}>"{t.q}"</p>
                </div>
              ))}
            </AutoCarousel>
          </div>
          <div className="mt-12 text-center"><CTA /></div>
        </div>
      </section>

      {/* SECTION 5 — WALL OF LOVE */}
      <section style={{ backgroundColor: "#111111" }} className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white">
            {tr(<>Ils l'attendent avec impatience.&nbsp;<br />Tu te reconnais ?</>, <>They're waiting for it.&nbsp;<br />Sound familiar?</>)}
          </h2>
        </div>
        <WallOfLove />
        <div className="mt-12 text-center"><CTA dark /></div>
      </section>

      {/* SECTION 6 — USE CASES CAROUSEL */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl" style={{ color: "#111" }}>
              {tr("legmio s'adapte à ta vie", "legmio adapts to your life")}
            </h2>
          </Reveal>
          <div className="mt-10 -mx-4 sm:-mx-6 px-4 sm:px-6">
            <AutoCarousel>
              {[
                { img: "/usecase-quotidien.png", t: tr("Handicap & quotidien long terme", "Long-term disability & daily life"), p: tr("Porter, cuisiner, s'occuper de ses proches. Reprendre ce que tu avais arrêté de demander.", "Carry, cook, care for your loved ones. Take back what you had stopped asking for.") },
                { img: "/usecase-reeducation.png", t: tr("Post-opératoire & rééducation", "Post-op & rehabilitation"), p: tr("Quelques semaines suffisent pour que tes épaules morflent. legmio te laisse récupérer sans tout sacrifier.", "A few weeks is enough for your shoulders to suffer. legmio lets you recover without sacrificing everything.") },
                { img: "/usecase-emploi.png", t: tr("Maintien en emploi", "Staying at work"), p: tr("Rester mobile, autonome, productif.", "Stay mobile, independent, productive.") },
                { img: "/usecase-parental.png", t: tr("Vie parentale", "Parenting life"), p: tr("Porter son enfant. Le suivre. Être là.", "Hold your child. Keep up. Be there.") },
              ].map((c, i) => (
                <div key={i} className="relative w-[280px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden">
                  <img src={c.img} alt={c.t} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.75) 100%)" }} />
                  <div className="absolute top-0 left-0 right-0 p-5 text-white font-display font-bold text-lg leading-tight">{c.t}</div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-sm">{c.p}</div>
                </div>
              ))}
            </AutoCarousel>
          </div>
          <div className="mt-12 text-center"><CTA /></div>
        </div>
      </section>

      {/* SECTION 7 — FONCTIONNALITÉS */}
      <section style={{ backgroundColor: "#111111" }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white">{tr("Conçue pour durer.", "Built to last.")}</h2>
          </Reveal>
          <FeaturesSelector />
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-6 gap-4 max-w-6xl mx-auto px-6 py-10" style={{ backgroundColor: "#FFFFFF" }}>
          {[
            "850g",
            tr("Mains libres", "Hands free"),
            "1m50–1m95",
            "130kg",
            tr("Embouts interchangeables", "Interchangeable tips"),
            tr("Assemblage France", "Assembled in France"),
          ].map((v, i) => (
            <div key={i} className="text-center" style={{ color: "#111" }}>
              <div className="font-display font-bold text-lg">{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8 — CRÉDIBILITÉ */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: "#111" }}>
              {tr("Une grande avancée pour des millions de personnes", "A major breakthrough for millions of people")}
            </h2>
          </Reveal>
          <div className="mt-14 max-w-3xl mx-auto rounded-2xl p-8" style={{ backgroundColor: "#F5F5F5", borderLeft: "3px solid #111" }}>
            <blockquote className="font-display italic text-xl md:text-2xl leading-snug" style={{ color: "#111" }}>
              "{tr("Une béquille qui rend les mains libres : une grande avancée !", "A crutch that frees the hands — a major breakthrough!")}"
            </blockquote>
            <div className="mt-4 text-sm" style={{ color: "#666" }}>
              Dr Pauline Coignard — {tr("Médecin MPR · Centre de Kerpape · Présidente APPROCHE · SOFMER", "PM&R physician · Kerpape Rehab Center · President APPROCHE · SOFMER")}
            </div>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { v: tr("Médaille d'or", "Gold medal"), l: "Concours Lépine 2026" },
              { v: tr("Prix de l'Impact", "Impact Award"), l: "Le Média Positif 2026" },
              { v: tr("Validation terrain", "Field validation"), l: tr("+6 Centres de rééducation et médecins MPR", "+6 rehab centers and PM&R physicians") },
              { v: tr("Soutien scientifique", "Scientific backing"), l: "CNRS · Sorbonne Université · SATT Lutech · Bpifrance" },
            ].map((s, i) => (
              <div key={i} className="card-soft p-6">
                <div className="font-display font-bold text-xl" style={{ color: "#111" }}>{s.v}</div>
                <div className="mt-2 text-sm" style={{ color: "#666" }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-14" style={{ opacity: 0.85 }}>
            <img src="/logo-cnrs.png" alt="CNRS" className="h-10 object-contain" />
            <img src="/logo-sorbonne.png" alt="Sorbonne Université" className="h-10 object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
            <img src="/logo-satt-lutech.png" alt="SATT Lutech" className="h-10 object-contain" />
            <img src="/logo-bpifrance.png" alt="Bpifrance" className="h-10 object-contain" />
          </div>
        </div>
      </section>

      {/* SECTION 9 — ROADMAP */}
      <section style={{ backgroundColor: "#111111" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white">{tr("Où en sommes-nous ?", "Where are we today?")}</h2>
          </Reveal>
          <Roadmap />
        </div>
      </section>

      {/* SECTION 10 — ACTUALITÉ */}
      <section id="waitlist" style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl" style={{ color: "#111" }}>
            {tr("Suis l'actualité de legmio.", "Follow legmio.")}
          </h2>
          <div className="mt-8 flex items-center justify-center gap-6" style={{ color: "#111" }}>
            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="opacity-80 hover:opacity-100"><IconInstagram size={28} /></a>
            <a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="opacity-80 hover:opacity-100"><IconTiktok size={28} /></a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100"><IconLinkedin size={28} /></a>
          </div>
          <div className="mt-10"><CTA /></div>
          <p className="mt-10 text-xs" style={{ color: "#666" }}>
            {tr("Professionnel de santé ou distributeur ?", "Healthcare professional or distributor?")} <a href="mailto:contact@legmio.com" className="underline">contact@legmio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}

function WallOfLove() {
  const { tr } = useLanguage();
  const quotesFr = [
    "C'est la béquille que j'attends depuis longtemps.",
    "J'ai hâte que ça soit commercialisé, on est des milliers à en avoir besoin !",
    "Une main de libre, un bonheur.",
    "Ça fait longtemps que je me disais : mais c'est fou que personne n'ait encore inventé ça.",
    "Votre invention est révolutionnaire et va changer la vie de beaucoup d'entre nous.",
    "J'utilise des béquilles depuis 20 ans... si le prix est convenable, je prends.",
    "Vos béquilles sont une révolution. On attend avec impatience.",
    "Je marche sans béquilles parce que je ne peux rien faire d'autre si j'ai les béquilles !",
    "Voir votre invention remonte le moral.",
    "Elle a l'air de vraiment redonner de la liberté de mouvement.",
  ];
  const quotesEn = [
    "The crutch I've been waiting for forever.",
    "Can't wait for it to launch — thousands of us need this!",
    "One free hand — pure happiness.",
    "I've been saying for years: it's insane no one had built this yet.",
    "Your invention is revolutionary and will change many lives.",
    "20 years on crutches... if the price is fair, count me in.",
    "Your crutches are a revolution. We're waiting eagerly.",
    "I walk without crutches because I can't do anything else with them!",
    "Seeing your invention lifts my spirits.",
    "It really seems to give back freedom of movement.",
  ];
  const quotes = tr(quotesFr, quotesEn);
  const row1 = [...quotes, ...quotes];
  const row2 = [...quotes.slice().reverse(), ...quotes.slice().reverse()];
  const Card = ({ q }: { q: string }) => (
    <div className="rounded-2xl px-6 py-4 shrink-0 max-w-xs" style={{ backgroundColor: "#FFFFFF", color: "#111" }}>
      <p className="italic text-sm">"{q}"</p>
    </div>
  );
  return (
    <div className="mt-14 space-y-6 marquee-pause">
      <div className="overflow-hidden">
        <div className="flex gap-4 marquee-left" style={{ width: "max-content" }}>
          {row1.map((q, i) => <Card key={`a${i}`} q={q} />)}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex gap-4 marquee-right" style={{ width: "max-content" }}>
          {row2.map((q, i) => <Card key={`b${i}`} q={q} />)}
        </div>
      </div>
    </div>
  );
}

function FeaturesSelector() {
  const { tr } = useLanguage();
  const items = [
    { t: tr("Mains libres", "Hands free"), img: "/usecase-quotidien.png", d: tr("L'appui avant-bras redistribue entièrement la charge. Ta main est libre — pour porter, travailler, tenir ton enfant.", "The forearm support fully redistributes the load. Your hand is free — to carry, work, hold your child.") },
    { t: tr("Appui avant-bras ergonomique", "Ergonomic forearm rest"), img: "/bequille.png", d: tr("Conçue pour la position naturelle du poignet. Réduit les contraintes à la prise en main, même sur de longues distances.", "Designed for the natural wrist position. Reduces grip strain, even over long distances.") },
    { t: tr("Système de réglage", "Adjustment system"), img: "/bequille.png", d: tr("Deux points de réglage indépendants. Universelle de 1m50 à 1m95. Montage en 2 minutes sans outil.", "Two independent adjustment points. Fits users from 1m50 to 1m95. Assembles in 2 minutes, no tools.") },
    { t: tr("Embout interchangeable", "Interchangeable tip"), img: "/bequille.png", d: tr("Tu le changes seul, sans outil. Intérieur, extérieur, usure — toujours la bonne accroche.", "Change it yourself, no tools. Indoors, outdoors, worn — always the right grip.") },
    { t: tr("Position de repos", "Rest position"), img: "/bequille.png", d: tr("legmio tient debout contre un mur et ne tombe pas. Tu peux t'y adosser et te reposer dessus.", "legmio stands against a wall without falling. You can lean on it and rest.") },
    { t: tr("Structure légère", "Lightweight frame"), img: "/bequille.png", d: tr("850g. Robuste. Légère. Assemblée en France pour durer dans le temps.", "850g. Robust. Light. Assembled in France to last.") },
  ];
  const [i, setI] = useState(0);
  const s = items[i];
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-[35%_65%] gap-10 items-center">
      <ul className="space-y-4">
        {items.map((it, k) => (
          <li key={k}>
            <button
              onClick={() => setI(k)}
              className="text-left text-lg md:text-xl transition"
              style={{
                color: k === i ? "#FFFFFF" : "rgba(255,255,255,0.35)",
                fontWeight: k === i ? 700 : 500,
              }}
            >
              {it.t}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <div className="rounded-2xl overflow-hidden bg-white aspect-[4/3]">
          <img src={s.img} alt={s.t} className="w-full h-full object-contain" />
        </div>
        <h3 className="mt-6 text-2xl md:text-3xl font-display font-bold text-white">{s.t}</h3>
        <p className="mt-3 text-base" style={{ color: "rgba(255,255,255,0.8)" }}>{s.d}</p>
      </div>
    </div>
  );
}

function Roadmap() {
  const { tr } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, 1 - (r.top - vh * 0.4) / (vh * 0.5)));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const steps = [
    { t: tr("Brevet déposé", "Patent filed"), s: "FR2411206 · Octobre 2024", state: "done" as const },
    { t: tr("Prototype validé", "Validated prototype"), s: tr("utilisé en conditions réelles", "used in real-world conditions"), state: "current" as const },
    { t: tr("Industrialisation", "Industrialization"), s: tr("DFM en cours", "DFM in progress"), state: "upcoming" as const },
    { t: tr("Certification CE Classe I", "CE Class I certification"), s: "MDR 2017/745", state: "upcoming" as const },
    { t: tr("Commercialisation", "Commercial launch"), s: "2027", state: "upcoming" as const },
  ];
  const currentIdx = steps.findIndex((s) => s.state === "current");
  return (
    <div ref={ref} className="mt-16">
      <div className="hidden md:block relative">
        <div className="absolute top-3 left-0 right-0 h-px" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
        <div className="absolute top-3 left-0 h-px transition-all duration-500" style={{ backgroundColor: "#FFF", width: `${progress * 100}%` }} />
        <div className="relative flex justify-between">
          {steps.map((s, i) => {
            const done = i < currentIdx;
            const isCurrent = i === currentIdx;
            return (
              <div key={i} className="flex flex-col items-center gap-3 w-32 text-center">
                <div
                  className="rounded-full"
                  style={{
                    width: isCurrent ? 26 : 14,
                    height: isCurrent ? 26 : 14,
                    backgroundColor: isCurrent ? "#FFEB3B" : done ? "#FFF" : "transparent",
                    border: "2px solid #FFF",
                  }}
                />
                <div className="text-sm text-white" style={{ opacity: isCurrent ? 1 : done ? 0.9 : 0.5, fontWeight: isCurrent ? 700 : 500 }}>{s.t}</div>
                <div className="text-xs" style={{ color: isCurrent ? "#FFEB3B" : "rgba(255,255,255,0.5)" }}>{s.s}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:hidden space-y-5">
        {steps.map((s, i) => {
          const done = i < currentIdx;
          const isCurrent = i === currentIdx;
          return (
            <div key={i} className="flex items-start gap-4">
              <div className="mt-1 rounded-full shrink-0" style={{
                width: isCurrent ? 18 : 12,
                height: isCurrent ? 18 : 12,
                backgroundColor: isCurrent ? "#FFEB3B" : done ? "#FFF" : "transparent",
                border: "2px solid #FFF",
              }} />
              <div>
                <div className="text-white text-sm" style={{ fontWeight: isCurrent ? 700 : 500, opacity: isCurrent ? 1 : done ? 0.9 : 0.6 }}>{s.t}</div>
                <div className="text-xs" style={{ color: isCurrent ? "#FFEB3B" : "rgba(255,255,255,0.5)" }}>{s.s}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
