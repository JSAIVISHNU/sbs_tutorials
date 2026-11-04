import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import '../styles/themes.css'
import '../i18n/index.js'
import { ThemeProvider } from '../context/ThemeContext.jsx'
import { CoursesPage } from '../pages/CoursesPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CoursesPage />
    </ThemeProvider>
  </StrictMode>,
)