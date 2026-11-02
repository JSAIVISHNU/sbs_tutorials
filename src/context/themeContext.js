import { createContext } from 'react'
import { DEFAULT_THEME } from '../config/themeConfig.js'

export const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  setTheme: () => {},
  isDarkModeEnabled: false,
})
