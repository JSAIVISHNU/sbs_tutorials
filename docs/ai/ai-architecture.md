# AI Architecture

## Flow

React Chatbot UI -> AI Service Layer -> Supabase Edge Function -> Gemini API -> Approved FAQ Knowledge Base -> Validated Response -> UI

## Frontend

- `src/components/ai/*` reusable chatbot UI.
- `src/hooks/useChat.js` manages session-only message history.
- `src/services/ai/aiService.js` provider abstraction (Gemini active).
- `src/services/ai/aiConfig.js` feature flag and limits.

## Backend

- `supabase/functions/ai-chat/index.ts` Edge Function.
- Handles CORS, rate limiting, validation, Gemini call, truncation, errors.

## Knowledge

- `src/data/faqKnowledgeBase.js` approved facts.
- Edge Function embeds the same knowledge base.

## Security

- Gemini key only in Edge Function secrets.
- Input/output length limits.
- Rate limiting.
- LLM output treated as untrusted plain text.
