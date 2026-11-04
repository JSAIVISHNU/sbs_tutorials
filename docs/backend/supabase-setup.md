# Supabase Database Setup for Brilliant Hub

This document guides you through setting up Supabase as the backend database for Brilliant Hub, creating the admission enquiries schema, configuring Row Level Security (RLS), and integrating with the frontend.

---

## 1. Supabase Project Creation Steps

1. **Sign in / Create Account**:
   - Navigate to [https://supabase.com](https://supabase.com) and click **Sign In** (or sign up).
2. **Create New Project**:
   - In the dashboard, click **New Project**.
   - Choose your Organization.
   - **Name**: `sbs-tutorials` (or your preferred name).
   - **Database Password**: Generate and securely store a strong database password.
   - **Region**: Select the region closest to your users (e.g. `ap-south-1` South Asia / Mumbai for Bengaluru users).
   - **Pricing Plan**: Free tier is sufficient for development.
   - Click **Create new project** and allow 1–2 minutes for provisioning to finish.

---

## 2. API Credentials & Environment Variables

Once the project is provisioned:

1. Open **Project Settings** (gear icon in the sidebar) → **API**.
2. Locate the following credentials:
   - **Project URL** (e.g. `https://xyzcompany.supabase.co`) → Maps to `VITE_SUPABASE_URL`
   - **anon / public key** (safe for client-side use) → Maps to `VITE_SUPABASE_ANON_KEY`
3. ⚠️ **SECURITY WARNING**:
   - **Never** copy the `service_role` secret key into frontend code, `.env`, or any `VITE_*` variable.
   - The `service_role` key bypasses all Row Level Security policies and must only be stored in secure backend environments or Edge Functions.

### Local Environment Configuration

Copy `.env.example` to create your local `.env`:

```bash
cp .env.example .env
```

Open `.env` and fill in your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key-here
VITE_AI_ENABLED=false
```

> **Git Safety**: `.env` is ignored by `.gitignore`. Never commit `.env` or real API keys to version control.

---

## 3. Database Schema

The database table `enquiries` stores all incoming admission enquiries.

### Table: `public.enquiries`

| Column          | Type          | Nullable | Default             | Constraints & Description                           |
| :-------------- | :------------ | :------- | :------------------ | :-------------------------------------------------- |
| `id`            | `uuid`        | `false`  | `gen_random_uuid()` | Primary key                                         |
| `parent_name`   | `text`        | `false`  | —                   | Required; trimmed length 1–100 characters           |
| `phone`         | `text`        | `false`  | —                   | Required; exactly 10 numeric digits (`^[0-9]{10}$`) |
| `student_class` | `text`        | `true`   | `null`              | Optional; max 50 characters                         |
| `course`        | `text`        | `false`  | —                   | Required; trimmed length 1–100 characters           |
| `message`       | `text`        | `true`   | `null`              | Optional; max 500 characters                        |
| `created_at`    | `timestamptz` | `false`  | `now()`             | Timestamp of enquiry submission                     |

### Indexes

- `enquiries_created_at_idx` ON `public.enquiries (created_at desc)`: Optimizes listing enquiries by newest first in admin views.
- `enquiries_phone_idx` ON `public.enquiries (phone)`: Speeds up checking for duplicate inquiries or looking up by phone.
- `enquiries_course_idx` ON `public.enquiries (course)`: Optimizes filtering enquiries by course.

### Applying the Migration

You can apply the schema using either method:

- **Method A (Supabase Dashboard - Recommended)**:
  1. Open the Supabase Dashboard.
  2. Click **SQL Editor** in the left sidebar.
  3. Click **New query**.
  4. Paste the entire content of [`supabase/migrations/0001_create_enquiries.sql`](../../supabase/migrations/0001_create_enquiries.sql).
  5. Click **Run** (or `Cmd + Enter`).
- **Method B (Supabase CLI)**:
  ```bash
  supabase db push
  ```

---

## 4. Row Level Security (RLS) & Access Control

Row Level Security is enabled on the `enquiries` table:

```sql
alter table public.enquiries enable row level security;
```

### Policy Rules

| Role                          | Operation  | Permitted | Policy Definition                                                            |
| :---------------------------- | :--------- | :-------- | :--------------------------------------------------------------------------- |
| `anon` (Public Website)       | **INSERT** | ✅ Yes    | Validates required fields, 10-digit phone, and non-empty parent name/course. |
| `anon` (Public Website)       | **SELECT** | ❌ No     | Policy omitted; denied by default. Private enquiries cannot be read.         |
| `anon` (Public Website)       | **UPDATE** | ❌ No     | Policy omitted; denied by default. Enquiries cannot be modified.             |
| `anon` (Public Website)       | **DELETE** | ❌ No     | Policy omitted; denied by default. Enquiries cannot be deleted.              |
| `service_role` (Admin/Server) | **ALL**    | ✅ Yes    | Bypasses RLS for secure back-office processing and admin dashboards.         |

### Technical Note on Insert Responses

In PostgreSQL with RLS, chaining `.select()` on an `.insert()` query executes a `RETURNING` clause that evaluates the `SELECT` policy against the returned record. Because anonymous users do not have `SELECT` permissions, chaining `.select()` causes PostgREST to return an error (`PGRST116: Results contain 0 rows` or permission denied).

Our enquiry service intentionally sends `supabase.from('enquiries').insert([record])` without `.select()`, ensuring smooth public submissions.

---

## 5. Frontend Integration Architecture

The frontend follows a clean separation of concerns:

```
src/
├── lib/
│   └── supabase.js          # Reusable Supabase client & connection validator
├── services/
│   ├── enquiryService.js    # Reusable enquiry service (validation, formatting, insert)
│   └── supabase/
│       ├── client.js        # Re-export for convenience
│       └── enquiries.js     # Re-export for convenience
└── components/
    └── forms/
        └── EnquiryForm.jsx  # UI component (no direct database calls)
```

### Supabase Client (`src/lib/supabase.js`)

Configures the `@supabase/supabase-js` client with session persistence disabled (since public website enquiries do not require browser auth sessions). Provides `isSupabaseConfigured()` to check if real credentials are present.

### Enquiry Service (`src/services/enquiryService.js`)

- Validates the incoming payload against business rules (required fields, lengths, phone format).
- Maps field names to PostgreSQL snake_case column names (`parent_name`, `student_class`, etc.).
- Calls Supabase `insert` without exposing database error details to the UI.
- Returns `{ data: { success: true }, error: null }` on success, or user-friendly error messages on failure.

---

## 6. Local Development & Testing

### Installation & Run

```bash
# Install dependencies
npm install

# Start local Vite development server
npm run dev

# Run all test suites
npm run test:run
```

### Automated Live Verification (`test:supabase`)

Once you have configured `.env` with live credentials and applied the SQL migration, run:

```bash
npm run test:supabase
```

This verification script executes live tests against your Supabase project:

1. Validates client configuration and connectivity.
2. Verifies that anonymous users can INSERT valid enquiries.
3. Verifies that required field validation is enforced.
4. Verifies that anonymous SELECT queries are rejected.
5. Verifies that anonymous UPDATE queries are rejected.
6. Verifies that anonymous DELETE queries are rejected.

---

## 7. Manual Supabase Dashboard Actions Checklist

Please complete the following actions in the Supabase Dashboard:

- [ ] **Create Supabase Project**: Name it `sbs-tutorials` in the region closest to Bengaluru.
- [ ] **Copy API Credentials**:
  - Copy **Project URL** into `VITE_SUPABASE_URL` in `.env`.
  - Copy **anon public key** into `VITE_SUPABASE_ANON_KEY` in `.env`.
  - Ensure the `service_role` key is **NOT** copied to `.env`.
- [ ] **Execute SQL Migration**:
  - Go to **SQL Editor** in Supabase.
  - Paste and run [`supabase/migrations/0001_create_enquiries.sql`](../../supabase/migrations/0001_create_enquiries.sql).
- [ ] **Verify Table & Policies**:
  - Check **Table Editor**: `enquiries` table exists with 7 columns.
  - Check **Authentication → Policies**: `enquiries` table has Row Level Security enabled with 1 policy: `"Allow anonymous inserts"`.
- [ ] **Run Live Verification**:
  - Run `npm run test:supabase` in your terminal to verify connectivity and security policies.
