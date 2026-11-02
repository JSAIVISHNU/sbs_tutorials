# AI Security

- Gemini API key stored only as Supabase Edge Function secret.
- No LLM key in frontend or VITE variables.
- Anonymous users limited to enquiry insert via RLS.
- Input validation and length limits (500 chars).
- Output truncation (500 chars).
- Basic in-memory rate limiting (10 req/min/IP).
- LLM output rendered as plain text (no HTML execution).
- Prompt injection mitigated via system prompt + server-side validation.
- No sensitive user data logged.
