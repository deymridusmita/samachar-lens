import { useNavigate } from 'react-router-dom'
import { Home, Search, Bookmark, User, Settings, LogOut, LogIn, X } from 'lucide-react'
import SideDrawer from './ui/SideDrawer'
import BrandMark from './BrandMark'
import Avatar from './ui/Avatar'
import Button from './ui/Button'
import { useAuth } from '../context/AuthContext'
import { usePreferences } from '../context/PreferencesContext'
import { useTranslation } from '../hooks/useTranslation'

const LINKS = [
  { to: '/home', Icon: Home, key: 'navHome' },
  { to: '/search', Icon: Search, key: 'navSearch' },
  { to: '/bookmarks', Icon: Bookmark, key: 'navBookmarks' },
  { to: '/profile', Icon: User, key: 'navProfile' },
  { to: '/settings', Icon: Settings, key: 'settingsTitle' },
]

export default function AppDrawer({ open, onClose }) {
  const { user, isAuthenticated, logOut } = useAuth()
  const { language, setLanguage } = usePreferences()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const go = (path) => {
    onClose()
    navigate(path)
  }

  return (
    <SideDrawer open={open} onClose={onClose}>
      <div className="drawer">
        <div className="drawer-top">
          <BrandMark size="sm" />
          <button className="icon-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-user">
          {isAuthenticated ? (
            <>
              <Avatar src={user.avatar} name={user.name} size={46} />
              <div className="grow">
                <div className="drawer-user-name">{user.name}</div>
                <div className="drawer-user-mail">{user.email}</div>
              </div>
            </>
          ) : (
            <>
              <div className="drawer-guest-ic">
                <User size={22} />
              </div>
              <div className="grow">
                <div className="drawer-user-name">{t('guestBadge')}</div>
                <div className="drawer-user-mail">{t('noAccount')}</div>
              </div>
            </>
          )}
        </div>

        <nav className="drawer-nav">
          {LINKS.map(({ to, Icon, key }) => (
            <button key={to} className="drawer-link" onClick={() => go(to)}>
              <Icon size={19} strokeWidth={2} />
              <span>{t(key)}</span>
            </button>
          ))}
        </nav>

        <div className="drawer-lang">
          <span className="drawer-section-label">{t('changeLanguage')}</span>
          <div className="lang-switch">
            <button
              className={language === 'en' ? 'is-active' : ''}
              onClick={() => setLanguage('en')}
            >
              English
            </button>
            <button
              className={language === 'hi' ? 'is-active' : ''}
              onClick={() => setLanguage('hi')}
            >
              हिन्दी
            </button>
          </div>
        </div>

        <div className="drawer-foot">
          {isAuthenticated ? (
            <Button
              full
              variant="outline"
              leftIcon={<LogOut size={17} />}
              onClick={() => {
                logOut()
                go('/intro')
              }}
            >
              {t('logOut')}
            </Button>
          ) : (
            <Button
              full
              variant="primary"
              leftIcon={<LogIn size={17} />}
              onClick={() => go('/signup')}
            >
              {t('signUp')}
            </Button>
          )}
          <p className="drawer-version">
            {t('appName')} · {t('version')} 1.0
          </p>
        </div>
      </div>
    </SideDrawer>
  )
}
