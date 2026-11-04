import { useEffect, useRef } from 'react'
import { useChat } from '../hooks/useChat.js'
import { ChatMessage } from './ai/ChatMessage.jsx'
import { ChatInput } from './ai/ChatInput.jsx'
import { ChatSuggestions } from './ai/ChatSuggestions.jsx'

export function Chatbot() {
  const chat = useChat()
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (chat.isOpen && !chat.isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chat.messages, chat.isLoading, chat.isOpen, chat.isMinimized])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {chat.isOpen && !chat.isMinimized ? (
        <div className="flex w-[90vw] max-w-sm flex-col rounded-2xl border border-[#c3c6d0] bg-white shadow-xl sm:w-80">
          <div className="flex items-center justify-between rounded-t-2xl bg-[#03345d] px-4 py-3 text-white">
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Brilliant Hub Assistant</span>
              <span className="text-[11px] text-[#97bbec]">Online</span>
            </div>
            <div className="flex items-center gap-1">
              <button type="button" onClick={chat.minimize} className="rounded p-1 hover:bg-[#244b75]" aria-label="Minimise">—</button>
              <button type="button" onClick={chat.close} className="rounded p-1 hover:bg-[#244b75]" aria-label="Close">✕</button>
            </div>
          </div>
          <div className="flex max-h-80 flex-col gap-2 overflow-y-auto p-3">
            {chat.messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {chat.isLoading ? (
              <p className="text-xs text-[#43474e]">Typing…</p>
            ) : null}
            <div ref={messagesEndRef} />
          </div>
          <div className="border-t border-[#c3c6d0] p-3">
            <ChatSuggestions suggestions={chat.suggestedQuestions} onSelect={chat.sendMessage} disabled={chat.isLoading} />
            <div className="mt-2">
              <ChatInput onSend={chat.sendMessage} disabled={chat.isLoading} placeholder="Type your question…" />
            </div>
          </div>
        </div>
      ) : null}

      {chat.isMinimized ? (
        <button type="button" onClick={chat.restore} className="rounded-full bg-[#03345d] px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-[#244b75]">
          Brilliant Hub Assistant
        </button>
      ) : null}

      {!chat.isOpen ? (
        <button
          type="button"
          onClick={chat.open}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#03345d] text-white shadow-lg hover:bg-[#244b75]"
          aria-label="Open chat"
        >
          <span className="material-symbols-outlined text-[28px]">chat</span>
        </button>
      ) : null}
    </div>
  )
}

export default Chatbot
