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
        <h1 className="text-4xl sm:text-5xl font-display font-bold" style={{ color: TEXT }}>{tr("Mentions légales", "Legal notice", "Impressum")}</h1>
      </section>
      <section className="px-4 sm:px-6 py-16">
        <article className="max-w-[680px] mx-auto text-[15px] leading-relaxed space-y-6" style={{ color: MUTED }}>
          <div>
            <h2 className="font-display text-2xl font-bold mt-4 mb-3" style={{ color: TEXT }}>{tr("Éditeur du site", "Site publisher", "Herausgeber der Website")}</h2>
            <p>{tr("Le site legmio.com est édité par miobility, projet en cours d'immatriculation.", "The site legmio.com is published by miobility, a project currently being registered.", "Die Website legmio.com wird von miobility herausgegeben, einem Projekt, das sich derzeit in der Registrierung befindet.")}</p>
            <p className="mt-2">{tr("Directeur de la publication : Nicolas Perrin-Gilbert", "Publication director: Nicolas Perrin-Gilbert", "Herausgeberverantwortlicher: Nicolas Perrin-Gilbert")}</p>
            <p className="mt-2">{tr("Adresse postale :", "Postal address:", "Postanschrift:")}<br />13-15 Rue Traversière<br />75012 Paris<br />France</p>
            <p className="mt-2">{tr("Contact : ", "Contact: ", "Kontakt: ")}<a href="mailto:contact@legmio.com" className="underline">contact@legmio.com</a></p>
            <p className="mt-2">{tr("Le site legmio.com est actuellement en phase de pré-lancement. Aucune vente n'est effectuée sur ce site à ce jour.", "The site legmio.com is currently in a pre-launch phase. No sales are made on this site to date.", "Die Website legmio.com befindet sich derzeit in der Vorstartphase. Bisher werden auf dieser Website keine Verkäufe getätigt.")}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mt-6 mb-3" style={{ color: TEXT }}>{tr("Hébergeur", "Host", "Hosting-Anbieter")}</h2>
            <p>Vercel Inc.<br />340 Pine Street, Suite 1001<br />San Francisco, CA 94104<br />{tr("États-Unis", "United States", "Vereinigte Staaten")}<br /><a href="https://vercel.com" className="underline" target="_blank" rel="noreferrer">https://vercel.com</a></p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mt-6 mb-3" style={{ color: TEXT }}>{tr("Propriété intellectuelle", "Intellectual property", "Geistiges Eigentum")}</h2>
            <p>{tr("L'ensemble des contenus présents sur le site legmio.com (textes, images, vidéos, graphismes, logo, icônes) sont la propriété exclusive de miobility ou de ses partenaires, et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.", "All content present on the legmio.com site (texts, images, videos, graphics, logo, icons) is the exclusive property of miobility or its partners, and is protected by French and international intellectual property laws.", "Sämtliche Inhalte der Website legmio.com (Texte, Bilder, Videos, Grafiken, Logo, Icons) sind ausschließliches Eigentum von miobility oder seinen Partnern und werden durch französische und internationale Gesetze zum geistigen Eigentum geschützt.")}</p>
            <p className="mt-3">{tr("La béquille legmio fait l'objet du brevet FR2411206, déposé en octobre 2024, détenu par SATT Lutech avec licence exclusive accordée à miobility.", "The legmio crutch is the subject of patent FR2411206, filed in October 2024, held by SATT Lutech with an exclusive license granted to miobility.", "Die legmio-Krücke ist Gegenstand des im Oktober 2024 angemeldeten Patents FR2411206, das von SATT Lutech gehalten wird, mit einer miobility gewährten Exklusivlizenz.")}</p>
            <p className="mt-3">{tr("Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de miobility.", "Any reproduction, representation, modification, publication or adaptation of all or part of the site's elements, by any means or process, is prohibited without prior written authorization from miobility.", "Jegliche Vervielfältigung, Darstellung, Änderung, Veröffentlichung oder Anpassung sämtlicher oder eines Teils der Website-Elemente, gleich mit welchem Mittel oder Verfahren, ist ohne vorherige schriftliche Genehmigung von miobility untersagt.")}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mt-6 mb-3" style={{ color: TEXT }}>{tr("Limitation de responsabilité", "Limitation of liability", "Haftungsbeschränkung")}</h2>
            <p>{tr("miobility s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur le site legmio.com. Toutefois, miobility ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.", "miobility strives to ensure the accuracy and updating of the information published on the legmio.com site. However, miobility cannot guarantee the accuracy, precision or completeness of the information available on this site.", "miobility bemüht sich um die Richtigkeit und Aktualität der auf der Website legmio.com veröffentlichten Informationen. miobility kann jedoch die Richtigkeit, Genauigkeit oder Vollständigkeit der auf dieser Website verfügbaren Informationen nicht garantieren.")}</p>
            <p className="mt-3">{tr("Les informations présentes sur le site ont un caractère informatif et ne constituent pas un avis médical. Consultez un professionnel de santé pour tout avis médical.", "The information on the site is for informational purposes only and does not constitute medical advice. Consult a healthcare professional for any medical advice.", "Die Informationen auf der Website dienen nur zu Informationszwecken und stellen keine medizinische Beratung dar. Wenden Sie sich für medizinischen Rat an eine Fachkraft im Gesundheitswesen.")}</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mt-6 mb-3" style={{ color: TEXT }}>{tr("Droit applicable", "Applicable law", "Anwendbares Recht")}</h2>
            <p>{tr("Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.", "These legal notices are subject to French law. In the event of a dispute, the French courts shall have sole jurisdiction.", "Dieses Impressum unterliegt französischem Recht. Im Streitfall sind ausschließlich die französischen Gerichte zuständig.")}</p>
          </div>

          <p className="text-xs pt-6" style={{ color: MUTED }}>{tr("Dernière mise à jour : juillet 2026", "Last updated: July 2026", "Letzte Aktualisierung: Juli 2026")}</p>
        </article>
      </section>
    </div>
  );
}
