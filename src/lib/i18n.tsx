import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, string>;

const fr: Dict = {
  banner: "Commercialisation 2027 · Prise en charge jusqu'à 90% via Agefiph · Rejoins la liste d'attente →",
  nav_product: "Produit",
  nav_faq: "FAQ",
  nav_blog: "Blog",
  cta_interested: "Je suis intéressé",
  cta_arrow: "Je suis intéressé →",
  hero_label: "LA BÉQUILLE NOUVELLE GÉNÉRATION",
  hero_title_1: "La seule béquille",
  hero_title_2: "conçue pour durer.",
  hero_sub_1: "Pas juste ta rééducation.",
  hero_sub_2: "Ta vie.",
  hero_note: "Commercialisation 2027 · Aucun prélèvement maintenant",
  hero_badge: "💼 Prise en charge jusqu'à 90% via Agefiph (RQTH)",

  problem_title: "Tu connais déjà le problème. Tu le vis.",
  problem_end: "On a conçu legmio parce qu'on l'a vécu.",

  video_title: "Vois la différence en 60 secondes.",
  video_sub: "legmio en situation réelle — quotidien, travail, rééducation.",

  media_title: "Ils l'ont vu. Ils en parlent.",

  testi_title: "Ils l'utilisent. Ils témoignent.",

  wall_title: "Ils attendent legmio. Tu te reconnais ?",
  wall_cta: "Vous aussi ? → Je suis intéressé",

  usecase_cta: "Tu te reconnais ?",

  desc_title: "legmio. Pensée jusqu'au dernier centimètre.",

  cred_title: "Née de la recherche. Reconnue sur le terrain.",
  cred_quote: "Une béquille qui rend les mains au patient : une grande avancée !",
  cred_author: "Dr Pauline Coignard",
  cred_author_sub: "Médecin MPR · Centre de Kerpape · Présidente APPROCHE · SOFMER",

  roadmap_title: "Où en est-on ?",
  roadmap_end_1: "En attendant, rejoins la liste d'attente.",
  roadmap_end_2: "Les premiers seront les premiers servis.",

  price_ttc: "150€ TTC",
  price_ship: "Livraison incluse",

  faq_short_title: "Les questions qu'on nous pose le plus.",
  faq_all: "→ Voir toutes les questions",

  story_title: "Pourquoi legmio existe.",
  sig_name: "Nicolas Perrin-Gilbert",
  sig_role: "Co-fondateur & CEO · Chercheur CNRS, ISIR Sorbonne Université",

  team_title: "Derrière legmio.",

  final_1: "La seule béquille conçue pour durer.",
  final_2: "Pas juste ta rééducation. Ta vie.",
  final_3: "Sois parmi les premiers.",

  reseller: "Professionnel de santé ou distributeur ? Contactez-nous → contact@legmio.com",

  news_title: "Suis l'avancement de legmio.",
  news_sub: "Lancements, tests, commercialisation — reçois les nouvelles en avant-première.",
  news_placeholder: "Ton adresse email",
  news_cta: "Je m'inscris →",
  news_spam: "Aucun spam. Désabonnement en 1 clic.",

  footer_tag: "La béquille qui libère les mains.",
  footer_bottom: "legmio © 2026 · Un produit miobility · ISIR · Sorbonne Université · CNRS",
};

const en: Dict = {
  banner: "Available 2027 · Up to 90% covered via Agefiph · Join the waitlist →",
  nav_product: "Product",
  nav_faq: "FAQ",
  nav_blog: "Blog",
  cta_interested: "I'm interested",
  cta_arrow: "I'm interested →",
  hero_label: "THE NEXT-GENERATION CRUTCH",
  hero_title_1: "The only crutch",
  hero_title_2: "designed to last.",
  hero_sub_1: "Not just your recovery.",
  hero_sub_2: "Your life.",
  hero_note: "Available 2027 · No payment now",
  hero_badge: "💼 Up to 90% covered via Agefiph (RQTH)",

  problem_title: "You already know the problem. You live it.",
  problem_end: "We built legmio because we lived it.",

  video_title: "See the difference in 60 seconds.",
  video_sub: "legmio in real life — daily, work, recovery.",

  media_title: "They saw it. They talk about it.",

  testi_title: "They use it. They speak.",

  wall_title: "They're waiting for legmio. Do you recognize yourself?",
  wall_cta: "You too? → I'm interested",

  usecase_cta: "Sounds like you?",

  desc_title: "legmio. Designed to the last centimeter.",

  cred_title: "Born from research. Trusted in the field.",
  cred_quote: "A crutch that gives patients their hands back: a real breakthrough!",
  cred_author: "Dr Pauline Coignard",
  cred_author_sub: "PM&R Physician · Kerpape Center · President APPROCHE · SOFMER",

  roadmap_title: "Where are we?",
  roadmap_end_1: "Meanwhile, join the waitlist.",
  roadmap_end_2: "First in, first served.",

  price_ttc: "€150 incl. VAT",
  price_ship: "Shipping included",

  faq_short_title: "The questions we get the most.",
  faq_all: "→ See all questions",

  story_title: "Why legmio exists.",
  sig_name: "Nicolas Perrin-Gilbert",
  sig_role: "Co-founder & CEO · CNRS Researcher, ISIR Sorbonne Université",

  team_title: "Behind legmio.",

  final_1: "The only crutch designed to last.",
  final_2: "Not just your recovery. Your life.",
  final_3: "Be among the first.",

  reseller: "Healthcare professional or distributor? Contact us → contact@legmio.com",

  news_title: "Follow legmio's progress.",
  news_sub: "Launches, trials, commercialization — get the news first.",
  news_placeholder: "Your email address",
  news_cta: "Sign me up →",
  news_spam: "No spam. Unsubscribe in one click.",

  footer_tag: "The crutch that frees your hands.",
  footer_bottom: "legmio © 2026 · A miobility product · ISIR · Sorbonne Université · CNRS",
};

const dicts: Record<Lang, Dict> = { fr, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const LangCtx = createContext<Ctx>({ lang: "fr", setLang: () => {}, t: (k) => k });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("legmio-lang") as Lang | null) : null;
    if (saved === "fr" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("legmio-lang", l);
  };
  const t = (k: string) => dicts[lang][k] ?? k;
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLanguage() {
  return useContext(LangCtx);
}
