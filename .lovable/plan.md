## Plan — legmio V3

Complete rebuild of the 4 pages to match the V3 spec (alternating #111111/#FFFFFF sections, unified CTA "Je suis intéressé(e)", zero emoji, SVG icons only, Syne + Inter).

### Global changes

**`src/styles.css`**
- Keep Syne + Inter via `<link>` in root (already loaded).
- Add `btn-light` utility: white bg, #111 text, 50px radius (for use on dark sections).
- Keep `btn-dark`: #111 bg, white text, 50px radius (for use on light sections).
- Keep marquee, fade-up keyframes; add `float-rotate` keyframe for product animation.

**`src/lib/i18n.tsx`**
- Update translations: `cta_interested` → "Je suis intéressé(e)" / "I'm interested", `banner` → "Commercialisation courant 2027".
- Add new keys used by V3 sections.

**`src/components/Layout.tsx`**
- `StickyBanner`: fixed, black bg, single message, links to `#waitlist`.
- `Header`: white bg with subtle shadow, sticky below banner, logo left, nav center (Produit/FAQ/Blog), right = search input (outline + SVG loupe) + FR/EN + CTA button.
- `Footer`: black bg, 4 cols, bottom line "legmio 2026 · Un produit miobility · ISIR · Sorbonne Université · CNRS".

**Reusable SVG icon set** in a new `src/components/Icons.tsx` (search, chevron, check, instagram, tiktok, linkedin, arrow-right, weight, ruler, shield, factory, france-flag).

### Page rebuilds

**`src/routes/index.tsx`** — 10 sections alternating black/white per spec:
1. Hero (black) — YouTube embed `wRDP3A0-4eU` autoplay muted loop + title/CTA.
2. Problème (white) — 3 cards with generated B&W placeholder images.
3. Ils parlent de nous (black) — media logos (Le Parisien/TF1/France 2/France 5) with `filter: brightness(0) invert(1)` + Instagram reel featured card (link to reel, stats 3.6M/120K/2.2k).
4. Témoignages (white) — 3 cards Sophie/Marc/Camille + CTA.
5. Wall of love (black) — 2 marquee rows with 10 quotes + CTA.
6. Use cases (white) — 4 cards grid + CTA.
7. Description produit + specs (black) — 5 accordion/slider sections + white specs strip.
8. Crédibilité (white) — CNRS/Sorbonne/SATT/Bpi logos + quote card + 3 stats.
9. Roadmap (black) — horizontal 5-step line.
10. Liste d'attente (white) — `#waitlist` anchor, HubSpot placeholder form, social icons.
Followed by revendeurs mention.

**`src/routes/produit.tsx`** — 5 sections per spec:
1. Hero produit (white) — sticky right col with 7 accordions, gallery left.
2. Animation béquille (black) — placeholder box with float+rotate animation on `/legmio_hd_transparent.png` (fallback to gradient if missing).
3. Features carrousel (white) — 4 slides with arrows/dots.
4. Avis clients (grey #F5F5F5) — 3 review cards + rating bars.
5. FAQ produit (white) — 7 accordions.

**`src/routes/faq.tsx`** — keep current structure, restyle header, ensure no emojis.

**`src/routes/blog.tsx`** — hero #F5F5F5 + article 1 (Genèse, full-width featured with full content in expandable) + 4 other article cards. Since blog articles have full content, render as expandable or link to placeholder detail. Keeping to spec: featured full-width card shows title + extract + click to expand full content inline.

### Assets

- Generate ~15 placeholder images via imagegen (B&W for problem section, color portraits for testimonials, product zooms, use case scenes).
- To save tokens/time, use existing image slots where possible and generate the most visible ones. For lesser-used slots, use CSS gradient placeholders.

### Notes / decisions

- HubSpot form: keep placeholder (form IDs not provided).
- Instagram reel: embed as `<iframe>` from `instagram.com/reel/DX_Qqp9tbvg/embed` for featured card.
- Search input in header: non-functional (visual only), matches Hyperice layout.
- Media logos: since actual PNGs not provided, render text-based logos in serif/bold styled to look like wordmarks, with brightness filter for dark backgrounds.
- Institutional logos same approach.

### Out of scope (defer)

- Actual review submission modal wiring, lightbox for gallery, real HubSpot integration, working search.

Ship after user approval.