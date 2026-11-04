# VELOURA Interior Design Studio

A premium, fully static marketing site built with Next.js (App Router, TypeScript), Tailwind CSS, and Framer Motion. Engineered to feel like a luxury digital gallery and editorial magazine with an architectural motif.

---

## 🚀 Quick Start

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Static Export / Production Build
```bash
npm run build
```
This performs a 100% static export to the `/out` directory (`output: 'export'`, `images: { unoptimized: true }`). No server runtime or Node.js backend required.

---

## 📍 Where to Customise

### 1. WhatsApp Number & Studio Contact
File: [`src/config/site.ts`](src/config/site.ts)
- Replace `ACTUAL_WHATSAPP_NUMBER` with your full international phone number (e.g. `94771234567` without leading `+` or spaces).
- Update `contact` (email, studio address, consultation hours).

### 2. Photography & Imagery
All photography files live in [`public/images/`](public/images/):
- `hero.jpg` (1920×1080) — Main full-screen hero image.
- `studio-primary.jpg` (1200×1600) — Arch-cropped primary studio photo.
- `studio-detail.jpg` (1000×1000) — Studio material and joinery detail.
- `portfolio-1-monolith-residence.jpg` (1200×1500) — Residence in Kensington.
- `portfolio-2-atelier-noir.jpg` (1500×1000) — Gallery in Le Marais.
- `portfolio-3-solarium-villa.jpg` (1200×1500) — Coastal estate in Deià.
- `portfolio-4-palazzo-minimal.jpg` (1500×1000) — Historic apartment in Brera.
- `portfolio-5-haven-penthouse.jpg` (1200×1500) — Duplex in Tribeca.
- `portfolio-6-umbra-pavilion.jpg` (1500×1000) — Pavilion in Kyoto.

Simply replace the files with your photography using the same filenames to update visuals without touching code.

### 3. Curated Portfolio Data & Copy
File: [`src/data/projects.ts`](src/data/projects.ts)
- Update titles, locations, years, categories, and synopsis copy for each project.

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
| **espresso** | `#24160F` | Dark base (Hero, Portfolio, Footer) |
| **mocha** | `#5A3A2A` | Dark surface (Philosophy) |
| **dark-roast** | `#3B2417` | Typography on light surfaces |
| **latte** | `#F2E8DC` | Light base (Studio, Enquiry) |
| **cream** | `#F6E7D0` | Typography on dark surfaces |
| **copper** | `#B07A4F` | 1px hairlines & accents on light sections |
| **caramel** | `#E2C196` | 1px hairlines & accents on dark sections |

## 📐 Motion System
- Shared architectural easing constant: `EASE = [0.76, 0, 0.24, 1]`.
- Built using Framer Motion's `LazyMotion` with `domAnimation` and `m` components for minimal bundle size.
- Respects system preferences via `MotionConfig reducedMotion="user"`.
