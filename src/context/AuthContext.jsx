import { createContext, useContext, useState } from 'react'

/* Priya is the demo persona. Auth is visual-only — no real account,
   no persistence — so every session restarts cleanly at the splash. */
const PRIYA = {
  name: 'Priya Sharma',
  email: 'priya.sharma@example.com',
  avatar: '/profile/priya.jpg',
  location: 'Delhi–NCR',
  memberSince: 'May 2026',
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [hasExplored, setHasExplored] = useState(false)
  const [gateOpen, setGateOpen] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  const [premiumOpen, setPremiumOpen] = useState(false)

  const signUp = ({ name, email } = {}) => {
    setUser({
      ...PRIYA,
      name: name?.trim() || PRIYA.name,
      email: email?.trim() || PRIYA.email,
    })
    setHasExplored(false)
    setGateOpen(false)
    setIsPremium(false)
  }

  const logIn = ({ email } = {}) => {
    setUser({ ...PRIYA, email: email?.trim() || PRIYA.email })
    setHasExplored(false)
    setGateOpen(false)
    setIsPremium(false)
  }

  const exploreAsGuest = () => {
    setUser(null)
    setHasExplored(true)
  }

  const logOut = () => {
    setUser(null)
    setHasExplored(false)
    setIsPremium(false)
    setPremiumOpen(false)
  }

  const value = {
    user,
    isAuthenticated: !!user,
    hasExplored,
    signUp,
    logIn,
    exploreAsGuest,
    logOut,
    // sign-up gate
    gateOpen,
    promptSignUp: () => setGateOpen(true),
    closeGate: () => setGateOpen(false),
    // premium subscription
    isPremium,
    premiumOpen,
    promptPremium: () => setPremiumOpen(true),
    closePremium: () => setPremiumOpen(false),
    subscribe: () => {
      setIsPremium(true)
      setPremiumOpen(false)
    },
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
