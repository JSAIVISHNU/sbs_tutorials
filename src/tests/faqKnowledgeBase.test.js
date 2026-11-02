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
    expect(INSTITUTE_INFO.name).toBe('SBS TUTORIALS')
  })

  it('lists four approved courses', () => {
    expect(COURSES).toHaveLength(4)
  })

  it('fallback includes contact numbers', () => {
    expect(FALLBACK_MESSAGE).toContain('9180473902')
    expect(FALLBACK_MESSAGE).toContain('9916522810')
  })

  it('provides suggested questions', () => {
    expect(SUGGESTED_QUESTIONS.length).toBeGreaterThan(0)
  })

  it('system prompt forbids inventing fees', () => {
    expect(SYSTEM_PROMPT.toLowerCase()).toContain('fees')
  })
})
