export const AI_CONFIG = {
  enabled: import.meta.env.VITE_AI_ENABLED === 'true',
  maxInputLength: 500,
  maxOutputLength: 500,
  requestTimeoutMs: 15000,
  endpoint: 'ai-chat',
}

export function isAiConfigured() {
  return AI_CONFIG.enabled
}
