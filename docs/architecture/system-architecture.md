# System Architecture

## Overview

Brilliant Hub website is a single-page React application built with Vite and Tailwind CSS.
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

## AI Flow

1. User sends a message in the chat widget.
2. `useChat` calls `askAssistant` in `aiService`.
3. Request goes to Supabase Edge Function `ai-chat`.
4. Edge Function validates input, applies rate limiting, calls Gemini.
5. Response is truncated and returned as plain text.
6. Frontend renders the answer; failures fall back to WhatsApp contact.

## Deployment

- Frontend deployed to Vercel.
- Backend on Supabase.
- CI runs lint, tests, and build on GitHub Actions.
