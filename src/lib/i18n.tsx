import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

export const HUBSPOT_FR = "https://fd623.share-eu1.hsforms.com/2TRovgVWcTMydP9AzUTJZUQ";
export const HUBSPOT_EN = "https://fd623.share-eu1.hsforms.com/2ApzYviPbRnyLmAQh5YUR5Q";

type Dict = Record<string, string>;

const fr: Dict = {
  banner_a: "Commercialisation courant 2027",
  banner_b: "Rejoignez la liste d'attente dès maintenant",
  nav_product: "Béquille",
  nav_faq: "FAQ",
  nav_blog: "Blog",
  search_ph: "Rechercher",
  cta_interested: "Je suis intéressé(e)",
  footer_tag: "La béquille qui libère les mains.",
  footer_bottom: "legmio 2026 · Un produit miobility · ISIR · Sorbonne Université · CNRS",
};

const en: Dict = {
  banner_a: "Launching in 2027",
  banner_b: "Join the waiting list now",
  nav_product: "Crutch",
  nav_faq: "FAQ",
  nav_blog: "Blog",
  search_ph: "Search",
  cta_interested: "I'm interested",
  footer_tag: "The crutch that frees your hands.",
  footer_bottom: "legmio 2026 · A miobility product · ISIR · Sorbonne Université · CNRS",
};

const dicts: Record<Lang, Dict> = { fr, en };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
  tr: <T>(f: T, e: T) => T;
  hubspotUrl: string;
};
const LangCtx = createContext<Ctx>({
  lang: "fr",
  setLang: () => {},
  t: (k) => k,
  tr: (f) => f,
  hubspotUrl: HUBSPOT_FR,
});

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
  const tr = <T,>(f: T, e: T): T => (lang === "en" ? e : f);
  const hubspotUrl = lang === "en" ? HUBSPOT_EN : HUBSPOT_FR;
  return <LangCtx.Provider value={{ lang, setLang, t, tr, hubspotUrl }}>{children}</LangCtx.Provider>;
}

export function useLanguage() {
  return useContext(LangCtx);
}
