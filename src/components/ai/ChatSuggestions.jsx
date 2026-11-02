export function ChatSuggestions({ suggestions, onSelect, disabled }) {
  if (!suggestions || suggestions.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          type="button"
          onClick={() => onSelect(suggestion)}
          disabled={disabled}
          className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        >
          {suggestion}
        </button>
      ))}
    </div>
  )
}
