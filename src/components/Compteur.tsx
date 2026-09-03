import { useEffect, useRef, useState } from "react";
import { MARGE_TEMPS_FORT, SEUIL } from "@/lib/apparition";

/**
 * Compte jusqu'a la valeur cible quand le bloc entre a l'ecran.
 * Reserve aux chiffres qui portent l'argument — ici les vues Instagram.
 */
export function Compteur({
  valeur,
  suffixe = "",
  decimales = 0,
  duree = 2400,
}: {
  valeur: number;
  suffixe?: string;
  decimales?: number;
  duree?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [affiche, setAffiche] = useState(0);
  const [fini, setFini] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || fini) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAffiche(valeur); setFini(true); return;
    }
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      setFini(true);
      const t0 = performance.now();
      const pas = (now: number) => {
        const p = Math.min(1, (now - t0) / duree);
        // Courbe en S : depart doux, progression reguliere au milieu, arrivee
        // douce. Une sortie cubique classique parcourait les deux tiers du
        // chemin en un tiers du temps — le chiffre bondissait puis rampait.
        const adouci = p * p * (3 - 2 * p);
        setAffiche(valeur * adouci);
        if (p < 1) requestAnimationFrame(pas);
      };
      requestAnimationFrame(pas);
    }, { threshold: SEUIL, rootMargin: MARGE_TEMPS_FORT });
    io.observe(el);
    return () => io.disconnect();
  }, [valeur, duree, fini]);

  // Pendant la montee, au moins une decimale : sinon « 1M » sauterait de 0 a 1
  // sans rien montrer. A l'arrivee, on retombe sur le format demande.
  const enCours = fini && affiche < valeur;
  const chiffres = enCours ? Math.max(decimales, 1) : decimales;

  return (
    <span ref={ref}>
      {affiche.toFixed(chiffres).replace(".", ",")}
      {suffixe}
    </span>
  );
}
