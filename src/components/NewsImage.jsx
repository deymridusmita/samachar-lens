import { useState } from 'react'
import { topicById } from '../data/topics'

/* Loads a photo; if the URL fails it degrades to a tinted panel so the
   demo never shows a broken image. `accent`/`glyph` override the colour
   and emoji of that fallback (used by ads, which have no category). */
export default function NewsImage({
  src,
  alt = '',
  category,
  accent,
  glyph,
  ratio = '16 / 10',
  className = '',
}) {
  const [failed, setFailed] = useState(false)
  const topic = topicById(category)
  const accentColor = accent || topic?.color || 'var(--periwinkle)'
  const fallbackGlyph = glyph || topic?.icon || '📰'

  if (!src || failed) {
    return (
      <div
        className={`news-img news-img--fallback ${className}`}
        style={{ aspectRatio: ratio, '--accent': accentColor }}
      >
        <span className="news-img-glyph">{fallbackGlyph}</span>
      </div>
    )
  }

  return (
    <div className={`news-img ${className}`} style={{ aspectRatio: ratio }}>
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </div>
  )
}
