import { Sparkles, ChevronRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from '../hooks/useTranslation'

/* Upsell card shown to non-Premium readers where deeper analysis is gated.
   tone: 'light' (on white surfaces) · 'dark' (on the navy coverage card) */
export default function PremiumLock({ title, body, tone = 'light' }) {
  const { promptPremium } = useAuth()
  const { t } = useTranslation()

  return (
    <button
      className={`premium-lock premium-lock--${tone}`}
      onClick={promptPremium}
    >
      <div className="premium-lock-head">
        <span className="premium-lock-ic">
          <Sparkles size={13} />
        </span>
        <span className="premium-lock-tag">{t('premiumName')}</span>
      </div>
      <strong className="premium-lock-title">{title}</strong>
      <p className="premium-lock-body">{body}</p>
      <span className="premium-lock-cta">
        {t('goPremium')} <ChevronRight size={14} />
      </span>
    </button>
  )
}
