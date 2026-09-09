# Cannon Gray — Architecture & Exploration

A responsive resume and architecture portfolio for Cannon Gray, built with React, TypeScript, Vinext, and Sites. The design uses warm neutral surfaces, system typography, large project photography, and a translucent navigation bar.

## Develop

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npx tsc --noEmit
npm run build
```

The build produces a Cloudflare Worker and static assets under `dist/`. Sites deployment configuration lives in `.openai/hosting.json`.

## Content

- `app/page.tsx`: project galleries, biography, education, experience, and contact details.
- `app/globals.css`: responsive layout, theme, and reduced-motion support.
- `app/layout.tsx`: page and social metadata.
- `public/work/`: original portfolio images extracted from Cannon’s supplied PDF.
- `public/documents/`: supplied resume and complete portfolio, available to download.

Project dialogs support keyboard focus management and Escape to close. Navigation has a skip link, and motion respects device accessibility preferences.

All project imagery and biographical information come from the supplied resume and portfolio. The resume PDF is reproduced as supplied, including its contact information. The social card is a generated typographic brand graphic, not portfolio work.
