import { useTranslation } from 'react-i18next'
import { SITE } from '../../utils/constants/site.js'

export function Header() {
  const { t } = useTranslation('navigation')
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2.5">
          <img alt={`${SITE.name} Logo`} className="h-8 w-auto object-contain" src="/images/logo.png" />
          <span className="text-lg font-bold text-[var(--color-text)]">{SITE.name}</span>
        </div>
        <nav aria-label="Primary">
          <ul className="flex gap-4 text-sm text-[var(--color-text-muted)]">
            <li>{t('home')}</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
