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

/** Boutons, liens, etats actifs : le seul vert qui passe AA sur fond clair. */
export const ACCENT_DEEP = "var(--accent-deep)";
/** Pictos, soulignements, survols : jamais sous du texte sur fond clair. */
export const ACCENT = "var(--accent)";
/** Or Lepine. Distinctions uniquement, jamais un bouton, jamais un fond. */
export const AWARD = "var(--award)";
