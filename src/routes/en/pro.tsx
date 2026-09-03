import { createFileRoute } from "@tanstack/react-router";
import { metaDe } from "@/lib/meta";
import { ProPage } from "@/routes/pro";

// Meme page, autres metadonnees. La langue est deduite de l'adresse
// par LanguageProvider, le composant n'a rien a savoir.
export const Route = createFileRoute("/en/pro")({
  head: () => metaDe("en", "pro"),
  component: ProPage,
});
