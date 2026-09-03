import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en" | "de";

// Pages HubSpot autonomes, conservees en repli si le formulaire integre ne charge pas.
export const HUBSPOT_FR = "https://fd623.share-eu1.hsforms.com/2TRovgVWcTMydP9AzUTJZUQ";
export const HUBSPOT_EN = "https://fd623.share-eu1.hsforms.com/2ApzYviPbRnyLmAQh5YUR5Q";

// Formulaire integre a la page (section « Suis l'actualite »).
export const HUBSPOT_PORTAL_ID = "25808619";
export const HUBSPOT_REGION = "eu1";
const HUBSPOT_FORM_FR = "4d1a2f81-559c-4ccc-9d3f-d03351325951";
const HUBSPOT_FORM_EN = "029cd8be-23db-467c-8b98-0421e58511e5";

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
  nav_menu: "Menu",
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
  nav_menu: "Menu",
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
  nav_menu: "Menü",
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
  hubspotFormId: string;
};
const LangCtx = createContext<Ctx>({
  lang: "fr",
  setLang: () => {},
  t: (k) => k,
  tr: (f) => f,
  hubspotUrl: HUBSPOT_FR,
  hubspotFormId: HUBSPOT_FORM_FR,
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
  const hubspotFormId = lang === "fr" ? HUBSPOT_FORM_FR : HUBSPOT_FORM_EN;
  return <LangCtx.Provider value={{ lang, setLang, t, tr, hubspotUrl, hubspotFormId }}>{children}</LangCtx.Provider>;
}

export function useLanguage() {
  return useContext(LangCtx);
}
