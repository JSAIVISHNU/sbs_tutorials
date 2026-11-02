import { SITE } from '../../utils/constants/site.js'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="text-lg font-bold text-gray-900">{SITE.name}</span>
        <nav aria-label="Primary">
          <ul className="flex gap-4 text-sm text-gray-600">
            <li>Home</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
