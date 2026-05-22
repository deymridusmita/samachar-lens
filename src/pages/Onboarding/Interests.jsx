import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import { usePreferences } from '../../context/PreferencesContext'
import { useTranslation } from '../../hooks/useTranslation'
import { TOPICS } from '../../data/topics'
import OnboardingLayout from '../../components/OnboardingLayout'

export default function Interests() {
  const navigate = useNavigate()
  const { topics, toggleTopic } = usePreferences()
  const { t, pick } = useTranslation()
  const enough = topics.length >= 3

  return (
    <OnboardingLayout
      step={3}
      back="/onboarding/region"
      title={t('interestsTitle')}
      sub={t('interestsSub')}
      continueDisabled={!enough}
      onContinue={() => navigate('/onboarding/welcome')}
    >
      <p className="interests-hint">{t('interestsHint', { n: topics.length })}</p>
      <div className="topic-grid">
        {TOPICS.map((topic) => {
          const selected = topics.includes(topic.id)
          return (
            <button
              key={topic.id}
              className={`topic-card ${selected ? 'is-selected' : ''}`}
              style={{ '--cat': topic.color }}
              onClick={() => toggleTopic(topic.id)}
            >
              <span className="topic-emoji">{topic.icon}</span>
              <span className="topic-name">{pick(topic)}</span>
              {selected && (
                <span className="topic-check">
                  <Check size={12} strokeWidth={3.5} />
                </span>
              )}
            </button>
          )
        })}
      </div>
    </OnboardingLayout>
  )
}
