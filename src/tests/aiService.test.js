import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('../services/supabase/client.js', () => ({
  supabase: {
    functions: {
      invoke: vi.fn(),
    },
  },
}))

vi.mock('../services/ai/aiConfig.js', () => ({
  AI_CONFIG: {
    enabled: true,
    maxInputLength: 500,
    maxOutputLength: 500,
    requestTimeoutMs: 15000,
    endpoint: 'ai-chat',
  },
  isAiConfigured: () => true,
}))

import { supabase } from '../services/supabase/client.js'
import { askAssistant, aiProvider } from '../services/ai/aiService.js'
import { FALLBACK_MESSAGE } from '../data/faqKnowledgeBase.js'

describe('aiService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns fallback for empty message', async () => {
    const result = await askAssistant('')
    expect(result).toBe(FALLBACK_MESSAGE)
  })

  it('returns fallback for too long message', async () => {
    const result = await askAssistant('a'.repeat(501))
    expect(result).toBe(FALLBACK_MESSAGE)
  })

  it('returns answer from edge function', async () => {
    supabase.functions.invoke.mockResolvedValue({
      data: { answer: 'We offer tuition.' },
      error: null,
    })
    const result = await askAssistant('What courses?')
    expect(result).toBe('We offer tuition.')
  })

  it('returns fallback on provider error', async () => {
    supabase.functions.invoke.mockResolvedValue({ data: null, error: new Error('fail') })
    const result = await askAssistant('What courses?')
    expect(result).toBe(FALLBACK_MESSAGE)
  })

  it('truncates long answers', async () => {
    const longAnswer = 'a'.repeat(600)
    supabase.functions.invoke.mockResolvedValue({ data: { answer: longAnswer }, error: null })
    const result = await askAssistant('What courses?')
    expect(result.length).toBeLessThanOrEqual(500)
  })

  it('validates configuration', () => {
    expect(typeof aiProvider.validateConfiguration).toBe('function')
  })
})
