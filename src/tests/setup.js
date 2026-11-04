import '@testing-library/jest-dom'
import '../i18n/index.js'

if (typeof window !== 'undefined' && !window.open) {
  window.open = () => null
} else if (typeof window !== 'undefined') {
  window.open = () => null
}
