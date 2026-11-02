import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { i18nConfig } from './config.js'

import enCommon from './locales/en/common.json'
import enNavigation from './locales/en/navigation.json'
import enHome from './locales/en/home.json'
import enCourses from './locales/en/courses.json'
import enContact from './locales/en/contact.json'
import enChatbot from './locales/en/chatbot.json'
import enFooter from './locales/en/footer.json'

const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
    home: enHome,
    courses: enCourses,
    contact: enContact,
    chatbot: enChatbot,
    footer: enFooter,
  },
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    ...i18nConfig,
    resources,
  })
}

export default i18n
