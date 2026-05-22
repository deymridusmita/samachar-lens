import { useNavigate } from 'react-router-dom'
import {
  Settings,
  ChevronRight,
  MapPin,
  BookOpen,
  Bookmark,
  ScanSearch,
  UserRound,
  Sparkles,
  Pencil,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { usePreferences } from '../context/PreferencesContext'
import { useBookmarks } from '../context/BookmarksContext'
import { useTranslation } from '../hooks/useTranslation'
import { topicById, regionById } from '../data/topics'
import AppHeader from '../components/AppHeader'
import Avatar from '../components/ui/Avatar'
import Button from '../components/ui/Button'

export default function Profile() {
  const navigate = useNavigate()
  const { user, isAuthenticated, isPremium, promptPremium } = useAuth()
  const { topics, region } = usePreferences()
  const { bookmarks } = useBookmarks()
  const { t, pick } = useTranslation()

  const settingsBtn = (
    <button
      className="icon-btn"
      onClick={() => navigate('/settings')}
      aria-label={t('settingsTitle')}
    >
      <Settings size={20} />
    </button>
  )

  if (!isAuthenticated) {
    return (
      <div className="screen has-nav-pad">
        <AppHeader center={t('profileTitle')} right={settingsBtn} />
        <div className="profile-guest screen-pad">
          <div className="profile-guest-ic">
            <UserRound size={32} />
          </div>
          <h2 className="profile-guest-title serif">
            {t('guestProfileTitle')}
          </h2>
          <p className="profile-guest-text">{t('guestProfileBody')}</p>
          <Button full variant="primary" onClick={() => navigate('/signup')}>
            {t('signUp')}
          </Button>
          <Button full variant="soft" onClick={() => navigate('/login')}>
            {t('logIn')}
          </Button>
        </div>
      </div>
    )
  }

  const regionInfo = regionById(region)
  const stats = [
    { Icon: BookOpen, value: 47, label: t('statArticles') },
    { Icon: Bookmark, value: bookmarks.length, label: t('statBookmarks') },
    { Icon: ScanSearch, value: 12, label: t('statLens') },
  ]

  return (
    <div className="screen has-nav-pad">
      <AppHeader center={t('profileTitle')} right={settingsBtn} />

      <div className="profile">
        <div className="profile-hero">
          <div className="profile-avatar">
            <Avatar src={user.avatar} name={user.name} size={84} />
            <span className="profile-avatar-edit">
              <Pencil size={16} />
            </span>
          </div>
          <h2 className="profile-name serif">{user.name}</h2>
          <p className="profile-mail">{user.email}</p>
          <div className="profile-tags">
            {regionInfo && (
              <span className="profile-tag">
                <MapPin size={12} /> {pick(regionInfo)}
              </span>
            )}
            <span className="profile-tag">
              {t('memberSince', { date: user.memberSince })}
            </span>
          </div>
        </div>

        <div className="profile-stats">
          {stats.map(({ Icon, value, label }) => (
            <div key={label} className="stat-cell">
              <span className="stat-ic">
                <Icon size={17} />
              </span>
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>

        <section className="profile-section">
          {isPremium ? (
            <div className="premium-status">
              <span className="premium-status-ic">
                <Sparkles size={18} />
              </span>
              <div className="grow">
                <strong>{t('premiumMember')}</strong>
                <p>{t('premiumActiveSub')}</p>
              </div>
            </div>
          ) : (
            <button className="premium-banner" onClick={promptPremium}>
              <span className="premium-banner-ic">
                <Sparkles size={20} />
              </span>
              <div className="grow">
                <strong>{t('goPremium')}</strong>
                <p>{t('goPremiumSub')}</p>
              </div>
              <ChevronRight size={18} />
            </button>
          )}
        </section>

        <section className="profile-section">
          <h3 className="section-title">{t('topicsYouFollow')}</h3>
          <div className="chip-wrap">
            {topics.length ? (
              topics.map((id) => {
                const tp = topicById(id)
                return tp ? (
                  <span key={id} className="welcome-chip">
                    {tp.icon} {pick(tp)}
                  </span>
                ) : null
              })
            ) : (
              <p className="section-sub">{t('interestsSub')}</p>
            )}
          </div>
        </section>

        <section className="profile-section">
          <button
            className="profile-link"
            onClick={() => navigate('/settings')}
          >
            <Settings size={19} />
            <span className="grow">{t('accountSettings')}</span>
            <ChevronRight size={18} className="text-faint" />
          </button>
        </section>
      </div>
    </div>
  )
}
