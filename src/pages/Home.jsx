import { useState, useRef, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Search } from 'lucide-react'
import { ARTICLES } from '../data/articles'
import { useAuth } from '../context/AuthContext'
import { usePreferences } from '../context/PreferencesContext'
import { useTranslation } from '../hooks/useTranslation'
import { useGate } from '../hooks/useGate'
import AppHeader from '../components/AppHeader'
import BrandMark from '../components/BrandMark'
import HeroCarousel from '../components/HeroCarousel'
import StoryCard from '../components/StoryCard'
import OutletList from '../components/OutletList'
import AppDrawer from '../components/AppDrawer'
import OwnershipSheet from '../components/OwnershipSheet'
import AdCard from '../components/AdCard'

function greetingKey() {
  const h = new Date().getHours()
  if (h < 12) return 'greetingMorning'
  if (h < 17) return 'greetingAfternoon'
  return 'greetingEvening'
}

/* Parses time labels like "1h ago" / "30 min ago" into minutes. */
function parseAgoMins(s) {
  const m = s.match(/(\d+)\s*(min|h)/i)
  if (!m) return Infinity
  return m[2].toLowerCase().startsWith('min') ? +m[1] : +m[1] * 60
}

export default function Home() {
  const navigate = useNavigate()
  const { user, isAuthenticated, hasExplored } = useAuth()
  const { topics } = usePreferences()
  const { t, pick } = useTranslation()
  const { guard } = useGate()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [ownership, setOwnership] = useState(null)
  const [refreshState, setRefreshState] = useState('idle')
  const refreshTimers = useRef([])

  const refreshFeed = () => {
    if (refreshState !== 'idle') return
    setRefreshState('refreshing')
    refreshTimers.current.forEach(clearTimeout)
    refreshTimers.current = [
      setTimeout(() => setRefreshState('done'), 800),
      setTimeout(() => setRefreshState('idle'), 2800),
    ]
  }

  const trending = ARTICLES.filter((a) => a.trending)
  const freshest = [...ARTICLES].sort(
    (a, b) => parseAgoMins(a.time.en) - parseAgoMins(b.time.en),
  )[0]
  const forYou = topics.length
    ? [...ARTICLES].sort(
        (a, b) =>
          (topics.includes(b.category) ? 1 : 0) -
          (topics.includes(a.category) ? 1 : 0),
      )
    : ARTICLES
  const firstName = user?.name?.split(' ')[0] || t('guestName')

  return (
    <div className="screen has-nav-pad">
      <AppHeader
        left={
          <button
            className="icon-btn"
            onClick={() => setDrawerOpen(true)}
            aria-label="Menu"
          >
            <Menu size={22} />
          </button>
        }
        center={<BrandMark size="sm" />}
        right={
          <button
            className="icon-btn"
            onClick={() => navigate('/search')}
            aria-label={t('navSearch')}
          >
            <Search size={21} />
          </button>
        }
      />

      <div className="home">
        <div className="home-greet">
          <p className="home-greet-hi">
            {t(greetingKey())}, <strong>{firstName}</strong>
          </p>
          <p className="home-greet-sub">{t('homeIntro')}</p>
          <button
            type="button"
            className={`freshness-chip ${
              refreshState !== 'idle' ? 'is-refreshing' : ''
            }`}
            onClick={refreshFeed}
            aria-label={t('refreshing')}
          >
            <span className="freshness-pulse" />
            {refreshState === 'refreshing' && t('refreshing')}
            {refreshState === 'done' && t('upToDate')}
            {refreshState === 'idle' &&
              t('updatedAgo', { time: pick(freshest.time) })}
          </button>
          {hasExplored && !isAuthenticated && (
            <span className="guest-badge">{t('guestBadge')}</span>
          )}
        </div>

        <section className="home-section">
          <div className="section-head section-head--pad">
            <h2 className="section-title">{t('trendingNow')}</h2>
          </div>
          <HeroCarousel articles={trending} />
        </section>

        <section className="home-section section-pad">
          <div className="section-head">
            <h2 className="section-title">{t('forYou')}</h2>
            {topics.length > 0 && (
              <span className="section-note">{t('basedOnInterests')}</span>
            )}
          </div>
          <div className="card-stack">
            {forYou.map((a, i) => (
              <Fragment key={a.id}>
                <StoryCard article={a} />
                {i === 1 && <AdCard index={0} />}
                {i === 4 && <AdCard index={1} />}
              </Fragment>
            ))}
          </div>
        </section>

        <section className="home-section section-pad">
          <div className="section-head">
            <h2 className="section-title">{t('outletsTracked')}</h2>
          </div>
          <p className="section-sub">{t('outletsTrackedSub')}</p>
          <OutletList onSelect={(id) => guard(() => setOwnership(id))} />
        </section>
      </div>

      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <OwnershipSheet outletId={ownership} onClose={() => setOwnership(null)} />
    </div>
  )
}
