import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IconChevron, IconCheck, IconArrowRight, IconStar } from "@/components/Icons";
import { useLanguage } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { FeaturesCarousel } from "@/routes/index";

export const Route = createFileRoute("/produit")({
  head: () => ({
    meta: [
      { title: "legmio — Fiche produit" },
      { name: "description", content: "legmio, la seule béquille ergonomique mains libres. 150€ TTC (prix estimatif), livraison incluse. Conçue en France." },
      { property: "og:title", content: "legmio — Fiche produit" },
      { property: "og:description", content: "Pensée jusqu'au dernier centimètre." },
    ],
  }),
  component: Produit,
});

function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b" style={{ borderColor: "#EEEEEE" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-4 text-left" style={{ color: "#111" }}>
        <span className="font-semibold">{title}</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}><IconChevron size={18} /></span>
      </button>
      {open && <div className="pb-5 text-sm" style={{ color: "#444" }}>{children}</div>}
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
    { img: "/sophie.jpg", stars: 5, title: tr("Ça change tout.", "It changes everything."), quote: tr("Je béquille depuis 3 ans et je n'avais jamais imaginé pouvoir porter mon fils. Avec legmio c'est possible.", "3 years on crutches — I never thought I could carry my son. With legmio I can."), name: "Sophie", profile: tr("Sclérose en plaques", "Multiple sclerosis"), date: tr("Mars 2026", "March 2026") },
    { img: "/marc.jpg", stars: 5, title: tr("Rééducation transformée.", "Rehab transformed."), quote: tr("6 mois de rééducation post-opératoire. Mes épaules n'ont pas souffert. Indispensable.", "6 months of post-op rehab. My shoulders were fine. Essential."), name: "Marc", profile: tr("Post-opératoire hanche", "Post-op hip"), date: tr("Février 2026", "February 2026") },
    { img: "/camille.jpg", stars: 5, title: tr("Enfin une vraie solution.", "Finally, a real solution."), quote: tr("J'avais abandonné l'idée d'avoir les mains libres. legmio m'a prouvé que c'était possible.", "I'd given up on having free hands. legmio proved me wrong."), name: "Camille", profile: tr("Sarcome d'Ewing", "Ewing sarcoma"), date: tr("Janvier 2026", "January 2026") },
  ];
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const reviewCount = reviews.length;
  const avg = reviewCount > 0 ? reviews.reduce((s, r) => s + r.stars, 0) / reviewCount : 0;
  const avgStr = avg.toFixed(1);

  const galleryPrev = () => setSel((s) => (s - 1 + gallery.length) % gallery.length);
  const galleryNext = () => setSel((s) => (s + 1) % gallery.length);

  return (
    <div>
      {/* SECTION 1 — HERO PRODUIT */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="relative rounded-2xl overflow-hidden aspect-square" style={{ backgroundColor: "#F5F5F5" }}>
              <img src={gallery[sel]} alt="" className="w-full h-full object-contain" />
              <button aria-label="Previous" onClick={galleryPrev} className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(17,17,17,0.9)", color: "#FFF" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button aria-label="Next" onClick={galleryNext} className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(17,17,17,0.9)", color: "#FFF" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
              </button>
            </div>
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setSel(i)}
                  className="shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition"
                  style={{ borderColor: sel === i ? "#111" : "#EEEEEE", backgroundColor: "#F5F5F5" }}
                  aria-label={`Image ${i + 1}`}
                >
                  <img src={g} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div className="md:sticky md:top-32 md:self-start">
            <h1 className="text-4xl md:text-5xl font-display font-bold" style={{ color: "#111" }}>
              {tr("La béquille legmio", "The legmio crutch")}
            </h1>
            <div className="mt-3 inline-block px-3 py-1 rounded-full text-xs" style={{ backgroundColor: "#F5F5F5", color: "#111" }}>
              {tr("Dispositif médical CE Classe I (en cours)", "CE Class I medical device (in progress)")}
            </div>
            <button
              onClick={() => scrollTo("reviews")}
              className="mt-3 flex items-center gap-2 text-sm hover:opacity-70"
              style={{ color: "#111" }}
            >
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => <IconStar key={i} size={14} />)}
              </div>
              <span className="underline" style={{ color: "#666" }}>4.9/5 (12 {tr("avis", "reviews")})</span>
            </button>
            <div className="mt-6 flex items-baseline gap-3">
              <div className="text-4xl font-display font-bold" style={{ color: "#111" }}>150€ TTC</div>
              <div className="text-sm" style={{ color: "#666" }}>({tr("prix estimatif", "estimated price")})</div>
            </div>
            <div className="text-sm" style={{ color: "#666" }}>{tr("Livraison incluse", "Free shipping")}</div>
            <p className="mt-6 text-base" style={{ color: "#333" }}>
              {tr(
                "La seule béquille ergonomique mains libres. Conçue pour durer — pas juste ta rééducation, ta vie.",
                "The only hands-free ergonomic crutch. Built to last — not just your rehab, your life."
              )}
            </p>

            <div className="mt-8">
              <Accordion title={tr("À propos", "About")} defaultOpen>
                {tr(
                  "L'appui avant-bras redistribue la charge et libère complètement la main. Conçue par des roboticiens issus du CNRS et de l'ISIR Sorbonne Université.",
                  "The forearm support redistributes the load and fully frees the hand. Designed by roboticists from CNRS and ISIR Sorbonne Université."
                )}
              </Accordion>
              <Accordion title={tr("Taille", "Size")}>
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
                    <li key={k} className="flex justify-between gap-4"><span style={{ color: "#666" }}>{k}</span><span style={{ color: "#111" }}>{v}</span></li>
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
                    <li key={i} className="flex gap-2"><IconCheck size={16} /> {i}</li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title={tr("Ce qui est inclus", "What's included")}>
                <ul className="space-y-1">
                  <li>· {tr("1 béquille legmio (droite ou gauche au choix)", "1 legmio crutch (right or left)")}</li>
                  <li>· {tr("2 embouts (intérieur + extérieur)", "2 tips (indoor + outdoor)")}</li>
                  <li>· {tr("Notice de montage", "Assembly guide")}</li>
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

      {/* SECTION 3 — FEATURES WHOOP-STYLE */}
      <section id="features" style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl" style={{ color: "#111" }}>{tr("Conçue pour durer.", "Built to last.")}</h2>
          </Reveal>
          <ProductFeatures />
        </div>
      </section>

      {/* SECTION 4 — AVIS CLIENTS */}
      <section id="reviews" style={{ backgroundColor: "#F5F5F5" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl" style={{ color: "#111" }}>{tr("Avis clients", "Customer reviews")}</h2>
              <div className="mt-4 flex items-baseline gap-3">
                <div className="text-5xl font-display font-bold" style={{ color: "#111" }}>4.9/5</div>
                <div style={{ color: "#666" }}>(12 {tr("avis", "reviews")})</div>
              </div>
            </div>
            <div className="md:text-right">
              <button onClick={() => setReviewOpen(true)} className="btn-outline-dark">
                {tr("Laisser un avis", "Leave a review")}
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/sophie.jpg", t: tr("Ça change tout.", "It changes everything."), q: tr("Je béquille depuis 3 ans et je n'avais jamais imaginé pouvoir porter mon fils. Avec legmio c'est possible.", "3 years on crutches — I never thought I could carry my son. With legmio I can."), n: "Sophie", p: tr("Sclérose en plaques", "Multiple sclerosis"), d: tr("Mars 2026", "March 2026") },
              { img: "/marc.jpg", t: tr("Rééducation transformée.", "Rehab transformed."), q: tr("6 mois de rééducation post-opératoire. Mes épaules n'ont pas souffert. Indispensable.", "6 months of post-op rehab. My shoulders were fine. Essential."), n: "Marc", p: tr("Post-opératoire hanche", "Post-op hip"), d: tr("Février 2026", "February 2026") },
              { img: "/camille.jpg", t: tr("Enfin une vraie solution.", "Finally, a real solution."), q: tr("J'avais abandonné l'idée d'avoir les mains libres. legmio m'a prouvé que c'était possible.", "I'd given up on having free hands. legmio proved me wrong."), n: "Camille", p: tr("Sarcome d'Ewing", "Ewing sarcoma"), d: tr("Janvier 2026", "January 2026") },
            ].map((r, i) => (
              <div key={i} className="card-soft p-6">
                <div className="flex gap-0.5" style={{ color: "#111" }}>
                  {[0, 1, 2, 3, 4].map((k) => <IconStar key={k} size={14} />)}
                </div>
                <h3 className="mt-3 font-display font-bold text-lg" style={{ color: "#111" }}>{r.t}</h3>
                <p className="mt-2 text-sm" style={{ color: "#333" }}>{r.q}</p>
                <div className="mt-4 flex items-center gap-3">
                  <img src={r.img} alt={r.n} className="w-12 h-12 rounded-full object-cover" />
                  <div className="text-sm">
                    <div className="font-bold" style={{ color: "#111" }}>{r.n}</div>
                    <div style={{ color: "#666" }}>{r.p} · {r.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FAQ PRODUIT */}
      <section style={{ backgroundColor: "#FFFFFF" }} className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <h2 className="text-3xl md:text-4xl" style={{ color: "#111" }}>{tr("Questions fréquentes", "Frequently asked questions")}</h2>
            <a href="/faq" className="text-sm underline" style={{ color: "#111" }}>{tr("Voir toutes les questions", "See all questions")}</a>
          </div>
          <div>
            {[
              [tr("legmio est-elle réglable ?", "Is legmio adjustable?"), tr("Oui. Deux points de réglage indépendants : la poignée et l'appui coude. Universelle de 1m50 à 1m95.", "Yes. Two independent adjustment points: grip and elbow rest. Universal from 1m50 to 1m95.")],
              [tr("Faut-il de la force dans les mains ?", "Do I need hand strength?"), tr("Non. Un simple appui du poignet sur l'avant-bras suffit. Pas besoin de fermer la main.", "No. A simple wrist rest on the forearm is enough. No need to grip.")],
              [tr("Combien de temps pour s'adapter ?", "How long does it take to adapt?"), tr("Environ 1 à 2 semaines. La plupart des utilisateurs trouvent leur rythme en quelques jours.", "About 1 to 2 weeks. Most users find their rhythm within a few days.")],
              [tr("Est-elle remboursée ?", "Is it reimbursed?"), tr("Partiellement sur prescription médicale (LPPR). En contexte emploi RQTH, prise en charge jusqu'à 90% via Agefiph ou FIPHFP.", "Partially on medical prescription (LPPR). In an RQTH employment context, up to 90% covered via Agefiph or FIPHFP.")],
              [tr("Quel est le prix ?", "What's the price?"), tr("150€ TTC (prix estimatif), livraison incluse.", "€150 incl. VAT (estimated price), shipping included.")],
              [tr("Où est-elle fabriquée ?", "Where is it made?"), tr("Conçue et assemblée en France. Structure en aluminium.", "Designed and assembled in France. Aluminum frame.")],
              [tr("Convient-elle aux utilisateurs d'une seule béquille ?", "Suitable for single-crutch users?"), tr("Oui. legmio est disponible à l'unité, droite ou gauche.", "Yes. legmio is sold individually, right or left.")],
            ].map(([q, a], i) => (
              <Accordion key={i} title={q as string}>{a}</Accordion>
            ))}
          </div>
        </div>
      </section>

      {reviewOpen && <ReviewModal onClose={() => setReviewOpen(false)} />}
    </div>
  );
}

function ProductFeatures() {
  const { tr } = useLanguage();
  const items = [
    { t: tr("Mains libres", "Hands free"), img: "/usecase-quotidien.png", d: tr("L'appui avant-bras redistribue entièrement la charge. Ta main est libre — pour porter, travailler, tenir ton enfant.", "The forearm support fully redistributes the load. Your hand is free.") },
    { t: tr("Appui avant-bras ergonomique", "Ergonomic forearm rest"), img: "/bequille.png", d: tr("Conçue pour la position naturelle du poignet. Réduit les contraintes à la prise en main.", "Designed for natural wrist position. Reduces grip strain.") },
    { t: tr("Système de réglage", "Adjustment system"), img: "/bequille.png", d: tr("Deux points de réglage indépendants. Universelle de 1m50 à 1m95. Sans outil.", "Two independent adjustment points. Fits 1m50 to 1m95. No tools.") },
    { t: tr("Embout interchangeable", "Interchangeable tip"), img: "/bequille.png", d: tr("Tu le changes seul, sans outil. Intérieur, extérieur, usure — toujours la bonne accroche.", "Change it yourself, no tools. Indoors, outdoors — always the right grip.") },
    { t: tr("Position de repos", "Rest position"), img: "/bequille.png", d: tr("legmio tient debout contre un mur et ne tombe pas.", "legmio stands against a wall without falling.") },
    { t: tr("Structure légère", "Lightweight frame"), img: "/bequille.png", d: tr("850g. Robuste. Assemblée en France pour durer dans le temps.", "850g. Robust. Assembled in France to last.") },
  ];
  const [i, setI] = useState(0);
  const s = items[i];
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-[30%_70%] gap-10 items-center">
      <ul className="space-y-3">
        {items.map((it, k) => (
          <li key={k}>
            <button
              onClick={() => setI(k)}
              className="text-left text-lg transition"
              style={{
                color: k === i ? "#111111" : "#BBBBBB",
                fontWeight: k === i ? 700 : 500,
              }}
            >
              {it.t}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <div className="rounded-2xl overflow-hidden bg-[#F5F5F5] aspect-[4/3]">
          <img src={s.img} alt={s.t} className="w-full h-full object-contain" />
        </div>
        <h3 className="mt-6 text-2xl md:text-3xl font-display font-bold" style={{ color: "#111" }}>{s.t}</h3>
        <p className="mt-3" style={{ color: "#444" }}>{s.d}</p>
      </div>
    </div>
  );
}

function ReviewModal({ onClose }: { onClose: () => void }) {
  const { tr } = useLanguage();
  const [stars, setStars] = useState(5);
  const [firstName, setFirstName] = useState("");
  const [profile, setProfile] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-display font-bold" style={{ color: "#111" }}>{tr("Laisser un avis", "Leave a review")}</h3>
          <button onClick={onClose} aria-label="Close" style={{ color: "#111" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6" /></svg>
          </button>
        </div>
        {sent ? (
          <div className="py-6 text-center">
            <p style={{ color: "#111" }}>{tr("Merci pour ton avis !", "Thanks for your review!")}</p>
            <button onClick={onClose} className="btn-dark btn-dark-hover mt-6">{tr("Fermer", "Close")}</button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
            <div>
              <div className="text-sm mb-2" style={{ color: "#111" }}>{tr("Note", "Rating")}</div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button type="button" key={n} onClick={() => setStars(n)} aria-label={`${n} stars`} style={{ color: n <= stars ? "#111" : "#DDD" }}>
                    <IconStar size={26} filled={true} />
                  </button>
                ))}
              </div>
            </div>
            <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={tr("Prénom", "First name")} className="w-full px-4 py-3 rounded-full border outline-none focus:border-black" style={{ borderColor: "#EEE", color: "#111" }} />
            <input value={profile} onChange={(e) => setProfile(e.target.value)} placeholder={tr("Profil (ex. Post-op, MPR…)", "Profile (e.g. Post-op, PM&R…)")} className="w-full px-4 py-3 rounded-full border outline-none focus:border-black" style={{ borderColor: "#EEE", color: "#111" }} />
            <textarea required value={msg} onChange={(e) => setMsg(e.target.value)} placeholder={tr("Ton avis…", "Your review…")} rows={4} className="w-full px-4 py-3 rounded-2xl border outline-none focus:border-black" style={{ borderColor: "#EEE", color: "#111" }} />
            <button type="submit" className="btn-dark btn-dark-hover w-full">{tr("Envoyer", "Send")} <IconArrowRight size={16} /></button>
          </form>
        )}
      </div>
    </div>
  );
}
