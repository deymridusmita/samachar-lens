/* Onboarding option sets: languages, regions, interest topics. */

export const LANGUAGES = [
  { code: 'en', label: 'English', native: 'English', enabled: true },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी', enabled: true },
  { code: 'bn', label: 'Bengali', native: 'বাংলা', enabled: false },
  { code: 'ta', label: 'Tamil', native: 'தமிழ்', enabled: false },
  { code: 'te', label: 'Telugu', native: 'తెలుగు', enabled: false },
  { code: 'mr', label: 'Marathi', native: 'मराठी', enabled: false },
]

export const REGIONS = [
  { id: 'national', en: 'All India', hi: 'पूरा भारत' },
  { id: 'delhi', en: 'Delhi–NCR', hi: 'दिल्ली–एनसीआर' },
  { id: 'maharashtra', en: 'Maharashtra', hi: 'महाराष्ट्र' },
  { id: 'west-bengal', en: 'West Bengal', hi: 'पश्चिम बंगाल' },
  { id: 'uttar-pradesh', en: 'Uttar Pradesh', hi: 'उत्तर प्रदेश' },
  { id: 'tamil-nadu', en: 'Tamil Nadu', hi: 'तमिलनाडु' },
  { id: 'karnataka', en: 'Karnataka', hi: 'कर्नाटक' },
  { id: 'odisha', en: 'Odisha', hi: 'ओडिशा' },
  { id: 'northeast', en: 'North-East', hi: 'पूर्वोत्तर' },
]

export const TOPICS = [
  { id: 'politics', en: 'Politics', hi: 'राजनीति', icon: '🏛️', color: '#8eaef2' },
  { id: 'business', en: 'Business & Economy', hi: 'व्यापार और अर्थव्यवस्था', icon: '📈', color: '#3fa98c' },
  { id: 'sports', en: 'Sports', hi: 'खेल', icon: '🏏', color: '#ffaa00' },
  { id: 'science', en: 'Science & Tech', hi: 'विज्ञान और तकनीक', icon: '🛰️', color: '#6f8fd6' },
  { id: 'health', en: 'Health', hi: 'स्वास्थ्य', icon: '🩺', color: '#e0695f' },
  { id: 'world', en: 'World', hi: 'विश्व', icon: '🌏', color: '#245074' },
  { id: 'environment', en: 'Environment', hi: 'पर्यावरण', icon: '🌦️', color: '#5aa6a0' },
  { id: 'entertainment', en: 'Entertainment', hi: 'मनोरंजन', icon: '🎬', color: '#c489d6' },
  { id: 'education', en: 'Education', hi: 'शिक्षा', icon: '📚', color: '#d98a3d' },
]

export const topicById = (id) => TOPICS.find((t) => t.id === id)
export const regionById = (id) => REGIONS.find((r) => r.id === id)
