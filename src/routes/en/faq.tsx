import { createFileRoute } from "@tanstack/react-router";
import { metaDe } from "@/lib/meta";
import { Faq } from "@/routes/faq";

// Meme page, autres metadonnees. La langue est deduite de l'adresse
// par LanguageProvider, le composant n'a rien a savoir.
export const Route = createFileRoute("/en/faq")({
  head: () => metaDe("en", "faq"),
  component: Faq,
});
