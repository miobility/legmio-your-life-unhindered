import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { IconInstagram, IconTiktok, IconLinkedin } from "@/components/Icons";

const SOCIAL = {
  instagram: "https://www.instagram.com/legmio.official",
  tiktok: "https://www.tiktok.com/@legmio",
  linkedin: "https://www.linkedin.com/in/nicolas-perrin-gilbert-2815a4179/",
};

const ACCENT = "#F5C842";
const NAVY = "#120B3B";
const NAVY_ALT = "#1A1040";
const WHITE = "#FFFFFF";
const MUTED = "#A89ED0";
const BORDER = "#2A1F6B";

export function StickyBanner() {
  const { t, hubspotUrl } = useLanguage();
  const [idx, setIdx] = useState(0);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setIdx((v) => (v + 1) % 2), 3000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const msg = idx === 0 ? t("banner_a") : t("banner_b");
  return (
    <a
      href={hubspotUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-center text-center text-xs sm:text-sm font-medium px-4 hover:opacity-90 overflow-hidden"
      style={{
        backgroundColor: ACCENT,
        color: NAVY,
        transition: "opacity 300ms ease, transform 300ms ease",
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      <span key={idx} className="truncate fade-up">{msg}</span>
    </a>
  );
}


export function Header() {
  const { t, lang, setLang, hubspotUrl } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isProduct = pathname.startsWith("/produit") || pathname.startsWith("/bequille");
  const isFaq = pathname.startsWith("/faq");
  const isBlog = pathname.startsWith("/blog");
  const linkStyle = (active: boolean) => ({ color: active ? ACCENT : WHITE });
  const linkClass = (active: boolean) =>
    `hover:opacity-80 transition ${active ? "font-bold" : ""}`;
  return (
    <header
      className="fixed left-0 right-0 z-40 border-b"
      style={{ top: 40, backgroundColor: NAVY, borderColor: BORDER, boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-6">
        <Link to="/" className="font-display font-bold text-2xl shrink-0" style={{ color: WHITE }}>
          <img src={"/logo_legmio.svg"} alt="Legmio" className="h-10 w-auto" />
        </Link>
        <div className="flex-1" />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/produit" className={linkClass(isProduct)} style={linkStyle(isProduct)}>{t("nav_product")}</Link>
          <Link to="/faq" className={linkClass(isFaq)} style={linkStyle(isFaq)}>{t("nav_faq")}</Link>
          <Link to="/blog" className={linkClass(isBlog)} style={linkStyle(isBlog)}>{t("nav_blog")}</Link>
        </nav>
        <div className="hidden sm:flex items-center gap-1 text-sm" style={{ color: WHITE }}>
          <button onClick={() => setLang("fr")} aria-label="Français" className={`px-1 py-0.5 transition ${lang === "fr" ? "opacity-100 font-semibold" : "opacity-40 hover:opacity-70"}`}>FR</button>
          <span style={{ color: MUTED }}>·</span>
          <button onClick={() => setLang("en")} aria-label="English" className={`px-1 py-0.5 transition ${lang === "en" ? "opacity-100 font-semibold" : "opacity-40 hover:opacity-70"}`}>EN</button>
        </div>
        <a href={hubspotUrl} target="_blank" rel="noreferrer" className="btn-dark btn-dark-hover hidden sm:inline-flex text-sm px-5 py-2.5">
          {t("cta_interested")}
        </a>
        <button className="md:hidden p-2" style={{ color: WHITE }} onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4" style={{ backgroundColor: NAVY_ALT, borderColor: BORDER }}>
          <Link to="/produit" onClick={() => setOpen(false)} style={linkStyle(isProduct)}>{t("nav_product")}</Link>
          <Link to="/faq" onClick={() => setOpen(false)} style={linkStyle(isFaq)}>{t("nav_faq")}</Link>
          <Link to="/blog" onClick={() => setOpen(false)} style={linkStyle(isBlog)}>{t("nav_blog")}</Link>
          <div className="flex items-center gap-3 pt-2" style={{ color: WHITE }}>
            <button onClick={() => setLang("fr")} className={lang === "fr" ? "font-semibold" : "opacity-40"}>FR</button>
            <span>·</span>
            <button onClick={() => setLang("en")} className={lang === "en" ? "font-semibold" : "opacity-40"}>EN</button>
          </div>
          <a href={hubspotUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="btn-dark btn-dark-hover text-sm px-5 py-2.5 mt-2 self-start">
            {t("cta_interested")}
          </a>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { t, tr } = useLanguage();
  return (
    <footer style={{ backgroundColor: NAVY, color: WHITE }} className="pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display font-bold text-2xl" style={{ color: WHITE }}><img src={"/logo_legmio.svg"} alt="Legmio" className="h-10 w-auto" /></div>
          <p className="mt-3 text-sm" style={{ color: MUTED }}>{t("footer_tag")}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-4 font-sans" style={{ color: WHITE }}>Navigation</h4>
          <ul className="space-y-2 text-sm" style={{ color: MUTED }}>
            <li><Link to="/produit" className="hover:text-white">{t("nav_product")}</Link></li>
            <li><Link to="/faq" className="hover:text-white">{t("nav_faq")}</Link></li>
            <li><Link to="/blog" className="hover:text-white">{t("nav_blog")}</Link></li>
            <li><Link to="/pro" className="hover:text-white">{tr("Espace pro", "Pro area")}</Link></li>
            <li><a href="mailto:contact@legmio.com" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-4 font-sans" style={{ color: WHITE }}>{tr("Légal", "Legal")}</h4>
          <ul className="space-y-2 text-sm" style={{ color: MUTED }}>
            <li><Link to="/mentions-legales" className="hover:text-white">{tr("Mentions légales", "Legal notice")}</Link></li>
            <li><Link to="/confidentialite" className="hover:text-white">{tr("Politique de confidentialité", "Privacy policy")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-4 font-sans" style={{ color: WHITE }}>{tr("Réseaux", "Social")}</h4>
          <ul className="space-y-3 text-sm" style={{ color: MUTED }}>
            <li><a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><IconInstagram size={16} /> Instagram</a></li>
            <li><a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><IconTiktok size={16} /> TikTok</a></li>
            <li><a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><IconLinkedin size={16} /> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center text-xs mt-12 pt-8 border-t" style={{ color: MUTED, borderColor: BORDER }}>
        {t("footer_bottom")}
      </div>
    </footer>
  );
}

export { SOCIAL };
