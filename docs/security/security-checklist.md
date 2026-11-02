# Security Checklist

- [ ] `.env` is gitignored.
- [ ] Only `VITE_` prefixed public variables in frontend.
- [ ] No Supabase service-role key in frontend.
- [ ] No LLM API key in frontend.
- [ ] RLS enabled on `enquiries`.
- [ ] Anonymous insert-only policy.
- [ ] No public read/update/delete on `enquiries`.
- [ ] Input validation client and database side.
- [ ] Field length limits enforced.
- [ ] No personal data in logs.
- [ ] CI does not contain secrets.
