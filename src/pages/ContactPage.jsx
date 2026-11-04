import { Navbar } from '../components/layout/Navbar.jsx'
import { ContactSection } from '../components/sections/ContactSection.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { Chatbot } from '../components/Chatbot.jsx'
import { InstallPrompt } from '../components/InstallPrompt.jsx'

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <Navbar />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
      <InstallPrompt />
    </div>
  )
}