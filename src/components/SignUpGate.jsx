import { useNavigate } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from '../hooks/useTranslation'
import BottomSheet from './ui/BottomSheet'
import Button from './ui/Button'

/* Shown when a guest tries to open the ownership lens or coverage gap.
   Rendered once inside the phone frame; driven by AuthContext.gateOpen. */
export default function SignUpGate() {
  const { gateOpen, closeGate } = useAuth()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const go = (path) => {
    closeGate()
    navigate(path)
  }

  return (
    <BottomSheet open={gateOpen} onClose={closeGate}>
      <div className="gate">
        <div className="gate-badge">
          <Sparkles size={26} />
        </div>
        <h3 className="gate-title">{t('gateTitle')}</h3>
        <p className="gate-body">{t('gateBody')}</p>
        <div className="gate-actions">
          <Button full variant="primary" onClick={() => go('/signup')}>
            {t('gateCta')}
          </Button>
          <Button full variant="soft" onClick={() => go('/login')}>
            {t('gateLogin')}
          </Button>
        </div>
        <button className="gate-later" onClick={closeGate}>
          {t('gateLater')}
        </button>
      </div>
    </BottomSheet>
  )
}
