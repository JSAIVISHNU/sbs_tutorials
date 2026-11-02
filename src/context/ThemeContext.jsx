import { useState, useEffect } from 'react'
import { DEFAULT_THEME, THEME_FEATURES } from '../config/themeConfig.js'
import { ThemeContext } from './themeContext.js'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (!THEME_FEATURES.enableThemeSwitcher) return DEFAULT_THEME
    if (typeof window === 'undefined') return DEFAULT_THEME
    const stored = window.localStorage.getItem('sbs-theme')
    return stored === 'light' || stored === 'dark' ? stored : DEFAULT_THEME
  })

  useEffect(() => {
    if (THEME_FEATURES.enableThemeSwitcher) {
      window.localStorage.setItem('sbs-theme', theme)
    }
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (next) => {
      if (!THEME_FEATURES.enableThemeSwitcher) return
      if (next === 'light' || next === 'dark') setTheme(next)
    },
    isDarkModeEnabled: THEME_FEATURES.enableDarkMode,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
