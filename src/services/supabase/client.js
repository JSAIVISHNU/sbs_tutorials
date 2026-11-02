import { createClient } from '@supabase/supabase-js'
import { env, validateEnv } from '../../config/env.js'

validateEnv()

export const supabase = createClient(
  env.supabaseUrl || 'https://placeholder.supabase.co',
  env.supabaseAnonKey || 'placeholder-anon-key',
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  },
)
