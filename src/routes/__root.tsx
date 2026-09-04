import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

// Domaine de production. Les apercus de lien exigent des URL absolues :
// si le site change de domaine, c'est la seule ligne a modifier.
const SITE_URL = "https://legmio.com";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider, langDeChemin, type Lang } from "@/lib/i18n";
import { MARGE_CARTES, SEUIL } from "@/lib/apparition";
import { Header, StickyBanner, Footer } from "@/components/Layout";

function textesErreur(pathname: string) {
  // Ces deux ecrans vivent hors du fournisseur de langue : on relit donc
  // l'adresse directement. Un visiteur allemand qui se trompe d'URL lisait
  // « Page not found ».
  const l = langDeChemin(pathname);
  const T = {
    fr: { t: "Page introuvable", d: "La page que vous cherchez n'existe pas.", b: "Retour à l'accueil",
          e: "Cette page n'a pas pu se charger", ed: "Quelque chose s'est mal passé.", r: "Réessayer" },
    en: { t: "Page not found", d: "The page you're looking for doesn't exist.", b: "Go home",
          e: "This page didn't load", ed: "Something went wrong.", r: "Try again" },
    de: { t: "Seite nicht gefunden", d: "Die gesuchte Seite existiert nicht.", b: "Zur Startseite",
          e: "Diese Seite konnte nicht geladen werden", ed: "Etwas ist schiefgelaufen.", r: "Erneut versuchen" },
  };
  return { ...T[l], racine: l === "fr" ? "/" : `/${l}` };
}

function NotFoundComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const txt = textesErreur(pathname);
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ backgroundColor: "#0D0D29" }}>
      <div className="max-w-md text-center">
        <h1 className="titre-page font-bold font-display" style={{ color: "#FFFFFF" }}>404</h1>
        <h2 className="mt-4 text-xl font-semibold" style={{ color: "#FFFFFF" }}>Page not found</h2>
        <p className="mt-2 text-sm" style={{ color: "#A89ED0" }}>The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="btn-dark btn-dark-hover">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const txt = textesErreur(pathname);
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ backgroundColor: "#0D0D29" }}>
      <div className="max-w-md text-center">
        <h1 className="titre-appui font-semibold" style={{ color: "#FFFFFF" }}>This page didn't load</h1>
        <p className="mt-2 text-sm" style={{ color: "#A89ED0" }}>Something went wrong.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-dark btn-dark-hover">{txt.r}</button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "legmio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "legmio" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // favicon.ico : les navigateurs et le robot de Google le demandent a la
      // racine meme sans balise. Il repondait 404.
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/only_logo.svg", type: "image/svg+xml" },
      // PNG 48px : format que le robot a favicons de Google privilegie.
      { rel: "icon", href: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { rel: "apple-touch-icon", href: "/icon-180.png", sizes: "180x180" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// Donnees structurees : elles indiquent explicitement a Google le nom de la
// marque, le logo et les comptes officiels, au lieu de le laisser deviner.
// Elles suivent la langue de la page, sinon un Allemand voit une fiche
// d'entreprise redigee en francais.
const DESCRIPTIONS: Record<Lang, string> = {
  fr: "legmio est la première béquille ergonomique avec un mode mains libres, née de la recherche CNRS/Sorbonne Université.",
  en: "legmio is the first ergonomic crutch with a hands-free mode, born from CNRS/Sorbonne University research.",
  de: "legmio ist die erste ergonomische Krücke mit Freihand-Modus, entstanden aus der Forschung von CNRS und Sorbonne Université.",
};
const IMAGES: Record<Lang, string> = {
  fr: "/og-image.jpg",
  en: "/og-image-en.jpg",
  de: "/og-image-de.jpg",
};
const LOCALES: Record<Lang, string> = { fr: "fr-FR", en: "en-GB", de: "de-DE" };

function donneesStructurees(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "legmio",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png`, width: 512, height: 512 },
        image: `${SITE_URL}${IMAGES[lang]}`,
        description: DESCRIPTIONS[lang],
        email: "contact@legmio.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "13-15 rue Traversière",
          postalCode: "75012",
          addressLocality: "Paris",
          addressCountry: "FR",
        },
        sameAs: [
          "https://www.instagram.com/legmio.official",
          "https://www.tiktok.com/@legmio",
          "https://www.linkedin.com/in/nicolas-perrin-gilbert-2815a4179/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "legmio",
        inLanguage: LOCALES[lang],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

function RootShell({ children }: { children: ReactNode }) {
  // La langue doit etre dans le HTML servi, pas posee apres coup par le
  // navigateur : Google et les lecteurs d'ecran ne lisent que le premier.
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = langDeChemin(pathname);
  return (
    <html lang={lang}>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(donneesStructurees(lang)) }}
        />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: SEUIL, rootMargin: MARGE_CARTES }
    );
    const scan = () => document.querySelectorAll(".fade-up:not(.animate-in)").forEach((el) => io.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <StickyBanner />
        {/* Premier arret du clavier : sans lui, il faut traverser la banniere,
            le menu et le selecteur de langue avant chaque contenu. */}
        <a href="#contenu" className="evitement">Aller au contenu</a>
        <Header />
        <main id="contenu" className="pt-[105px]">
          <Outlet />
        </main>
        <Footer />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

