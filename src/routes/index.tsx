import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import {
  IconArrowRight, IconWeight, IconRuler, IconShield, IconFactory, IconAluminum,
  IconInstagram, IconTiktok, IconLinkedin, IconChevron,
} from "@/components/Icons";

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

// Placeholder card component — visual with descriptive label
function Placeholder({ label, aspect = "aspect-[3/2]", dark = false }: { label: string; aspect?: string; dark?: boolean }) {
  return (
    <div
      className={`w-full ${aspect} flex items-center justify-center text-xs font-medium tracking-wide uppercase`}
      style={{
        background: dark
          ? "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)"
          : "linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)",
        color: dark ? "#666" : "#999",
      }}
    >
      {label}
    </div>
  );
}

function CTA({ dark, children = "Je suis intéressé(e)" }: { dark?: boolean; children?: React.ReactNode }) {
  const { t } = useLanguage();
  const label = typeof children === "string" ? children : t("cta_interested");
  return (
    <a href="/#waitlist" className={dark ? "btn-light btn-light-hover" : "btn-dark btn-dark-hover"}>
      {label} <IconArrowRight size={16} />
    </a>
  );
}

function Landing() {
  const { t } = useLanguage();
  return (
    <div>
      {/* SECTION 1 — HERO */}
      <section style={{ backgroundColor: "#111111" }} className="px-4 sm:px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] gap-10 items-center">
          <div className="rounded-2xl overflow-hidden bg-black">
            <div className="relative w-full" style={{ aspectRatio: "9/16", maxHeight: "70vh" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/wRDP3A0-4eU?autoplay=1&mute=1&loop=1&controls=0&rel=0&playlist=wRDP3A0-4eU&modestbranding=1&playsinline=1"
                title="legmio"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="text-white space-y-6 fade-up">
            <div className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.6)" }}>
              LA BÉQUILLE NOUVELLE GÉNÉRATION
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-white">
              Des mains libres et une autonomie enfin retrouvée.
            </h1>
            <div className="pt-2"><CTA dark /></div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROBLÈME */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-3xl mx-auto" style={{ color: "#111111" }}>
            Tu connais déjà le problème. Tu le vis.
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "Épaules · Poignets · Mains", t: "Tes épaules, tes poignets, tes mains trinquent.", p: "L'outil censé t'aider te crée un handicap supplémentaire." },
              { img: "Mains prises · Vie prise", t: "Tes mains sont prises. Ta vie ne l'est plus.", p: "Porter un verre, faire ses courses, ouvrir une porte — des gestes devenus négociations." },
              { img: "Résignation", t: "Et tu t'y fais.", p: "5 ans, 10 ans, 40 ans en béquilles. Sans qu'on t'ait jamais proposé autre chose." },
            ].map((c, i) => (
              <div key={i} className="card-soft overflow-hidden">
                <div style={{ filter: "grayscale(1)" }}><Placeholder label={c.img} /></div>
                <div className="p-6">
                  <h3 className="text-lg" style={{ color: "#111111" }}>{c.t}</h3>
                  <p className="mt-3 text-sm" style={{ color: "#666666" }}>{c.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SECTION 3 — ILS PARLENT DE NOUS */}
<section style={{ backgroundColor: "#111111" }} className="px-4 sm:px-6 py-20 md:py-28">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white">Ils l'ont vu. Ils en parlent.</h2>
    <div className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
      <div className="bg-white rounded-lg px-4 py-2">
        <img src="/logoparisien.png" alt="Le Parisien" className="h-10 object-contain" />
      </div>
      <div className="bg-white rounded-lg px-4 py-2">
        <img src="/logoTF1.png" alt="TF1" className="h-10 object-contain" />
      </div>
      <div className="bg-white rounded-lg px-4 py-2">
        <img src="/logoFR2.jpg" alt="France 2" className="h-10 object-contain" />
      </div>
      <div className="bg-white rounded-lg px-4 py-2">
        <img src="/logoFR5.svg" alt="France 5" className="h-10 object-contain" />
      </div>
    </div>

          <div className="mt-16 max-w-4xl mx-auto rounded-2xl overflow-hidden" style={{ backgroundColor: "#1a1a1a", border: "1px solid #2a2a2a" }}>
            <div className="grid grid-cols-1 md:grid-cols-[45%_55%]">
              <div className="bg-black">
                <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.instagram.com/reel/DX_Qqp9tbvg/embed/"
                    title="legmio Instagram reel"
                    allow="encrypted-media"
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center text-white space-y-4">
                <div className="flex gap-6 text-sm">
                  <div><div className="text-2xl font-display font-bold">3.6M</div><div style={{ color: "#999" }}>vues</div></div>
                  <div><div className="text-2xl font-display font-bold">120K</div><div style={{ color: "#999" }}>likes</div></div>
                  <div><div className="text-2xl font-display font-bold">2 200</div><div style={{ color: "#999" }}>commentaires</div></div>
                </div>
                <blockquote className="text-xl font-display italic leading-snug">
                  "Une invention qui va changer des vies."
                </blockquote>
                <div>
                  <a href="https://www.instagram.com/reel/DX_Qqp9tbvg/" target="_blank" rel="noreferrer" className="btn-outline-light inline-flex text-sm px-5 py-2.5">
                    Voir sur Instagram <IconArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — TÉMOIGNAGES */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: "#111111" }}>Ils l'ont testé. Ils témoignent.</h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "Sophie", a: "34 ans", p: "Sclérose en plaques", b: "3 ans de béquilles", q: "Avant legmio, chaque sortie était une négociation. Le premier jour où j'ai pu rentrer des courses seule — j'ai pleuré. Ça paraît rien. C'est tout." },
              { n: "Marc", a: "47 ans", p: "Post-opératoire hanche", b: "6 mois de rééducation", q: "Je pensais que six mois de béquilles c'était six mois à mettre ma vie entre parenthèses. Mes épaules ont tenu. Moi aussi." },
              { n: "Camille", a: "28 ans", p: "Sarcome d'Ewing", b: "Béquilles au quotidien", q: "J'avais accepté que mes mains ne m'appartiendraient plus vraiment. legmio m'a prouvé que c'était faux." },
            ].map((t, i) => (
              <div key={i} className="card-soft p-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-display font-bold" style={{ backgroundColor: "#F5F5F5", color: "#111" }}>{t.n[0]}</div>
                  <div>
                    <div className="font-bold" style={{ color: "#111" }}>{t.n}, {t.a}</div>
                    <div className="text-sm" style={{ color: "#666" }}>{t.p}</div>
                  </div>
                </div>
                <div className="mt-4 inline-block px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#F5F5F5", color: "#111" }}>{t.b}</div>
                <p className="mt-4 italic text-sm" style={{ color: "#333" }}>"{t.q}"</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center"><CTA /></div>
        </div>
      </section>

      {/* SECTION 5 — WALL OF LOVE */}
      <section style={{ backgroundColor: "#111111" }} className="py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white">Ils l'attendent avec impatience.&nbsp;<br />Tu te reconnais ?</h2>
        </div>
        <WallOfLove />
        <div className="mt-12 text-center"><CTA dark /></div>
      </section>

      {/* SECTION 6 — USE CASES */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { img: "Handicap · Quotidien", t: "Handicap & quotidien long terme", s: "Pour ceux qui béquillent depuis des mois, des ans, des décennies.", p: "Porter, cuisiner, s'occuper de ses proches. Reprendre ce que tu avais arrêté de demander." },
              { img: "Rééducation", t: "Post-opératoire & rééducation", s: "Pour ceux qui béquillent le temps d'une récupération.", p: "Quelques semaines suffisent pour que tes épaules morflent. legmio te laisse récupérer sans tout sacrifier." },
              { img: "Emploi", t: "Maintien en emploi", s: "Pour ceux qui travaillent avec des béquilles.", p: "Rester mobile, autonome, productif. Prise en charge jusqu'à 90% via Agefiph ou FIPHFP." },
              { img: "Vie parentale", t: "Vie parentale", s: "Pour ceux qui élèvent un enfant en béquilles.", p: "Porter son enfant. Le suivre. Être là." },
            ].map((c, i) => (
              <div key={i} className="card-soft overflow-hidden">
                <Placeholder label={c.img} aspect="aspect-video" />
                <div className="p-6">
                  <h3 className="text-xl" style={{ color: "#111" }}>{c.t}</h3>
                  <div className="mt-1 text-sm italic" style={{ color: "#666" }}>{c.s}</div>
                  <p className="mt-3 text-sm" style={{ color: "#444" }}>{c.p}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center"><CTA /></div>
        </div>
      </section>

      {/* SECTION 7 — DESCRIPTION PRODUIT + SPECS */}
      <section style={{ backgroundColor: "#111111" }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white">legmio. Pensée jusqu'au dernier centimètre.</h2>
          <ProductSlider />
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto px-6 py-10" style={{ backgroundColor: "#FFFFFF" }}>
          {[
            { Icon: IconWeight, v: "850g", l: "Poids" },
            { Icon: IconAluminum, v: "Aluminium", l: "Matériau" },
            { Icon: IconRuler, v: "1m50–1m95", l: "Réglable" },
            { Icon: IconShield, v: "130kg", l: "Charge max" },
            { Icon: IconFactory, v: "France", l: "Assemblage" },
          ].map(({ Icon, v, l }, i) => (
            <div key={i} className="text-center" style={{ color: "#111" }}>
              <div className="flex justify-center mb-2"><Icon size={28} /></div>
              <div className="font-display font-bold text-xl">{v}</div>
              <div className="text-xs uppercase tracking-wide mt-1" style={{ color: "#666" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8 — CRÉDIBILITÉ */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center" style={{ color: "#111" }}>Née du terrain.&nbsp;<br />Récompensée par le terrain.</h2>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-8" style={{ filter: "grayscale(1)", opacity: 0.75 }}>
            {["CNRS", "Sorbonne Université", "SATT Lutech", "Bpifrance"].map((m) => (
              <div key={m} className="font-display font-bold text-xl" style={{ color: "#111" }}>{m}</div>
            ))}
          </div>
          <div className="mt-14 max-w-3xl mx-auto rounded-2xl p-8" style={{ backgroundColor: "#F5F5F5", borderLeft: "3px solid #111" }}>
            <blockquote className="font-display italic text-xl md:text-2xl leading-snug" style={{ color: "#111" }}>
              "Une béquille qui rend les mains libres : une grande avancée !"
            </blockquote>
            <div className="mt-4 text-sm" style={{ color: "#666" }}>
              Dr Pauline Coignard — Médecin MPR · Centre de Kerpape · Présidente APPROCHE · SOFMER
            </div>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { v: "Médaille d'or", l: "Concours Lépine 2026" },
              { v: "Prix de l'Impact", l: "Le Média Positif 2026" },
              { v: "+6 médecins MPR", l: "validation terrain" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display font-bold text-2xl md:text-3xl" style={{ color: "#111" }}>{s.v}</div>
                <div className="mt-2 text-sm" style={{ color: "#666" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — ROADMAP */}
      <section style={{ backgroundColor: "#111111" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-white">Où en est-on ?</h2>
          <Roadmap />
        </div>
      </section>

      {/* SECTION 10 — LISTE D'ATTENTE */}
      <section id="waitlist" style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl" style={{ color: "#111" }}>Suis l'actualité de legmio.</h2>
          <form className="mt-8 space-y-3 text-left" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="Adresse email" className="w-full px-5 py-3 rounded-full border outline-none focus:border-black" style={{ borderColor: "#EEEEEE", color: "#111" }} />
            <input type="text" placeholder="Prénom" className="w-full px-5 py-3 rounded-full border outline-none focus:border-black" style={{ borderColor: "#EEEEEE", color: "#111" }} />
            <button type="submit" className="btn-dark btn-dark-hover w-full">{t("cta_interested")} <IconArrowRight size={16} /></button>
          </form>
          <div className="mt-8 flex items-center justify-center gap-4" style={{ color: "#666" }}>
            <a href="#" aria-label="Instagram" className="opacity-60 hover:opacity-100"><IconInstagram size={22} /></a>
            <a href="#" aria-label="TikTok" className="opacity-60 hover:opacity-100"><IconTiktok size={22} /></a>
            <a href="#" aria-label="LinkedIn" className="opacity-60 hover:opacity-100"><IconLinkedin size={22} /></a>
          </div>
          <p className="mt-10 text-xs" style={{ color: "#666" }}>
            Professionnel de santé ou distributeur ? Contactez-nous — <a href="mailto:contact@legmio.com" className="underline">contact@legmio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}

function WallOfLove() {
  const quotes = [
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

function ProductSlider() {
  const slides = [
    { t: "L'appui avant-bras", p: "Redistribue la charge. Protège tes poignets, tes épaules, tes nerfs." },
    { t: "La poignée ergonomique", p: "Conçue pour la position naturelle du poignet. Confort longue durée garanti." },
    { t: "Le système de réglage", p: "Deux points de réglage. Universelle de 1m50 à 1m95." },
    { t: "L'embout interchangeable", p: "Sans outil. Intérieur, extérieur, usure — toujours la bonne accroche." },
    { t: "La structure aluminium", p: "850g. Robuste. Légère. Conçue pour durer." },
  ];
  const [i, setI] = useState(0);
  const s = slides[i];
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="rounded-2xl overflow-hidden">
        <Placeholder label={s.t} dark aspect="aspect-square" />
      </div>
      <div className="text-white">
        <h3 className="text-2xl md:text-3xl font-display font-bold">{s.t}</h3>
        <p className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>{s.p}</p>
        <div className="mt-8 flex gap-2">
          {slides.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Slide ${k + 1}`}
              className="w-2.5 h-2.5 rounded-full transition"
              style={{ backgroundColor: k === i ? "#FFFFFF" : "rgba(255,255,255,0.3)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Roadmap() {
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
  const steps = ["Prototype validé", "Brevet déposé", "Certification CE", "Industrialisation", "2027"];
  return (
    <div ref={ref} className="mt-16">
      {/* Desktop */}
      <div className="hidden md:block relative">
        <div className="absolute top-3 left-0 right-0 h-px" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
        <div className="absolute top-3 left-0 h-px transition-all duration-500" style={{ backgroundColor: "#FFF", width: `${progress * 100}%` }} />
        <div className="relative flex justify-between">
          {steps.map((s, i) => {
            const done = progress * (steps.length - 1) >= i;
            const isLast = i === steps.length - 1;
            return (
              <div key={i} className="flex flex-col items-center gap-3 w-24 text-center">
                <div
                  className="rounded-full"
                  style={{
                    width: isLast ? 26 : 14, height: isLast ? 26 : 14,
                    backgroundColor: isLast ? "#FFF" : done ? "#FFF" : "transparent",
                    border: "2px solid #FFF",
                  }}
                />
                <div className="text-xs text-white" style={{ opacity: done ? 1 : 0.6 }}>{s}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden space-y-4 relative">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: "#FFF" }} />
            <div className="text-white text-sm">{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Suppress unused warning for IconChevron
void IconChevron;
