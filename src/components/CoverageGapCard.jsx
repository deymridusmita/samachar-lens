import { useState } from 'react'
import { ChevronDown, Lock, Check, X, Sparkles } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useGate } from '../hooks/useGate'
import { useAuth } from '../context/AuthContext'
import Wordmark from './Wordmark'
import PremiumLock from './PremiumLock'

export default function CoverageGapCard({ gap }) {
  const { t, pick } = useTranslation()
  const { guard, isAuthenticated } = useGate()
  const { isPremium } = useAuth()
  const [open, setOpen] = useState(false)

  const total = gap.covered.length + gap.missing.length

  const toggle = () => {
    if (open) {
      setOpen(false)
      return
    }
    /* Guests get the "sign up — it's free!" prompt instead of the panel. */
    guard(() => setOpen(true))
  }

  return (
    <section className={`gap-card ${open ? 'is-open' : ''}`}>
      <button className="gap-head" onClick={toggle}>
        <div className="grow">
          <span className="gap-kicker">{t('coverageGapTitle')}</span>
          <span className="gap-count">
            {t('coveredByCount', { n: gap.covered.length, total })}
          </span>
        </div>
        {isAuthenticated ? (
          <ChevronDown size={20} className="gap-chevron" />
        ) : (
          <span className="gap-lock">
            <Lock size={15} />
          </span>
        )}
      </button>

      {open && isAuthenticated && (
        <div className="gap-body">
          <p className="gap-sub">{t('coverageGapSub')}</p>

          <div className="gap-lists">
            <div className="gap-list">
              <span className="gap-list-label gap-list-label--yes">
                <Check size={13} strokeWidth={3} /> {t('coveringLabel')}
              </span>
              <div className="chip-wrap">
                {gap.covered.map((id) => (
                  <span key={id} className="outlet-pill">
                    <Wordmark outlet={id} size={10.5} />
                  </span>
                ))}
              </div>
            </div>
            <div className="gap-list">
              <span className="gap-list-label gap-list-label--no">
                <X size={13} strokeWidth={3} /> {t('notCoveringLabel')}
              </span>
              <div className="chip-wrap">
                {gap.missing.map((id) => (
                  <span key={id} className="outlet-pill is-muted">
                    <Wordmark outlet={id} size={10.5} />
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="gap-take">
            <strong>{t('gapTakeaway')}</strong>
            <p>{pick(gap.note)}</p>
          </div>

          {isPremium ? (
            <div className="premium-panel premium-panel--dark">
              <span className="premium-panel-tag">
                <Sparkles size={13} /> {t('premiumName')}
              </span>
              <h4 className="premium-panel-title">
                {t('coveragePremiumTitle')}
              </h4>
              <ul className="premium-points">
                <li>{t('coveragePremiumLine1')}</li>
                <li>{t('coveragePremiumLine2')}</li>
              </ul>
            </div>
          ) : (
            <PremiumLock
              title={t('coveragePremiumTitle')}
              body={t('coveragePremiumBody')}
              tone="dark"
            />
          )}
        </div>
      )}
    </section>
  )
}
