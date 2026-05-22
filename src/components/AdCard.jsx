import { useAuth } from '../context/AuthContext'
import { useTranslation } from '../hooks/useTranslation'
import { ADS } from '../data/ads'
import NewsImage from './NewsImage'

/* A clearly-labelled sponsored slot with its own image and a distinct
   card colour. Hidden entirely for Premium members. */
export default function AdCard({ index = 0 }) {
  const { isPremium } = useAuth()
  const { t } = useTranslation()

  if (isPremium) return null
  const ad = ADS[index % ADS.length]

  return (
    <div className="ad-card" style={{ '--ad': ad.color }}>
      <NewsImage
        src={ad.image}
        accent={ad.color}
        glyph={ad.icon}
        alt={ad.title}
        ratio="1 / 1"
        className="ad-thumb"
      />
      <div className="ad-main">
        <span className="ad-flag">{t('adLabel')}</span>
        <strong className="ad-title">{ad.title}</strong>
        <p className="ad-text">{ad.body}</p>
        <span className="ad-cta">{ad.cta} →</span>
      </div>
    </div>
  )
}
