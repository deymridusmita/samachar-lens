import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'sl_prefs'

const DEFAULTS = {
  language: 'en',
  region: 'national',
  topics: [],
  textSize: 'medium',
  dataSaver: false,
  notifications: { push: true, breaking: true, digest: false },
  onboarded: false,
}

function loadPrefs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULTS
    return { ...DEFAULTS, ...JSON.parse(raw) }
  } catch {
    return DEFAULTS
  }
}

const PreferencesContext = createContext(null)

export function PreferencesProvider({ children }) {
  const [prefs, setPrefs] = useState(loadPrefs)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    } catch {
      /* storage unavailable — demo still works in-memory */
    }
  }, [prefs])

  const patch = (next) => setPrefs((p) => ({ ...p, ...next }))

  const value = {
    ...prefs,
    setLanguage: (language) => patch({ language }),
    setRegion: (region) => patch({ region }),
    setTopics: (topics) => patch({ topics }),
    toggleTopic: (id) =>
      setPrefs((p) => ({
        ...p,
        topics: p.topics.includes(id)
          ? p.topics.filter((t) => t !== id)
          : [...p.topics, id],
      })),
    setTextSize: (textSize) => patch({ textSize }),
    setDataSaver: (dataSaver) => patch({ dataSaver }),
    toggleNotification: (key) =>
      setPrefs((p) => ({
        ...p,
        notifications: { ...p.notifications, [key]: !p.notifications[key] },
      })),
    completeOnboarding: () => patch({ onboarded: true }),
  }

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext)
  if (!ctx) throw new Error('usePreferences must be used within PreferencesProvider')
  return ctx
}
