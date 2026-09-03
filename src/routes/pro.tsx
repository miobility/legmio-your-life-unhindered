import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { useIsMobile } from "@/hooks/use-mobile";

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

const NAVY = "#0D0D29";
const WHITE = "#FFFFFF";
const CREAM = "#FAFAF8";
const INK = "#15122E";
const INK_MUTED = "#6B6B6B";
const MUTED_NAVY = "#A89ED0";
const BORDER_LIGHT = "#E8E4DC";
const ACCENT = "#FFCA75";

const MEETING_URL = "https://meetings-eu1.hubspot.com/benjamin-rajjou";

function ProPage() {
  const { tr } = useLanguage();
  const isMobile = useIsMobile();
  return (
    <div style={{ backgroundColor: CREAM }}>
      <section className="px-4 sm:px-6 py-20 md:py-28" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight" style={{ color: WHITE }}>
            {tr(
              "Vous êtes professionnel de santé ou distributeur\u00a0?",
              "Are you a healthcare professional or distributor?",
              "Sind Sie Gesundheitsfachkraft oder Händler?"
            )}
          </h1>
          <p className="mt-6 text-lg" style={{ color: MUTED_NAVY }}>
            {tr(
              "Prenez rendez-vous pour échanger individuellement en visio.",
              "Book a meeting for an individual video call.",
              "Vereinbaren Sie einen individuellen Videoanruf."
            )}
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-20 md:py-28" style={{ backgroundColor: CREAM }}>
        <div className="max-w-5xl mx-auto">
          {isMobile ? (
            <div className="flex justify-center">
              <a
                href={MEETING_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-semibold"
                style={{ backgroundColor: ACCENT, color: NAVY, borderRadius: 50, padding: "16px 32px", fontSize: 18 }}
              >
                {tr("Prendre rendez-vous", "Book a meeting", "Termin vereinbaren")} <span aria-hidden="true">→</span>
              </a>
            </div>
          ) : (
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: WHITE, border: `1px solid ${BORDER_LIGHT}` }}>
              <iframe
                src={MEETING_URL}
                title="Prendre rendez-vous"
                className="w-full block"
                style={{ height: 750, border: 0, overflow: "hidden" }}
                scrolling="no"
                loading="lazy"
              />
            </div>
          )}
          <p className="text-center mt-6 text-sm" style={{ color: INK_MUTED }}>
            {tr("Une question ?", "Any question?", "Eine Frage?")} <a href="mailto:contact@legmio.com" style={{ color: NAVY }} className="underline">contact@legmio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
