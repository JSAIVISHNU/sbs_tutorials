import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../context/ThemeContext.jsx'
import { useTheme } from '../hooks/useTheme.js'
import { createElement } from 'react'

function Consumer() {
  const { theme, isDarkModeEnabled } = useTheme()
  return createElement('span', null, `${theme}-${isDarkModeEnabled}`)
}

describe('theme', () => {
  it('defaults to light mode and keeps dark mode disabled', () => {
    const { getByText } = render(createElement(ThemeProvider, null, createElement(Consumer)))
    expect(getByText('light-false')).toBeInTheDocument()
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })
})
