import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";
type Dict = Record<string, string>;

const fr: Dict = {
  banner: "Commercialisation courant 2027",
  nav_product: "Produit",
  nav_faq: "FAQ",
  nav_blog: "Blog",
  search_ph: "Rechercher",
  cta_interested: "Je suis intéressé(e)",
  footer_tag: "La béquille qui libère les mains.",
  footer_bottom: "legmio 2026 · Un produit miobility · ISIR · Sorbonne Université · CNRS",
};

const en: Dict = {
  banner: "Available 2027",
  nav_product: "Product",
  nav_faq: "FAQ",
  nav_blog: "Blog",
  search_ph: "Search",
  cta_interested: "I'm interested",
  footer_tag: "The crutch that frees your hands.",
  footer_bottom: "legmio 2026 · A miobility product · ISIR · Sorbonne Université · CNRS",
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
