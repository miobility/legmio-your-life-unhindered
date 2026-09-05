import { metaDe } from "@/lib/meta";
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { MeetingsEmbed } from "@/components/MeetingsEmbed";
import { INK, LINE, MUTED, MUTED_INK, SAND, WHITE } from "@/lib/couleurs";

export const Route = createFileRoute("/pro")({
  head: () => metaDe("fr", "pro"),
  component: ProPage,
});


const MEETING_URL = "https://meetings-eu1.hubspot.com/benjamin-rajjou";

export function ProPage() {
  const { tr } = useLanguage();
  return (
    <div style={{ backgroundColor: SAND }}>
      <section className="grain relative jonction-bas px-4 sm:px-6 py-20 md:py-28" style={{ backgroundColor: INK }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="titre-page leading-tight" style={{ color: WHITE }}>
            {tr(
              "Vous êtes professionnel de santé ou distributeur\u00a0?",
              "Are you a healthcare professional or distributor?",
              "Sind Sie Gesundheitsfachkraft oder Händler?"
            )}
          </h1>
          <p className="mt-6 text-lg" style={{ color: MUTED_INK }}>
            {tr(
              "Prenez rendez-vous pour échanger individuellement en visio.",
              "Book a meeting for an individual video call.",
              "Vereinbaren Sie einen individuellen Videoanruf."
            )}
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-20 md:py-28" style={{ backgroundColor: SAND }}>
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: WHITE, border: `1px solid ${LINE}` }}>
            <MeetingsEmbed url={MEETING_URL} />
          </div>
          <p className="text-center mt-6 legende" style={{ color: MUTED }}>
            {tr("Une question ?", "Any question?", "Eine Frage?")} <a href="mailto:contact@legmio.com" style={{ color: INK }} className="underline">contact@legmio.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}
