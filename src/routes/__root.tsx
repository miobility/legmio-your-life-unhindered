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
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LanguageProvider } from "@/lib/i18n";
import { Header, StickyBanner, Footer } from "@/components/Layout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold font-display" style={{ color: "#111111" }}>404</h1>
        <h2 className="mt-4 text-xl font-semibold" style={{ color: "#111111" }}>Page not found</h2>
        <p className="mt-2 text-sm" style={{ color: "#444444" }}>The page you're looking for doesn't exist.</p>
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
    <div className="flex min-h-screen items-center justify-center px-4" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold" style={{ color: "#111111" }}>This page didn't load</h1>
        <p className="mt-2 text-sm" style={{ color: "#444444" }}>Something went wrong.</p>
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
      { name: "description", content: "legmio est la seule béquille ergonomique conçue pour durer. Née de la recherche CNRS/Sorbonne Université. Commercialisation 2027." },
      { name: "author", content: "legmio" },
      { property: "og:title", content: "legmio — La béquille qui libère les mains" },
      { property: "og:description", content: "La seule béquille conçue pour durer. Pas juste ta rééducation. Ta vie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
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

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <StickyBanner />
        <Header />
        <main className="pt-24">
          <Outlet />
        </main>
        <Footer />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
