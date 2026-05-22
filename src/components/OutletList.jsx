import { outletList } from '../data/outlets'
import Wordmark from './Wordmark'

/* The row of tracked-outlet wordmarks. If `onSelect` is given, each
   outlet opens its ownership lens. */
export default function OutletList({ onSelect }) {
  return (
    <div className="outlet-grid">
      {outletList().map((o) => (
        <button
          key={o.id}
          className="outlet-cell"
          onClick={() => onSelect?.(o.id)}
          disabled={!onSelect}
        >
          <Wordmark outlet={o} size={12.5} />
        </button>
      ))}
    </div>
  )
}
