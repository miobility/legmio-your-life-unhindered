import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLanguage, pageDeChemin, LANGS, type Lang } from "@/lib/i18n";
import { IconInstagram, IconTiktok, IconLinkedin } from "@/components/Icons";
import { ACCENT_DEEP, INK, INK_SOFT, LINE_INK, MUTED_INK, WHITE } from "@/lib/couleurs";

const SOCIAL = {
  instagram: "https://www.instagram.com/legmio.official",
  tiktok: "https://www.tiktok.com/@legmio",
  linkedin: "https://www.linkedin.com/in/nicolas-perrin-gilbert-2815a4179/",
};


export function StickyBanner() {
  const { t, hubspotUrl } = useLanguage();
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((v) => (v + 1) % 2), 3000);
    return () => clearInterval(id);
  }, []);
  const msg = idx === 0 ? t("banner_a") : t("banner_b");
  return (
    <a
      href={hubspotUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-center text-center mention sm:legende font-medium px-4 hover:opacity-90 overflow-hidden"
      style={{ backgroundColor: ACCENT_DEEP, color: INK }}
    >
      <span key={idx} className="truncate fade-up">{msg}</span>
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
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg legende transition hover:opacity-80"
        style={{ color: WHITE }}
      >
        <span aria-hidden="true">{active.flag}</span>
        <span className="font-semibold">{active.code.toUpperCase()}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${open ? "rotate-180" : ""}`}><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute mt-2 py-1 z-50 overflow-hidden left-0 right-auto max-w-[180px] sm:right-0 sm:left-auto sm:min-w-[170px] sm:max-w-none"
          style={{ backgroundColor: INK, border: `1px solid ${LINE_INK}`, borderRadius: 8, color: WHITE }}
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={l.code === lang}
              onClick={() => pick(l.code)}
              className="w-full text-left px-3 py-2 legende flex items-center gap-2 transition"
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
  const { t, hubspotUrl, lien } = useLanguage();
  const retourHaut = useRetourHaut();
  const [open, setOpen] = useState(false);
  // En haut de page, l'en-tete se fond dans le hero navy : ni bordure ni
  // ombre. Des qu'on defile, il se materialise sur fond translucide et
  // laisse voir le contenu passer derriere, adouci.
  const [defile, setDefile] = useState(false);
  useEffect(() => {
    const surDefilement = () => setDefile(window.scrollY > 24);
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    return () => window.removeEventListener("scroll", surDefilement);
  }, []);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // Comparaison sur segment complet : "/produit" commencait par "/pro",
  // ce qui allumait l'onglet Espace pro en meme temps que Bequille.
  // Les adresses changent avec la langue : on compare la page, pas le chemin.
  const page = pageDeChemin(pathname);
  const isProduct = page === "produit";
  const isFaq = page === "faq";
  const isBlog = page === "blog";
  const isPro = page === "pro";
  const linkStyle = (active: boolean) => ({ color: active ? ACCENT_DEEP : WHITE });
  const linkClass = (active: boolean) =>
    `hover:opacity-80 transition ${active ? "font-bold" : ""}`;
  return (
    <header
      className={`entete fixed left-0 right-0 z-40 ${defile || open ? "entete-pose" : ""}`}
      style={{ top: 40 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-6">
        <Link to={lien("/")} onClick={retourHaut} className="font-display font-bold text-2xl shrink-0" style={{ color: WHITE }}>
          <img src={"/logo_legmio.svg"} alt="legmio" className="h-10 w-auto" width={160} height={40} />
        </Link>
        <div className="flex-1" />
        <nav className="hidden md:flex items-center gap-6 legende">
          <Link to={lien("/produit")} className={linkClass(isProduct)} style={linkStyle(isProduct)}>{t("nav_product")}</Link>
          <Link to={lien("/faq")} className={linkClass(isFaq)} style={linkStyle(isFaq)}>{t("nav_faq")}</Link>
          <Link to={lien("/blog")} className={linkClass(isBlog)} style={linkStyle(isBlog)}>{t("nav_blog")}</Link>
          <Link to={lien("/pro")} className={linkClass(isPro)} style={linkStyle(isPro)}>{t("nav_pro")}</Link>
        </nav>
        <div className="hidden sm:block"><LangSwitcher /></div>
        <a href={hubspotUrl} target="_blank" rel="noreferrer" className="btn-dark btn-dark-hover hidden sm:inline-flex legende px-5 py-2.5 items-center gap-1.5">
          {t("cta_interested")} <span aria-hidden="true">→</span>
        </a>
        <button className="md:hidden p-2" style={{ color: WHITE }} onClick={() => setOpen(!open)} aria-label={t("nav_menu")} aria-expanded={open} aria-controls="menu-mobile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>
      {open && (
        <div id="menu-mobile" className="md:hidden border-t px-4 py-3 flex flex-col" style={{ backgroundColor: INK_SOFT, borderColor: LINE_INK }}>
          <Link to={lien("/produit")} onClick={() => setOpen(false)} className="text-[15px] py-2.5" style={linkStyle(isProduct)}>{t("nav_product")}</Link>
          <Link to={lien("/faq")} onClick={() => setOpen(false)} className="text-[15px] py-2.5" style={linkStyle(isFaq)}>{t("nav_faq")}</Link>
          <Link to={lien("/blog")} onClick={() => setOpen(false)} className="text-[15px] py-2.5" style={linkStyle(isBlog)}>{t("nav_blog")}</Link>
          <Link to={lien("/pro")} onClick={() => setOpen(false)} className="text-[15px] py-2.5" style={linkStyle(isPro)}>{t("nav_pro")}</Link>
          <a href={hubspotUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="btn-dark btn-dark-hover legende px-5 py-2.5 mt-3 self-start inline-flex items-center gap-1.5">
            {t("cta_interested")} <span aria-hidden="true">→</span>
          </a>
          <div className="mt-4 pt-3 border-t" style={{ borderColor: LINE_INK }}><LangSwitcher onPick={() => setOpen(false)} /></div>
        </div>
      )}
    </header>
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
            <img src={"/logo_legmio.svg"} alt="legmio" className="h-10 w-auto block" loading="lazy" width={160} height={40} />
          </Link>
          <p className="mt-3 legende" style={{ color: MUTED_INK }}>{t("footer_tag")}</p>
        </div>
        <div>
          <h3 className="legende font-bold mb-4 font-sans" style={{ color: WHITE }}>Navigation</h3>
          <ul className="space-y-1 legende [&_a]:inline-block [&_a]:py-1.5" style={{ color: MUTED_INK }}>
            <li><Link to={lien("/produit")} className="hover:text-white">{t("nav_product")}</Link></li>
            <li><Link to={lien("/faq")} className="hover:text-white">{t("nav_faq")}</Link></li>
            <li><Link to={lien("/blog")} className="hover:text-white">{t("nav_blog")}</Link></li>
            <li><Link to={lien("/pro")} className="hover:text-white">{t("nav_pro")}</Link></li>
            <li><a href="mailto:contact@legmio.com" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="legende font-bold mb-4 font-sans" style={{ color: WHITE }}>{tr("Légal", "Legal", "Rechtliches")}</h3>
          <ul className="space-y-1 legende [&_a]:inline-block [&_a]:py-1.5" style={{ color: MUTED_INK }}>
            <li><Link to={lien("/mentions-legales")} className="hover:text-white">{tr("Mentions légales", "Legal notice", "Impressum")}</Link></li>
            <li><Link to={lien("/confidentialite")} className="hover:text-white">{tr("Politique de confidentialité", "Privacy policy", "Datenschutzrichtlinie")}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="legende font-bold mb-4 font-sans" style={{ color: WHITE }}>{tr("Réseaux", "Social", "Soziale Netzwerke")}</h3>
          <ul className="space-y-1 legende [&_a]:py-1.5" style={{ color: MUTED_INK }}>
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
