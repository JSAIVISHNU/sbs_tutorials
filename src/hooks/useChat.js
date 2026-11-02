import { useState, useCallback } from 'react'
import { askAssistant } from '../services/ai/aiService.js'
import { FALLBACK_MESSAGE, SUGGESTED_QUESTIONS } from '../data/faqKnowledgeBase.js'

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  text: 'Hello! I am the SBS TUTORIALS admission assistant. How can I help you today?',
}

export function useChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [isLoading, setIsLoading] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  const sendMessage = useCallback(async (text) => {
    const trimmed = (text ?? '').trim()
    if (!trimmed) return

    const userMessage = { id: `user-${Date.now()}`, role: 'user', text: trimmed }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const answer = await askAssistant(trimmed)
      setMessages((prev) => [
        ...prev,
        { id: `assistant-${Date.now()}`, role: 'assistant', text: answer },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: `assistant-${Date.now()}`, role: 'assistant', text: FALLBACK_MESSAGE },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [])

  const clear = useCallback(() => setMessages([WELCOME_MESSAGE]), [])

  return {
    isOpen,
    open,
    close,
    toggle,
    messages,
    isLoading,
    sendMessage,
    clear,
    suggestedQuestions: SUGGESTED_QUESTIONS,
  }
}
