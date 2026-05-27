import { Lock } from 'lucide-react'
import BottomSheet from './ui/BottomSheet'
import Button from './ui/Button'
import { outletById } from '../data/outlets'
import { useTranslation } from '../hooks/useTranslation'
import Wordmark from './Wordmark'

/* Shown when a reader taps a source that sits behind a paywall.
   Driven by `outletId`; pass null to close.
   - onSubscribe(outletName) fires when the user wants to leave the app
     and head to the outlet's subscribe page (article confirms first).
   - onSummary fires when the user picks "read the Samachar Lens
     summary instead" (article closes the sheet + scrolls back up). */
export default function PaywallSheet({ outletId, onClose, onSubscribe, onSummary }) {
  const { t } = useTranslation()
  const o = outletId ? outletById(outletId) : null

  const handleSubscribe = () => {
    if (o && onSubscribe) onSubscribe(o.name)
    else onClose()
  }

  const handleSummary = () => {
    onClose()
    onSummary?.()
  }

  return (
    <BottomSheet open={!!outletId} onClose={onClose}>
      {o && (
        <div className="paywall">
          <div className="paywall-ic">
            <Lock size={24} />
          </div>
          <h3 className="paywall-title">{t('paywallTitle')}</h3>
          <div className="paywall-outlet">
            <Wordmark outlet={o} size={16} />
          </div>
          <p className="paywall-body">{t('paywallBody', { outlet: o.name })}</p>
          <Button full variant="primary" onClick={handleSubscribe}>
            {t('subscribeMock', { outlet: o.name })}
          </Button>
          <button className="gate-later" onClick={handleSummary}>
            {t('readSummaryInstead')}
          </button>
        </div>
      )}
    </BottomSheet>
  )
}
