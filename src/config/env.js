const requiredEnvVars = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY']

/**
 * Validates that all required public environment variables are present.
 * Throws a clear error during development if configuration is missing.
 */
export function validateEnv() {
  const missing = requiredEnvVars.filter((key) => !import.meta.env[key])

  if (missing.length > 0) {
    const message = `Missing required environment variables: ${missing.join(', ')}. Copy .env.example to .env and fill in the values.`
    if (import.meta.env.DEV) {
      throw new Error(message)
    }
    console.error(message)
  }
}

export const env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? '',
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
}
