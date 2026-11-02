/**
 * Converts an unknown error into a safe, user-facing message.
 * Technical details are never exposed to the end user.
 */
export function toUserMessage(error, fallback = 'Something went wrong. Please try again.') {
  if (!error) return fallback
  if (typeof error === 'string') return error
  if (error.userMessage) return error.userMessage
  return fallback
}

export function logError(context, error) {
  // Never log personal enquiry data or secrets.
  console.error(`[${context}]`, error?.message ?? error)
}
