import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/pro")({
  head: () => ({
    meta: [
      { title: "legmio — Espace pro" },
      { name: "description", content: "Professionnels de santé et distributeurs : prenez rendez-vous pour une démonstration, un test ou une discussion partenariat legmio." },
      { property: "og:title", content: "legmio — Espace pro" },
      { property: "og:description", content: "Démo, test, partenariat : rencontrons-nous." },
    ],
  }),
  component: ProPage,
});

const NAVY = "#120B3B";
const NAVY_ALT = "#1A1040";
const BORDER = "#2A1F6B";
const ACCENT = "#F5C842";
const WHITE = "#FFFFFF";
const MUTED = "#A89ED0";

function ProPage() {
  const { tr } = useLanguage();
  const cards = [
    {
      t: tr("Médecins MPR & kinésithérapeutes", "PM&R doctors & physiotherapists"),
      p: tr("Découvrez legmio pour vos patients.", "Discover legmio for your patients."),
    },
    {
      t: tr("Ergothérapeutes & équipes SMR", "Occupational therapists & SMR teams"),
      p: tr("Testez legmio en centre de rééducation.", "Test legmio in your rehab centre."),
    },
    {
      t: tr("Distributeurs & revendeurs", "Distributors & resellers"),
      p: tr("Devenez partenaire legmio.", "Become a legmio partner."),
    },
  ];
  return (
    <div style={{ backgroundColor: NAVY, color: WHITE }}>
      <section className="px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
            {tr("Vous êtes professionnel de santé ou distributeur\u00a0?", "Healthcare professional or distributor?")}
          </h1>
          <p className="mt-6 text-lg" style={{ color: MUTED }}>
            {tr(
              "Prenez rendez-vous pour une démonstration, un test ou une discussion partenariat.",
              "Book a meeting for a demo, a test, or a partnership discussion."
            )}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl p-6" style={{ backgroundColor: NAVY_ALT, border: `1px solid ${BORDER}` }}>
              <div className="font-display font-bold text-lg" style={{ color: WHITE }}>{c.t}</div>
              <p className="mt-3 text-sm" style={{ color: MUTED }}>{c.p}</p>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-14">
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}` }}>
            <iframe
              src="https://meetings-eu1.hubspot.com/benjamin-rajjou"
              title="Prendre rendez-vous"
              className="w-full"
              style={{ height: 700, border: 0 }}
              loading="lazy"
            />
          </div>
          <p className="text-center mt-6 text-sm" style={{ color: MUTED }}>
            {tr("Une question ?", "Any question?")} <a href="mailto:contact@legmio.com" style={{ color: ACCENT }} className="underline">contact@legmio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
