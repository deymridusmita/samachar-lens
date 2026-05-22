import { Info, Sparkles } from 'lucide-react'
import BottomSheet from './ui/BottomSheet'
import { outletById } from '../data/outlets'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from '../hooks/useTranslation'
import Wordmark from './Wordmark'
import PremiumLock from './PremiumLock'

/* The ownership lens. Driven by `outletId`; pass null to close.
   The deeper breakdown (cross-holdings, governance) is Premium-only. */
export default function OwnershipSheet({ outletId, onClose }) {
  const { t } = useTranslation()
  const { isPremium } = useAuth()
  const o = outletId ? outletById(outletId) : null
  const ow = o?.ownership

  const rows = ow
    ? [
        { label: t('ownedBy'), value: ow.owner, strong: true },
        { label: t('parentCompany'), value: ow.parent },
        { label: t('ownershipType'), value: ow.type },
        { label: t('founded'), value: ow.founded },
        { label: t('headquarters'), value: ow.hq },
        { label: t('funding'), value: ow.funding },
        { label: t('reach'), value: ow.reach },
      ]
    : []

  return (
    <BottomSheet open={!!outletId} onClose={onClose} title={t('ownershipTitle')}>
      {o && (
        <div className="ownership">
          <div className="ownership-head">
            <Wordmark outlet={o} size={18} />
          </div>

          <dl className="ownership-rows">
            {rows.map((r) => (
              <div key={r.label} className="ownership-row">
                <dt>{r.label}</dt>
                <dd className={r.strong ? 'is-strong' : ''}>{r.value}</dd>
              </div>
            ))}
          </dl>

          <div className="ownership-also">
            <span className="drawer-section-label">{t('alsoOperates')}</span>
            <div className="chip-wrap">
              {ow.alsoOperates.map((x) => (
                <span key={x} className="soft-chip">
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div className="why-box">
            <div className="why-box-head">
              <Info size={14} />
              <strong>{t('whyOwnershipMatters')}</strong>
            </div>
            <p>{t('whyOwnershipBody')}</p>
          </div>

          {isPremium ? (
            <div className="premium-panel">
              <span className="premium-panel-tag">
                <Sparkles size={13} /> {t('premiumName')}
              </span>
              <h4 className="premium-panel-title">
                {t('ownershipPremiumTitle')}
              </h4>
              <div className="premium-field">
                <span className="premium-field-label">{t('crossHoldings')}</span>
                <div className="chip-wrap">
                  {ow.premium.crossHoldings.map((x) => (
                    <span key={x} className="soft-chip">
                      {x}
                    </span>
                  ))}
                </div>
              </div>
              <div className="premium-field">
                <span className="premium-field-label">{t('governance')}</span>
                <p>{ow.premium.governance}</p>
              </div>
              <div className="premium-field">
                <span className="premium-field-label">
                  {t('commercialExposure')}
                </span>
                <p>{ow.premium.exposure}</p>
              </div>
            </div>
          ) : (
            <PremiumLock
              title={t('ownershipPremiumTitle')}
              body={t('ownershipPremiumBody', { outlet: o.name })}
              tone="light"
            />
          )}
        </div>
      )}
    </BottomSheet>
  )
}
