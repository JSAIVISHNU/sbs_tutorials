export function Card({ title, description, children, className = '' }) {
  return (
    <article
      className={`rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-sm ${className}`}
    >
      {title ? <h3 className="text-lg font-semibold text-[var(--color-text)]">{title}</h3> : null}
      {description ? (
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{description}</p>
      ) : null}
      {children ? <div className="mt-3">{children}</div> : null}
    </article>
  )
}
