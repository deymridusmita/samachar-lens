import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { topicById } from '../data/topics'
import NewsImage from './NewsImage'
import Wordmark from './Wordmark'

/* Swipeable top stories with working dots and prev/next arrows. */
export default function HeroCarousel({ articles }) {
  const { t, pick } = useTranslation()
  const navigate = useNavigate()
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  const goTo = (i) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(articles.length - 1, i))
    const child = track.children[clamped]
    if (child) {
      track.scrollTo({
        left: child.offsetLeft - (track.clientWidth - child.clientWidth) / 2,
        behavior: 'smooth',
      })
    }
  }

  /* Track the centred slide as the user scrolls or swipes. */
  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const center = track.scrollLeft + track.clientWidth / 2
    let nearest = 0
    let best = Infinity
    Array.from(track.children).forEach((child, i) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2
      const dist = Math.abs(childCenter - center)
      if (dist < best) {
        best = dist
        nearest = i
      }
    })
    setIndex(nearest)
  }

  return (
    <div className="hero-carousel">
      <div className="hero-track" ref={trackRef} onScroll={handleScroll}>
        {articles.map((a) => {
          const topic = topicById(a.category)
          return (
            <button
              key={a.id}
              className="hero-slide"
              onClick={() => navigate(`/article/${a.id}`)}
            >
              <NewsImage
                src={a.image}
                category={a.category}
                alt={pick(a.title)}
                ratio="16 / 11"
              />
              <span className="hero-overlay" />
              <div className="hero-content">
                <div className="hero-tags">
                  <span className="hero-trend">
                    <Flame size={12} /> {t('trendingNow')}
                  </span>
                  <span className="cat-chip cat-chip--ghost">
                    {topic.icon} {pick(topic)}
                  </span>
                </div>
                <h2 className="hero-title serif">{pick(a.title)}</h2>
                <div className="hero-meta">
                  <Wordmark outlet={a.primarySource} size={11} />
                  <span className="meta-dot" />
                  <span>{pick(a.time)}</span>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <button
        className="hero-nav hero-nav--prev"
        onClick={() => goTo(index - 1)}
        disabled={index === 0}
        aria-label="Previous story"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="hero-nav hero-nav--next"
        onClick={() => goTo(index + 1)}
        disabled={index === articles.length - 1}
        aria-label="Next story"
      >
        <ChevronRight size={20} />
      </button>

      <div className="hero-dots">
        {articles.map((a, i) => (
          <button
            key={a.id}
            className={`hero-dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to story ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
