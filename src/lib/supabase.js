import { createClient } from '@supabase/supabase-js'
import { env, validateEnv } from '../config/env.js'

validateEnv()

const supabaseUrl = env.supabaseUrl || 'https://placeholder.supabase.co'
const supabaseAnonKey = env.supabaseAnonKey || 'placeholder-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
})

/**
 * Checks whether Supabase has been configured with real credentials
 * rather than placeholder values.
 *
 * @returns {boolean}
 */
export function isSupabaseConfigured() {
  return Boolean(
    env.supabaseUrl &&
    env.supabaseAnonKey &&
    !env.supabaseUrl.includes('placeholder') &&
    !env.supabaseAnonKey.includes('placeholder'),
  )
}

export default supabase
