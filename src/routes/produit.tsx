import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IconChevron, IconCheck, IconArrowRight, IconStar } from "@/components/Icons";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { ProductFeatureGrid } from "@/routes/index";

const BG = "#FAFAF8";
const BG_ALT = "#F2F0EB";
const TEXT = "#1A1A1A";
const MUTED = "#6B6B6B";
const BORDER = "#E8E4DC";
const ACCENT = "#2D5A3D";

export const Route = createFileRoute("/produit")({
  head: () => ({
    meta: [
      { title: "legmio — La béquille" },
      { name: "description", content: "La béquille legmio, la seule béquille ergonomique mains libres. 150€ (prix estimatif). Conçue en France." },
      { property: "og:title", content: "legmio — La béquille" },
      { property: "og:description", content: "La seule béquille ergonomique qui libère les mains pendant la marche." },
    ],
  }),
  component: Produit,
});

function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b" style={{ borderColor: BORDER }}>
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-4 text-left" style={{ color: TEXT }}>
        <span className="font-semibold">{title}</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}><IconChevron size={18} /></span>
      </button>
      {open && <div className="pb-5 text-sm" style={{ color: "#333" }}>{children}</div>}
    </div>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type Review = { stars: number; title: string; quote: string; name: string; profile: string; date: string; img?: string };

function Produit() {
  const { tr, hubspotUrl } = useLanguage();
  const gallery = ["/bequille.png", "/usecase-quotidien.png", "/usecase-reeducation.png", "/usecase-emploi.png", "/usecase-parental.png"];
  const [sel, setSel] = useState(0);
  const [reviewOpen, setReviewOpen] = useState(false);

  const initialReviews: Review[] = [
    { img: "/pauline.png", stars: 5, title: tr("Une grande avancée.", "A major breakthrough."), quote: tr("Une béquille qui rend les mains libres : une grande avancée !", "A crutch that gives the patient back their hands — a major breakthrough!"), name: "Dr Pauline Coignard", profile: tr("Médecin MPR · Centre de Kerpape · Présidente APPROCHE · SOFMER", "PM&R physician · Kerpape · President APPROCHE · SOFMER"), date: tr("Mars 2026", "March 2026") },
    { img: "/selim.png", stars: 5, title: tr("Une vraie autonomie retrouvée.", "Real autonomy, back."), quote: tr("legmio m'a permis de retrouver une certaine autonomie au quotidien, notamment au travail. J'ai pu me déplacer plus facilement et réaliser seul des tâches simples mais essentielles, comme aller me faire un café :)", "legmio let me regain real day-to-day autonomy, especially at work. I could move around more easily and handle simple but essential tasks on my own — like grabbing a coffee :)"), name: "Selim", profile: tr("Rupture du ligament · 2 mois d'utilisation", "Ligament rupture · 2 months of use"), date: tr("Février 2026", "February 2026") },
    { img: "/joachim.png", stars: 5, title: tr("Autonome pendant ma convalescence.", "Autonomous through recovery."), quote: tr("Après mon opération des ligaments croisés, legmio m'a permis d'être autonome chez moi pendant toute ma convalescence. Se déplacer, porter des affaires, faire les choses seul — ça change tout quand on est immobilisé.", "After my cruciate ligament surgery, legmio kept me autonomous at home through my whole recovery. Moving around, carrying things, doing things solo — it changes everything when you're immobilized."), name: "Joachim", profile: tr("Post-opératoire ligaments croisés · Convalescence à domicile", "Post-op cruciate ligaments · Home recovery"), date: tr("Janvier 2026", "January 2026") },
  ];
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const reviewCount = reviews.length;
  const avg = reviewCount > 0 ? reviews.reduce((s, r) => s + r.stars, 0) / reviewCount : 0;
  const avgStr = avg.toFixed(1);

  const galleryPrev = () => setSel((s) => (s - 1 + gallery.length) % gallery.length);
  const galleryNext = () => setSel((s) => (s + 1) % gallery.length);

  return (
    <div style={{ backgroundColor: BG }}>
      {/* SECTION 1 — HERO PRODUIT */}
      <section style={{ backgroundColor: BG }} className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="relative rounded-2xl overflow-hidden aspect-square" style={{ backgroundColor: BG_ALT }}>
              <img src={gallery[sel]} alt="" className="w-full h-full object-contain" />
              <button aria-label="Previous" onClick={galleryPrev} className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(26,26,26,0.9)", color: "#FFF" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button aria-label="Next" onClick={galleryNext} className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(26,26,26,0.9)", color: "#FFF" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setSel(i)}
                  className="shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition"
                  style={{ borderColor: sel === i ? ACCENT : BORDER, backgroundColor: BG_ALT }}
                  aria-label={`Image ${i + 1}`}
                >
                  <img src={g} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div className="md:sticky md:top-32 md:self-start">
            <h1 className="text-4xl md:text-5xl font-display font-bold" style={{ color: TEXT }}>
              {tr("La béquille legmio", "The legmio crutch")}
            </h1>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "#333" }}>
              {tr(
                "La première béquille ergonomique mains libres avec appui avant-bras.",
                "The first hands-free ergonomic crutch with forearm support."
              )}
              <br />
              {tr(
                "Plus confortable et plus sûre, elle libère les mains lorsque c'est nécessaire et pendant les déplacements.",
                "More comfortable and safer, it frees your hands when needed and while moving around."
              )}
            </p>
            <div className="mt-4 inline-block px-3 py-1 rounded-full text-xs" style={{ backgroundColor: BG_ALT, color: TEXT }}>
              {tr("Dispositif médical CE Classe I (en cours)", "CE Class I medical device (in progress)")}
            </div>
            <button
              onClick={() => scrollTo("reviews")}
              className="mt-3 flex items-center gap-2 text-sm hover:opacity-70"
              style={{ color: TEXT }}
            >
              <div className="flex" style={{ color: ACCENT }}>
                {[0, 1, 2, 3, 4].map((i) => <IconStar key={i} size={14} />)}
              </div>
              <span className="underline" style={{ color: MUTED }}>{avgStr}/5 ({reviewCount} {tr("avis", "reviews")})</span>
            </button>
            <div className="mt-6">
              <div className="text-4xl font-display font-bold" style={{ color: TEXT }}>150€</div>
              <div className="text-sm mt-1" style={{ color: MUTED }}>({tr("prix estimatif", "estimated price")})</div>
            </div>


            <div className="mt-8">
              <Accordion title={tr("Taille", "Size")} defaultOpen>
                {tr("Taille unique — réglable pour utilisateurs 1m50 à 1m95.", "One size — adjustable for users from 1m50 to 1m95.")}
              </Accordion>
              <Accordion title={tr("Caractéristiques", "Specs")}>
                <ul className="space-y-2">
                  {[
                    [tr("Poids", "Weight"), "850g"],
                    [tr("Matériau", "Material"), tr("Aluminium", "Aluminum")],
                    [tr("Hauteur réglable", "Adjustable height"), "1m10 – 1m40"],
                    [tr("Pour", "For"), tr("utilisateurs 1m50 à 1m95", "users 1m50 to 1m95")],
                    [tr("Charge max", "Max load"), "130kg"],
                    [tr("Embouts", "Tips"), tr("interchangeables sans outil", "interchangeable, no tools")],
                    [tr("Assemblage", "Assembly"), tr("France", "France")],
                    [tr("Brevet", "Patent"), "FR2411206"],
                    [tr("Certification", "Certification"), tr("CE Classe I en cours · MDR 2017/745", "CE Class I in progress · MDR 2017/745")],
                  ].map(([k, v]) => (
                    <li key={k} className="flex justify-between gap-4"><span style={{ color: MUTED }}>{k}</span><span style={{ color: TEXT }}>{v}</span></li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title={tr("Idéal pour", "Ideal for")}>
                <ul className="space-y-2">
                  {[
                    tr("Retrouver l'usage complet de ses mains au quotidien", "Regain full use of your hands every day"),
                    tr("Réduire les douleurs aux épaules et aux poignets", "Reduce shoulder and wrist pain"),
                    tr("Maintenir son autonomie en famille, au travail, en déplacement", "Stay independent at home, at work, on the go"),
                    tr("Rééducation post-opératoire sans contrainte", "Post-op rehab without strain"),
                  ].map((i) => (
                    <li key={i} className="flex gap-2" style={{ color: ACCENT }}><IconCheck size={16} /> <span style={{ color: "#333" }}>{i}</span></li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title={tr("Ce qui est inclus", "What's included")}>
                <ul className="space-y-1">
                  <li>· {tr("1 béquille legmio (disponible pour main droite ou gauche)", "1 legmio crutch (available for right or left hand)")}</li>
                  <li>· {tr("1 embout (remplaçable)", "1 tip (replaceable)")}</li>
                  <li>· {tr("1 notice de réglage", "1 adjustment guide")}</li>
                  <li>· {tr("Garantie 2 ans", "2-year warranty")}</li>
                </ul>
              </Accordion>

              <a href={hubspotUrl} target="_blank" rel="noreferrer" className="btn-dark btn-dark-hover w-full mt-8">
                {tr("Je suis intéressé(e)", "I'm interested")} <IconArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — 3D ROTATION */}
      <section style={{ backgroundColor: "#111111" }} className="py-24 relative overflow-hidden">
        <div className="max-w-3xl mx-auto flex items-center justify-center h-[500px] relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.10), transparent 70%)" }} />
          </div>
          <div className="crutch-3d relative" style={{ perspective: "1000px" }}>
            <img
              src="/bequille.png"
              alt="legmio"
              style={{
                height: "420px",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
                animation: "crutch-spin 12s linear infinite, crutch-float 6s ease-in-out infinite",
              }}
            />
          </div>
        </div>
        <style>{`
          @keyframes crutch-spin { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
          @keyframes crutch-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
          .crutch-3d img { animation: crutch-spin 12s linear infinite; }
          @media (prefers-reduced-motion: reduce) {
            .crutch-3d img { animation: none !important; }
          }
        `}</style>
      </section>

      {/* SECTION 3 — FEATURES GRID (static) */}
      <section id="features" style={{ backgroundColor: BG }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl" style={{ color: TEXT }}>{tr("Conçue pour durer.", "Built to last.")}</h2>
          </Reveal>
          <div className="mt-10">
            <ProductFeatureGrid />
          </div>
        </div>
      </section>

      {/* SECTION 4 — TÉMOIGNAGES */}
      <section id="reviews" style={{ backgroundColor: BG_ALT }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl" style={{ color: TEXT }}>{tr("Témoignages", "Testimonials")}</h2>
              <div className="mt-4 flex items-baseline gap-3">
                <div className="text-5xl font-display font-bold" style={{ color: TEXT }}>{avgStr}/5</div>
                <div style={{ color: MUTED }}>({reviewCount} {tr("avis", "reviews")})</div>
              </div>
            </div>
            <div className="md:text-right">
              <button onClick={() => setReviewOpen(true)} className="btn-outline-dark">
                {tr("Laisser un avis", "Leave a review")}
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="card-soft p-5">
                <div className="flex gap-0.5" style={{ color: ACCENT }}>
                  {[0, 1, 2, 3, 4].map((k) => <IconStar key={k} size={14} filled={k < r.stars} />)}
                </div>
                <h3 className="mt-3 font-display font-bold text-lg" style={{ color: TEXT }}>{r.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "#333" }}>{r.quote}</p>
                <div className="mt-4 flex items-center gap-3">
                  {r.img ? (
                    <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: ACCENT, color: "#FFF" }}>{r.name.charAt(0).toUpperCase()}</div>
                  )}
                  <div className="text-sm">
                    <div className="font-bold" style={{ color: TEXT }}>{r.name}</div>
                    <div style={{ color: MUTED }}>{r.profile}{r.profile ? " · " : ""}{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href={hubspotUrl} target="_blank" rel="noreferrer" className="btn-dark btn-dark-hover inline-flex">
              {tr("Je suis intéressé(e)", "I'm interested")} <IconArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>


      {/* SECTION 5 — FAQ PRODUIT */}
      <section style={{ backgroundColor: BG }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl" style={{ color: TEXT }}>{tr("Questions fréquentes", "Frequently asked questions")}</h2>
            <a href="/faq" className="text-sm underline" style={{ color: TEXT }}>{tr("Voir toutes les questions", "See all questions")}</a>
          </div>
          <div>
            {[
              [tr("legmio est-elle réglable ?", "Is legmio adjustable?"), tr("Oui. Deux points de réglage indépendants : la poignée et l'appui coude. Universelle de 1m50 à 1m95.", "Yes. Two independent adjustment points: grip and elbow rest. Universal from 1m50 to 1m95.")],
              [tr("Faut-il de la force dans les mains ?", "Do I need hand strength?"), tr("Non. Un simple appui du poignet sur l'avant-bras suffit. Pas besoin de fermer la main.", "No. A simple wrist rest on the forearm is enough. No need to grip.")],
              [tr("Combien de temps pour s'adapter ?", "How long does it take to adapt?"), tr("Environ 1 à 2 semaines. La plupart des utilisateurs trouvent leur rythme en quelques jours.", "About 1 to 2 weeks. Most users find their rhythm within a few days.")],
              [tr("Est-elle remboursée ?", "Is it reimbursed?"), tr("Partiellement sur prescription médicale (LPPR). En contexte emploi RQTH, prise en charge jusqu'à 90% via Agefiph ou FIPHFP.", "Partially on medical prescription (LPPR). In an RQTH employment context, up to 90% covered via Agefiph or FIPHFP.")],
              [tr("Quel est le prix ?", "What's the price?"), tr("150€ (prix estimatif).", "€150 (estimated price).")],
              [tr("Où est-elle fabriquée ?", "Where is it made?"), tr("Conçue et assemblée en France. Structure en aluminium.", "Designed and assembled in France. Aluminum frame.")],
              [tr("Convient-elle aux utilisateurs d'une seule béquille ?", "Suitable for single-crutch users?"), tr("Oui. legmio est disponible à l'unité, droite ou gauche.", "Yes. legmio is sold individually, right or left.")],
            ].map(([q, a], i) => (
              <Accordion key={i} title={q as string}>{a}</Accordion>
            ))}
          </div>
        </div>
      </section>

      {reviewOpen && (
        <ReviewModal
          onClose={() => setReviewOpen(false)}
          onSubmit={(r) => setReviews((prev) => [r, ...prev])}
        />
      )}
    </div>
  );
}


function ReviewModal({ onClose, onSubmit }: { onClose: () => void; onSubmit: (r: Review) => void }) {
  const { tr, lang } = useLanguage();
  const [stars, setStars] = useState(5);
  const [firstName, setFirstName] = useState("");
  const [profile, setProfile] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    const date = now.toLocaleDateString(lang === "en" ? "en-US" : "fr-FR", { month: "long", year: "numeric" });
    onSubmit({
      stars,
      title: msg.split(".")[0].slice(0, 60) || tr("Nouveau retour", "New feedback"),
      quote: msg,
      name: firstName,
      profile,
      date,
    });
    setSent(true);
  };
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-display font-bold" style={{ color: TEXT }}>{tr("Laisser un avis", "Leave a review")}</h3>
          <button onClick={onClose} aria-label="Close" style={{ color: TEXT }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6" /></svg>
          </button>
        </div>
        {sent ? (
          <div className="py-6 text-center">
            <p style={{ color: TEXT }}>{tr("Merci pour ton avis !", "Thanks for your review!")}</p>
            <button onClick={onClose} className="btn-dark btn-dark-hover mt-6">{tr("Fermer", "Close")}</button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div>
              <div className="text-sm mb-2" style={{ color: TEXT }}>{tr("Note", "Rating")}</div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button type="button" key={n} onClick={() => setStars(n)} aria-label={`${n} stars`} style={{ color: n <= stars ? ACCENT : "#DDD" }}>
                    <IconStar size={26} filled={true} />
                  </button>
                ))}
              </div>
            </div>
            <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={tr("Prénom", "First name")} className="w-full px-4 py-3 rounded-full border outline-none" style={{ borderColor: BORDER, color: TEXT }} />
            <input value={profile} onChange={(e) => setProfile(e.target.value)} placeholder={tr("Profil (ex. Post-op, MPR…)", "Profile (e.g. Post-op, PM&R…)")} className="w-full px-4 py-3 rounded-full border outline-none" style={{ borderColor: BORDER, color: TEXT }} />
            <textarea required value={msg} onChange={(e) => setMsg(e.target.value)} placeholder={tr("Ton avis…", "Your review…")} rows={4} className="w-full px-4 py-3 rounded-2xl border outline-none" style={{ borderColor: BORDER, color: TEXT }} />
            <button type="submit" className="btn-dark btn-dark-hover w-full">{tr("Envoyer", "Send")} <IconArrowRight size={16} /></button>
          </form>
        )}
      </div>
    </div>
  );
}
