# System Architecture

## Overview

SBS Tutorials website is a single-page React application built with Vite and Tailwind CSS.
It communicates with Supabase (PostgreSQL + Row Level Security) for admission enquiry storage.

## Layers

- Presentation: React components in `src/components` and `src/pages`.
- State/Logic: Custom hooks in `src/hooks`.
- Services: Supabase client and database access in `src/services`.
- Utilities: Validation, constants, helpers in `src/utils`.
- Configuration: Environment validation in `src/config`.

## Data Flow

1. User fills the enquiry form.
2. `useEnquiryForm` validates input via `validateEnquiry`.
3. On success, `submitEnquiry` inserts into Supabase `enquiries` table.
4. RLS allows anonymous insert only; reads are denied publicly.

## Deployment

- Frontend deployed to Vercel.
- Backend on Supabase.
- CI runs lint, tests, and build on GitHub Actions.
