export function ChatMessage({ message }) {
  const isUser = message.role === 'user'
  const text = message.text || (isUser ? '' : 'Please contact Brilliant Hub directly for confirmation.')
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
          isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
        }`}
      >
        {text}
      </div>
    </div>
  )
}
