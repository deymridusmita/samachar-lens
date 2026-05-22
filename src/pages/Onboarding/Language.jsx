import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, Clock } from 'lucide-react'
import { usePreferences } from '../../context/PreferencesContext'
import { useTranslation } from '../../hooks/useTranslation'
import { LANGUAGES } from '../../data/topics'
import OnboardingLayout from '../../components/OnboardingLayout'
import Modal from '../../components/ui/Modal'
import Button from '../../components/ui/Button'

export default function Language() {
  const navigate = useNavigate()
  const { language, setLanguage } = usePreferences()
  const { t } = useTranslation()
  const [coming, setComing] = useState(null)

  const pick = (lang) => {
    if (lang.enabled) setLanguage(lang.code)
    else setComing(lang)
  }

  return (
    <OnboardingLayout
      step={1}
      title={t('langTitle')}
      sub={t('langSub')}
      onContinue={() => navigate('/onboarding/region')}
    >
      <div className="opt-list">
        {LANGUAGES.map((l) => {
          const selected = language === l.code
          return (
            <button
              key={l.code}
              className={`opt-row ${selected ? 'is-selected' : ''} ${
                !l.enabled ? 'is-locked' : ''
              }`}
              onClick={() => pick(l)}
            >
              <div className="opt-row-main">
                <span className="opt-row-title">{l.label}</span>
                <span className="opt-row-sub">{l.native}</span>
              </div>
              {!l.enabled ? (
                <span className="opt-soon">{t('langComingTitle')}</span>
              ) : (
                <span className={`opt-radio ${selected ? 'is-on' : ''}`}>
                  {selected && <Check size={13} strokeWidth={3.5} />}
                </span>
              )}
            </button>
          )
        })}
      </div>

      <Modal
        open={!!coming}
        onClose={() => setComing(null)}
        icon={<Clock size={24} />}
        title={t('langComingTitle')}
        actions={
          <Button variant="primary" onClick={() => setComing(null)}>
            {t('gotIt')}
          </Button>
        }
      >
        {coming && t('langComingBody', { lang: coming.label })}
      </Modal>
    </OnboardingLayout>
  )
}
