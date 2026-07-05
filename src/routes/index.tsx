import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Landing,
});

const VIDEO_ID = "BywLrRTsp_8";

function CTAButton({ children, size = "md" }: { children: React.ReactNode; size?: "md" | "lg" }) {
  return (
    <a href="#pricing" className={`btn-gold btn-gold-hover ${size === "lg" ? "text-lg px-8 py-4" : ""}`}>
      {children}
    </a>
  );
}

function SectionAlt({ children, alt = false, className = "", id }: { children: React.ReactNode; alt?: boolean; className?: string; id?: string }) {
  return (
    <section id={id} style={{ backgroundColor: alt ? "#12183A" : "#0D0D29" }} className={`py-20 sm:py-28 px-4 sm:px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function Landing() {
  const { t, lang } = useLanguage();

  const problemCards = lang === "fr" ? [
    { icon: "💥", title: "Tes épaules, tes poignets, tes mains trinquent.", text: "L'outil censé t'aider te crée un handicap supplémentaire." },
    { icon: "✋", title: "Tes mains sont prises. Ta vie ne l'est plus.", text: "Porter un verre, faire ses courses, ouvrir une porte — des gestes devenus négociations." },
    { icon: "⏳", title: "Et tu t'y fais.", text: "5 ans, 10 ans, 40 ans en béquilles. Sans qu'on t'ait jamais proposé autre chose." },
  ] : [
    { icon: "💥", title: "Your shoulders, wrists and hands suffer.", text: "The tool meant to help you creates a new disability." },
    { icon: "✋", title: "Your hands are taken. Your life doesn't have to be.", text: "Carrying a glass, doing groceries, opening a door — everyday acts become negotiations." },
    { icon: "⏳", title: "And you get used to it.", text: "5, 10, 40 years on crutches. Without ever being offered anything else." },
  ];

  const media = ["Le Parisien", "TF1", "France 2", "France 5", "Faire Face"];

  const mediaCards = [
    { q: "Une invention qui va changer des vies.", src: "@compte1", views: "1.2M vues" },
    { q: "Enfin une béquille qui libère les mains !", src: "@compte2", views: "850K vues" },
    { q: "Révolutionnaire.", src: "@compte3", views: "2.4M vues" },
  ];

  const testimonials = lang === "fr" ? [
    { name: "Sophie, 34 ans", profile: "Sclérose en plaques", badge: "3 ans de béquilles", quote: "Avant legmio, chaque sortie était une négociation. Le premier jour où j'ai pu rentrer des courses seule, sans sac à dos — j'ai pleuré. Ça paraît rien. C'est tout." },
    { name: "Marc, 47 ans", profile: "Post-opératoire hanche", badge: "6 mois de rééducation", quote: "Je pensais que six mois de béquilles c'était six mois à mettre ma vie entre parenthèses. Mes épaules ont tenu. Moi aussi." },
    { name: "Camille, 28 ans", profile: "Sarcome d'Ewing", badge: "Béquilles au quotidien", quote: "J'avais accepté que mes mains ne m'appartiendraient plus vraiment. legmio m'a prouvé que c'était faux. Ce n'est pas juste une béquille — c'est du temps de vie rendu." },
  ] : [
    { name: "Sophie, 34", profile: "Multiple sclerosis", badge: "3 years on crutches", quote: "Before legmio, every outing was a negotiation. The first day I could bring groceries home alone — I cried. It sounds like nothing. It's everything." },
    { name: "Marc, 47", profile: "Post-op hip surgery", badge: "6 months rehab", quote: "I thought six months on crutches meant putting my life on pause. My shoulders held. So did I." },
    { name: "Camille, 28", profile: "Ewing sarcoma", badge: "Daily crutch user", quote: "I had accepted that my hands weren't really mine. legmio proved me wrong. It's not just a crutch — it's life time given back." },
  ];

  const wall = [
    "C'est la béquille que j'attends depuis longtemps.",
    "J'ai hâte que ça soit commercialisé, on est des milliers à en avoir besoin !",
    "Une main de libre, un bonheur.",
    "Ça fait longtemps que je me disais : mais c'est fou que personne n'ait encore inventé ça.",
    "Votre invention est révolutionnaire et va changer la vie de beaucoup d'entre nous.",
    "J'utilise des béquilles depuis 20 ans... si le prix est convenable, je prends.",
    "Vos béquilles sont une révolution. On attend avec impatience.",
    "C'est trop génial cette idée !!",
    "Voir votre invention remonte le moral.",
    "Elle a l'air de vraiment redonner de la liberté de mouvement.",
  ];

  const useCases = lang === "fr" ? [
    { icon: "🏠", title: "Handicap & quotidien long terme", sub: "Pour ceux qui béquillent depuis des mois, des ans, des décennies.", text: "Porter, cuisiner, s'occuper de ses proches. Reprendre ce que tu avais arrêté de demander." },
    { icon: "🏥", title: "Post-opératoire & rééducation", sub: "Pour ceux qui béquillent le temps d'une récupération.", text: "Quelques semaines suffisent pour que tes épaules morfient. legmio te laisse récupérer sans tout sacrifier." },
    { icon: "💼", title: "Maintien en emploi", sub: "Pour ceux qui travaillent avec des béquilles.", text: "Rester mobile, autonome, productif. Prise en charge jusqu'à 90% via Agefiph ou FIPHFP." },
    { icon: "👶", title: "Vie parentale", sub: "Pour ceux qui élèvent un enfant en béquilles.", text: "Porter son enfant. Le suivre. Être là." },
  ] : [
    { icon: "🏠", title: "Long-term disability", sub: "For those who've been on crutches for months, years, decades.", text: "Carry, cook, care for loved ones. Get back what you'd stopped asking for." },
    { icon: "🏥", title: "Post-op & rehab", sub: "For temporary recovery use.", text: "A few weeks is enough to wreck your shoulders. legmio lets you recover without sacrificing everything." },
    { icon: "💼", title: "Staying in work", sub: "For those working on crutches.", text: "Stay mobile, independent, productive. Up to 90% covered via Agefiph or FIPHFP." },
    { icon: "👶", title: "Parenting", sub: "For those raising kids on crutches.", text: "Carry your child. Follow them. Be there." },
  ];

  const components = lang === "fr" ? [
    { title: "L'appui avant-bras", text: "Redistribue la charge. Protège tes poignets, tes épaules, tes nerfs." },
    { title: "La poignée ergonomique", text: "Conçue pour la position naturelle du poignet. Réduit les contraintes, même sur de longues distances." },
    { title: "Le système de réglage", text: "Deux points de réglage. Universelle de 1m50 à 1m95." },
    { title: "L'embout interchangeable", text: "Tu le changes seul, sans outil. Intérieur, extérieur, usure — toujours la bonne accroche." },
    { title: "La structure aluminium", text: "850g. Robuste. Légère. Conçue pour durer." },
  ] : [
    { title: "The forearm support", text: "Redistributes load. Protects wrists, shoulders, nerves." },
    { title: "The ergonomic grip", text: "Designed for the wrist's natural position. Reduces strain even over long distances." },
    { title: "The adjustment system", text: "Two adjustment points. Universal from 4'11 to 6'5." },
    { title: "The swappable tip", text: "Change it alone, no tools. Indoor, outdoor, wear — always the right grip." },
    { title: "Aluminum frame", text: "850g. Sturdy. Light. Built to last." },
  ];

  const roadmap = lang === "fr" ? [
    { icon: "✅", text: "Prototype validé — utilisé en conditions réelles depuis plus d'un an", highlight: false },
    { icon: "✅", text: "Brevet déposé — FR2411206 · Octobre 2024", highlight: false },
    { icon: "🔄", text: "Certification CE Classe I — en cours · MDR 2017/745", highlight: false },
    { icon: "🔄", text: "Industrialisation — DFM en cours · Assemblage France", highlight: false },
    { icon: "🎯", text: "Commercialisation — 2027", highlight: true },
  ] : [
    { icon: "✅", text: "Validated prototype — in real-world use for over a year", highlight: false },
    { icon: "✅", text: "Patent filed — FR2411206 · October 2024", highlight: false },
    { icon: "🔄", text: "CE Class I certification — in progress · MDR 2017/745", highlight: false },
    { icon: "🔄", text: "Industrialization — DFM in progress · Assembly in France", highlight: false },
    { icon: "🎯", text: "Launch — 2027", highlight: true },
  ];

  const faqShort = lang === "fr" ? [
    { q: "legmio est-elle réglable ?", a: "Oui. Deux points de réglage : poignée et appui coude. Universelle de 1m50 à 1m95." },
    { q: "Faut-il de la force dans les mains ?", a: "Non. legmio ne nécessite pas de poigne — un simple appui du poignet suffit." },
    { q: "Combien de temps pour s'adapter ?", a: "Environ 1 à 2 semaines, le temps que le corps intègre le nouveau schéma de marche." },
    { q: "Quel est le prix ?", a: "150€ TTC, livraison incluse." },
    { q: "Est-elle remboursée ?", a: "Partiellement sur prescription médicale (LPP). En contexte emploi, jusqu'à 90% via Agefiph ou FIPHFP." },
    { q: "Quand sera-t-elle disponible ?", a: "Commercialisation prévue en 2027. Rejoins la liste d'attente pour être parmi les premiers." },
  ] : [
    { q: "Is legmio adjustable?", a: "Yes. Two adjustment points: handle and elbow rest. Universal from 4'11 to 6'5." },
    { q: "Do you need hand strength?", a: "No. legmio needs no grip — a simple wrist support is enough." },
    { q: "How long to adapt?", a: "About 1 to 2 weeks for the body to integrate the new walking pattern." },
    { q: "What's the price?", a: "€150 incl. VAT, shipping included." },
    { q: "Is it reimbursed?", a: "Partially with a prescription (LPP). In work context, up to 90% via Agefiph or FIPHFP." },
    { q: "When will it be available?", a: "Launch planned for 2027. Join the waitlist to be among the first." },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div>
      {/* BLOC 1 — HERO */}
      <section className="px-4 sm:px-6 pt-8 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
          <div className="order-1 w-full">
            <div className="relative w-full max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "9/16" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&controls=0&rel=0&playlist=${VIDEO_ID}&modestbranding=1&playsinline=1`}
                title="legmio"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
          <div className="order-2">
            <Reveal>
              <div className="inline-block text-xs font-bold tracking-widest mb-6" style={{ color: "#E8C170" }}>{t("hero_label")}</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-white">
                {t("hero_title_1")}<br />{t("hero_title_2")}
              </h1>
              <p className="mt-6 text-xl sm:text-2xl" style={{ color: "#A0A8C0" }}>
                {t("hero_sub_1")}<br /><span className="text-white">{t("hero_sub_2")}</span>
              </p>
              <div className="mt-8">
                <CTAButton size="lg">{t("cta_arrow")}</CTAButton>
                <p className="mt-4 text-sm" style={{ color: "#A0A8C0" }}>{t("hero_note")}</p>
                <div className="mt-5 inline-block px-4 py-2 rounded-full text-sm border border-white/10" style={{ backgroundColor: "rgba(232,193,112,0.08)" }}>
                  {t("hero_badge")}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BLOC 2 — PROBLÈME */}
      <SectionAlt alt>
        <Reveal><h2 className="text-3xl sm:text-4xl text-center text-white max-w-3xl mx-auto">{t("problem_title")}</h2></Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemCards.map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="p-8 rounded-2xl h-full border border-white/5" style={{ backgroundColor: "#0D0D29" }}>
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="text-xl mb-3 text-white">{c.title}</h3>
                <p style={{ color: "#A0A8C0" }}>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><p className="mt-14 text-center italic text-lg" style={{ color: "#E8C170" }}>{t("problem_end")}</p></Reveal>
      </SectionAlt>

      {/* BLOC 3 — VIDÉO PRODUIT */}
      <SectionAlt>
        <Reveal><h2 className="text-3xl sm:text-4xl text-center text-white">{t("video_title")}</h2></Reveal>
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "9/16" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&controls=0&rel=0&playlist=${VIDEO_ID}&modestbranding=1&playsinline=1`}
              title="legmio video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
        <p className="mt-8 text-center" style={{ color: "#A0A8C0" }}>{t("video_sub")}</p>
      </SectionAlt>

      {/* BLOC 4 — ILS PARLENT DE NOUS */}
      <SectionAlt alt>
        <Reveal><h2 className="text-3xl sm:text-4xl text-center text-white">{t("media_title")}</h2></Reveal>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
          {media.map((m) => (
            <div key={m} className="px-6 py-3 rounded-lg border border-white/10 text-sm font-medium text-white/70 grayscale">{m}</div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaCards.map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="p-6 rounded-2xl border border-white/5 h-full flex flex-col" style={{ backgroundColor: "#0D0D29" }}>
                <p className="italic text-white/90">"{c.q}"</p>
                <p className="mt-4 text-sm" style={{ color: "#A0A8C0" }}>{c.src} · {c.views}</p>
                <a href="#" className="mt-4 text-sm font-bold self-start" style={{ color: "#E8C170" }}>Voir →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionAlt>

      {/* BLOC 5 — TÉMOIGNAGES */}
      <SectionAlt>
        <Reveal><h2 className="text-3xl sm:text-4xl text-center text-white">{t("testi_title")}</h2></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((c, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="p-6 rounded-2xl border border-white/5 h-full" style={{ backgroundColor: "#12183A" }}>
                <div className="w-16 h-16 rounded-full mx-auto" style={{ backgroundColor: "#0D0D29", border: "1px solid rgba(232,193,112,0.3)" }} />
                <div className="mt-4 text-center">
                  <div className="font-bold text-white">{c.name}</div>
                  <div className="text-sm" style={{ color: "#A0A8C0" }}>{c.profile}</div>
                  <div className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: "rgba(232,193,112,0.15)", color: "#E8C170" }}>{c.badge}</div>
                </div>
                <p className="mt-5 italic text-white/85">"{c.quote}"</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionAlt>

      {/* BLOC 6 — WALL OF LOVE */}
      <SectionAlt alt>
        <Reveal><h2 className="text-3xl sm:text-4xl text-center text-white">{t("wall_title")}</h2></Reveal>
        <div className="mt-12 space-y-4 overflow-hidden">
          {[wall, [...wall].reverse()].map((row, ri) => (
            <div key={ri} className="flex gap-4 whitespace-nowrap" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
              <div className={`flex gap-4 shrink-0 ${ri === 0 ? "marquee-left" : "marquee-right"}`} style={{ minWidth: "200%" }}>
                {[...row, ...row].map((w, i) => (
                  <div key={i} className="px-4 py-3 rounded-xl text-sm text-white/90 shrink-0" style={{ backgroundColor: "#0D0D29", border: "1px solid #E8C170", maxWidth: "360px", whiteSpace: "normal" }}>
                    "{w}"
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center"><CTAButton>{t("wall_cta")}</CTAButton></div>
      </SectionAlt>

      {/* BLOC 7 — USE CASES */}
      <SectionAlt>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="p-8 rounded-2xl h-full border border-white/5" style={{ backgroundColor: "#12183A" }}>
                <div className="text-5xl mb-4">{c.icon}</div>
                <h3 className="text-xl text-white">{c.title}</h3>
                <p className="mt-2 italic text-sm" style={{ color: "#E8C170" }}>{c.sub}</p>
                <p className="mt-4" style={{ color: "#A0A8C0" }}>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="mb-4 text-white/80">{t("usecase_cta")}</p>
          <CTAButton>{t("cta_arrow")}</CTAButton>
        </div>
      </SectionAlt>

      {/* BLOC 8 — DESCRIPTION PRODUIT + SPECS */}
      <SectionAlt alt>
        <Reveal><h2 className="text-3xl sm:text-4xl text-center text-white">{t("desc_title")}</h2></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {components.map((c, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="p-5 rounded-2xl h-full border border-white/5" style={{ backgroundColor: "#0D0D29" }}>
                <div className="aspect-square rounded-xl mb-4" style={{ backgroundColor: "rgba(232,193,112,0.08)", border: "1px dashed rgba(232,193,112,0.3)" }} />
                <div className="text-xs font-bold mb-2" style={{ color: "#E8C170" }}>0{i + 1}</div>
                <h3 className="text-base text-white font-display font-bold">{c.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "#A0A8C0" }}>{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 py-6 px-4 rounded-2xl flex flex-wrap justify-around items-center gap-4 text-sm text-white/90" style={{ backgroundColor: "#0D0D29", border: "1px solid rgba(255,255,255,0.05)" }}>
          <span>⚖️ 850g</span>
          <span>🔧 Aluminium</span>
          <span>📏 1m50–1m95</span>
          <span>💪 130kg</span>
          <span>🇫🇷 Assemblage France</span>
        </div>
      </SectionAlt>

      {/* BLOC 9 — CRÉDIBILITÉ */}
      <SectionAlt>
        <Reveal><h2 className="text-3xl sm:text-4xl text-center text-white">{t("cred_title")}</h2></Reveal>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-8">
          {["CNRS", "Sorbonne Université", "SATT Lutech", "Bpifrance"].map((l) => (
            <div key={l} className="text-white/60 text-sm font-medium tracking-wider">{l}</div>
          ))}
        </div>
        <Reveal>
          <div className="mt-12 max-w-2xl mx-auto p-8 rounded-2xl text-center" style={{ backgroundColor: "#12183A", border: "1px solid #E8C170" }}>
            <p className="text-xl italic text-white">"{t("cred_quote")}"</p>
            <p className="mt-6 font-bold text-white">{t("cred_author")}</p>
            <p className="text-sm" style={{ color: "#A0A8C0" }}>{t("cred_author_sub")}</p>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div><div className="text-3xl mb-2">🥇</div><p className="text-white">Médaille d'or</p><p className="text-sm" style={{ color: "#A0A8C0" }}>Concours Lépine 2026</p></div>
          <div><div className="text-3xl mb-2">🏆</div><p className="text-white">Prix de l'Impact</p><p className="text-sm" style={{ color: "#A0A8C0" }}>Le Média Positif 2026</p></div>
          <div><div className="text-3xl mb-2">👨‍⚕️</div><p className="text-white">+6 médecins MPR</p><p className="text-sm" style={{ color: "#A0A8C0" }}>validation terrain</p></div>
        </div>
      </SectionAlt>

      {/* BLOC 10 — ROADMAP */}
      <SectionAlt alt>
        <Reveal><h2 className="text-3xl sm:text-4xl text-center text-white">{t("roadmap_title")}</h2></Reveal>
        <div className="mt-12 max-w-2xl mx-auto space-y-4">
          {roadmap.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className={`p-5 rounded-xl border flex items-center gap-4 ${r.highlight ? "" : "border-white/10"}`} style={{ backgroundColor: r.highlight ? "rgba(232,193,112,0.1)" : "#0D0D29", borderColor: r.highlight ? "#E8C170" : undefined }}>
                <div className="text-2xl">{r.icon}</div>
                <div className={r.highlight ? "text-xl font-bold font-display" : "text-white"} style={r.highlight ? { color: "#E8C170" } : {}}>
                  {r.text}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-white/90">{t("roadmap_end_1")}<br /><span style={{ color: "#A0A8C0" }}>{t("roadmap_end_2")}</span></p>
      </SectionAlt>

      {/* BLOC 11 — PRIX */}
      <SectionAlt id="pricing">
        <Reveal>
          <div className="text-center">
            <div className="font-display font-bold text-6xl sm:text-7xl text-white">{t("price_ttc")}</div>
            <p className="mt-2 text-lg" style={{ color: "#A0A8C0" }}>{t("price_ship")}</p>
          </div>
        </Reveal>
        <div className="mt-12 max-w-2xl mx-auto space-y-3">
          {[
            { i: "💊", t: lang === "fr" ? "Prescription médicale → remboursement partiel Sécu (LPP)" : "Prescription → partial reimbursement (LPP)" },
            { i: "🏥", t: lang === "fr" ? "Mutuelle → complément selon contrat" : "Private insurance → complement per plan" },
            { i: "💼", t: lang === "fr" ? "Contexte emploi RQTH → jusqu'à 90% via Agefiph ou FIPHFP" : "RQTH work context → up to 90% via Agefiph/FIPHFP" },
          ].map((r, i) => (
            <div key={i} className="p-4 rounded-xl flex items-center gap-4 border border-white/5" style={{ backgroundColor: "#12183A" }}>
              <div className="text-2xl">{r.i}</div>
              <div className="text-white/90 text-sm sm:text-base">{r.t}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button onClick={() => setFormOpen(true)} className="btn-gold btn-gold-hover text-lg px-8 py-4">{t("cta_arrow")}</button>
          <p className="mt-4 text-sm" style={{ color: "#A0A8C0" }}>{t("hero_note")}</p>
        </div>
      </SectionAlt>

      {/* BLOC 12 — FAQ RESUME */}
      <SectionAlt alt>
        <Reveal><h2 className="text-3xl sm:text-4xl text-center text-white">{t("faq_short_title")}</h2></Reveal>
        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {faqShort.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/5" style={{ backgroundColor: "#0D0D29" }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left text-white">
                <span className="font-medium">{f.q}</span>
                <span className="text-xl shrink-0 ml-4" style={{ color: "#E8C170" }}>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <div className="px-5 pb-5" style={{ color: "#A0A8C0" }}>{f.a}</div>}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/faq" className="text-sm font-bold" style={{ color: "#E8C170" }}>{t("faq_all")}</a>
        </div>
      </SectionAlt>

      {/* BLOC 13 — HISTOIRE */}
      <SectionAlt>
        <Reveal><h2 className="text-3xl sm:text-4xl text-center text-white">{t("story_title")}</h2></Reveal>
        <div className="mt-10 max-w-[680px] mx-auto space-y-5 text-white/90" style={{ lineHeight: 1.8 }}>
          <p>En 2020, j'ai subi une lourde opération pour retirer le cancer des os qui rongeait mon bassin. Elle fut un succès — et le début d'un nouveau parcours, à la fois difficile et joyeux.</p>
          <p>La maladie m'a beaucoup pris. Mais elle m'a aussi appris à mesurer ce qui compte.</p>
          <p>L'une des choses les plus dures : ne pas pouvoir porter mon fils quand il avait un ou deux ans. Je devais négocier pour qu'il me suive de son plein gré. Disons qu'il est coriace en négociation.</p>
          <p>Peu à peu, le sentiment d'impuissance est devenu familier. Et il n'existait aucune solution adaptée.</p>
          <p>Alors j'en ai inventé une.</p>
          <p>En tant que roboticien, j'ai d'abord créé des prototypes motorisés. Puis j'ai réalisé qu'un dispositif passif pouvait suffire — et c'est là que les choses sont devenues vraiment intéressantes.</p>
          <p>Après de nombreuses itérations : legmio. Une béquille qui libère la main.</p>
          <p>Je l'utilise quotidiennement depuis plus d'un an. Je peux porter mon fils — même s'il a grandi — et sa petite sœur, arrivée entre-temps. Je fais les courses sans sac à dos. Je porte mon plateau à la cantine.</p>
          <p>Le gain d'autonomie est énorme.</p>
          <p className="text-xl font-display font-bold" style={{ color: "#E8C170" }}>Et f*ck cancer.</p>
        </div>
        <div className="mt-10 text-center">
          <p className="font-bold text-white">{t("sig_name")}</p>
          <p className="text-sm" style={{ color: "#A0A8C0" }}>{t("sig_role")}</p>
        </div>
      </SectionAlt>

      {/* BLOC 14 — EQUIPE */}
      <SectionAlt alt>
        <Reveal><h2 className="text-3xl sm:text-4xl text-center text-white">{t("team_title")}</h2></Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { name: "Nicolas Perrin-Gilbert", role: "Co-fondateur & CEO", sub: "Chercheur CNRS · ISIR, Sorbonne Université · Robotique & biomécanique" },
            { name: "Benjamin Rajjou", role: "Co-fondateur & CRO", sub: "Go-to-market · Partenariats · Stratégie commerciale" },
          ].map((m, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="p-8 rounded-2xl text-center border border-white/5" style={{ backgroundColor: "#0D0D29" }}>
                <div className="w-24 h-24 rounded-full mx-auto" style={{ backgroundColor: "rgba(232,193,112,0.15)", border: "1px solid rgba(232,193,112,0.3)" }} />
                <p className="mt-4 font-bold text-white text-lg">{m.name}</p>
                <p className="text-sm" style={{ color: "#E8C170" }}>{m.role}</p>
                <p className="mt-2 text-sm" style={{ color: "#A0A8C0" }}>{m.sub}</p>
                <a href="#" className="inline-block mt-4 text-xs" style={{ color: "#A0A8C0" }}>in →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionAlt>

      {/* BLOC 15 — CTA FINAL */}
      <SectionAlt>
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl text-white leading-tight">
              {t("final_1")}<br />{t("final_2")}<br /><span style={{ color: "#E8C170" }}>{t("final_3")}</span>
            </h2>
            <div className="mt-10"><CTAButton size="lg">{t("cta_arrow")}</CTAButton></div>
            <p className="mt-4 text-sm" style={{ color: "#A0A8C0" }}>{t("hero_note")}</p>
            <div className="mt-8 flex justify-center gap-6 text-sm" style={{ color: "#A0A8C0" }}>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">TikTok</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </SectionAlt>

      {/* BLOC 16 — REVENDEURS */}
      <section className="py-10 px-4" style={{ backgroundColor: "#0D0D29" }}>
        <p className="text-center text-sm" style={{ color: "#A0A8C0" }}>{t("reseller")}</p>
      </section>

      {/* BLOC 17 — NEWSLETTER */}
      <SectionAlt alt>
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl text-white">{t("news_title")}</h2>
            <p className="mt-4" style={{ color: "#A0A8C0" }}>{t("news_sub")}</p>
            <form onSubmit={(e) => { e.preventDefault(); alert(lang === "fr" ? "Merci ! On te tient au courant." : "Thanks! We'll keep you posted."); }} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input type="email" required placeholder={t("news_placeholder")} className="flex-1 px-5 py-3 rounded-full border text-white placeholder:text-white/40 outline-none" style={{ backgroundColor: "#0D0D29", borderColor: "rgba(255,255,255,0.1)" }} />
              <button type="submit" className="btn-gold btn-gold-hover">{t("news_cta")}</button>
            </form>
            <p className="mt-4 text-xs" style={{ color: "#A0A8C0" }}>{t("news_spam")}</p>
          </div>
        </Reveal>
      </SectionAlt>

      {formOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.7)" }} onClick={() => setFormOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} className="max-w-lg w-full p-8 rounded-2xl" style={{ backgroundColor: "#12183A", border: "1px solid rgba(232,193,112,0.3)" }}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl text-white">{t("cta_interested")}</h3>
              <button onClick={() => setFormOpen(false)} className="text-white/60 text-2xl leading-none">×</button>
            </div>
            <p className="text-sm mb-6" style={{ color: "#A0A8C0" }}>
              {lang === "fr" ? "Rejoins la liste d'attente. Aucun prélèvement maintenant." : "Join the waitlist. No payment now."}
            </p>
            <div id={lang === "fr" ? "HUBSPOT_FORM_ID_FR" : "HUBSPOT_FORM_ID_EN"} className="min-h-[300px] flex items-center justify-center text-sm rounded-xl border border-dashed border-white/10" style={{ color: "#A0A8C0" }}>
              [Formulaire HubSpot — ID: {lang === "fr" ? "HUBSPOT_FORM_ID_FR" : "HUBSPOT_FORM_ID_EN"}]
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
