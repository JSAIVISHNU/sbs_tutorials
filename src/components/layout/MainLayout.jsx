import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'

export function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">{children}</main>
      <Footer />
    </div>
  )
}
