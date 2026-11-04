import { useState, useCallback } from 'react'
import { askAssistant } from '../services/chatService.js'
import { FALLBACK_MESSAGE, SUGGESTED_QUESTIONS, getLocalAnswer } from '../data/faqKnowledgeBase.js'
import i18n from '../i18n/index.js'

function getWelcomeMessage() {
  return {
    id: 'welcome',
    role: 'assistant',
    text: i18n.t('chatbot:welcome') || 'Hello! I am the Brilliant Hub admission assistant. How can I help you today?',
  }
}

export function useChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([getWelcomeMessage()])
  const [isLoading, setIsLoading] = useState(false)

  const open = useCallback(() => {
    setIsOpen(true)
    setIsMinimized(false)
  }, [])
  const close = useCallback(() => {
    setIsOpen(false)
    setIsMinimized(false)
  }, [])
  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev)
    setIsMinimized(false)
  }, [])
  const minimize = useCallback(() => setIsMinimized(true), [])
  const restore = useCallback(() => setIsMinimized(false), [])

  const sendMessage = useCallback(async (text) => {
    const trimmed = (text ?? '').trim()
    if (!trimmed) return

    const userMessage = { id: `user-${Date.now()}`, role: 'user', text: trimmed }
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const remoteAnswer = await askAssistant(trimmed)
      const answer = remoteAnswer || getLocalAnswer(trimmed) || FALLBACK_MESSAGE
      setMessages((prev) => [
        ...prev,
        { id: `assistant-${Date.now()}`, role: 'assistant', text: answer },
      ])
    } catch {
      const fallback = getLocalAnswer(trimmed) || FALLBACK_MESSAGE
      setMessages((prev) => [
        ...prev,
        { id: `assistant-${Date.now()}`, role: 'assistant', text: fallback },
      ])
    } finally {
      setIsLoading(false)
    }
  }, [])

  const clear = useCallback(() => setMessages([getWelcomeMessage()]), [])

  return {
    isOpen,
    isMinimized,
    open,
    close,
    toggle,
    minimize,
    restore,
    messages,
    isLoading,
    sendMessage,
    clear,
    suggestedQuestions: SUGGESTED_QUESTIONS,
  }
}
