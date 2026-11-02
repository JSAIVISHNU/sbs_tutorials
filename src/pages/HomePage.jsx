import { useTranslation } from 'react-i18next'
import { MainLayout } from '../components/layout/MainLayout.jsx'

export function HomePage() {
  const { t } = useTranslation('home')
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-[var(--color-text)]">{t('title')}</h1>
      <p className="mt-2 text-[var(--color-text-muted)]">{t('subtitle')}</p>
    </MainLayout>
  )
}
