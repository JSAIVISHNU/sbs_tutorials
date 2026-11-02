export const THEME_FEATURES = {
  enableDarkMode: false,
  enableThemeSwitcher: false,
  enableSystemPreference: false,
}

export const DEFAULT_THEME = 'light'

export const THEMES = {
  light: {
    background: '#ffffff',
    surface: '#f9fafb',
    primary: '#2563eb',
    secondary: '#64748b',
    text: '#111827',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    accent: '#f59e0b',
    buttonPrimary: '#2563eb',
    buttonText: '#ffffff',
  },
  dark: {
    background: '#0f172a',
    surface: '#1e293b',
    primary: '#60a5fa',
    secondary: '#94a3b8',
    text: '#f1f5f9',
    textMuted: '#94a3b8',
    border: '#334155',
    accent: '#fbbf24',
    buttonPrimary: '#3b82f6',
    buttonText: '#ffffff',
  },
}

export function getInitialTheme() {
  return DEFAULT_THEME
}
