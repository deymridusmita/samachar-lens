import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from '../hooks/useTranslation'
import BrandMark from '../components/BrandMark'
import Field from '../components/Field'
import Button from '../components/ui/Button'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Login() {
  const navigate = useNavigate()
  const { logIn } = useAuth()
  const { t } = useTranslation()
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showPw, setShowPw] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const err = {}
    if (!EMAIL_RE.test(form.email)) err.email = t('invalidEmail')
    if (form.password.length < 8) err.password = t('shortPassword')
    setErrors(err)
    if (Object.keys(err).length) return
    logIn({ email: form.email })
    navigate('/home')
  }

  return (
    <form className="auth screen" onSubmit={submit}>
      <div className="auth-top">
        <button
          type="button"
          className="icon-btn"
          onClick={() => navigate('/intro')}
          aria-label={t('back')}
        >
          <ChevronLeft size={22} />
        </button>
      </div>

      <div className="auth-head">
        <BrandMark size="sm" />
        <h1 className="auth-title serif">{t('loginTitle')}</h1>
        <p className="auth-sub">{t('loginSub')}</p>
      </div>

      <div className="auth-form screen-body">
        <Field
          label={t('email')}
          icon={<Mail size={17} />}
          type="email"
          placeholder={t('emailPlaceholder')}
          value={form.email}
          onChange={set('email')}
          error={errors.email}
        />
        <Field
          label={t('password')}
          icon={<Lock size={17} />}
          type={showPw ? 'text' : 'password'}
          placeholder={t('passwordPlaceholder')}
          value={form.password}
          onChange={set('password')}
          error={errors.password}
          trail={
            <button
              type="button"
              className="icon-btn"
              onClick={() => setShowPw((s) => !s)}
              aria-label="Toggle password"
            >
              {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          }
        />
        <button
          type="button"
          className="auth-forgot"
          onClick={() => navigate('/forgot')}
        >
          {t('forgotPassword')}
        </button>
      </div>

      <div className="auth-foot">
        <Button full type="submit" variant="primary">
          {t('logIn')}
        </Button>
        <p className="auth-switch">
          {t('noAccount')}{' '}
          <button type="button" onClick={() => navigate('/signup')}>
            {t('signUp')}
          </button>
        </p>
      </div>
    </form>
  )
}
