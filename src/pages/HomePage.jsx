import { Navbar } from '../components/layout/Navbar.jsx'
import { HeroSection } from '../components/sections/HeroSection.jsx'
import { ContactSection } from '../components/sections/ContactSection.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { Chatbot } from '../components/Chatbot.jsx'
import { InstallPrompt } from '../components/InstallPrompt.jsx'

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#011e38] flex flex-col justify-between">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
      <InstallPrompt />
    </div>
  )
}

export default HomePage
