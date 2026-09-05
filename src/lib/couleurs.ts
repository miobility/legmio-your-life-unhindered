/**
 * Les couleurs du site, en un seul endroit.
 *
 * Elles etaient redeclarees 54 fois dans 8 fichiers : changer le navy
 * demandait 54 modifications, et une derive s'y etait deja glissee.
 * Ici, chaque nom pointe vers une variable CSS definie dans styles.css.
 * Aucun composant ne porte plus de couleur en dur.
 */
export const INK = "var(--ink)";
export const INK_SOFT = "var(--ink-soft)";
export const WHITE = "#FFFFFF";
export const SAND = "var(--sand)";
export const LINE = "var(--line)";
export const LINE_INK = "var(--line-ink)";
export const MUTED = "var(--muted-c)";
export const MUTED_INK = "var(--muted-ink)";

/** Or Lepine. Distinctions uniquement, jamais un bouton, jamais un fond. */
export const AWARD = "var(--award)";

/**
 * Jaune de marque : boutons, et tout accent pose sur fond encre.
 * Le partage entre lui et le vert est dicte par le contraste — le vert
 * profond tombe a 2,55:1 sur l'encre, le jaune a 1,60:1 sur le blanc.
 * Chacun sa moitie du site.
 */
export const CTA = "var(--cta)";
