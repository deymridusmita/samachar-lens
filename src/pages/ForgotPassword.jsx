import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Mail, MailCheck } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import BrandMark from '../components/BrandMark'
import Field from '../components/Field'
import Button from '../components/ui/Button'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ForgotPassword() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email)) {
      setError(t('invalidEmail'))
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <form className="auth screen" onSubmit={submit}>
      <div className="auth-top">
        <button
          type="button"
          className="icon-btn"
          onClick={() => navigate('/login')}
          aria-label={t('back')}
        >
          <ChevronLeft size={22} />
        </button>
      </div>

      {sent ? (
        <div className="auth-success screen-body">
          <div className="auth-success-ic">
            <MailCheck size={30} />
          </div>
          <h1 className="auth-title serif">{t('resetSentTitle')}</h1>
          <p className="auth-sub">{t('resetSentBody', { email })}</p>
        </div>
      ) : (
        <>
          <div className="auth-head">
            <BrandMark size="sm" />
            <h1 className="auth-title serif">{t('forgotTitle')}</h1>
            <p className="auth-sub">{t('forgotSub')}</p>
          </div>
          <div className="auth-form screen-body">
            <Field
              label={t('email')}
              icon={<Mail size={17} />}
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
            />
          </div>
        </>
      )}

      <div className="auth-foot">
        {sent ? (
          <Button full variant="primary" onClick={() => navigate('/login')}>
            {t('backToLogin')}
          </Button>
        ) : (
          <Button full type="submit" variant="primary">
            {t('sendResetLink')}
          </Button>
        )}
      </div>
    </form>
  )
}
