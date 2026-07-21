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
const WHITE = "#FFFFFF";
const CREAM = "#FAFAF8";
const INK = "#1A1040";
const INK_MUTED = "#6B6B6B";
const MUTED_NAVY = "#A89ED0";
const BORDER_LIGHT = "#E8E4DC";
const ACCENT = "#F5C842";

function ProPage() {
  const { tr } = useLanguage();
  return (
    <div style={{ backgroundColor: CREAM }}>
      <section className="px-4 sm:px-6 py-20 md:py-28" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight" style={{ color: WHITE }}>
            {tr("Vous êtes professionnel de santé ou distributeur\u00a0?", "Healthcare professional or distributor?")}
          </h1>
          <p className="mt-6 text-lg" style={{ color: MUTED_NAVY }}>
            {tr(
              "Prenez rendez-vous pour une démonstration, un test ou une discussion partenariat.",
              "Book a meeting for a demo, a test, or a partnership discussion."
            )}
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-20" style={{ backgroundColor: CREAM }}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: WHITE, border: `1px solid ${BORDER_LIGHT}` }}>
            <iframe
              src="https://meetings-eu1.hubspot.com/benjamin-rajjou"
              title="Prendre rendez-vous"
              className="w-full block"
              style={{ height: 750, border: 0, overflow: "hidden" }}
              scrolling="no"
              loading="lazy"
            />
          </div>
          <p className="text-center mt-6 text-sm" style={{ color: INK_MUTED }}>
            {tr("Une question ?", "Any question?")} <a href="mailto:contact@legmio.com" style={{ color: NAVY }} className="underline">contact@legmio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
