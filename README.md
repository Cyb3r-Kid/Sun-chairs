# SUN CHAIRS — Corporate & Wholesale Executive Seating Website

Official frontend web application for **SUN CHAIRS**, a manufacturer and wholesale trader of executive chairs based in Madurai, Tamil Nadu, India.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** (with `MotionConfig reducedMotion="user"`)
- **React Router DOM**
- **Lucide React**
- **React Hook Form** + **Zod**
- **React Helmet Async**

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation & Local Development

```bash
npm install
npm run dev
```

### Production Build & Preview

```bash
npm run build
npm run preview
```

## Project Structure

- `src/config/company.js` — Centralized company details, contact number, and SEO defaults
- `src/data/categories.js` — Provisional product categories
- `src/data/products.js` — Product catalogue with extracted product imagery
- `src/utils/whatsapp.js` — Centralized URL-encoded WhatsApp enquiry builder (`wa.me/919944282155`)
- `src/utils/validation.js` — Zod validation schemas for wholesale and contact enquiry forms
- `src/pages/` — `Home`, `Collections`, `ProductDetails`, `About`, `Wholesale`, `Contact`, `NotFound`
- `public/images/original/` — Original product and profile images extracted from the SUN CHAIRS IndiaMART profile

## Deployment to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the project in [Vercel](https://vercel.com/).
3. Vercel automatically detects Vite (`npm run build`, output directory `dist`).
4. `vercel.json` is preconfigured with SPA route rewrites so all React Router routes resolve cleanly.
