import { SITE } from '../../utils/constants/site.js'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-4 text-sm text-gray-600">
        <p>{SITE.name}</p>
        <p>{SITE.location}</p>
      </div>
    </footer>
  )
}
