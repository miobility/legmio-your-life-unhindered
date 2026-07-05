import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { IconSearch, IconInstagram, IconTiktok, IconLinkedin } from "@/components/Icons";

export function StickyBanner() {
  const { t } = useLanguage();
  return (
    <a
      href="/#waitlist"
      className="fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-center text-center text-xs sm:text-sm font-medium px-4 hover:opacity-90 transition"
      style={{ backgroundColor: "#111111", color: "#FFFFFF" }}
    >
      <span className="truncate">{t("banner")}</span>
    </a>
  );
}

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  return (
    <header
      className="fixed left-0 right-0 z-40 border-b"
      style={{ top: 40, backgroundColor: "#FFFFFF", borderColor: "#EEEEEE", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="font-display font-bold text-2xl shrink-0" style={{ color: "#111111" }}>
          legmio
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/produit" className="hover:opacity-60 transition" style={{ color: "#111111" }}>{t("nav_product")}</Link>
          <Link to="/faq" className="hover:opacity-60 transition" style={{ color: "#111111" }}>{t("nav_faq")}</Link>
          <Link to="/blog" className="hover:opacity-60 transition" style={{ color: "#111111" }}>{t("nav_blog")}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 border rounded-full px-3 py-1.5" style={{ borderColor: "#EEEEEE" }}>
            <IconSearch size={16} />
            <input
              type="text"
              placeholder={t("search_ph")}
              aria-label={t("search_ph")}
              className="bg-transparent text-sm outline-none w-32"
              style={{ color: "#111111" }}
            />
          </div>
          <div className="hidden sm:flex items-center gap-1 text-sm" style={{ color: "#111111" }}>
            <button onClick={() => setLang("fr")} aria-label="Français" className={`px-1 py-0.5 transition ${lang === "fr" ? "opacity-100 font-semibold" : "opacity-40 hover:opacity-70"}`}>FR</button>
            <span style={{ color: "#CCCCCC" }}>·</span>
            <button onClick={() => setLang("en")} aria-label="English" className={`px-1 py-0.5 transition ${lang === "en" ? "opacity-100 font-semibold" : "opacity-40 hover:opacity-70"}`}>EN</button>
          </div>
          <a href="/#waitlist" className="btn-dark btn-dark-hover hidden sm:inline-flex text-sm px-5 py-2.5">
            {t("cta_interested")}
          </a>
          <button className="md:hidden p-2" style={{ color: "#111111" }} onClick={() => setOpen(!open)} aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t px-4 py-4 flex flex-col gap-4" style={{ backgroundColor: "#FFFFFF", borderColor: "#EEEEEE" }}>
          <Link to="/produit" onClick={() => setOpen(false)} style={{ color: "#111111" }}>{t("nav_product")}</Link>
          <Link to="/faq" onClick={() => setOpen(false)} style={{ color: "#111111" }}>{t("nav_faq")}</Link>
          <Link to="/blog" onClick={() => setOpen(false)} style={{ color: "#111111" }}>{t("nav_blog")}</Link>
          <div className="flex items-center gap-3 pt-2" style={{ color: "#111111" }}>
            <button onClick={() => setLang("fr")} className={lang === "fr" ? "font-semibold" : "opacity-40"}>FR</button>
            <span>·</span>
            <button onClick={() => setLang("en")} className={lang === "en" ? "font-semibold" : "opacity-40"}>EN</button>
          </div>
          <a href="/#waitlist" onClick={() => setOpen(false)} className="btn-dark btn-dark-hover text-sm px-5 py-2.5 mt-2 self-start">
            {t("cta_interested")}
          </a>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer style={{ backgroundColor: "#111111", color: "#FFFFFF" }} className="pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display font-bold text-2xl" style={{ color: "#FFFFFF" }}>legmio</div>
          <p className="mt-3 text-sm" style={{ color: "#BBBBBB" }}>{t("footer_tag")}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-4 font-sans" style={{ color: "#FFFFFF" }}>Navigation</h4>
          <ul className="space-y-2 text-sm" style={{ color: "#BBBBBB" }}>
            <li><Link to="/produit" className="hover:text-white">{t("nav_product")}</Link></li>
            <li><Link to="/faq" className="hover:text-white">{t("nav_faq")}</Link></li>
            <li><Link to="/blog" className="hover:text-white">{t("nav_blog")}</Link></li>
            <li><a href="mailto:contact@legmio.com" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-4 font-sans" style={{ color: "#FFFFFF" }}>Légal</h4>
          <ul className="space-y-2 text-sm" style={{ color: "#BBBBBB" }}>
            <li><a href="#" className="hover:text-white">Mentions légales</a></li>
            <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
            <li><a href="#" className="hover:text-white">CGV</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-4 font-sans" style={{ color: "#FFFFFF" }}>Réseaux</h4>
          <ul className="space-y-3 text-sm" style={{ color: "#BBBBBB" }}>
            <li><a href="#" className="hover:text-white inline-flex items-center gap-2"><IconInstagram size={16} /> Instagram</a></li>
            <li><a href="#" className="hover:text-white inline-flex items-center gap-2"><IconTiktok size={16} /> TikTok</a></li>
            <li><a href="#" className="hover:text-white inline-flex items-center gap-2"><IconLinkedin size={16} /> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center text-xs mt-12 pt-8 border-t" style={{ color: "#888888", borderColor: "#333333" }}>
        {t("footer_bottom")}
      </div>
    </footer>
  );
}
