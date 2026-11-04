# Brilliant Hub Website

Responsive marketing and enquiry website for Brilliant Hub, Bengaluru.

## Tech Stack

- React + Vite
- Tailwind CSS
- Supabase (PostgreSQL)
- Vitest + React Testing Library + Playwright
- Render / Vercel deployment

## Deploy to Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/JSAIVISHNU/sbs_tutorials)

Or manually on [Render Dashboard](https://dashboard.render.com/):
1. Click **New +** → **Static Site**
2. Connect repository **`JSAIVISHNU/sbs_tutorials`**
3. Build Command: `npm install && npm run build`
4. Publish Directory: `dist`
5. Click **Create Static Site**

## Setup

```bash
npm install
cp .env.example .env
# fill in Supabase credentials
```

## Development

```bash
npm run dev
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint
- `npm run format` — format with Prettier
- `npm run test` — run tests in watch mode
- `npm run test:run` — run tests once
- `npm run test:e2e` — run Playwright e2e tests

## Folder Structure

See `docs/architecture/system-architecture.md`.

## Environment

See `.env.example`. Only public Supabase credentials use `VITE_` prefix.

## Supabase

Apply migration in `supabase/migrations/` to your Supabase project. RLS restricts anonymous users to insert-only on `enquiries`.

## Security

See `docs/security/security-checklist.md`.
