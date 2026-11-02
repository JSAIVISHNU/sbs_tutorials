import { useState } from 'react'
import { Button } from '../common/Button.jsx'

export function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onSend(trimmed)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Type your question..."
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        disabled={disabled}
      />
      <Button type="submit" disabled={disabled}>
        Send
      </Button>
    </form>
  )
}
