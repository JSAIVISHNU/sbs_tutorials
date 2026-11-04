import { Navbar } from '../components/layout/Navbar.jsx'
import { HeroSection } from '../components/sections/HeroSection.jsx'
import { AboutSection } from '../components/sections/AboutSection.jsx'
import { CoursesSection } from '../components/sections/CoursesSection.jsx'
import { WhyChooseSection } from '../components/sections/WhyChooseSection.jsx'
import { AdmissionsCTA } from '../components/sections/AdmissionsCTA.jsx'
import { ContactSection } from '../components/sections/ContactSection.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { Chatbot } from '../components/Chatbot.jsx'
import { InstallPrompt } from '../components/InstallPrompt.jsx'

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <WhyChooseSection />
        <AdmissionsCTA />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
      <InstallPrompt />
    </div>
  )
}