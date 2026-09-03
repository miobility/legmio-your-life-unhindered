import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

// Domaine de production. Les apercus de lien exigent des URL absolues :
// si le site change de domaine, c'est la seule ligne a modifier.
const SITE_URL = "https://legmio.com";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider } from "@/lib/i18n";
import { Header, StickyBanner, Footer } from "@/components/Layout";
import { BarreLecture } from "@/components/BarreLecture";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ backgroundColor: "#0D0D29" }}>
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold font-display" style={{ color: "#FFFFFF" }}>404</h1>
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
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ backgroundColor: "#0D0D29" }}>
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold" style={{ color: "#FFFFFF" }}>This page didn't load</h1>
        <p className="mt-2 text-sm" style={{ color: "#A89ED0" }}>Something went wrong.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-dark btn-dark-hover">Try again</button>
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
      { title: "legmio — La béquille qui libère les mains" },
      { name: "description", content: "legmio est la première béquille ergonomique avec un mode mains libres. Née de la recherche CNRS/Sorbonne Université. Commercialisation courant 2027." },
      { name: "author", content: "legmio" },
      { property: "og:title", content: "legmio — La béquille qui libère les mains" },
      { property: "og:description", content: "La seule béquille conçue pour durer. Pas juste ta rééducation. Ta vie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "legmio — Des mains libres et une autonomie enfin retrouvée." },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "legmio" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: appCss },
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
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "legmio",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png`, width: 512, height: 512 },
      image: `${SITE_URL}/og-image.jpg`,
      description:
        "legmio est la première béquille ergonomique avec un mode mains libres, née de la recherche CNRS/Sorbonne Université.",
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
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
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
      { threshold: 0.1 }
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
        <Header />
        <BarreLecture />
        <main className="pt-[105px]">
          <Outlet />
        </main>
        <Footer />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

