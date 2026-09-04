import { metaDe } from "@/lib/meta";
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { MeetingsEmbed } from "@/components/MeetingsEmbed";

export const Route = createFileRoute("/pro")({
  head: () => metaDe("fr", "pro"),
  component: ProPage,
});

const NAVY = "#0D0D29";
const WHITE = "#FFFFFF";
const CREAM = "#FAFAF8";
const INK_MUTED = "#6B6B6B";
const MUTED_NAVY = "#A89ED0";
const BORDER_LIGHT = "#E8E4DC";

const MEETING_URL = "https://meetings-eu1.hubspot.com/benjamin-rajjou";

export function ProPage() {
  const { tr } = useLanguage();
  return (
    <div style={{ backgroundColor: CREAM }}>
      <section className="grain relative jonction-bas px-4 sm:px-6 py-20 md:py-28" style={{ backgroundColor: NAVY }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="titre-page leading-tight" style={{ color: WHITE }}>
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
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: WHITE, border: `1px solid ${BORDER_LIGHT}` }}>
            <MeetingsEmbed url={MEETING_URL} />
          </div>
          <p className="text-center mt-6 text-sm" style={{ color: INK_MUTED }}>
            {tr("Une question ?", "Any question?", "Eine Frage?")} <a href="mailto:contact@legmio.com" style={{ color: NAVY }} className="underline">contact@legmio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
