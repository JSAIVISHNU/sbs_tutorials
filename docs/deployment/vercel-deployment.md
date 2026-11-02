# Vercel Deployment

## Setup

1. Connect the GitHub repository to Vercel.
2. Set framework preset to Vite.
3. Add environment variables in Vercel project settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Never add server-side secrets to Vercel frontend env.

## Before Deploying

- Run lint, tests, and build locally.
- Confirm Supabase migration applied to production project.
- Verify no secrets are tracked.

## After Deploying

- Smoke test homepage, courses, contact numbers, WhatsApp, Maps, enquiry submission.
