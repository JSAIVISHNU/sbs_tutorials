export function Card({ title, description, children, className = '' }) {
  return (
    <article className={`rounded-lg border border-gray-200 bg-white p-4 shadow-sm ${className}`}>
      {title ? <h3 className="text-lg font-semibold text-gray-900">{title}</h3> : null}
      {description ? <p className="mt-1 text-sm text-gray-600">{description}</p> : null}
      {children ? <div className="mt-3">{children}</div> : null}
    </article>
  )
}
