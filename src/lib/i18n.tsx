import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";

export type Lang = "fr" | "en" | "de";

// Formulaires HubSpot, ouverts dans un onglet depuis les boutons du site.
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
  /** Prefixe un chemin interne de la langue courante. */
  lien: (chemin: string) => string;
};
const LangCtx = createContext<Ctx>({
  lang: "fr",
  setLang: () => {},
  t: (k) => k,
  tr: (f) => f,
  hubspotUrl: HUBSPOT_FR,
  lien: (c) => c,
});

/** Langue portee par l'adresse : /en/... et /de/..., le francais a la racine. */
export function langDeChemin(pathname: string): Lang {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  return "fr";
}

/** Chemin sans son prefixe de langue : "/en/produit" -> "/produit". */
export function cheminSansLangue(pathname: string): string {
  const l = langDeChemin(pathname);
  if (l === "fr") return pathname;
  const reste = pathname.slice(3);
  return reste === "" ? "/" : reste;
}

/** Meme page dans une autre langue : ("/produit", "de") -> "/de/produit". */
export function cheminVers(pathname: string, l: Lang): string {
  const base = cheminSansLangue(pathname);
  if (l === "fr") return base;
  return base === "/" ? `/${l}` : `/${l}${base}`;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // La langue vient de l'URL, plus du navigateur : sans cela, les robots
  // (Google, apercus de lien) ne voient jamais que le francais.
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = langDeChemin(pathname);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    if (l === lang) return;
    navigate({ to: cheminVers(pathname, l) });
  };
  const t = (k: string) => dicts[lang][k] ?? dicts.fr[k] ?? k;
  const tr = <T,>(f: T, e: T, d?: T): T => (lang === "de" ? (d !== undefined ? d : e) : lang === "en" ? e : f);
  const hubspotUrl = lang === "fr" ? HUBSPOT_FR : HUBSPOT_EN;
  const lien = (chemin: string) => (lang === "fr" ? chemin : chemin === "/" ? `/${lang}` : `/${lang}${chemin}`);
  return <LangCtx.Provider value={{ lang, setLang, t, tr, hubspotUrl, lien }}>{children}</LangCtx.Provider>;
}

export function useLanguage() {
  return useContext(LangCtx);
}
