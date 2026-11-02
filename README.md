# SBS Tutorials Website

Responsive marketing and enquiry website for SBS Tutorials, Bengaluru.

## Tech Stack

- React + Vite
- Tailwind CSS
- Supabase (PostgreSQL)
- Vitest + React Testing Library + Playwright
- Vercel deployment

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
