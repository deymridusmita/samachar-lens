import { useNavigate } from 'react-router-dom'
import { Check, MapPin } from 'lucide-react'
import { usePreferences } from '../../context/PreferencesContext'
import { useTranslation } from '../../hooks/useTranslation'
import { REGIONS } from '../../data/topics'
import OnboardingLayout from '../../components/OnboardingLayout'

export default function Region() {
  const navigate = useNavigate()
  const { region, setRegion } = usePreferences()
  const { t, pick } = useTranslation()

  return (
    <OnboardingLayout
      step={2}
      back="/onboarding/language"
      title={t('regionTitle')}
      sub={t('regionSub')}
      onContinue={() => navigate('/onboarding/interests')}
    >
      <div className="opt-list">
        {REGIONS.map((r) => {
          const selected = region === r.id
          return (
            <button
              key={r.id}
              className={`opt-row ${selected ? 'is-selected' : ''}`}
              onClick={() => setRegion(r.id)}
            >
              <span className="opt-row-pin">
                <MapPin size={16} />
              </span>
              <div className="opt-row-main">
                <span className="opt-row-title">{pick(r)}</span>
              </div>
              <span className={`opt-radio ${selected ? 'is-on' : ''}`}>
                {selected && <Check size={13} strokeWidth={3.5} />}
              </span>
            </button>
          )
        })}
      </div>
    </OnboardingLayout>
  )
}
