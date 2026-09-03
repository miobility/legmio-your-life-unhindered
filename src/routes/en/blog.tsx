import { createFileRoute } from "@tanstack/react-router";
import { metaDe } from "@/lib/meta";
import { Blog } from "@/routes/blog";

// Meme page, autres metadonnees. La langue est deduite de l'adresse
// par LanguageProvider, le composant n'a rien a savoir.
export const Route = createFileRoute("/en/blog")({
  head: () => metaDe("en", "blog"),
  component: Blog,
});
