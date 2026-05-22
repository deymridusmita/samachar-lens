import en from './en.js'
import hi from './hi.js'

/* Only English and Hindi are wired for this demo. The other onboarding
   languages surface a "coming soon" prompt instead of switching. */
export const dictionaries = { en, hi }

export const WIRED_LANGUAGES = ['en', 'hi']

/* Replace {placeholders} in a string with values from `vars`. */
export function format(str, vars) {
  if (!vars) return str
  return str.replace(/\{(\w+)\}/g, (match, key) =>
    key in vars ? String(vars[key]) : match,
  )
}

export function translate(lang, key, vars) {
  const dict = dictionaries[lang] || dictionaries.en
  const value = dict[key] ?? dictionaries.en[key] ?? key
  return format(value, vars)
}
