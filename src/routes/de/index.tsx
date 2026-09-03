import { createFileRoute } from "@tanstack/react-router";
import { metaDe } from "@/lib/meta";
import { Landing } from "@/routes/index";

// Meme page, autres metadonnees. La langue est deduite de l'adresse
// par LanguageProvider, le composant n'a rien a savoir.
export const Route = createFileRoute("/de/")({
  head: () => metaDe("de", "accueil"),
  component: Landing,
});
