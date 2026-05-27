import { useState } from 'react'
import { Search as SearchIcon, X, Menu } from 'lucide-react'
import { ARTICLES } from '../data/articles'
import { TOPICS, topicById } from '../data/topics'
import { useTranslation } from '../hooks/useTranslation'
import AppDrawer from '../components/AppDrawer'
import StoryCard from '../components/StoryCard'

const TRENDING = ['Chabahar', 'RBI repo rate', 'Cyclone', 'Gaganyaan', 'SIR rolls']
const RECENTS_KEY = 'sl_recent_searches'
const RECENTS_MAX = 5

function loadRecents() {
  try {
    const raw = localStorage.getItem(RECENTS_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export default function Search() {
  const { t, pick } = useTranslation()
  const [query, setQuery] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [recents, setRecents] = useState(loadRecents)
  const q = query.trim().toLowerCase()

  const pushRecent = (term) => {
    setRecents((prev) => {
      const next = [
        term,
        ...prev.filter((x) => x.toLowerCase() !== term.toLowerCase()),
      ].slice(0, RECENTS_MAX)
      try {
        localStorage.setItem(RECENTS_KEY, JSON.stringify(next))
      } catch {}
      return next
    })
  }

  const runSearch = (term) => {
    setQuery(term)
    pushRecent(term)
  }

  const results = q
    ? ARTICLES.filter(
        (a) =>
          pick(a.title).toLowerCase().includes(q) ||
          pick(a.summary).toLowerCase().includes(q) ||
          pick(topicById(a.category)).toLowerCase().includes(q),
      )
    : []

  return (
    <div className="screen has-nav-pad">
      <div className="search-top">
        <button
          className="icon-btn"
          onClick={() => setDrawerOpen(true)}
          aria-label="Menu"
        >
          <Menu size={22} />
        </button>
        <div className="search-bar">
          <SearchIcon size={18} className="search-bar-ic" />
          <input
            className="search-bar-input"
            type="search"
            placeholder={t('searchPlaceholder')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button
              className="search-bar-clear"
              onClick={() => setQuery('')}
              aria-label={t('cancel')}
            >
              <X size={17} />
            </button>
          )}
        </div>
      </div>

      <div className="search-body">
        {q ? (
          results.length ? (
            <>
              <p className="search-results-label">
                {t('resultsFor', { q: query.trim() })}
              </p>
              <div className="card-stack">
                {results.map((a) => (
                  <StoryCard key={a.id} article={a} />
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <div className="empty-ic">
                <SearchIcon size={26} />
              </div>
              <p className="empty-title">{t('noResults')}</p>
              <p className="empty-text">{t('noResultsBody')}</p>
            </div>
          )
        ) : (
          <>
            {recents.length > 0 && (
              <section className="search-section">
                <h2 className="section-title">{t('recentSearches')}</h2>
                <div className="chip-wrap">
                  {recents.map((term) => (
                    <button
                      key={term}
                      className="query-chip"
                      onClick={() => runSearch(term)}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section className="search-section">
              <h2 className="section-title">{t('trendingSearches')}</h2>
              <div className="chip-wrap">
                {TRENDING.map((term) => (
                  <button
                    key={term}
                    className="query-chip"
                    onClick={() => runSearch(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </section>

            <section className="search-section">
              <h2 className="section-title">{t('browseTopics')}</h2>
              <div className="topic-grid topic-grid--browse">
                {TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    className="topic-card"
                    style={{ '--cat': topic.color }}
                    onClick={() => runSearch(pick(topic))}
                  >
                    <span className="topic-emoji">{topic.icon}</span>
                    <span className="topic-name">{pick(topic)}</span>
                  </button>
                ))}
              </div>
            </section>
          </>
        )}
      </div>

      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  )
}
