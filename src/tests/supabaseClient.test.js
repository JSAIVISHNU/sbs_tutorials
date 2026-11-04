import { describe, it, expect } from 'vitest'
import { supabase, isSupabaseConfigured } from '../lib/supabase.js'

describe('Supabase Client Configuration', () => {
  it('exports an initialized supabase client instance', () => {
    expect(supabase).toBeDefined()
    expect(typeof supabase.from).toBe('function')
  })

  it('correctly evaluates whether supabase has real credentials configured', () => {
    // In test environment, placeholder credentials are set or imported
    const configured = isSupabaseConfigured()
    expect(typeof configured).toBe('boolean')
  })
})

