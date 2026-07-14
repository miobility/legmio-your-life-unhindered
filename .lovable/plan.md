# legmio — Site-wide overhaul plan

Given the scope, I'll execute in this order. Confirm before I proceed.

## 1. Design system (styles.css)
Replace palette with warm off-white theme:
- `--background: #FAFAF8`, alt `#F2F0EB`, text `#1A1A1A`, muted `#6B6B6B`
- Accent/CTA `#2D5A3D` (hover `#234832`), border `#E8E4DC`
- Footer bg `#1A1A1A`, sticky banner bg `#2D5A3D`
- CTA buttons: pill radius 50px, green bg, white text
Update `btn-dark`, `btn-outline-dark`, `card-soft` to new tokens. Applied via CSS vars so all inline `#111/#FFF/#F5F5F5` legacy references keep working visually but I'll do a pass swapping the most visible ones (sections, cards) to new palette.

## 2. Header (Layout.tsx)
- Rename nav "Béquille" → "La béquille"
- Banner uses new green
- Footer: bg `#1A1A1A`, text update to "legmio © 2026 — Un produit miobility", add links to `/mentions-legales` and `/confidentialite`, social icons already active.

## 3. Landing page (index.tsx) — reorder + edits
New order: Hero → Problème → Ils parlent de nous → Use cases → Specs strip (static, 6 pills) → Témoignages (carousel + Dr Coignard + Selim replaces Marc) → Ils l'attendent (remove "Tu te reconnais ?") → Crédibilité (carousel, 4 cards, new title) → Roadmap (progress stops at step 3, "Où en sommes-nous ?") → Actualité (social icons + 1 CTA, no form).
CTAs: only Hero, after Témoignages, final CTA section.
Media logos: convert to `AutoCarousel` with arrows.
Instagram cards: dark card format (no iframe).

## 4. Product page (/produit)
- Title "La béquille", price 150€ + "(prix estimatif)", remove "Livraison incluse"
- Replace features carousel with static 8-pill grid
- Update "À propos" and "Ce qui est inclus" copy
- Update Marc → Selim review with new photo/quote
- Wire reviews to Supabase table `reviews` (id, name, profile, rating, comment, created_at, approved). Only approved shown; average/count computed from fetched rows. Requires enabling Lovable Cloud + migration.

## 5. Blog (/blog + article pages)
Keep Genèse. Add 5 new articles with FR/EN bilingual content and Genèse-style detail pages. Create route `/blog/$slug` if not existing, otherwise inline expandable format matching current template. Cover images use provided paths with fallbacks.

## 6. Legal pages
Create `/mentions-legales` and `/confidentialite` with provided content, blog-style template.

## 7. i18n
Add EN translations for all new strings.

## Open questions before I start
1. Blog article detail: does the current blog page have individual article routes, or is Genèse rendered inline on /blog? I'll inspect and match its pattern.
2. Supabase reviews: I'll enable Lovable Cloud and create the migration. New reviews will be inserted with `approved=false` (moderation required) — confirm this is intended, or should new submissions auto-approve?
3. Image paths (`/lepine.png`, `/mediapositif.png`, `/coignard.png`, `/photo-blog-1..5.png`, institution logos): are these already in `/public`, or should I use fallback placeholders where missing?

Reply "go" (with answers to 2 and 3) and I'll execute the full pass.
