import { useState } from 'react'

/* Falls back to coloured initials if the photo URL fails to load. */
export default function Avatar({ src, name = '', size = 44 }) {
  const [failed, setFailed] = useState(false)

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  if (!src || failed) {
    return (
      <div
        className="avatar avatar--fallback"
        style={{ width: size, height: size, fontSize: size * 0.36 }}
        aria-label={name}
      >
        {initials || '?'}
      </div>
    )
  }

  return (
    <img
      className="avatar"
      src={src}
      width={size}
      height={size}
      alt={name}
      onError={() => setFailed(true)}
    />
  )
}
