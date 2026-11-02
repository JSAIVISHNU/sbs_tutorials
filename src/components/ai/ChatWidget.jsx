import { useChat } from '../../hooks/useChat.js'
import { ChatMessage } from './ChatMessage.jsx'
import { ChatInput } from './ChatInput.jsx'
import { ChatSuggestions } from './ChatSuggestions.jsx'
import { isAiConfigured } from '../../services/ai/aiConfig.js'

export function ChatWidget() {
  const chat = useChat()

  if (!isAiConfigured()) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {chat.isOpen ? (
        <div className="flex w-80 flex-col rounded-lg border border-gray-200 bg-white shadow-lg">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
            <span className="text-sm font-semibold text-gray-900">Admission Assistant</span>
            <button
              type="button"
              onClick={chat.close}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          <div className="flex max-h-80 flex-col gap-2 overflow-y-auto p-3">
            {chat.messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {chat.isLoading ? <p className="text-xs text-gray-500">Typing...</p> : null}
          </div>
          <div className="border-t border-gray-200 p-3">
            <ChatSuggestions
              suggestions={chat.suggestedQuestions}
              onSelect={chat.sendMessage}
              disabled={chat.isLoading}
            />
            <div className="mt-2">
              <ChatInput onSend={chat.sendMessage} disabled={chat.isLoading} />
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={chat.open}
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-blue-700"
        >
          Chat
        </button>
      )}
    </div>
  )
}
