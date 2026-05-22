import { useNavigate } from 'react-router-dom'
import { Bookmark } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useBookmarks } from '../context/BookmarksContext'
import { topicById } from '../data/topics'
import NewsImage from './NewsImage'
import Wordmark from './Wordmark'

/* variant: 'row' (feed) · 'compact' (search results, related reading) */
export default function StoryCard({ article, variant = 'row' }) {
  const { t, pick } = useTranslation()
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const navigate = useNavigate()
  const topic = topicById(article.category)
  const saved = isBookmarked(article.id)

  return (
    <article
      className={`story-card story-card--${variant}`}
      onClick={() => navigate(`/article/${article.id}`)}
    >
      <NewsImage
        src={article.image}
        category={article.category}
        alt={pick(article.title)}
        ratio="1 / 1"
        className="story-card-thumb"
      />
      <div className="story-card-main">
        <span className="cat-chip" style={{ '--cat': topic.color }}>
          {topic.icon} {pick(topic)}
        </span>
        <h3 className="story-card-title serif">{pick(article.title)}</h3>
        <div className="story-card-meta">
          <Wordmark outlet={article.primarySource} size={10.5} />
          <span className="meta-dot" />
          <span>{pick(article.time)}</span>
          {variant === 'row' && (
            <>
              <span className="meta-dot" />
              <span>{t('minRead', { n: article.readMins })}</span>
            </>
          )}
        </div>
      </div>
      <button
        className={`bookmark-btn ${saved ? 'is-saved' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          toggleBookmark(article.id)
        }}
        aria-label="Bookmark"
      >
        <Bookmark size={17} fill={saved ? 'currentColor' : 'none'} />
      </button>
    </article>
  )
}
