# Cannon Gray — Architecture & Exploration

A responsive resume and architecture portfolio for Cannon Gray, built with Next.js, React, and TypeScript. The design uses warm neutral surfaces, system typography, large project photography, and a translucent navigation bar.

## Develop

Requires Node.js 22.13+ or 24.

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run typecheck
npm run build
```

The build produces a standard Next.js application in `.next/`.

## Deploy to Vercel

1. Sign in at https://vercel.com/new and import `yale-gray/cannon-website`.
2. Use the **Next.js** framework preset and leave **Root Directory** at `./` (the repository root).
3. Leave build and output settings at their detected defaults, then select **Deploy**.

No environment variables or external services are required. Vercel supplies the production hostname for social-preview URLs automatically. If you add a custom domain, optionally set `NEXT_PUBLIC_SITE_URL` to its complete HTTPS URL and redeploy.

Pushing to `main` triggers production deployments once the GitHub repository is connected to Vercel. The earlier Sites deployment is independent and is not updated by this project.

## Content

- `app/page.tsx`: project galleries, biography, education, experience, and contact details.
- `app/globals.css`: responsive layout, theme, and reduced-motion support.
- `app/layout.tsx`: page and social metadata.
- `public/work/`: original portfolio images extracted from Cannon’s supplied PDF.
- `public/documents/`: supplied resume and complete portfolio, available to download.

Project dialogs support keyboard focus management and Escape to close. Navigation has a skip link, and motion respects device accessibility preferences.

All project imagery and biographical information come from the supplied resume and portfolio. The resume PDF is reproduced as supplied, including its contact information. The social card is a generated typographic brand graphic, not portfolio work.
