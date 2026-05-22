import { Sparkles, Check } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from '../hooks/useTranslation'
import BottomSheet from './ui/BottomSheet'
import Button from './ui/Button'

const BENEFITS = [
  'premiumBenefit1',
  'premiumBenefit2',
  'premiumBenefit3',
  'premiumBenefit4',
]

/* The subscribe sheet. Rendered once in the phone frame; driven by
   AuthContext.premiumOpen. Elevated so it stacks above the ownership sheet. */
export default function PremiumSheet() {
  const { premiumOpen, closePremium, subscribe } = useAuth()
  const { t } = useTranslation()

  return (
    <BottomSheet
      open={premiumOpen}
      onClose={closePremium}
      className="overlay-scrim--top"
    >
      <div className="premium-pitch">
        <div className="premium-crest">
          <Sparkles size={26} />
        </div>
        <span className="premium-kicker">{t('premiumName')}</span>
        <h3 className="premium-pitch-title">{t('premiumSheetTitle')}</h3>
        <p className="premium-pitch-sub">{t('premiumSheetBody')}</p>

        <ul className="premium-benefits">
          {BENEFITS.map((b) => (
            <li key={b}>
              <span className="premium-tick">
                <Check size={12} strokeWidth={3.5} />
              </span>
              {t(b)}
            </li>
          ))}
        </ul>

        <div className="premium-price">
          <span className="premium-price-amt">{t('premiumPrice')}</span>
          <span className="premium-price-per">{t('premiumPer')}</span>
        </div>

        <Button full variant="primary" onClick={subscribe}>
          {t('subscribeCta')}
        </Button>
        <button className="gate-later" onClick={closePremium}>
          {t('gateLater')}
        </button>
      </div>
    </BottomSheet>
  )
}
