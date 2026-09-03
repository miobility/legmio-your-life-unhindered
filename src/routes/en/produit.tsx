import { createFileRoute } from "@tanstack/react-router";
import { metaDe } from "@/lib/meta";
import { Produit } from "@/routes/produit";

// Meme page, autres metadonnees. La langue est deduite de l'adresse
// par LanguageProvider, le composant n'a rien a savoir.
export const Route = createFileRoute("/en/produit")({
  head: () => metaDe("en", "produit"),
  component: Produit,
});
