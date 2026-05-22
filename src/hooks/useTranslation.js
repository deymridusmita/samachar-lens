import { useCallback } from 'react'
import { usePreferences } from '../context/PreferencesContext'
import { translate } from '../i18n'

/* t(key, vars) resolves a string in the active language.
   pick(field) reads the active-language value of a {en, hi} object. */
export function useTranslation() {
  const { language } = usePreferences()

  const t = useCallback(
    (key, vars) => translate(language, key, vars),
    [language],
  )

  const pick = useCallback(
    (obj) => (obj ? obj[language] ?? obj.en : ''),
    [language],
  )

  return { t, pick, language }
}
