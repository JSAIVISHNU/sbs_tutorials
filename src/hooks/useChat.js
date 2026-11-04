import { useState, useCallback } from 'react'
import { askAssistant } from '../services/chatService.js'
import { FALLBACK_MESSAGE, SUGGESTED_QUESTIONS } from '../data/faqKnowledgeBase.js'
import i18n from '../i18n/index.js'

const WELCOME_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  text: i18n.t('chatbot:welcome'),
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
