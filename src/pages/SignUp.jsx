import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, User, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from '../hooks/useTranslation'
import BrandMark from '../components/BrandMark'
import Field from '../components/Field'
import Button from '../components/ui/Button'
import Checkbox from '../components/ui/Checkbox'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function SignUp() {
  const navigate = useNavigate()
  const { signUp } = useAuth()
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [agree, setAgree] = useState(false)
  const [errors, setErrors] = useState({})
  const [showPw, setShowPw] = useState(false)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.name.trim()) err.name = t('needName')
    if (!EMAIL_RE.test(form.email)) err.email = t('invalidEmail')
    if (form.password.length < 8) err.password = t('shortPassword')
    if (form.confirm !== form.password) err.confirm = t('mismatchPassword')
    if (!agree) err.agree = t('needTerms')
    setErrors(err)
    if (Object.keys(err).length) return
    signUp({ name: form.name, email: form.email })
    navigate('/onboarding/language')
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
        <h1 className="auth-title serif">{t('signUpTitle')}</h1>
        <p className="auth-sub">{t('signUpSub')}</p>
      </div>

      <div className="auth-form screen-body">
        <Field
          label={t('fullName')}
          icon={<User size={17} />}
          placeholder={t('namePlaceholder')}
          value={form.name}
          onChange={set('name')}
          error={errors.name}
        />
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
        <Field
          label={t('confirmPassword')}
          icon={<Lock size={17} />}
          type={showPw ? 'text' : 'password'}
          placeholder={t('passwordPlaceholder')}
          value={form.confirm}
          onChange={set('confirm')}
          error={errors.confirm}
        />
        <div className="auth-terms">
          <Checkbox checked={agree} onChange={setAgree} label={t('agreeTerms')} />
          {errors.agree && <p className="field-error">{errors.agree}</p>}
        </div>
      </div>

      <div className="auth-foot">
        <Button full type="submit" variant="primary">
          {t('signUp')}
        </Button>
        <p className="auth-switch">
          {t('haveAccount')}{' '}
          <button type="button" onClick={() => navigate('/login')}>
            {t('logIn')}
          </button>
        </p>
      </div>
    </form>
  )
}
