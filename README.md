# Equipzen Technologies — Official Website

Corporate website for **Equipzen Technologies Private Limited**, an IT hardware and software solutions company serving Andhra Pradesh and Telangana.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React + TypeScript | 19 / 4.9 |
| Styling | Tailwind CSS + SCSS Modules | v3 |
| Animations | Framer Motion | v12 |
| Icons | React Icons | v4 |
| Smooth Scroll | React Scroll | v1.9 |
| Utility | clsx | v2 |
| Build Tool | Create React App | react-scripts 5 |

---

## Project Structure

```
equipzen/
├── public/
│   ├── index.html           # App shell — fonts, meta, favicon
│   ├── logo.jpg             # Brand logo (also used as favicon)
│   ├── favicon.ico          # Fallback favicon
│   └── manifest.json        # PWA manifest with Equipzen branding
│
├── src/
│   ├── components/
│   │   ├── Navbar/          # Fixed nav, scroll-spy (IntersectionObserver), mobile menu
│   │   ├── Hero/            # Particle canvas, typewriter, animated counters, floating badges
│   │   ├── Marquee/         # Infinite auto-scrolling service ticker (pause on hover)
│   │   ├── About/           # Skill bars, why-choose-us cards, mission/vision/values
│   │   ├── Services/        # Filter tabs, 3D tilt cards, shine effect
│   │   ├── Contact/         # Info cards + mailto form (opens email client pre-filled)
│   │   ├── Footer/          # CTA band, 4-col site map, socials, scroll-to-top
│   │   └── GlowButton/      # Reusable animated CTA button with slide effect
│   │
│   ├── hooks/
│   │   └── useAnimations.ts # useCounter (animated number), useTypewriter
│   │
│   ├── styles/
│   │   └── _variables.scss  # Brand colours, breakpoints, spacing, mixins
│   │
│   ├── types/
│   │   └── index.ts         # All TypeScript interfaces and types
│   │
│   ├── App.tsx              # Root — cursor glow effect (desktop only)
│   ├── App.module.scss      # Cursor glow styles
│   ├── index.tsx            # Entry point with React.StrictMode
│   ├── index.scss           # Tailwind directives + global base styles
│   └── declarations.d.ts    # SCSS module type declarations
│
├── .vscode/
│   └── settings.json        # Suppress @tailwind lint warnings, cSpell words
├── tailwind.config.js       # Tailwind content paths + brand theme tokens
├── tsconfig.json            # TypeScript config (strict mode)
├── postcss.config.js        # PostCSS with Tailwind + Autoprefixer
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js >= 16
- npm >= 8

### Install

```bash
npm install
```

### Development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) with hot reload.

### Production Build

```bash
npm run build
```

Outputs optimised bundle to `build/`. Ready to deploy to any static host (Netlify, Vercel, GitHub Pages, etc.).

---

## Key Features

- **Responsive** — mobile-first, tested across xs (480px) → xl (1280px+)
- **Performance** — `IntersectionObserver` scroll-spy, passive event listeners, debounced resize, `prefers-reduced-motion` support, `memo` on heavy canvas components
- **Accessibility** — `focus-visible` rings on all interactive elements, `htmlFor`/`id` form pairs, `aria-label` on icon buttons, `aria-hidden` on decorative duplicates
- **Contact form** — opens the user's email client (Gmail, Outlook, Apple Mail) with To, Subject and Body pre-filled from the form fields. No backend required.
- **Touch-aware** — cursor glow, 3D card tilt and button slide animations all disabled on touch devices via `@media (hover: none)`

---

## Styling Approach

- **Tailwind CSS** — layout utilities, spacing, shared global classes (`.container`, `.section-label`, `.glass`, `.divider`, etc.)
- **SCSS Modules** — component-scoped styles, keyframe animations, complex hover effects, no class name collisions
- **`_variables.scss`** — single source of truth: brand colours, breakpoint variables (`$bp-xs` → `$bp-xl`), spacing tokens, radius scale, transition speeds, and reusable mixins (`respond`, `glass`, `brand-icon`, `hover-card`, `focus-ring`)

---

## Environment

No environment variables required. The contact form uses `mailto:` — no API keys or backend needed.

---

## Contact

**Equipzen Technologies Private Limited**
Flat no 406, 4th Floor, Aavaas Apartment, Kankipadu 521151, Vijayawada, A.P, India

| | |
|---|---|
| Phone | [9398919934](tel:9398919934) |
| Email | [info@equipzen.in](mailto:info@equipzen.in) |
| Website | [www.equipzen.in](https://www.equipzen.in) |

---

© 2024 Equipzen Technologies Private Limited. All Rights Reserved.
