import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "legmio — Mentions légales" },
      { name: "description", content: "Mentions légales du site legmio.com." },
    ],
  }),
  component: MentionsLegales,
});

const TEXT = "#FFFFFF";
const MUTED = "#A89ED0";
const BG = "#120B3B";
const BG_ALT = "#1A1040";

function MentionsLegales() {
  const { tr } = useLanguage();
  return (
    <div style={{ backgroundColor: BG }}>
      <section style={{ backgroundColor: BG_ALT }} className="px-4 sm:px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-display font-bold" style={{ color: TEXT }}>{tr("Mentions légales", "Legal notice")}</h1>
      </section>
      <section className="px-4 sm:px-6 py-16">
        <article className="max-w-[680px] mx-auto text-[15px] leading-relaxed space-y-6" style={{ color: "#333" }}>
          <div>
            <h2 className="font-display text-2xl font-bold mt-4 mb-3" style={{ color: TEXT }}>Éditeur du site</h2>
            <p>Le site legmio.com est édité par miobility, projet en cours d'immatriculation.</p>
            <p className="mt-2">Directeur de la publication : Nicolas Perrin-Gilbert</p>
            <p className="mt-2">Adresse postale :<br />13-15 Rue Traversière<br />75012 Paris<br />France</p>
            <p className="mt-2">Contact : <a href="mailto:contact@legmio.com" className="underline">contact@legmio.com</a></p>
            <p className="mt-2">Le site legmio.com est actuellement en phase de pré-lancement. Aucune vente n'est effectuée sur ce site à ce jour.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mt-6 mb-3" style={{ color: TEXT }}>Hébergeur</h2>
            <p>Vercel Inc.<br />340 Pine Street, Suite 1001<br />San Francisco, CA 94104<br />États-Unis<br /><a href="https://vercel.com" className="underline" target="_blank" rel="noreferrer">https://vercel.com</a></p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mt-6 mb-3" style={{ color: TEXT }}>Propriété intellectuelle</h2>
            <p>L'ensemble des contenus présents sur le site legmio.com (textes, images, vidéos, graphismes, logo, icônes) sont la propriété exclusive de miobility ou de ses partenaires, et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.</p>
            <p className="mt-3">La béquille legmio fait l'objet du brevet FR2411206, déposé en octobre 2024, détenu par SATT Lutech avec licence exclusive accordée à miobility.</p>
            <p className="mt-3">Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de miobility.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mt-6 mb-3" style={{ color: TEXT }}>Limitation de responsabilité</h2>
            <p>miobility s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site legmio.com. Toutefois, miobility ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.</p>
            <p className="mt-3">Les informations présentes sur le site ont un caractère informatif et ne constituent pas un avis médical. Consultez un professionnel de santé pour tout avis médical.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mt-6 mb-3" style={{ color: TEXT }}>Droit applicable</h2>
            <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
          </div>

          <p className="text-xs pt-6" style={{ color: MUTED }}>Dernière mise à jour : juillet 2026</p>
        </article>
      </section>
    </div>
  );
}
