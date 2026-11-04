const MAX_MESSAGE_LENGTH = 500

/**
 * Sends a message to the server-side chat endpoint (/api/chat).
 * Falls back to null on failure so callers can use local FAQ mode.
 *
 * @param {string} message
 * @returns {Promise<string|null>}
 */
export async function askAssistant(message) {
  const trimmed = (message ?? '').trim()
  if (!trimmed) return null
  if (trimmed.length > MAX_MESSAGE_LENGTH) return null

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: trimmed }),
    })
    if (!response.ok) return null
    const data = await response.json().catch(() => ({}))
    const answer = (data?.answer ?? '').toString().trim()
    return answer || null
  } catch {
    return null
  }
}

export default askAssistant