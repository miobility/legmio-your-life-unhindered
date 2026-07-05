import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 20): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

export const IconSearch = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
);
export const IconChevron = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M6 9l6 6 6-6" /></svg>
);
export const IconArrowRight = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconCheck = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M20 6L9 17l-5-5" /></svg>
);
export const IconStar = ({ size = 16, filled = true, ...p }: IconProps & { filled?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" {...p}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
export const IconInstagram = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>
);
export const IconTiktok = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M14 4v10a4 4 0 1 1-4-4" /><path d="M14 4c.5 2.5 2.5 4.5 5 5" /></svg>
);
export const IconLinkedin = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" /></svg>
);
export const IconWeight = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M6 8h12l-2 12H8L6 8z" /><path d="M9 8a3 3 0 1 1 6 0" /></svg>
);
export const IconRuler = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M3 16l5-13 13 5-5 13-13-5z" /><path d="M8 6l1 2M11 8l1 2M14 11l1 2" /></svg>
);
export const IconShield = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z" /></svg>
);
export const IconFactory = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><path d="M3 21V10l6 4V10l6 4V6l6 4v11H3z" /></svg>
);
export const IconAluminum = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 12h16M12 4v16" /></svg>
);
