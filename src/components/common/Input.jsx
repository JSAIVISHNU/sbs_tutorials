export function Input({ label, error, id, className = '', ...props }) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium text-[var(--color-text)]">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        className="rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
        {...props}
      />
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  )
}
