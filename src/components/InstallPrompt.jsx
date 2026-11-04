/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'

const DISMISS_KEY = 'bh-install-dismissed'

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [show, setShow] = useState(false)
  const [isIos, setIsIos] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true
    setIsStandalone(standalone)
    if (standalone) return

    const dismissed = localStorage.getItem(DISMISS_KEY)
    if (dismissed) return

    const ua = window.navigator.userAgent.toLowerCase()
    const ios = /iphone|ipad|ipod/.test(ua) && !window.MSStream
    setIsIos(ios)

    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShow(true)
    }
    window.addEventListener('beforeinstallprompt', handler)

    if (ios) {
      // Show manual instructions after a short delay
      const t = setTimeout(() => setShow(true), 1500)
      return () => { clearTimeout(t); window.removeEventListener('beforeinstallprompt', handler) }
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const dismiss = () => {
    setShow(false)
    try { localStorage.setItem(DISMISS_KEY, '1') } catch (e) { void e }
  }

  const install = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    try { await deferredPrompt.userChoice } catch (e) { void e }
    setDeferredPrompt(null)
    setShow(false)
    try { localStorage.setItem(DISMISS_KEY, '1') } catch (e) { void e }
  }

  if (isStandalone || !show) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 w-[90vw] max-w-sm rounded-2xl border border-[#c3c6d0] bg-white p-4 shadow-xl sm:left-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-[#03345d]">Install Brilliant Hub</p>
          <p className="mt-1 text-xs text-[#43474e]">Get quick access to Brilliant Hub directly from your home screen.</p>
        </div>
        <button type="button" onClick={dismiss} className="text-[#43474e] hover:text-[#03345d]" aria-label="Dismiss">✕</button>
      </div>
      {isIos ? (
        <p className="mt-2 text-xs text-[#43474e]">On iOS Safari: tap Share → Add to Home Screen.</p>
      ) : (
        <div className="mt-3 flex gap-2">
          <button type="button" onClick={install} className="rounded-lg bg-[#03345d] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#244b75]">Install App</button>
          <button type="button" onClick={dismiss} className="rounded-lg bg-[#eef4ff] px-3 py-1.5 text-xs font-semibold text-[#03345d] hover:bg-[#e3e8f3]">Maybe Later</button>
        </div>
      )}
    </div>
  )
}

export default InstallPrompt
