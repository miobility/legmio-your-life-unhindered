/**
 * Reglages partages du declenchement des animations au defilement.
 *
 * Le `threshold` d'un IntersectionObserver est une fraction de L'ELEMENT,
 * pas de l'ecran : sur un petit element (un compteur de 20px), 40 % est
 * atteint des qu'il depasse d'un cheveu en bas de l'ecran, et l'animation
 * est finie avant qu'on arrive dessus.
 *
 * C'est `rootMargin` qui decale le declenchement : une marge basse negative
 * retrecit la zone d'observation par le bas, donc l'element doit remonter
 * dans l'ecran avant de declencher.
 */

/** Cartes : elles doivent apparaitre juste avant d'etre lues. */
export const MARGE_CARTES = "0px 0px -12% 0px";

/** Chiffres et frises : on veut les voir bouger, donc plus haut dans l'ecran. */
export const MARGE_TEMPS_FORT = "0px 0px -30% 0px";

/** Avec une marge, le seuil devient inutile : 0 suffit. */
export const SEUIL = 0;
