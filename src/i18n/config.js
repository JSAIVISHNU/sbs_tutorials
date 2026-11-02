import { DEFAULT_LANGUAGE, ENABLED_LANGUAGES } from '../config/languageConfig.js'

export const i18nConfig = {
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: ENABLED_LANGUAGES,
  ns: ['common', 'navigation', 'home', 'courses', 'contact', 'chatbot'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
}
