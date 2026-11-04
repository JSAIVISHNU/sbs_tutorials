/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'

const SESSION_KEY = 'bh-desktop-mode-chosen'
const INSTALLED_KEY = 'bh-app-installed'

function isAppInstalledOrStandalone() {
  if (typeof window === 'undefined') return false

  // 1. Android/Chrome/Desktop standalone PWA display mode
  if (
    window.matchMedia &&
    (window.matchMedia('(display-mode: standalone)').matches ||
      window.matchMedia('(display-mode: fullscreen)').matches)
  ) {
    return true
  }

  // 2. iOS Safari standalone mode (when launched from Home Screen)
  if (window.navigator && window.navigator.standalone === true) {
    return true
  }

  // 3. Launched via home screen start_url (?source=pwa)
  if (window.location && window.location.search && window.location.search.indexOf('source=pwa') !== -1) {
    try {
      localStorage.setItem(INSTALLED_KEY, 'true')
    } catch {
      // ignore
    }
    return true
  }

  // 4. Android WebAPK launch referrer
  if (typeof document !== 'undefined' && document.referrer && document.referrer.indexOf('android-app://') !== -1) {
    try {
      localStorage.setItem(INSTALLED_KEY, 'true')
    } catch {
      // ignore
    }
    return true
  }

  // 5. Marked as installed in localStorage
  try {
    if (localStorage.getItem(INSTALLED_KEY) === 'true') {
      return true
    }
  } catch {
    // ignore
  }

  return false
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [show, setShow] = useState(false)
  const [isInstalling, setIsInstalling] = useState(false)
  const [isIosDevice, setIsIosDevice] = useState(false)
  const [showIosSteps, setShowIosSteps] = useState(false)
  const [isStandalone] = useState(() => isAppInstalledOrStandalone())

  useEffect(() => {
    if (isStandalone) return

    const ua = typeof window !== 'undefined' ? window.navigator.userAgent.toLowerCase() : ''
    const isIos = /iphone|ipad|ipod/.test(ua) && !window.MSStream
    setIsIosDevice(isIos)

    if (typeof window !== 'undefined' && window.deferredInstallPrompt) {
      setDeferredPrompt(window.deferredInstallPrompt)
    }

    const handler = (event) => {
      event.preventDefault()
      if (typeof window !== 'undefined') {
        window.deferredInstallPrompt = event
      }
      setDeferredPrompt(event)
    }
    window.addEventListener('beforeinstallprompt', handler)

    const installedHandler = () => {
      try {
        localStorage.setItem(INSTALLED_KEY, 'true')
      } catch {
        // ignore
      }
      setShow(false)
      if (typeof window !== 'undefined') {
        window.deferredInstallPrompt = null
      }
      setDeferredPrompt(null)
    }
    window.addEventListener('appinstalled', installedHandler)

    const openListener = () => {
      setShow(true)
    }
    window.addEventListener('open-install-prompt', openListener)

    // Check if the user already chose desktop mode in this session
    const chosen = sessionStorage.getItem(SESSION_KEY)
    if (!chosen) {
      const timer = setTimeout(() => {
        setShow(true)
      }, 900)
      return () => {
        clearTimeout(timer)
        window.removeEventListener('beforeinstallprompt', handler)
        window.removeEventListener('appinstalled', installedHandler)
        window.removeEventListener('open-install-prompt', openListener)
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
      window.removeEventListener('appinstalled', installedHandler)
      window.removeEventListener('open-install-prompt', openListener)
    }
  }, [isStandalone])

  const continueInDesktopMode = () => {
    setShow(false)
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // ignore storage errors
    }
  }

  const downloadAppShortcut = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : ''
    const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Brilliant Hub</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="${origin}/images/logo.png">
  <meta http-equiv="refresh" content="0; url=${origin}/?source=pwa">
  <script>window.location.replace("${origin}/?source=pwa");</script>
</head>
<body style="font-family:system-ui,-apple-system,BlinkMacSystemFont,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#011e38;color:#ffffff;">
  <div style="text-align:center;padding:24px;">
    <img src="${origin}/images/logo.png" width="96" height="96" alt="Brilliant Hub" style="object-fit:contain;margin-bottom:16px;">
    <h2 style="margin:0 0 8px 0;font-size:24px;color:#fdc254;">Launching Brilliant Hub...</h2>
    <p style="margin:0;font-size:14px;color:#cbd5e1;">Uttarahalli • Bengaluru</p>
    <p style="margin-top:20px;"><a href="${origin}/?source=pwa" style="color:#fdc254;font-weight:600;text-decoration:underline;">Click here to open app</a></p>
  </div>
</body>
</html>`

    const blob = new Blob([content], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'Brilliant-Hub.html'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const handleDownloadApp = async () => {
    // 1. If on iOS (iPhone/iPad), Apple prohibits automatic silent home screen install.
    // NEVER call navigator.share (which opens generic Share/AirDrop/WhatsApp sheet).
    // Instead, show the direct 2-step Safari "Add to Home Screen" visual guide.
    if (isIosDevice) {
      setShowIosSteps(true)
      return
    }

    setIsInstalling(true)

    // 2. Android Chrome / PWA native direct prompt
    let promptEvent =
      deferredPrompt || (typeof window !== 'undefined' ? window.deferredInstallPrompt : null)

    if (!promptEvent) {
      for (let i = 0; i < 4; i++) {
        await new Promise((resolve) => setTimeout(resolve, 250))
        promptEvent =
          deferredPrompt || (typeof window !== 'undefined' ? window.deferredInstallPrompt : null)
        if (promptEvent) break
      }
    }

    if (promptEvent) {
      try {
        await promptEvent.prompt()
        const choice = await promptEvent.userChoice
        if (choice?.outcome === 'accepted') {
          try {
            localStorage.setItem(INSTALLED_KEY, 'true')
          } catch {
            // ignore
          }
        }
      } catch {
        // ignore
      }
      if (typeof window !== 'undefined') {
        window.deferredInstallPrompt = null
      }
      setDeferredPrompt(null)
      setShow(false)
      setIsInstalling(false)
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch {
        // ignore
      }
      return
    }

    // 3. Fallback: directly download launcher shortcut file with 1 click
    downloadAppShortcut()
    try {
      localStorage.setItem(INSTALLED_KEY, 'true')
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // ignore
    }
    setShow(false)
    setIsInstalling(false)
  }

  if (isStandalone || !show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md rounded-3xl border-2 border-[#fdc254] bg-[#012240] p-5 sm:p-6 shadow-2xl text-white relative overflow-hidden">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-xl border border-[#fdc254] shrink-0">
              <img
                alt="Brilliant Hub app icon"
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                src="/images/logo.png"
              />
            </div>
            <div>
              <h3 className="font-['Source_Serif_4'] text-[18px] sm:text-[20px] font-black text-white leading-tight">
                Brilliant Hub
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#fdc254] uppercase tracking-wider">
                Uttarahalli • Bengaluru
              </p>
            </div>
          </div>
          
          <button
            type="button"
            onClick={continueInDesktopMode}
            className="rounded-full w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        {showIosSteps ? (
          <div className="mt-4 flex flex-col gap-3 animate-fade-in text-left">
            <div className="rounded-2xl bg-[#02182c] border border-[#fdc254]/60 p-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#fdc254] text-[22px]">add_to_home_screen</span>
                <p className="font-['Plus_Jakarta_Sans'] text-[15px] font-bold text-white">
                  Add to iPhone Home Screen
                </p>
              </div>
              
              <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-gray-300 mt-2 leading-[18px]">
                On iPhone, Apple requires installing web apps through Safari&apos;s menu (no data is shared with anyone):
              </p>

              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#fdc254] text-[#011e38] font-black text-xs flex items-center justify-center mt-0.5">1</span>
                  <div className="flex-1">
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-white">
                      Tap the Action Button in Safari
                    </p>
                    <p className="font-['Plus_Jakarta_Sans'] text-[11px] text-gray-300 mt-0.5">
                      Tap the icon <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded bg-white/20 text-[#fdc254] font-bold text-[12px]">⎋</span> at the very bottom center of Safari.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-[#fdc254] text-[#011e38] font-black text-xs flex items-center justify-center mt-0.5">2</span>
                  <div className="flex-1">
                    <p className="font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-white">
                      Select &ldquo;Add to Home Screen&rdquo;
                    </p>
                    <p className="font-['Plus_Jakarta_Sans'] text-[11px] text-gray-300 mt-0.5">
                      Scroll down slightly and tap <span className="text-[#fdc254] font-semibold">&ldquo;Add to Home Screen&rdquo; ⊞</span>, then tap <strong>&ldquo;Add&rdquo;</strong> at the top right.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-[#fdc254] text-[11px] font-bold animate-pulse">
                <span>↓ Look at the bottom toolbar of Safari ↓</span>
              </div>
            </div>

            <button
              type="button"
              onClick={continueInDesktopMode}
              className="mt-1 w-full rounded-xl bg-gradient-to-r from-[#fdc254] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fdc254] px-4 py-3 font-['Plus_Jakarta_Sans'] text-[13px] font-black uppercase tracking-wider text-[#4a2e00] transition-all shadow-lg active:scale-[0.99]"
            >
              Close &amp; Tap ⎋ at Bottom of Screen
            </button>
          </div>
        ) : (
          <div className="mt-4 flex flex-col gap-2.5">
            <p className="font-['Plus_Jakarta_Sans'] text-[15px] font-bold text-white leading-snug">
              Download Brilliant Hub as an App
            </p>
            <p className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[18px] text-gray-300">
              Tap below to install directly to your home screen for instant 1-tap fast access.
            </p>

            {/* New Updates Coming Soon Notice */}
            <div className="mt-1 p-3 rounded-2xl bg-white/5 border border-[#fdc254]/40 flex flex-col gap-1 text-left">
              <div className="flex items-center gap-1.5 text-[#fdc254] font-['Plus_Jakarta_Sans'] text-[11px] font-black uppercase tracking-wider">
                <span className="material-symbols-outlined text-[15px]">upcoming</span>
                <span>New Updates Coming Soon</span>
              </div>
              <p className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[16px] text-gray-200">
                Student &amp; Parent Portal: <strong>Student Login</strong>, <strong>Daily Attendance</strong>, and <strong>Weekly Test Marks &amp; Progress Reports</strong>!
              </p>
            </div>

            {/* 1-Tap Action Buttons */}
            <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                disabled={isInstalling}
                onClick={handleDownloadApp}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#fdc254] to-[#f59e0b] hover:from-[#f59e0b] hover:to-[#fdc254] px-4 py-3 font-['Plus_Jakarta_Sans'] text-[13px] font-black uppercase tracking-wider text-[#4a2e00] transition-all shadow-lg active:scale-[0.99] disabled:opacity-75"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {isInstalling ? 'progress_activity' : 'install_mobile'}
                </span>
                <span>{isInstalling ? 'Installing...' : 'Download as App'}</span>
              </button>

              <button
                type="button"
                onClick={continueInDesktopMode}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 px-4 py-3 font-['Plus_Jakarta_Sans'] text-[13px] font-bold text-gray-200 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">desktop_windows</span>
                <span>Continue in Desktop</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default InstallPrompt
