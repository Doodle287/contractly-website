# Contractly AI — Marketing Website

Marketing and legal/support site for **Contractly AI**, an AI-powered mobile app
for contract analysis. The site hosts the landing page, Privacy Policy, Terms &
Conditions, Support, and Account Deletion pages.

## Tech Stack

- **React 19** with **React Router 7**
- **Vite 8** for dev and build
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **lucide-react** for icons
- ESLint 9 (flat config)

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
├── App.jsx              Top-level routes
├── main.jsx             React entry point
├── index.css            Tailwind base + custom styles
├── assets/              Images
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ScrollToTop.jsx
└── pages/
    ├── Landing.jsx      Marketing landing page
    ├── Privacy.jsx      Privacy Policy
    ├── Terms.jsx        Terms & Conditions
    ├── Support.jsx      Support / help center
    ├── DeleteAccount.jsx Account deletion instructions
    └── NotFound.jsx     404 catch-all

public/
├── favicon.svg
├── icons.svg
├── robots.txt
└── sitemap.xml
```

## Routes

| Path              | Page             |
| ----------------- | ---------------- |
| `/`               | Landing          |
| `/privacy`        | Privacy Policy   |
| `/terms`          | Terms & Conditions |
| `/support`        | Support          |
| `/delete-account` | Account Deletion |
| `*`               | 404 Not Found    |

## Deployment Notes

- The site is a **client-side SPA**. The hosting platform must rewrite all
  unknown routes to `/index.html` so that React Router can handle them.
  Examples:
  - Vercel / Netlify: add a SPA rewrite rule (`/* -> /index.html 200`)
  - Cloudflare Pages: set up a `_redirects` file
- Update `public/sitemap.xml`, the canonical `<link>`, and the Open Graph URLs
  in `index.html` if the production domain changes.
- The `og:image` tag in `index.html` points to `/og-image.png` — add a 1200×630
  social preview image at that path before going live.

## Legal Content

Both **Privacy Policy** and **Terms & Conditions** include placeholders
("Address available upon request") for the company's legal entity and mailing
address. These must be replaced with real values before submission to the Apple
App Store and Google Play Store.
