import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Domaine de repli si l'origine ne peut pas etre deduite de la requete.
const FALLBACK_ORIGIN = "https://legmio.com";

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
        const urls = entries.map((e) =>
          `  <url>\n    <loc>${origin}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
