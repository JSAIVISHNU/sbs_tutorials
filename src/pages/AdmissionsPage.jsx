import { Navbar } from '../components/layout/Navbar.jsx'
import { AdmissionsSection } from '../components/sections/AdmissionsSection.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { Chatbot } from '../components/Chatbot.jsx'
import { InstallPrompt } from '../components/InstallPrompt.jsx'

export function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <Navbar />
      <main className="pt-20">
        <AdmissionsSection />
      </main>
      <Footer />
      <Chatbot />
      <InstallPrompt />
    </div>
  )
}
export default AdmissionsPage
export { AdmissionsPage as Admissions }
