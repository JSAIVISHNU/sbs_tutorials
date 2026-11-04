import { Navbar } from '../components/layout/Navbar.jsx'
import { CoursesShowcase } from '../components/sections/CoursesShowcase.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { Chatbot } from '../components/Chatbot.jsx'
import { InstallPrompt } from '../components/InstallPrompt.jsx'

export function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <Navbar />
      <main className="pt-20">
        <CoursesShowcase />
      </main>
      <Footer />
      <Chatbot />
      <InstallPrompt />
    </div>
  )
}