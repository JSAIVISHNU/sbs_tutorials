import { describe, it, expect } from 'vitest'
import i18n from '../i18n/index.js'

describe('i18n', () => {
  it('loads English translations', () => {
    expect(i18n.t('home:title')).toBe('Brilliant Hub')
  })

  it('falls back to English for missing keys', () => {
    i18n.changeLanguage('kn')
    const value = i18n.t('home:title')
    expect(value).toBe('Brilliant Hub')
    i18n.changeLanguage('en')
  })
})
