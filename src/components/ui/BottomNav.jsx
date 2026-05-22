import { NavLink } from 'react-router-dom'
import { Home, Search, Bookmark, User } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

const ITEMS = [
  { to: '/home', Icon: Home, key: 'navHome' },
  { to: '/search', Icon: Search, key: 'navSearch' },
  { to: '/bookmarks', Icon: Bookmark, key: 'navBookmarks' },
  { to: '/profile', Icon: User, key: 'navProfile' },
]

export default function BottomNav() {
  const { t } = useTranslation()

  return (
    <nav className="bottom-nav">
      {ITEMS.map(({ to, Icon, key }) => (
        <NavLink key={to} to={to} className="nav-item">
          {({ isActive }) => (
            <>
              <Icon
                size={22}
                strokeWidth={isActive ? 2.6 : 2}
                fill={isActive && key === 'navBookmarks' ? 'currentColor' : 'none'}
              />
              <span>{t(key)}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
