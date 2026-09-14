import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLanguage, pageDeChemin, LANGS, type Lang } from "@/lib/i18n";
import { IconInstagram, IconTiktok, IconLinkedin } from "@/components/Icons";
import { CTA, INK, INK_SOFT, LINE_INK, MUTED_INK, WHITE } from "@/lib/couleurs";
import { Image } from "@/components/Image";

const SOCIAL = {
  instagram: "https://www.instagram.com/legmio.official",
  tiktok: "https://www.tiktok.com/@legmio",
  linkedin: "https://www.linkedin.com/in/nicolas-perrin-gilbert-2815a4179/",
};


export function StickyBanner() {
  const { t, hubspotUrl } = useLanguage();
  // Un seul texte. Il alternait toutes les 3 secondes : l'oeil y revenait
  // sans cesse, et un lecteur d'ecran le voyait changer sous lui. Sur
  // telephone la date ne tient pas a cote de l'appel, seul l'appel reste.
  return (
    <a
      href={hubspotUrl}
      target="_blank"
      rel="noreferrer"
      className="bandeau fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-center text-center mention font-medium px-4 hover:opacity-90 overflow-hidden"
      style={{ backgroundColor: CTA, color: INK }}
    >
      <span className="truncate">
        <span className="hidden sm:inline">{t("banner_b")} · </span>{t("banner_a")} <span aria-hidden="true">→</span>
      </span>
    </a>
  );
}


function LangSwitcher({ onPick }: { onPick?: () => void }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const active = LANGS.find((l) => l.code === lang)!;
  const pick = (c: Lang) => {
    setLang(c);
    setOpen(false);
    onPick?.();
  };
  return (
    <div className="relative overflow-visible" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className="flex items-center gap-2 px-2 py-2 rounded-xl legende transition hover:opacity-80"
        style={{ color: WHITE }}
      >
        <span aria-hidden="true">{active.flag}</span>
        <span className="font-semibold">{active.code.toUpperCase()}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${open ? "rotate-180" : ""}`}><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute mt-2 py-2 z-50 overflow-hidden left-0 right-auto max-w-[180px] sm:right-0 sm:left-auto sm:min-w-[170px] sm:max-w-none"
          style={{ backgroundColor: INK, border: `1px solid ${LINE_INK}`, borderRadius: 8, color: WHITE }}
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={l.code === lang}
              onClick={() => pick(l.code)}
              className="w-full text-left px-4 py-2 legende flex items-center gap-2 transition"
              style={{ fontWeight: l.code === lang ? 700 : 400 }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = INK_SOFT)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <span aria-hidden="true">{l.flag}</span>
              <span className="truncate">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Sur l'accueil, cliquer le logo ne faisait rien : on y est deja.
 *  Il ramene desormais en haut de page. */
function useRetourHaut() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (e: React.MouseEvent) => {
    if (pathname !== "/") return;
    e.preventDefault();
    const doux = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: doux ? "smooth" : "auto" });
  };
}

export function Header() {
  const { t, tr, hubspotUrl, lien } = useLanguage();
  const retourHaut = useRetourHaut();
  const [open, setOpen] = useState(false);
  // En haut de page, l'en-tete se fond dans le hero navy : ni bordure ni
  // ombre. Des qu'on defile, il se materialise sur fond translucide et
  // laisse voir le contenu passer derriere, adouci.
  const [defile, setDefile] = useState(false);
  // Au-dela de deux ecrans, un bouton propose de remonter.
  const [loin, setLoin] = useState(false);
  const ouvert = useRef(false);
  ouvert.current = open;
  useEffect(() => {
    const racine = document.documentElement;
    let dernier = window.scrollY;
    const surDefilement = () => {
      const y = window.scrollY;
      setDefile(y > 24);
      setLoin(y > window.innerHeight * 2);
      // Sur telephone, bandeau et en-tete se rangent quand on descend et
      // reviennent des qu'on remonte (la regle CSS ne s'applique qu'en
      // dessous de 768 px). Jamais en haut de page, ni menu ouvert.
      if (y < 160 || ouvert.current) {
        racine.classList.remove("entete-masquee");
        dernier = y;
        return;
      }
      if (Math.abs(y - dernier) < 8) return;
      racine.classList.toggle("entete-masquee", y > dernier);
      dernier = y;
    };
    // Au clavier, un element de l'en-tete qui recoit le focus le fait revenir.
    const surFocus = (e: FocusEvent) => {
      if ((e.target as Element | null)?.closest?.(".entete, .bandeau")) racine.classList.remove("entete-masquee");
    };
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    document.addEventListener("focusin", surFocus);
    return () => {
      window.removeEventListener("scroll", surDefilement);
      document.removeEventListener("focusin", surFocus);
      racine.classList.remove("entete-masquee");
    };
  }, []);
  useEffect(() => {
    if (open) document.documentElement.classList.remove("entete-masquee");
  }, [open]);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // Comparaison sur segment complet : "/produit" commencait par "/pro",
  // ce qui allumait l'onglet Espace pro en meme temps que Bequille.
  // Les adresses changent avec la langue : on compare la page, pas le chemin.
  const page = pageDeChemin(pathname);
  const isProduct = page === "produit";
  const isFaq = page === "faq";
  const isBlog = page === "blog";
  const isPro = page === "pro";
  const linkStyle = (active: boolean) => ({ color: active ? CTA : WHITE });
  const linkClass = (active: boolean) =>
    `hover:opacity-80 transition ${active ? "font-bold" : ""}`;
  return (
    <>
    <header
      className={`entete fixed left-0 right-0 z-40 ${defile || open ? "entete-pose" : ""}`}
      style={{ top: 40 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-6">
        <Link to={lien("/")} onClick={retourHaut} className="font-display font-bold text-2xl shrink-0" style={{ color: WHITE }}>
          <Image src={"/logo_legmio.svg"} alt="legmio" className="h-10 w-auto" width={160} height={40} />
        </Link>
        <div className="flex-1" />
        <nav className="hidden md:flex items-center gap-6 legende">
          <Link to={lien("/produit")} className={linkClass(isProduct)} style={linkStyle(isProduct)}>{t("nav_product")}</Link>
          <Link to={lien("/faq")} className={linkClass(isFaq)} style={linkStyle(isFaq)}>{t("nav_faq")}</Link>
          <Link to={lien("/blog")} className={linkClass(isBlog)} style={linkStyle(isBlog)}>{t("nav_blog")}</Link>
          <Link to={lien("/pro")} className={linkClass(isPro)} style={linkStyle(isPro)}>{t("nav_pro")}</Link>
        </nav>
        <div className="hidden sm:block"><LangSwitcher /></div>
        <a href={hubspotUrl} target="_blank" rel="noreferrer" className="btn-dark btn-dark-hover hidden sm:inline-flex legende px-6 py-2 items-center gap-2">
          {t("cta_interested")} <span aria-hidden="true">→</span>
        </a>
        <button className="md:hidden w-11 h-11 flex items-center justify-center" style={{ color: WHITE }} onClick={() => setOpen(!open)} aria-label={t("nav_menu")} aria-expanded={open} aria-controls="menu-mobile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>
      {open && (
        <div id="menu-mobile" className="md:hidden border-t px-4 py-4 flex flex-col" style={{ backgroundColor: INK_SOFT, borderColor: LINE_INK }}>
          <Link to={lien("/produit")} onClick={() => setOpen(false)} className="text-[15px] py-3" style={linkStyle(isProduct)}>{t("nav_product")}</Link>
          <Link to={lien("/faq")} onClick={() => setOpen(false)} className="text-[15px] py-3" style={linkStyle(isFaq)}>{t("nav_faq")}</Link>
          <Link to={lien("/blog")} onClick={() => setOpen(false)} className="text-[15px] py-3" style={linkStyle(isBlog)}>{t("nav_blog")}</Link>
          <Link to={lien("/pro")} onClick={() => setOpen(false)} className="text-[15px] py-3" style={linkStyle(isPro)}>{t("nav_pro")}</Link>
          <a href={hubspotUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="btn-dark btn-dark-hover legende px-6 py-2 mt-4 self-start inline-flex items-center gap-2">
            {t("cta_interested")} <span aria-hidden="true">→</span>
          </a>
          <div className="mt-4 pt-4 border-t" style={{ borderColor: LINE_INK }}><LangSwitcher onPick={() => setOpen(false)} /></div>
        </div>
      )}
    </header>
    {/* Hors de <header> : l'en-tete se range en glissant, et un element fixe
        place dedans glisserait avec lui. */}
    {loin && (
      <button
        type="button"
        onClick={() => {
          const doux = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({ top: 0, behavior: doux ? "smooth" : "auto" });
        }}
        aria-label={tr("Remonter en haut de page", "Back to top", "Nach oben")}
        className="fixed bottom-4 right-4 z-40 w-11 h-11 rounded-full flex items-center justify-center hover:opacity-90"
        style={{ backgroundColor: INK, color: WHITE, border: `1px solid ${LINE_INK}` }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 15l-6-6-6 6" /></svg>
      </button>
    )}
    </>
  );
}


export function Footer() {
  const { t, tr, lien } = useLanguage();
  const retourHaut = useRetourHaut();
  return (
    <footer style={{ backgroundColor: INK, color: WHITE }} className="pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-start">
          <Link to={lien("/")} onClick={retourHaut} aria-label="legmio — accueil">
            <Image src={"/logo_legmio.svg"} alt="legmio" className="h-10 w-auto block" loading="lazy" width={160} height={40} />
          </Link>
          <p className="mt-4 legende" style={{ color: MUTED_INK }}>{t("footer_tag")}</p>
        </div>
        <div>
          <h3 className="legende font-bold mb-4 font-sans" style={{ color: WHITE }}>Navigation</h3>
          <ul className="space-y-2 legende [&_a]:inline-block [&_a]:py-2" style={{ color: MUTED_INK }}>
            <li><Link to={lien("/produit")} className="hover:text-white">{t("nav_product")}</Link></li>
            <li><Link to={lien("/faq")} className="hover:text-white">{t("nav_faq")}</Link></li>
            <li><Link to={lien("/blog")} className="hover:text-white">{t("nav_blog")}</Link></li>
            <li><Link to={lien("/pro")} className="hover:text-white">{t("nav_pro")}</Link></li>
            {/* L'adresse est ecrite en clair : un lien mailto ne fait rien chez
                qui n'a pas de logiciel de messagerie configure — c'est-a-dire
                chez beaucoup de monde. Ecrite, elle se copie. */}
            <li><a href="mailto:contact@legmio.com" className="hover:text-white">contact@legmio.com</a></li>
          </ul>
        </div>
        <div>
          <h3 className="legende font-bold mb-4 font-sans" style={{ color: WHITE }}>{tr("Légal", "Legal", "Rechtliches")}</h3>
          <ul className="space-y-2 legende [&_a]:inline-block [&_a]:py-2" style={{ color: MUTED_INK }}>
            <li><Link to={lien("/mentions-legales")} className="hover:text-white">{tr("Mentions légales", "Legal notice", "Impressum")}</Link></li>
            <li><Link to={lien("/confidentialite")} className="hover:text-white">{tr("Politique de confidentialité", "Privacy policy", "Datenschutzrichtlinie")}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="legende font-bold mb-4 font-sans" style={{ color: WHITE }}>{tr("Réseaux", "Social", "Soziale Netzwerke")}</h3>
          <ul className="space-y-2 legende [&_a]:py-2" style={{ color: MUTED_INK }}>
            <li><a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><IconInstagram size={16} /> Instagram</a></li>
            <li><a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><IconTiktok size={16} /> TikTok</a></li>
            <li><a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><IconLinkedin size={16} /> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center mention mt-12 pt-8 border-t" style={{ color: MUTED_INK, borderColor: LINE_INK }}>
        {t("footer_bottom")}
      </div>
    </footer>
  );
}

export { SOCIAL };
