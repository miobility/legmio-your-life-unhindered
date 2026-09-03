import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en" | "de";

export const HUBSPOT_FR = "https://fd623.share-eu1.hsforms.com/2TRovgVWcTMydP9AzUTJZUQ";
export const HUBSPOT_EN = "https://fd623.share-eu1.hsforms.com/2ApzYviPbRnyLmAQh5YUR5Q";

export const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
];

type Dict = Record<string, string>;

const fr: Dict = {
  banner_a: "Rejoindre la liste d'attente",
  banner_b: "Commercialisation courant 2027",
  nav_product: "Béquille",
  nav_faq: "FAQ",
  nav_blog: "Blog",
  nav_pro: "Espace pro",
  cta_interested: "Je suis intéressé(e)",
  footer_tag: "La béquille qui libère les mains.",
  footer_bottom: "legmio © 2026 — Un produit miobility",
};

const en: Dict = {
  banner_a: "Join the waiting list",
  banner_b: "Launch planned for 2027",
  nav_product: "Crutch",
  nav_faq: "FAQ",
  nav_blog: "Blog",
  nav_pro: "Pro space",
  cta_interested: "I'm interested",
  footer_tag: "The crutch that frees your hands.",
  footer_bottom: "legmio © 2026 — A miobility product",
};

const de: Dict = {
  banner_a: "Zur Warteliste anmelden",
  banner_b: "Markteinführung 2027",
  nav_product: "Krücke",
  nav_faq: "FAQ",
  nav_blog: "Blog",
  nav_pro: "Fachbereich",
  cta_interested: "Ich bin interessiert",
  footer_tag: "Die Krücke die die Hände befreit.",
  footer_bottom: "legmio © 2026 — Ein Produkt von miobility",
};

const dicts: Record<Lang, Dict> = { fr, en, de };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
  tr: <T>(f: T, e: T, d?: T) => T;
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
    if (saved === "fr" || saved === "en" || saved === "de") setLangState(saved);
  }, []);
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("legmio-lang", l);
  };
  const t = (k: string) => dicts[lang][k] ?? dicts.fr[k] ?? k;
  const tr = <T,>(f: T, e: T, d?: T): T => (lang === "de" ? (d !== undefined ? d : e) : lang === "en" ? e : f);
  const hubspotUrl = lang === "fr" ? HUBSPOT_FR : HUBSPOT_EN;
  return <LangCtx.Provider value={{ lang, setLang, t, tr, hubspotUrl }}>{children}</LangCtx.Provider>;
}

export function useLanguage() {
  return useContext(LangCtx);
}
