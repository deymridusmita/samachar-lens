import { useEffect } from 'react'
import { X } from 'lucide-react'
import Portal from './Portal'

export default function BottomSheet({
  open,
  onClose,
  title,
  subtitle,
  children,
  className = '',
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <Portal>
      <div className={`overlay-scrim ${className}`} onClick={onClose}>
        <div
          className="sheet"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="sheet-grab" />
          {(title || subtitle) && (
            <div className="sheet-head">
              <div className="grow">
                {title && <h3 className="sheet-title">{title}</h3>}
                {subtitle && <p className="sheet-sub">{subtitle}</p>}
              </div>
              <button className="icon-btn" onClick={onClose} aria-label="Close">
                <X size={20} />
              </button>
            </div>
          )}
          <div className="sheet-body">{children}</div>
        </div>
      </div>
    </Portal>
  )
}
