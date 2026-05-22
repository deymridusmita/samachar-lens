import { Lock } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { outletById } from '../data/outlets'
import Wordmark from './Wordmark'

/* "How outlets framed it" — the same story as headlined by each newsroom.
   Tapping a row hands the source back to the article, which opens either
   the paywall sheet or the ownership lens. */
export default function SourceTabs({ sources, onOpen }) {
  const { t, pick } = useTranslation()

  return (
    <div className="source-list">
      {sources.map((s) => {
        const o = outletById(s.outlet)
        return (
          <button
            key={s.outlet}
            className="source-row"
            onClick={() => onOpen(s)}
          >
            <div className="source-row-top">
              <Wordmark outlet={o} size={11.5} />
              {s.paywalled && (
                <span className="paywall-tag">
                  <Lock size={9} /> {t('paywalledTag')}
                </span>
              )}
            </div>
            <p className="source-row-headline">{pick(s.headline)}</p>
          </button>
        )
      })}
    </div>
  )
}
