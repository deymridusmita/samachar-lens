import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bookmark, Menu } from 'lucide-react'
import { ARTICLES } from '../data/articles'
import { useBookmarks } from '../context/BookmarksContext'
import { useTranslation } from '../hooks/useTranslation'
import AppHeader from '../components/AppHeader'
import AppDrawer from '../components/AppDrawer'
import StoryCard from '../components/StoryCard'
import Button from '../components/ui/Button'

export default function Bookmarks() {
  const navigate = useNavigate()
  const { bookmarks } = useBookmarks()
  const { t } = useTranslation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const saved = bookmarks
    .map((id) => ARTICLES.find((a) => a.id === id))
    .filter(Boolean)

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
        center={t('bookmarksTitle')}
      />

      <div className="screen-pad">
        {saved.length ? (
          <>
            <p className="list-count">{t('bookmarksSub', { n: saved.length })}</p>
            <div className="card-stack">
              {saved.map((a) => (
                <StoryCard key={a.id} article={a} />
              ))}
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-ic">
              <Bookmark size={26} />
            </div>
            <p className="empty-title">{t('bookmarksEmpty')}</p>
            <p className="empty-text">{t('bookmarksEmptyBody')}</p>
            <Button variant="soft" onClick={() => navigate('/home')}>
              {t('browseFeed')}
            </Button>
          </div>
        )}
      </div>

      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  )
}
