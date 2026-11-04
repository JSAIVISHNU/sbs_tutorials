/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'

const SESSION_KEY = 'bh-desktop-mode-chosen'

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [show, setShow] = useState(false)
  const [isIos, setIsIos] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)

  useEffect(() => {
    const standalone =
      typeof window !== 'undefined' &&
      (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true)

    setIsStandalone(standalone)
    if (standalone) return

    const ua = typeof window !== 'undefined' ? window.navigator.userAgent.toLowerCase() : ''
    const ios = /iphone|ipad|ipod/.test(ua) && !window.MSStream
    setIsIos(ios)

    const handler = (event) => {
      event.preventDefault()
      setDeferredPrompt(event)
    }
    window.addEventListener('beforeinstallprompt', handler)

    const openListener = () => {
      setShow(true)
      setShowInstructions(false)
    }
    window.addEventListener('open-install-prompt', openListener)

    // Check if the user already chose desktop mode in this session
    const chosen = sessionStorage.getItem(SESSION_KEY)
    if (!chosen) {
      const timer = setTimeout(() => {
        setShow(true)
      }, 800)
      return () => {
        clearTimeout(timer)
        window.removeEventListener('beforeinstallprompt', handler)
        window.removeEventListener('open-install-prompt', openListener)
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
      window.removeEventListener('open-install-prompt', openListener)
    }
  }, [])

  const continueInDesktopMode = () => {
    setShow(false)
    setShowInstructions(false)
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // ignore storage errors
    }
  }

  const handleDownloadApp = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      try {
        await deferredPrompt.userChoice
      } catch {
        // ignore
      }
      setDeferredPrompt(null)
      setShow(false)
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch {
        // ignore
      }
      return
    }

    // If deferredPrompt is not directly available (iOS, desktop browser, etc.), display helpful instructions
    setShowInstructions(true)
  }

  if (isStandalone || !show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md rounded-2xl border border-[#c3c6d0]/60 bg-white p-5 shadow-2xl transition-all sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              alt="Brilliant Hub app icon"
              className="h-12 w-12 rounded-xl object-contain border border-[#c3c6d0]/40 p-1 bg-[#f8f9ff]"
              src="/images/logo.png"
            />
            <div>
              <h3 className="font-['Source_Serif_4'] text-[18px] leading-[24px] font-bold text-[#03345d]">
                Brilliant Hub
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[16px] text-[#7d5700] font-semibold uppercase tracking-wider">
                Uttarahalli • Bengaluru
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={continueInDesktopMode}
            className="rounded-full p-1 text-[#43474e] hover:bg-[#eef4ff] hover:text-[#03345d] transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mt-3">
          <p className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[22px] text-[#161c24]">
            How would you like to experience Brilliant Hub today?
          </p>
          <p className="mt-1 font-['Plus_Jakarta_Sans'] text-[12px] leading-[18px] text-[#43474e]">
            Download as an app on your home screen for fast 1-tap offline access, or continue browsing in desktop mode.
          </p>
        </div>

        {showInstructions ? (
          <div className="mt-3 rounded-xl bg-[#eef4ff] p-3 text-xs leading-relaxed text-[#03345d] border border-[#c3c6d0]/40">
            {isIos ? (
              <p>
                <strong>iOS Safari:</strong> Tap the <strong>Share</strong> button (
                <span className="font-mono">⎋</span>) at the bottom of the screen, scroll down and tap{' '}
                <strong>Add to Home Screen (+)</strong>.
              </p>
            ) : (
              <p>
                <strong>Desktop / Android:</strong> Look for the <strong>Install</strong> icon (
                <span className="font-mono">⊕</span>) in your browser address bar or tap browser menu (⋮) →{' '}
                <strong>Add to Home screen / Install app</strong>.
              </p>
            )}
          </div>
        ) : null}

        <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={handleDownloadApp}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#03345d] hover:bg-[#244b75] px-4 py-3 font-['Plus_Jakarta_Sans'] text-[13px] leading-[18px] font-bold text-white transition-all shadow-md active:scale-[0.99]"
          >
            <span className="material-symbols-outlined text-[18px]">install_mobile</span>
            <span>Download as App</span>
          </button>
          <button
            type="button"
            onClick={continueInDesktopMode}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#c3c6d0] bg-[#f8f9ff] hover:bg-[#eef4ff] px-4 py-3 font-['Plus_Jakarta_Sans'] text-[13px] leading-[18px] font-semibold text-[#03345d] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
            <span>Continue in Desktop Mode</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default InstallPrompt
