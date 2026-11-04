# VELOURA Interior Design Studio

A premium, fully static marketing site built with **Next.js** (App Router, TypeScript), **Tailwind CSS**, and **Framer Motion**. Engineered to feel like a luxury digital gallery and editorial magazine with an architectural motif.

---

## 🚀 Quick Start

### 1. Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Process Raw Images
```bash
npm run images
```
Reads source images from `/raw-images`, optimizes and resizes them using `sharp`, and writes WebP files at quality 78–82 into `/public/images`.

### 3. Production Build / Static Export
```bash
npm run build
```
Generates a 100% static export to the `/out` directory (`output: 'export'`, `images: { unoptimized: true }`). No server runtime or Node.js backend required.

---

## 📍 Where to Customise

### 1. Contact Details & WhatsApp (Single Source of Truth)
File: [`src/config/site.ts`](src/config/site.ts)
- `whatsappNumber`: Replace placeholder `94XXXXXXXXX` with your international number without `+` (e.g. `"94771234567"`).
- `contact.email`: Add your studio email (e.g. `"atelier@veloura.pixbeelabs.com"`). Left blank by default and automatically omitted from the footer until filled.
- `contact.address`: Add your physical address. Omitted from footer until filled.
- `contact.hours`: Add consultation hours. Omitted from footer until filled.

### 2. Photography & Imagery
All photography files live in [`public/images/`](public/images/):
- `hero.webp` (2400 × 1350, 16:9) — Desktop hero scene.
- `hero-mobile.webp` (1080 × 1620, 2:3) — Mobile hero scene served via `<picture>`.
- `studio-primary.webp` (1600 × 2000, 4:5) — Tall arch-cropped atelier photo.
- `studio-detail.webp` (1200 × 1200, 1:1) — Material joinery and bronze detail.
- `portfolio-1.webp` (1600 × 2000, 4:5) — The Monolith Residence, Colombo 07.
- `portfolio-2.webp` (1600 × 1200, 4:3) — Atelier Noir, Galle Fort.
- `portfolio-3.webp` (1500 × 2000, 3:4) — Solarium Villa, Bentota.
- `portfolio-4.webp` (1600 × 1200, 4:3) — Stonebridge Apartment, Colombo 03.
- `portfolio-5.webp` (1600 × 2000, 4:5) — Haven Penthouse, Colombo 02.
- `portfolio-6.webp` (1500 × 2000, 3:4) — Umbra Pavilion, Kandy.
- `og-image.jpg` (1200 × 630, 1.91:1) — Social preview banner with logo overlay.

To swap images, either drop raw source images into `/raw-images` and run `npm run images`, or replace the `.webp` files in `/public/images/` directly.

### 3. Sample Projects & Portfolio Data
File: [`src/data/projects.ts`](src/data/projects.ts)
- Six Sri Lankan concept projects are included with `isSample: true` (which automatically displays a "Concept project" badge and omits fictional years).
- When commissioned projects are ready, set `isSample: false` and update project copy and photography.

### 4. Brand Logos & Watermarks
Files in [`public/brand/`](public/brand/):
- `veloura-logo-light-text.png` — Logo for dark backgrounds (Hero, Header, Footer).
- `veloura-logo-dark-text.png` — Logo for light backgrounds.
- `veloura-icon-light.png` — Light emblem for watermarks and app icon.
- `veloura-icon-dark.png` — Dark emblem for light background watermarks.

### 5. App Icons & Favicons
- `src/app/icon.png` (512×512) and `public/icon.png`
- `src/app/apple-icon.png` (180×180) and `public/apple-icon.png`

---

## 🎨 Design Tokens & Palette

| Token | Hex | Role |
| :--- | :--- | :--- |
| **espresso** | `#24160F` | Dark base (Hero, Portfolio, Process, Footer) |
| **mocha** | `#5A3A2A` | Dark surface (Ethos & card backings) |
| **dark-roast** | `#3B2417` | Typography on light surfaces |
| **latte** | `#F2E8DC` | Light base (Studio, Enquiry) |
| **cream** | `#F6E7D0` | Typography on dark surfaces |
| **copper** | `#B07A4F` | 1px hairlines & outlines on light sections |
| **caramel** | `#E2C196` | 1px hairlines & outlines on dark sections |

## 📐 Motion System
- Shared architectural easing constant: `EASE = [0.76, 0, 0.24, 1]`.
- Built using Framer Motion's `LazyMotion` with `domAnimation` and `m` components for minimal bundle size.
- Strictly animates `transform` and `opacity` only.
- Respects system preferences via `MotionConfig reducedMotion="user"`.
