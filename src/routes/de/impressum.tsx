import { createFileRoute } from "@tanstack/react-router";
import { metaDe } from "@/lib/meta";
import { MentionsLegales } from "@/routes/mentions-legales";

// Meme page, autres metadonnees. La langue est deduite de l'adresse
// par LanguageProvider, le composant n'a rien a savoir.
export const Route = createFileRoute("/de/impressum")({
  head: () => metaDe("de", "mentions"),
  component: MentionsLegales,
});
