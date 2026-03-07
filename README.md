# BBQ Pioneer 🔥

A premium high-ticket grill ecommerce store built with **React + Vite + Tailwind CSS v4**.

![BBQ Pioneer Homepage](https://github.com/user-attachments/assets/d4e7df21-f93a-4058-b043-fe701b2790ab)

## Features

- **Fire-themed design** — black/coal backgrounds, orange fire accents, white typography
- **Full ecommerce flow** — Home → Shop → Product Detail → Cart → Checkout
- **6 premium grill products** — Offset Smokers, Kamado, Pellet, Gas & Charcoal Grills
- **Shopping cart drawer** — slide-out cart with quantity controls & free shipping qualifier
- **Category filtering & sorting** — filter by grill type, sort by price/rating
- **High-converting elements** — urgency badges, social proof, testimonials, promo sections
- **Fully responsive** — optimized for mobile and desktop
- **SEO optimized** — per-page meta tags, JSON-LD structured data, sitemap.xml, robots.txt, Open Graph, Twitter Card

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- React Router DOM v7
- React Helmet Async (SEO)
- React Icons (Feather Icons)

## Getting Started

```bash
npm install
npm run dev
```

## Pages

| Page | Route |
|------|-------|
| Homepage | `/` |
| Shop | `/shop` |
| Product Detail | `/product/:slug` |
| Cart | `/cart` |
| Checkout | `/checkout` |
| About | `/about` |

## SEO

- Dynamic `<title>` and `<meta description>` per page
- JSON-LD structured data: `Organization`, `WebSite`, `Store`, `Product`, `CollectionPage`
- `sitemap.xml` and `robots.txt` in `/public`
- Canonical URLs and Open Graph / Twitter Card tags
