/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react'

const SESSION_KEY = 'bh-desktop-mode-chosen'

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [show, setShow] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    const standalone =
      typeof window !== 'undefined' &&
      (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true)

    setIsStandalone(standalone)
    if (standalone) return

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

    const openListener = () => {
      setShow(true)
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
  <meta http-equiv="refresh" content="0; url=${origin}/">
  <script>window.location.replace("${origin}/");</script>
</head>
<body style="font-family:system-ui,-apple-system,BlinkMacSystemFont,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;background:#f8f9ff;color:#03345d;">
  <div style="text-align:center;padding:24px;">
    <img src="${origin}/images/logo.png" width="96" height="96" alt="Brilliant Hub" style="object-fit:contain;margin-bottom:16px;">
    <h2 style="margin:0 0 8px 0;font-size:24px;">Launching Brilliant Hub...</h2>
    <p style="margin:0;font-size:14px;color:#43474e;">Uttarahalli • Bengaluru</p>
    <p style="margin-top:20px;"><a href="${origin}/" style="color:#03345d;font-weight:600;text-decoration:underline;">Click here if not redirected automatically</a></p>
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
    const promptEvent =
      deferredPrompt || (typeof window !== 'undefined' ? window.deferredInstallPrompt : null)

    if (promptEvent) {
      try {
        promptEvent.prompt()
        await promptEvent.userChoice
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

    // Direct download shortcut on clicking for desktop / browsers without native prompt
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

        <div className="mt-3">
          <p className="font-['Plus_Jakarta_Sans'] text-[14px] leading-[22px] text-[#161c24]">
            How would you like to experience Brilliant Hub today?
          </p>
          <p className="mt-1 font-['Plus_Jakarta_Sans'] text-[12px] leading-[18px] text-[#43474e]">
            Download as an app on your home screen for fast 1-tap offline access, or continue browsing in desktop mode.
          </p>
        </div>

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
