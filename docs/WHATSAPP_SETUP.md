# WhatsApp Admission Enquiry Notification Setup

This guide walks you through the complete Meta WhatsApp Business Cloud API setup required to
receive admission enquiries on the institute owner's WhatsApp phone.

> **Code status:** All backend and frontend code is already implemented and tested.
> Only the external Meta account and Vercel configuration steps below remain.

---

## Architecture Overview

```
Parent fills form
      ↓
EnquiryForm.jsx (React)
      ↓  POST /api/send-enquiry  (JSON payload)
api/send-enquiry.js (Vercel Serverless Function)
      ↓  POST https://graph.facebook.com/v19.0/{phoneNumberId}/messages
Meta WhatsApp Cloud API
      ↓
Institute Owner's WhatsApp
```

---

## Step 1 – Create a Meta Business Portfolio

1. Go to [https://business.facebook.com](https://business.facebook.com) and sign in with a Facebook account.
2. Click **Create account** (or use an existing Business Portfolio for Brilliant Hub).
3. Enter your business name, your name, and business email, then click **Submit**.

---

## Step 2 – Set Up WhatsApp Business Platform

1. From your Meta Business Suite, open [WhatsApp Manager](https://business.facebook.com/wa/manage/home).
2. Follow the on-screen steps to create a **WhatsApp Business Account (WABA)** linked to your portfolio.

---

## Step 3 – Add a Phone Number (Sender)

1. In WhatsApp Manager, go to **Phone numbers → Add phone number**.
2. You can use:
   - **Meta Test Number** (free, for development — limited to approved test recipients)
   - **Your own number** (verified via SMS/voice OTP, required for production)
3. Complete the verification process.
4. Once added, click on your phone number entry and copy the **Phone Number ID** (a numeric string like `12345678901234`).

   → This becomes: `WHATSAPP_PHONE_NUMBER_ID`

---

## Step 4 – Generate an Access Token

**For development/testing (temporary):**
1. In the [Meta App Dashboard](https://developers.facebook.com/apps), open your app.
2. Go to **WhatsApp → API Setup**.
3. Click **Generate access token** (next to your phone number). Valid for ~24 hours.

**For production (permanent):**
1. In Meta Business Suite → **Settings → Business Settings → System Users**.
2. Create a new System User and assign it to your WhatsApp Business Account.
3. Grant the permission: `whatsapp_business_messaging`.
4. Click **Generate token** and save it securely.

   → This becomes: `WHATSAPP_ACCESS_TOKEN`

> ⚠️ **Never share tokens in chat, emails, or commit them to Git. Rotate immediately if exposed.**

---

## Step 5 – Configure the Recipient Number

The recipient is the institute owner's WhatsApp phone.

Format: international dialling code + number, **digits only, no `+` sign**.

Examples:
- India number `9180473902` → set as `919180473902`
- UK number `07911123456` → set as `447911123456`

> **For Meta test numbers:** You must also add the recipient as an approved test recipient in
> WhatsApp Manager → API Setup → **"To" field**, and the recipient must send a message to the
> test number first to opt in.

   → This becomes: `WHATSAPP_RECIPIENT_NUMBER`

---

## Step 6 – Create and Submit the Message Template

WhatsApp Business-initiated messages **require an approved template**. Free-form messages are
only allowed within a 24-hour customer service window.

1. In WhatsApp Manager → **Message templates → Create template**.
2. Fill in the template:
   - **Category:** `Utility` (recommended for operational notifications)
   - **Name:** `sbs_enquiry_notification` ← this becomes `WHATSAPP_TEMPLATE_NAME`
   - **Language:** `English` ← language code `en` becomes `WHATSAPP_TEMPLATE_LANGUAGE`
3. Template body (copy this exactly):

```
Brilliant Hub – New Admission Enquiry

Parent Name: {{1}}
Phone Number: {{2}}
Student Class: {{3}}
Interested Course: {{4}}
Message: {{5}}
```

4. Click **Submit for review**.
5. Approval typically takes a few minutes to 24 hours. You receive an email when approved.

> `{{1}}` through `{{5}}` are positional placeholders filled by the API. The backend maps them as:
> `{{1}}` = Parent Name, `{{2}}` = Phone, `{{3}}` = Student Class, `{{4}}` = Course, `{{5}}` = Message.

---

## Step 7 – Configure Vercel Environment Variables

In **Vercel → Project → Settings → Environment Variables**, add the following for
**Production** (and optionally **Preview**):

| Variable | Value |
| :--- | :--- |
| `WHATSAPP_ACCESS_TOKEN` | Your System User token |
| `WHATSAPP_PHONE_NUMBER_ID` | Numeric Phone Number ID from WhatsApp Manager |
| `WHATSAPP_RECIPIENT_NUMBER` | Owner's number, e.g. `919180473902` |
| `WHATSAPP_TEMPLATE_NAME` | `sbs_enquiry_notification` |
| `WHATSAPP_TEMPLATE_LANGUAGE` | `en` |
| `WHATSAPP_API_VERSION` | `v19.0` |

> ⚠️ Do NOT add these to `VITE_*` variables. Do NOT add them to `.env` files committed to Git.

---

## Step 8 – Deploy to Vercel

Once environment variables are set, push to your main branch (or deploy manually):

```bash
git push origin main
```

Vercel auto-detects `api/send-enquiry.js` and deploys it as a serverless function.

---

## Step 9 – Test a Real Enquiry

1. Open the live Vercel URL.
2. Submit the enquiry form with valid data.
3. The institute owner should receive a WhatsApp message within seconds.
4. If no message arrives, check: **Vercel → Project → Logs** → filter by function name `send-enquiry`.

---

## Troubleshooting

| Error | Cause | Fix |
| :--- | :--- | :--- |
| `401 / 403` | Expired or invalid access token | Regenerate token; use System User token in production |
| `400` with template error | Template name or language mismatch | Verify `WHATSAPP_TEMPLATE_NAME` and `WHATSAPP_TEMPLATE_LANGUAGE` match exactly |
| `131030` or recipient error | Recipient not in allowed list (test numbers only) | Add recipient in WhatsApp Manager → API Setup → "To" field |
| `429` | Meta rate limit hit | Wait and retry; check your API tier |
| `502` from `/api/send-enquiry` | Meta API returned error | Check Vercel logs for the original Meta error code |
| `504` from `/api/send-enquiry` | Timeout connecting to Meta | Check Vercel region and [Meta API Status](https://developers.facebook.com/status/) |
| Template not approved | Pending review | Wait for approval email from Meta |

---

## Implementation Notes

- **Rate limiting:** The serverless function limits each IP to 5 requests per 60 seconds in
  production. This is in-memory and resets per serverless instance. For stronger protection,
  use a persistent store such as Vercel KV or Upstash Redis.
- **No database:** Enquiry data is not stored server-side in this version. If you need a record
  of all enquiries, refer to `docs/backend/supabase-setup.md` for Supabase integration.
- **Single recipient:** The recipient is configured via `WHATSAPP_RECIPIENT_NUMBER`. To support
  multiple recipients, extend the handler to iterate over a comma-separated list.
- **Template-only:** The integration uses approved templates. Free-form messages require a
  24-hour opt-in window and are not used here.
