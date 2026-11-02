# AI Provider Configuration

Active provider: Google Gemini (gemini-1.5-flash).

Set secret in Supabase:

```
supabase secrets set GEMINI_API_KEY=your-key
```

Optional:

```
supabase secrets set ALLOWED_ORIGINS=http://localhost:5173,https://your-domain.vercel.app
```

Frontend env:

```
VITE_AI_ENABLED=true
```

To swap providers, implement a new adapter in the Edge Function and update the frontend service interface. The chatbot UI remains unchanged.
