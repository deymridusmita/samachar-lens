/* The Samachar Lens lockup: lens glyph + serif wordmark.
   `light` recolours the glyph + text for dark backgrounds. */
const DIMS = { sm: 28, md: 36, lg: 56 }
const FONTS = { sm: 17, md: 22, lg: 32 }

export default function BrandMark({ size = 'md', light = false }) {
  const d = DIMS[size]
  const tile = light ? '#8EAEF2' : '#092C4C'
  const ring = light ? '#092C4C' : '#8EAEF2'

  return (
    <div className={`brandmark ${light ? 'is-light' : ''}`}>
      <svg width={d} height={d} viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="15" fill={tile} />
        <circle cx="28" cy="28" r="14" fill="none" stroke={ring} strokeWidth="5" />
        <circle cx="28" cy="28" r="6.5" fill="#FFAA00" />
        <line
          x1="38"
          y1="38"
          x2="50"
          y2="50"
          stroke={ring}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <span className="brandmark-text serif" style={{ fontSize: FONTS[size] }}>
        Samachar<span className="brandmark-accent">&nbsp;Lens</span>
      </span>
    </div>
  )
}
