import { outletById } from '../data/outlets'

/* A styled-text approximation of each outlet's logo. Real brand marks
   are intentionally not reproduced — see outlets.js `wordmark`. */
export default function Wordmark({ outlet, size = 14 }) {
  const o = typeof outlet === 'string' ? outletById(outlet) : outlet
  if (!o) return null
  const w = o.wordmark

  return (
    <span
      className={`wordmark ${w.boxed ? 'wordmark--boxed' : ''}`}
      style={{
        fontFamily: w.family === 'serif' ? 'var(--font-serif)' : 'var(--font-sans)',
        fontWeight: w.weight,
        letterSpacing: w.tracking,
        fontSize: `${size}px`,
        color: w.boxed ? '#fff' : w.color,
        background: w.boxed ? w.color : 'transparent',
      }}
    >
      {w.text}
    </span>
  )
}
