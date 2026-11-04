const requiredEnvVars = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY']

/**
 * Validates that all required public environment variables are present.
 * Emits a clear warning during development if configuration is missing.
 */
export function validateEnv() {
  const missing = requiredEnvVars.filter((key) => !import.meta.env[key])

  if (missing.length > 0 && import.meta.env.MODE !== 'test') {
    const message = `[Configuration] Missing environment variables: ${missing.join(', ')}. Copy .env.example to .env and fill in the values.`
    console.warn(message)
  }
}

export const env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
  aiEnabled: import.meta.env.VITE_AI_ENABLED === 'true',
}
