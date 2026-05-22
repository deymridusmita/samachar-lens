import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { usePreferences } from '../../context/PreferencesContext'
import { useTranslation } from '../../hooks/useTranslation'
import { topicById } from '../../data/topics'
import Button from '../../components/ui/Button'

export default function Welcome() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { topics, completeOnboarding } = usePreferences()
  const { t, pick } = useTranslation()
  const firstName = user?.name?.split(' ')[0] || t('guestName')

  const finish = () => {
    completeOnboarding()
    navigate('/home')
  }

  return (
    <div className="welcome screen">
      <div className="welcome-body screen-body">
        <div className="welcome-burst rise-in">
          <span className="welcome-ring" />
          <div className="welcome-check">
            <Check size={38} strokeWidth={3} />
          </div>
        </div>
        <h1 className="welcome-title serif">
          {t('welcomeTitle', { name: firstName })}
        </h1>
        <p className="welcome-text">{t('welcomeBody')}</p>

        {topics.length > 0 && (
          <div className="welcome-topics">
            {topics.map((id) => {
              const tp = topicById(id)
              if (!tp) return null
              return (
                <span key={id} className="welcome-chip">
                  {tp.icon} {pick(tp)}
                </span>
              )
            })}
          </div>
        )}
      </div>

      <div className="welcome-foot">
        <Button full variant="primary" onClick={finish}>
          {t('startReading')}
        </Button>
      </div>
    </div>
  )
}
