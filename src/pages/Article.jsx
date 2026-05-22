import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChevronLeft, Bookmark, Share2, Clock, ScanSearch } from 'lucide-react'
import { articleById, ARTICLES } from '../data/articles'
import { outletById } from '../data/outlets'
import { topicById } from '../data/topics'
import { useTranslation } from '../hooks/useTranslation'
import { useBookmarks } from '../context/BookmarksContext'
import { useGate } from '../hooks/useGate'
import AppHeader from '../components/AppHeader'
import NewsImage from '../components/NewsImage'
import Wordmark from '../components/Wordmark'
import SourceTabs from '../components/SourceTabs'
import CoverageGapCard from '../components/CoverageGapCard'
import OwnershipSheet from '../components/OwnershipSheet'
import PaywallSheet from '../components/PaywallSheet'
import StoryCard from '../components/StoryCard'
import AdCard from '../components/AdCard'
import Button from '../components/ui/Button'

export default function Article() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, pick } = useTranslation()
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const { guard } = useGate()
  const [ownership, setOwnership] = useState(null)
  const [paywall, setPaywall] = useState(null)

  const article = articleById(id)

  if (!article) {
    return (
      <div className="screen">
        <AppHeader
          left={
            <button className="icon-btn" onClick={() => navigate('/home')}>
              <ChevronLeft size={22} />
            </button>
          }
        />
        <div className="empty-state screen-body">
          <p className="empty-title">{t('noResults')}</p>
          <Button variant="soft" onClick={() => navigate('/home')}>
            {t('browseFeed')}
          </Button>
        </div>
      </div>
    )
  }

  const topic = topicById(article.category)
  const primary = outletById(article.primarySource)
  const saved = isBookmarked(article.id)
  const related = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3)

  const handleSource = (s) => {
    if (s.paywalled) setPaywall(s.outlet)
    else guard(() => setOwnership(s.outlet))
  }

  const share = () => {
    if (navigator.share) {
      navigator.share({ title: pick(article.title) }).catch(() => {})
    }
  }

  return (
    <div className="screen article">
      <AppHeader
        left={
          <button
            className="icon-btn"
            onClick={() => navigate(-1)}
            aria-label={t('back')}
          >
            <ChevronLeft size={22} />
          </button>
        }
        right={
          <>
            <button className="icon-btn" onClick={share} aria-label="Share">
              <Share2 size={19} />
            </button>
            <button
              className={`icon-btn ${saved ? 'is-active-save' : ''}`}
              onClick={() => toggleBookmark(article.id)}
              aria-label="Bookmark"
            >
              <Bookmark size={20} fill={saved ? 'currentColor' : 'none'} />
            </button>
          </>
        }
      />

      <article className="article-body">
        <NewsImage
          src={article.image}
          category={article.category}
          alt={pick(article.title)}
          ratio="16 / 10"
          className="article-hero"
        />

        <div className="article-pad">
          <span className="cat-chip" style={{ '--cat': topic.color }}>
            {topic.icon} {pick(topic)}
          </span>
          <h1 className="article-title serif">{pick(article.title)}</h1>
          <p className="article-summary">{pick(article.summary)}</p>

          <div className="article-meta">
            <Wordmark outlet={primary} size={12} />
            <span className="article-meta-time">
              <Clock size={12} /> {pick(article.time)} ·{' '}
              {t('minRead', { n: article.readMins })}
            </span>
          </div>

          <div className="lens-callout">
            <div className="lens-callout-ic">
              <ScanSearch size={20} />
            </div>
            <div className="grow">
              <strong>{t('whoOwnsThis')}</strong>
              <p>{t('whoOwnsThisSub', { outlet: primary.name })}</p>
            </div>
            <Button
              size="sm"
              variant="navy"
              onClick={() => guard(() => setOwnership(article.primarySource))}
            >
              {t('openLens')}
            </Button>
          </div>

          <div className="article-prose">
            {pick(article.body).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="article-section">
            <AdCard index={2} />
          </div>

          <section className="article-section">
            <h2 className="section-title">{t('howOutletsFramed')}</h2>
            <p className="section-sub">{t('howOutletsFramedSub')}</p>
            <SourceTabs sources={article.sources} onOpen={handleSource} />
          </section>

          <section className="article-section">
            <CoverageGapCard gap={article.coverageGap} />
          </section>

          <section className="article-section">
            <h2 className="section-title">{t('relatedReading')}</h2>
            <div className="card-stack">
              {related.map((a) => (
                <StoryCard key={a.id} article={a} variant="compact" />
              ))}
            </div>
          </section>
        </div>
      </article>

      <OwnershipSheet outletId={ownership} onClose={() => setOwnership(null)} />
      <PaywallSheet outletId={paywall} onClose={() => setPaywall(null)} />
    </div>
  )
}
