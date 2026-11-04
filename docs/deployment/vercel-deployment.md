# Vercel Deployment

## Setup

1. Connect the GitHub repository to Vercel.
2. Set framework preset to **Vite**.
3. Add environment variables in **Vercel → Project → Settings → Environment Variables**.

### Frontend Environment Variables (Production + Preview)

| Variable | Description |
| :--- | :--- |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon public key |
| `VITE_AI_ENABLED` | `true` or `false` — enables the AI chatbot |

### Backend / Server-side Environment Variables (Production + Preview)

These are used only by the Vercel serverless function `api/send-enquiry.js`.
**Do NOT prefix them with `VITE_`.** They will never be bundled into the frontend.

| Variable | Description |
| :--- | :--- |
| `WHATSAPP_ACCESS_TOKEN` | System User token from Meta Business Suite |
| `WHATSAPP_PHONE_NUMBER_ID` | Phone Number ID from WhatsApp Manager |
| `WHATSAPP_RECIPIENT_NUMBER` | Owner's WhatsApp number (digits only, e.g. `919180473902`) |
| `WHATSAPP_TEMPLATE_NAME` | Approved message template name (e.g. `sbs_enquiry_notification`) |
| `WHATSAPP_TEMPLATE_LANGUAGE` | Template language code (e.g. `en`) |
| `WHATSAPP_API_VERSION` | Meta Graph API version (e.g. `v19.0`) |

> [!CAUTION]
> Never add `WHATSAPP_ACCESS_TOKEN` or the Supabase `service_role` key to a `VITE_*` variable — they would be exposed in the client bundle.

See `docs/WHATSAPP_SETUP.md` for step-by-step Meta account and template setup.

## Before Deploying

- Run `npm run lint` — must pass with zero errors.
- Run `npm run test:run` — all tests must pass.
- Run `npm run build` — must build without errors.
- Confirm Supabase migration applied to production project.
- Verify no secrets are tracked (`git status` should not list `.env`).

## After Deploying

- Smoke-test the homepage, courses, contact numbers, WhatsApp link, Maps, and enquiry form submission.
- Check Vercel function logs (**Vercel → Project → Logs**) after a test submission.
- Verify the institute owner receives a WhatsApp notification.

## Rolling Back

```bash
vercel rollback
```
