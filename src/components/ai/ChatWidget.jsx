import { useTranslation } from 'react-i18next'
import { useChat } from '../../hooks/useChat.js'
import { ChatMessage } from './ChatMessage.jsx'
import { ChatInput } from './ChatInput.jsx'
import { ChatSuggestions } from './ChatSuggestions.jsx'
import { isAiConfigured } from '../../services/ai/aiConfig.js'

export function ChatWidget() {
  const { t } = useTranslation('chatbot')
  const chat = useChat()

  if (!isAiConfigured()) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {chat.isOpen ? (
        <div className="flex w-80 flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg">
          <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-2">
            <span className="text-sm font-semibold text-[var(--color-text)]">
              {t('assistantTitle')}
            </span>
            <button
              type="button"
              onClick={chat.close}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              aria-label={t('close')}
            >
              ✕
            </button>
          </div>
          <div className="flex max-h-80 flex-col gap-2 overflow-y-auto p-3">
            {chat.messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {chat.isLoading ? (
              <p className="text-xs text-[var(--color-text-muted)]">{t('typing')}</p>
            ) : null}
          </div>
          <div className="border-t border-[var(--color-border)] p-3">
            <ChatSuggestions
              suggestions={chat.suggestedQuestions}
              onSelect={chat.sendMessage}
              disabled={chat.isLoading}
            />
            <div className="mt-2">
              <ChatInput
                onSend={chat.sendMessage}
                disabled={chat.isLoading}
                placeholder={t('typeQuestion')}
              />
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={chat.open}
          className="rounded-full bg-[var(--color-button-primary)] px-4 py-2 text-sm font-medium text-[var(--color-button-text)] shadow-lg hover:opacity-90"
        >
          {t('chat')}
        </button>
      )}
    </div>
  )
}
