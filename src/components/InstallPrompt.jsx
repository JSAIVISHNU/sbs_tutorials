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
  const [isIos, setIsIos] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showIosGuide, setShowIosGuide] = useState(false)
  const [showAndroidGuide, setShowAndroidGuide] = useState(false)
  const [isStandalone] = useState(() => isAppInstalledOrStandalone())

  useEffect(() => {
    if (isStandalone) return

    const ua = typeof window !== 'undefined' ? window.navigator.userAgent.toLowerCase() : ''
    const ios = /iphone|ipad|ipod/.test(ua) && !window.MSStream
    const mobile = /android|iphone|ipad|ipod|mobile/.test(ua)
    setIsIos(ios)
    setIsMobile(mobile)

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
      setShowIosGuide(false)
      setShowAndroidGuide(false)
    }
    window.addEventListener('open-install-prompt', openListener)

    // Check if the user already chose desktop mode in this session
    const chosen = sessionStorage.getItem(SESSION_KEY)
    if (!chosen) {
      const timer = setTimeout(() => {
        setShow(true)
      }, 700)
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
    setShowIosGuide(false)
    setShowAndroidGuide(false)
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // ignore storage errors
    }
  }

  const markInstalledAndClose = () => {
    try {
      localStorage.setItem(INSTALLED_KEY, 'true')
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // ignore
    }
    setShow(false)
    setShowIosGuide(false)
    setShowAndroidGuide(false)
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
<body style="font-family:system-ui,-apple-system,BlinkMacSystemFont,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#f8f9ff;color:#03345d;">
  <div style="text-align:center;padding:24px;">
    <img src="${origin}/images/logo.png" width="96" height="96" alt="Brilliant Hub" style="object-fit:contain;margin-bottom:16px;">
    <h2 style="margin:0 0 8px 0;font-size:24px;">Launching Brilliant Hub...</h2>
    <p style="margin:0;font-size:14px;color:#43474e;">Uttarahalli • Bengaluru</p>
    <p style="margin-top:20px;"><a href="${origin}/?source=pwa" style="color:#03345d;font-weight:600;text-decoration:underline;">Click here if not redirected automatically</a></p>
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
    let promptEvent =
      deferredPrompt || (typeof window !== 'undefined' ? window.deferredInstallPrompt : null)

    if (!promptEvent && !isIos) {
      await new Promise((resolve) => setTimeout(resolve, 250))
      promptEvent =
        deferredPrompt || (typeof window !== 'undefined' ? window.deferredInstallPrompt : null)
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
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch {
        // ignore
      }
      return
    }

    if (isIos) {
      setShowIosGuide(true)
      return
    }

    if (isMobile) {
      setShowAndroidGuide(true)
      return
    }

    // On desktop browsers without native prompt, download the launcher shortcut
    downloadAppShortcut()
    setShow(false)
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // ignore
    }
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

        {!showIosGuide && !showAndroidGuide ? (
          <>
            <div className="mt-3 flex flex-col gap-2">
              <p className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[20px] font-bold text-[#03345d]">
                Install Brilliant Hub on your Home Screen
              </p>
              <p className="font-['Plus_Jakarta_Sans'] text-[12px] leading-[18px] text-[#43474e]">
                Download as an app for 1-tap access on your phone or continue in desktop mode.
              </p>

              {/* New Updates Coming Soon Badge */}
              <div className="mt-1 p-3 rounded-xl bg-gradient-to-br from-[#02315d] to-[#011e38] text-white border border-[#fdc254]/40 shadow-inner flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5 text-[#fdc254] font-['Plus_Jakarta_Sans'] text-[11px] font-black uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[15px]">auto_awesome</span>
                  <span>New Updates Coming Soon</span>
                </div>
                <p className="font-['Plus_Jakarta_Sans'] text-[11px] leading-[16px] text-gray-200">
                  Student &amp; Parent Portal arriving soon: <strong>Student Login</strong>, <strong>Daily Attendance Management</strong>, and <strong>Weekly Test Marks &amp; Progress Reports</strong>!
                </p>
                <span className="text-[10px] text-[#fdc254] font-bold">
                  ★ Installing the app ensures you get new features automatically!
                </span>
              </div>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
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
          </>
        ) : null}

        {showIosGuide ? (
          <div className="mt-4 rounded-xl bg-[#eef4ff] p-4 border border-[#c3c6d0]/40 text-[#03345d]">
            <h4 className="font-semibold text-sm flex items-center gap-1.5 mb-2">
              <span className="material-symbols-outlined text-[18px]">add_to_home_screen</span>
              Add to iPhone / iPad Home Screen
            </h4>
            <ol className="text-xs space-y-2 leading-relaxed text-[#161c24] list-decimal list-inside">
              <li>
                Tap the <strong className="text-[#03345d]">Share button (⎋)</strong> at the bottom of Safari.
              </li>
              <li>
                Scroll down and tap <strong className="text-[#03345d]">&apos;Add to Home Screen&apos; (+)</strong>.
              </li>
              <li>Tap <strong className="text-[#03345d]">Add</strong> at the top right.</li>
            </ol>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={markInstalledAndClose}
                className="flex-1 rounded-lg bg-[#03345d] text-white py-2 px-3 text-xs font-semibold hover:bg-[#244b75] transition-colors"
              >
                Done, I&apos;ve Added It
              </button>
              <button
                type="button"
                onClick={continueInDesktopMode}
                className="rounded-lg bg-white border border-[#c3c6d0] text-[#43474e] py-2 px-3 text-xs font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}

        {showAndroidGuide ? (
          <div className="mt-4 rounded-xl bg-[#eef4ff] p-4 border border-[#c3c6d0]/40 text-[#03345d]">
            <h4 className="font-semibold text-sm flex items-center gap-1.5 mb-2">
              <span className="material-symbols-outlined text-[18px]">add_to_home_screen</span>
              Add to Android Home Screen
            </h4>
            <ol className="text-xs space-y-2 leading-relaxed text-[#161c24] list-decimal list-inside">
              <li>
                Tap your browser menu <strong className="text-[#03345d]">(⋮)</strong> at the top right.
              </li>
              <li>
                Tap <strong className="text-[#03345d]">&apos;Install app&apos;</strong> or <strong className="text-[#03345d]">&apos;Add to Home screen&apos;</strong>.
              </li>
            </ol>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={markInstalledAndClose}
                className="flex-1 rounded-lg bg-[#03345d] text-white py-2 px-3 text-xs font-semibold hover:bg-[#244b75] transition-colors"
              >
                Done, I&apos;ve Added It
              </button>
              <button
                type="button"
                onClick={continueInDesktopMode}
                className="rounded-lg bg-white border border-[#c3c6d0] text-[#43474e] py-2 px-3 text-xs font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default InstallPrompt
