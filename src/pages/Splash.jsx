import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BrandMark from '../components/BrandMark'
import { useTranslation } from '../hooks/useTranslation'

export default function Splash() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    const id = setTimeout(() => navigate('/intro'), 2400)
    return () => clearTimeout(id)
  }, [navigate])

  return (
    <div className="splash" onClick={() => navigate('/intro')}>
      <div className="splash-glow" />
      <div className="splash-mark rise-in">
        <BrandMark size="lg" light />
      </div>
      <p className="splash-tagline">{t('tagline')}</p>
      <div className="splash-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}
