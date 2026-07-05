import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function StickyBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 10) setVisible(true);
      else if (y > lastY) setVisible(false);
      else setVisible(true);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);
  return (
    <a
      href="/#pricing"
      className={`fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-center text-center text-xs sm:text-sm font-bold px-4 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
      style={{ backgroundColor: "#E8C170", color: "#0D0D29" }}
    >
      <span className="truncate">{t("banner")}</span>
    </a>
  );
}

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 10) setVisible(true);
      else if (y > lastY) setVisible(false);
      else setVisible(true);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);
  return (
    <header
      className={`fixed left-0 right-0 z-40 backdrop-blur-md border-b border-white/5 transition-transform duration-300 ${visible ? "translate-y-10" : "-translate-y-full"}`}
      style={{ top: 0, backgroundColor: "rgba(13,13,41,0.85)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-2xl text-white">
          leg<span style={{ color: "#E8C170" }}>mio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/produit" className="text-white/80 hover:text-white transition">{t("nav_product")}</Link>
          <Link to="/faq" className="text-white/80 hover:text-white transition">{t("nav_faq")}</Link>
          <Link to="/blog" className="text-white/80 hover:text-white transition">{t("nav_blog")}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1 text-sm">
            <button onClick={() => setLang("fr")} aria-label="Français" className={`px-1 py-0.5 rounded transition ${lang === "fr" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>🇫🇷</button>
            <span className="text-white/20">·</span>
            <button onClick={() => setLang("en")} aria-label="English" className={`px-1 py-0.5 rounded transition ${lang === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"}`}>🇬🇧</button>
          </div>
          <a href="/#pricing" className="btn-gold btn-gold-hover hidden sm:inline-flex text-sm px-5 py-2.5">
            {t("cta_interested")}
          </a>
          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 px-4 py-4 flex flex-col gap-4" style={{ backgroundColor: "rgba(13,13,41,0.98)" }}>
          <Link to="/produit" onClick={() => setOpen(false)} className="text-white/80">{t("nav_product")}</Link>
          <Link to="/faq" onClick={() => setOpen(false)} className="text-white/80">{t("nav_faq")}</Link>
          <Link to="/blog" onClick={() => setOpen(false)} className="text-white/80">{t("nav_blog")}</Link>
          <div className="flex items-center gap-3 pt-2">
            <button onClick={() => setLang("fr")} className={lang === "fr" ? "" : "opacity-40"}>🇫🇷 FR</button>
            <button onClick={() => setLang("en")} className={lang === "en" ? "" : "opacity-40"}>🇬🇧 EN</button>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer style={{ backgroundColor: "#080818" }} className="pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display font-bold text-2xl text-white">leg<span style={{ color: "#E8C170" }}>mio</span></div>
          <p className="mt-3 text-sm" style={{ color: "#A0A8C0" }}>{t("footer_tag")}</p>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold mb-4 font-sans">Navigation</h4>
          <ul className="space-y-2 text-sm" style={{ color: "#A0A8C0" }}>
            <li><Link to="/produit" className="hover:text-white">{t("nav_product")}</Link></li>
            <li><Link to="/faq" className="hover:text-white">{t("nav_faq")}</Link></li>
            <li><Link to="/blog" className="hover:text-white">{t("nav_blog")}</Link></li>
            <li><a href="mailto:contact@legmio.com" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold mb-4 font-sans">Légal</h4>
          <ul className="space-y-2 text-sm" style={{ color: "#A0A8C0" }}>
            <li><a href="#" className="hover:text-white">Mentions légales</a></li>
            <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
            <li><a href="#" className="hover:text-white">CGV</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-bold mb-4 font-sans">Réseaux</h4>
          <ul className="space-y-2 text-sm" style={{ color: "#A0A8C0" }}>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">TikTok</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center text-xs mt-12 pt-8 border-t border-white/5" style={{ color: "#A0A8C0" }}>
        {t("footer_bottom")}
      </div>
    </footer>
  );
}
