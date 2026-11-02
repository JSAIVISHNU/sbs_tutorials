export function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  if (variant === 'secondary') {
    return (
      <button
        type="button"
        className={`${base} border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:opacity-90 focus-visible:ring-[var(--color-secondary)] ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      type="button"
      className={`${base} bg-[var(--color-button-primary)] text-[var(--color-button-text)] hover:opacity-90 focus-visible:ring-[var(--color-primary)] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
