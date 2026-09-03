import { cheminDe, type Lang, type Page } from "@/lib/i18n";

export type { Page };

export const SITE_URL = "https://legmio.com";

type Textes = { titre: string; description: string; ogTitre: string; ogDescription: string };

const TEXTES: Record<Lang, Record<Page, Textes>> = {
  fr: {
    accueil: {
      titre: "legmio — La béquille qui libère les mains",
      description: "legmio est la première béquille ergonomique avec un mode mains libres. Née de la recherche CNRS/Sorbonne Université. Commercialisation courant 2027.",
      ogTitre: "legmio — La béquille qui libère les mains",
      ogDescription: "Des mains libres et une autonomie enfin retrouvée.",
    },
    produit: {
      titre: "legmio — La béquille",
      description: "La béquille legmio, la première béquille ergonomique avec un mode mains libres. Conçue et assemblée en France.",
      ogTitre: "legmio — La béquille",
      ogDescription: "La première béquille ergonomique avec un mode mains libres.",
    },
    faq: {
      titre: "legmio — FAQ",
      description: "Toutes les réponses sur legmio : produit, usage, prix, prise en charge, SAV.",
      ogTitre: "legmio — FAQ",
      ogDescription: "Tout ce que tu veux savoir sur legmio.",
    },
    blog: {
      titre: "legmio — L'histoire de legmio",
      description: "En 2020, Nicolas Perrin-Gilbert perd l'usage de ses mains à cause de ses béquilles. Il a inventé legmio.",
      ogTitre: "legmio — L'histoire de legmio",
      ogDescription: "Pourquoi cette béquille existe.",
    },
    pro: {
      titre: "legmio — Espace pro",
      description: "Professionnels de santé et distributeurs : prenez rendez-vous pour une démonstration, un test ou une discussion partenariat legmio.",
      ogTitre: "legmio — Espace pro",
      ogDescription: "Démo, test, partenariat : rencontrons-nous.",
    },
    mentions: { titre: "legmio — Mentions légales", description: "Mentions légales du site legmio.com.", ogTitre: "legmio — Mentions légales", ogDescription: "Mentions légales du site legmio.com." },
    confidentialite: { titre: "legmio — Politique de confidentialité", description: "Politique de confidentialité du site legmio.com.", ogTitre: "legmio — Politique de confidentialité", ogDescription: "Politique de confidentialité du site legmio.com." },
  },
  en: {
    accueil: {
      titre: "legmio — The crutch that frees your hands",
      description: "legmio is the first ergonomic crutch with a hands-free mode. Born from CNRS/Sorbonne University research. Launching in 2027.",
      ogTitre: "legmio — The crutch that frees your hands",
      ogDescription: "Free hands and newfound independence.",
    },
    produit: {
      titre: "legmio — The crutch",
      description: "The legmio crutch, the first ergonomic crutch with a hands-free mode. Designed and assembled in France.",
      ogTitre: "legmio — The crutch",
      ogDescription: "The first ergonomic crutch with a hands-free mode.",
    },
    faq: {
      titre: "legmio — FAQ",
      description: "Every answer about legmio: product, use, price, reimbursement, after-sales service.",
      ogTitre: "legmio — FAQ",
      ogDescription: "Everything you want to know about legmio.",
    },
    blog: {
      titre: "legmio — The legmio story",
      description: "In 2020, Nicolas Perrin-Gilbert lost the use of his hands to his crutches. So he invented legmio.",
      ogTitre: "legmio — The legmio story",
      ogDescription: "Why this crutch exists.",
    },
    pro: {
      titre: "legmio — Pro space",
      description: "Healthcare professionals and distributors: book a meeting for a demonstration, a trial or a partnership discussion.",
      ogTitre: "legmio — Pro space",
      ogDescription: "Demo, trial, partnership: let's meet.",
    },
    mentions: { titre: "legmio — Legal notice", description: "Legal notice for legmio.com.", ogTitre: "legmio — Legal notice", ogDescription: "Legal notice for legmio.com." },
    confidentialite: { titre: "legmio — Privacy policy", description: "Privacy policy for legmio.com.", ogTitre: "legmio — Privacy policy", ogDescription: "Privacy policy for legmio.com." },
  },
  de: {
    accueil: {
      titre: "legmio — Die Krücke, die die Hände befreit",
      description: "legmio ist die erste ergonomische Krücke mit Freihand-Modus. Entstanden aus der Forschung von CNRS und Sorbonne Université. Markteinführung 2027.",
      ogTitre: "legmio — Die Krücke, die die Hände befreit",
      ogDescription: "Freie Hände und neu gewonnene Selbstständigkeit.",
    },
    produit: {
      titre: "legmio — Die Krücke",
      description: "Die legmio Krücke, die erste ergonomische Krücke mit Freihand-Modus. Entwickelt und montiert in Frankreich.",
      ogTitre: "legmio — Die Krücke",
      ogDescription: "Die erste ergonomische Krücke mit Freihand-Modus.",
    },
    faq: {
      titre: "legmio — FAQ",
      description: "Alle Antworten zu legmio: Produkt, Nutzung, Preis, Kostenübernahme, Kundendienst.",
      ogTitre: "legmio — FAQ",
      ogDescription: "Alles, was du über legmio wissen möchtest.",
    },
    blog: {
      titre: "legmio — Die Geschichte von legmio",
      description: "2020 verlor Nicolas Perrin-Gilbert durch seine Krücken den Gebrauch seiner Hände. Also erfand er legmio.",
      ogTitre: "legmio — Die Geschichte von legmio",
      ogDescription: "Warum es diese Krücke gibt.",
    },
    pro: {
      titre: "legmio — Fachbereich",
      description: "Gesundheitsfachkräfte und Händler: Vereinbaren Sie einen Termin für eine Vorführung, einen Test oder ein Partnerschaftsgespräch.",
      ogTitre: "legmio — Fachbereich",
      ogDescription: "Vorführung, Test, Partnerschaft: Lernen wir uns kennen.",
    },
    mentions: { titre: "legmio — Impressum", description: "Impressum der Website legmio.com.", ogTitre: "legmio — Impressum", ogDescription: "Impressum der Website legmio.com." },
    confidentialite: { titre: "legmio — Datenschutzerklärung", description: "Datenschutzerklärung der Website legmio.com.", ogTitre: "legmio — Datenschutzerklärung", ogDescription: "Datenschutzerklärung der Website legmio.com." },
  },
};

const LOCALES: Record<Lang, string> = { fr: "fr_FR", en: "en_GB", de: "de_DE" };
const ALTS: Record<Lang, string> = {
  fr: "legmio — Des mains libres et une autonomie enfin retrouvée.",
  en: "legmio — Free hands and newfound independence.",
  de: "legmio — Freie Hände und neu gewonnene Selbstständigkeit.",
};

const IMAGES: Record<Lang, string> = { fr: "/og-image.jpg", en: "/og-image-en.jpg", de: "/og-image-de.jpg" };

export function urlDe(lang: Lang, page: Page): string {
  const chemin = cheminDe(lang, page);
  return chemin === "/" ? SITE_URL : `${SITE_URL}${chemin}`;
}

/**
 * Metadonnees d'une page dans une langue : titre, description, apercu de lien,
 * URL canonique et balises hreflang vers les deux autres versions.
 *
 * Les hreflang disent a Google « ce sont les memes pages en trois langues »
 * plutot que « trois pages qui se ressemblent ».
 */
export function metaDe(lang: Lang, page: Page) {
  const t = TEXTES[lang][page];
  const url = urlDe(lang, page);
  const image = `${SITE_URL}${IMAGES[lang]}`;
  return {
    meta: [
      { title: t.titre },
      { name: "description", content: t.description },
      { property: "og:title", content: t.ogTitre },
      { property: "og:description", content: t.ogDescription },
      { property: "og:url", content: url },
      { property: "og:locale", content: LOCALES[lang] },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: ALTS[lang] },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hreflang: "fr", href: urlDe("fr", page) },
      { rel: "alternate", hreflang: "en", href: urlDe("en", page) },
      { rel: "alternate", hreflang: "de", href: urlDe("de", page) },
      { rel: "alternate", hreflang: "x-default", href: urlDe("fr", page) },
    ],
  };
}
