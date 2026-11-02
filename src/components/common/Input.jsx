export function Input({ label, error, id, className = '', ...props }) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        {...props}
      />
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  )
}
