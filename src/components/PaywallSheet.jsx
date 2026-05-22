import { Lock } from 'lucide-react'
import BottomSheet from './ui/BottomSheet'
import Button from './ui/Button'
import { outletById } from '../data/outlets'
import { useTranslation } from '../hooks/useTranslation'
import Wordmark from './Wordmark'

/* Shown when a reader taps a source that sits behind a paywall.
   Driven by `outletId`; pass null to close. */
export default function PaywallSheet({ outletId, onClose }) {
  const { t } = useTranslation()
  const o = outletId ? outletById(outletId) : null

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
          <Button full variant="primary" onClick={onClose}>
            {t('subscribeMock', { outlet: o.name })}
          </Button>
          <button className="gate-later" onClick={onClose}>
            {t('readSummaryInstead')}
          </button>
        </div>
      )}
    </BottomSheet>
  )
}
