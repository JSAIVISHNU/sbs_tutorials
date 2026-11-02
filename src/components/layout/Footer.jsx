import { SITE } from '../../utils/constants/site.js'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-5xl px-4 py-4 text-sm text-[var(--color-text-muted)]">
        <p className="text-[var(--color-text)]">{SITE.name}</p>
        <p>{SITE.location}</p>
      </div>
    </footer>
  )
}
