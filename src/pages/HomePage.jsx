import { Navbar } from '../components/layout/Navbar.jsx'
import { HeroSection } from '../components/sections/HeroSection.jsx'
import { ChatWidget } from '../components/ai/ChatWidget.jsx'

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
      </main>
      <ChatWidget />
    </div>
  )
}