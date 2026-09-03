import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Domaine de repli si l'origine ne peut pas etre deduite de la requete.
const FALLBACK_ORIGIN = "https://legmio.com";

const LANGS = ["fr", "en", "de"] as const;

// Le francais vit a la racine, les autres langues sous /en et /de.
function chemin(lang: string, page: string) {
  if (lang === "fr") return page;
  return page === "/" ? `/${lang}` : `/${lang}${page}`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async (ctx?: { request?: Request }) => {
        let origin = FALLBACK_ORIGIN;
        try {
          const url = ctx?.request?.url;
          if (url) origin = new URL(url).origin;
        } catch {
          // on garde le repli
        }
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/produit", changefreq: "monthly", priority: "0.8" },
          { path: "/faq", changefreq: "monthly", priority: "0.6" },
          { path: "/blog", changefreq: "weekly", priority: "0.6" },
          { path: "/pro", changefreq: "monthly", priority: "0.5" },
          { path: "/mentions-legales", changefreq: "yearly", priority: "0.1" },
          { path: "/confidentialite", changefreq: "yearly", priority: "0.1" },
        ];
        // Chaque page est declaree une fois par langue, et chaque declaration
        // liste ses trois soeurs : c'est ainsi que Google sert la bonne version
        // selon le pays du visiteur.
        const urls: string[] = [];
        for (const e of entries) {
          const alternates = LANGS.map(
            (l) =>
              `    <xhtml:link rel="alternate" hreflang="${l}" href="${origin}${chemin(l, e.path)}"/>`
          ).concat(
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${e.path}"/>`
          ).join("\n");
          for (const l of LANGS) {
            urls.push(
              `  <url>\n    <loc>${origin}${chemin(l, e.path)}</loc>\n${alternates}\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
            );
          }
        }
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
