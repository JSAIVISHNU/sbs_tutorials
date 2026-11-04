import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import '../styles/themes.css'
import '../i18n/index.js'
import { ThemeProvider } from '../context/ThemeContext.jsx'
import { AdmissionsPage } from '../pages/AdmissionsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AdmissionsPage />
    </ThemeProvider>
  </StrictMode>,
)