import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { usePreferences } from '../context/PreferencesContext'
import BottomNav from './ui/BottomNav'
import SignUpGate from './SignUpGate'
import PremiumSheet from './PremiumSheet'

/* The device frame. Routes render into the scrolling screen; the bottom
   nav shows only on the four main tabs. Overlays portal into #phone-frame. */
const NAV_ROUTES = ['/home', '/search', '/bookmarks', '/profile']

export default function PhoneFrame() {
  const { pathname } = useLocation()
  const { textSize, theme } = usePreferences()
  const screenRef = useRef(null)
  const showNav = NAV_ROUTES.includes(pathname)

  useEffect(() => {
    screenRef.current?.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="app-stage">
      <div
        className="phone-frame"
        id="phone-frame"
        data-text={textSize}
        data-theme={theme}
      >
        <div className="phone-screen" ref={screenRef}>
          <Outlet />
        </div>
        {showNav && <BottomNav />}
        <SignUpGate />
        <PremiumSheet />
      </div>
    </div>
  )
}
