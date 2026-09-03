import { createFileRoute } from "@tanstack/react-router";
import { metaDe } from "@/lib/meta";
import { Confidentialite } from "@/routes/confidentialite";

// Meme page, autres metadonnees. La langue est deduite de l'adresse
// par LanguageProvider, le composant n'a rien a savoir.
export const Route = createFileRoute("/en/confidentialite")({
  head: () => metaDe("en", "confidentialite"),
  component: Confidentialite,
});
