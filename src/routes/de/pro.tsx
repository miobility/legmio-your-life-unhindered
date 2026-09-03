import { createFileRoute } from "@tanstack/react-router";
import { metaDe } from "@/lib/meta";
import { ProPage } from "@/routes/pro";

// Meme page, autres metadonnees. La langue est deduite de l'adresse
// par LanguageProvider, le composant n'a rien a savoir.
export const Route = createFileRoute("/de/pro")({
  head: () => metaDe("de", "pro"),
  component: ProPage,
});
