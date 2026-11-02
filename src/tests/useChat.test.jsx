import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useChat } from '../hooks/useChat.js'

vi.mock('../services/ai/aiService.js', () => ({
  askAssistant: vi.fn().mockResolvedValue('Approved answer.'),
}))

import { askAssistant } from '../services/ai/aiService.js'

describe('useChat', () => {
  it('starts with a welcome message', () => {
    const { result } = renderHook(() => useChat())
    expect(result.current.messages).toHaveLength(1)
    expect(result.current.messages[0].role).toBe('assistant')
  })

  it('sends a message and appends assistant reply', async () => {
    const { result } = renderHook(() => useChat())
    await act(async () => {
      await result.current.sendMessage('What courses?')
    })
    expect(result.current.messages).toHaveLength(3)
    expect(result.current.messages[2].text).toBe('Approved answer.')
    expect(askAssistant).toHaveBeenCalledWith('What courses?')
  })

  it('ignores empty messages', async () => {
    const { result } = renderHook(() => useChat())
    await act(async () => {
      await result.current.sendMessage('   ')
    })
    expect(result.current.messages).toHaveLength(1)
  })
})
