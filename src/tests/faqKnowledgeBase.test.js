import { describe, it, expect } from 'vitest'
import {
  INSTITUTE_INFO,
  COURSES,
  FALLBACK_MESSAGE,
  SUGGESTED_QUESTIONS,
  SYSTEM_PROMPT,
} from '../data/faqKnowledgeBase.js'

describe('faqKnowledgeBase', () => {
  it('contains approved institute name', () => {
    expect(INSTITUTE_INFO.name).toBe('Brilliant Hub')
  })

  it('lists four approved courses', () => {
    expect(COURSES).toHaveLength(4)
  })

  it('fallback message is defined', () => {
    expect(FALLBACK_MESSAGE).toContain('Brilliant Hub')
  })

  it('provides suggested questions', () => {
    expect(SUGGESTED_QUESTIONS.length).toBeGreaterThan(0)
  })

  it('system prompt forbids inventing fees', () => {
    expect(SYSTEM_PROMPT.toLowerCase()).toContain('fees')
  })
})
