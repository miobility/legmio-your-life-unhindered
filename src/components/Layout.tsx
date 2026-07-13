import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { IconSearch, IconInstagram, IconTiktok, IconLinkedin } from "@/components/Icons";

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
      className="fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-center text-center text-xs sm:text-sm font-medium px-4 hover:opacity-90 transition overflow-hidden"
      style={{ backgroundColor: "#111111", color: "#FFFFFF" }}
    >
      <span key={idx} className="truncate fade-up">{msg}</span>
    </a>
  );
}

function runSearch(q: string) {
  if (typeof window === "undefined") return;
  const query = q.trim();
  // Clear previous highlights
  document.querySelectorAll("mark[data-legmio-hit]").forEach((m) => {
    const t = document.createTextNode(m.textContent || "");
    m.parentNode?.replaceChild(t, m);
  });
  if (!query) return;
  const rx = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
  const root = document.querySelector("main");
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => {
      if (!n.textContent || !n.textContent.trim()) return NodeFilter.FILTER_REJECT;
      const p = n.parentElement;
      if (!p) return NodeFilter.FILTER_REJECT;
      const tag = p.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "MARK" || tag === "INPUT" || tag === "TEXTAREA") return NodeFilter.FILTER_REJECT;
      return rx.test(n.textContent) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const nodes: Text[] = [];
  let cur = walker.nextNode();
  while (cur) { nodes.push(cur as Text); cur = walker.nextNode(); }
  let first: HTMLElement | null = null;
  nodes.forEach((node) => {
    const text = node.textContent!;
    rx.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let lastIdx = 0;
    let m: RegExpExecArray | null;
    while ((m = rx.exec(text)) !== null) {
      if (m.index > lastIdx) frag.appendChild(document.createTextNode(text.slice(lastIdx, m.index)));
      const mark = document.createElement("mark");
      mark.setAttribute("data-legmio-hit", "1");
      mark.style.backgroundColor = "#FFEB3B";
      mark.style.color = "#111";
      mark.textContent = m[0];
      if (!first) first = mark;
      frag.appendChild(mark);
      lastIdx = m.index + m[0].length;
    }
    if (lastIdx < text.length) frag.appendChild(document.createTextNode(text.slice(lastIdx)));
    node.parentNode?.replaceChild(frag, node);
  });
  if (first) (first as HTMLElement).scrollIntoView({ behavior: "smooth", block: "center" });
}

export function Header() {
  const { t, lang, setLang, hubspotUrl } = useLanguage();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  return (
    <header
      className="fixed left-0 right-0 z-40 border-b"
      style={{ top: 40, backgroundColor: "#FFFFFF", borderColor: "#EEEEEE", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-6">
        <Link to="/" className="font-display font-bold text-2xl shrink-0" style={{ color: "#111111" }}>
          legmio
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/produit" className="hover:opacity-60 transition" style={{ color: "#111111" }}>{t("nav_product")}</Link>
          <Link to="/faq" className="hover:opacity-60 transition" style={{ color: "#111111" }}>{t("nav_faq")}</Link>
          <Link to="/blog" className="hover:opacity-60 transition" style={{ color: "#111111" }}>{t("nav_blog")}</Link>
        </nav>
        <div className="flex-1" />
        <form
          onSubmit={(e) => { e.preventDefault(); runSearch(q); }}
          className="hidden lg:flex items-center gap-2 border rounded-full px-3 py-1.5"
          style={{ borderColor: "#EEEEEE" }}
        >
          <button type="submit" aria-label="Search" style={{ color: "#111" }}><IconSearch size={16} /></button>
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("search_ph")}
            aria-label={t("search_ph")}
            className="bg-transparent text-sm outline-none w-40"
            style={{ color: "#111111" }}
          />
        </form>
        <div className="hidden sm:flex items-center gap-1 text-sm" style={{ color: "#111111" }}>
          <button onClick={() => setLang("fr")} aria-label="Français" className={`px-1 py-0.5 transition ${lang === "fr" ? "opacity-100 font-semibold" : "opacity-40 hover:opacity-70"}`}>FR</button>
          <span style={{ color: "#CCCCCC" }}>·</span>
          <button onClick={() => setLang("en")} aria-label="English" className={`px-1 py-0.5 transition ${lang === "en" ? "opacity-100 font-semibold" : "opacity-40 hover:opacity-70"}`}>EN</button>
        </div>
        <a href={hubspotUrl} target="_blank" rel="noreferrer" className="btn-dark btn-dark-hover hidden sm:inline-flex text-sm px-5 py-2.5">
          {t("cta_interested")}
        </a>
        <button className="md:hidden p-2" style={{ color: "#111111" }} onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} /></svg>
        </button>
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
          <h4 className="text-sm font-bold mb-4 font-sans" style={{ color: "#FFFFFF" }}>{tr("Légal", "Legal")}</h4>
          <ul className="space-y-2 text-sm" style={{ color: "#BBBBBB" }}>
            <li><a href="#" className="hover:text-white">{tr("Mentions légales", "Legal notice")}</a></li>
            <li><a href="#" className="hover:text-white">{tr("Politique de confidentialité", "Privacy policy")}</a></li>
            <li><a href="#" className="hover:text-white">{tr("CGV", "Terms")}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold mb-4 font-sans" style={{ color: "#FFFFFF" }}>{tr("Réseaux", "Social")}</h4>
          <ul className="space-y-3 text-sm" style={{ color: "#BBBBBB" }}>
            <li><a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><IconInstagram size={16} /> Instagram</a></li>
            <li><a href={SOCIAL.tiktok} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><IconTiktok size={16} /> TikTok</a></li>
            <li><a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="hover:text-white inline-flex items-center gap-2"><IconLinkedin size={16} /> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center text-xs mt-12 pt-8 border-t" style={{ color: "#888888", borderColor: "#333333" }}>
        {t("footer_bottom")}
      </div>
    </footer>
  );
}

export { SOCIAL };
