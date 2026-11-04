import { supabase } from '../supabase/client.js'
import { AI_CONFIG } from './aiConfig.js'
import { FALLBACK_MESSAGE } from '../../data/faqKnowledgeBase.js'

/**
 * Provider interface (kept intentionally small).
 * The active provider is Gemini, invoked through a Supabase Edge Function.
 */
export const aiProvider = {
  async generateAnswer(message) {
    const trimmed = (message ?? '').trim()
    if (!trimmed) {
      throw new Error('EMPTY_MESSAGE')
    }
    if (trimmed.length > AI_CONFIG.maxInputLength) {
      throw new Error('MESSAGE_TOO_LONG')
    }
    if (!AI_CONFIG.enabled) {
      throw new Error('AI_DISABLED')
    }

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('TIMEOUT')), AI_CONFIG.requestTimeoutMs)
    })

    const invokePromise = supabase.functions.invoke(AI_CONFIG.endpoint, {
      body: { message: trimmed },
    })

    const { data, error } = await Promise.race([invokePromise, timeoutPromise])

    if (error) {
      throw error
    }

    const answer = (data?.answer ?? '').toString().trim()
    if (!answer) {
      return FALLBACK_MESSAGE
    }
    return answer.slice(0, AI_CONFIG.maxOutputLength)
  },

  validateConfiguration() {
    return AI_CONFIG.enabled
  },

  handleProviderError(error) {
    if (!error) return FALLBACK_MESSAGE
    const code = error.message || error.code || ''
    if (code === 'AI_DISABLED') {
      return 'The admission assistant is currently unavailable. Please contact Brilliant Hub on 9180473902 or 8951412810.'
    }
    return FALLBACK_MESSAGE
  },
}

export async function askAssistant(message) {
  try {
    return await aiProvider.generateAnswer(message)
  } catch (error) {
    return aiProvider.handleProviderError(error)
  }
}
