import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import ProgressBar from './ui/ProgressBar'
import Button from './ui/Button'
import { useTranslation } from '../hooks/useTranslation'

/* Shared scaffold for the three numbered onboarding steps. */
export default function OnboardingLayout({
  step,
  total = 3,
  back,
  title,
  sub,
  children,
  onContinue,
  continueLabel,
  continueDisabled,
}) {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="onb screen">
      <div className="onb-top">
        {back ? (
          <button
            className="icon-btn"
            onClick={() => navigate(back)}
            aria-label={t('back')}
          >
            <ChevronLeft size={22} />
          </button>
        ) : (
          <span className="onb-top-spacer" />
        )}
        <ProgressBar step={step} total={total} />
        <span className="onb-step">{t('stepOf', { n: step, total })}</span>
      </div>

      <div className="onb-head">
        <h1 className="onb-title serif">{title}</h1>
        <p className="onb-sub">{sub}</p>
      </div>

      <div className="onb-body screen-body">{children}</div>

      <div className="onb-foot">
        <Button
          full
          variant="primary"
          onClick={onContinue}
          disabled={continueDisabled}
        >
          {continueLabel || t('continue')}
        </Button>
      </div>
    </div>
  )
}
