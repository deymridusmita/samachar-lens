import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Newspaper, ScanSearch, Scale } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useTranslation } from '../hooks/useTranslation'
import BrandMark from '../components/BrandMark'
import Button from '../components/ui/Button'

const SLIDES = [
  { Icon: Newspaper, accent: 'var(--periwinkle)', title: 'introTitle1', body: 'introBody1' },
  { Icon: ScanSearch, accent: 'var(--orange)', title: 'introTitle2', body: 'introBody2' },
  { Icon: Scale, accent: 'var(--green)', title: 'introTitle3', body: 'introBody3' },
]

export default function Intro() {
  const navigate = useNavigate()
  const { exploreAsGuest } = useAuth()
  const { t } = useTranslation()
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 4200)
    return () => clearInterval(id)
  }, [])

  const { Icon, accent, title, body } = SLIDES[slide]

  const explore = () => {
    exploreAsGuest()
    navigate('/home')
  }

  return (
    <div className="intro screen">
      <div className="intro-brand">
        <BrandMark size="sm" />
      </div>

      <div className="intro-stage screen-body">
        <div
          key={slide}
          className="intro-illus rise-in"
          style={{ '--accent': accent }}
        >
          <Icon size={52} strokeWidth={1.6} />
        </div>
        <div key={`txt-${slide}`} className="intro-copy rise-in">
          <h1 className="intro-title serif">{t(title)}</h1>
          <p className="intro-body">{t(body)}</p>
        </div>
        <div className="intro-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`intro-dot ${i === slide ? 'is-active' : ''}`}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="intro-actions">
        <Button full variant="primary" onClick={() => navigate('/signup')}>
          {t('getStarted')}
        </Button>
        <Button full variant="outline" onClick={explore}>
          {t('exploreNoAccount')}
        </Button>
        <p className="intro-login">
          {t('haveAccount')}{' '}
          <button onClick={() => navigate('/login')}>{t('logIn')}</button>
        </p>
      </div>
    </div>
  )
}
