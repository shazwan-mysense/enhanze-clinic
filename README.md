# Enhanze Clinic — Homepage Redesign Concept

A redesign prototype for [Enhanze Clinic](https://enhanzeclinic.com), a medical
aesthetic clinic established in Malaysia in 2001. Built as a static React site
for client review on GitHub Pages; intended to be rebuilt in Elementor once the
concept is approved.

## Stack

- React 18 + TypeScript + Vite
- Plain modular CSS (one stylesheet per component, design tokens in
  `src/styles/global.css`)
- No animation library — a small IntersectionObserver hook
  (`src/hooks/useReveal.ts`) drives CSS reveals and respects
  `prefers-reduced-motion`

## Running locally

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

```bash
npm run deploy
```

This builds to `dist/` and publishes it with `gh-pages`. The Vite `base` is
`'./'`, so the build works from any repository path.

## Editing content

All copy, navigation links, hero slides, treatment lists and contact details
live in **`src/data/homepage.ts`**. Search for `PLACEHOLDER` to find every
value that must be replaced with confirmed client information (phone, WhatsApp
number, email, full address, social links, privacy/terms pages).

## Image assets

All supplied images are in `public/assets/img/` and are referenced by their
original filenames. Note: the thread-lifting hero image contains stock text
baked into its top-right corner; the design deliberately covers that region
with the slide's ivory content panel on desktop and crops it off-canvas on
mobile. If that image is ever replaced with a clean version, no code change
is needed.
