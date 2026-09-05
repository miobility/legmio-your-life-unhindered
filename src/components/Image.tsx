import type { CSSProperties, ReactEventHandler } from "react";

/**
 * Image avec repli.
 *
 * Chaque photographie du site existe en AVIF a cote de son JPEG ou PNG
 * d'origine — 70 % plus legere en moyenne. Le navigateur prend l'AVIF
 * s'il sait le lire, l'original sinon. Aucun visiteur n'est laisse de cote.
 *
 * Les dimensions restent obligatoires : sans elles le navigateur recompose
 * la page a chaque arrivee d'image et le texte saute sous le doigt.
 */
export function Image({
  src,
  alt,
  width,
  height,
  className,
  style,
  loading = "lazy",
  onError,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
  onError?: ReactEventHandler<HTMLImageElement>;
}) {
  const avif = src.replace(/\.(jpe?g|png)$/i, ".avif");
  const aDesVariantes = avif !== src;
  return (
    /* display: contents — sans cela le <picture>, element en ligne,
       s'interposerait dans la mise en page et casserait les images en
       position absolue ou en pleine largeur. */
    <picture className="contents">
      {aDesVariantes && <source srcSet={avif} type="image/avif" />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        loading={loading}
        onError={onError}
      />
    </picture>
  );
}
