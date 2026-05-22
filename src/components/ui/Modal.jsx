import { useEffect } from 'react'
import Portal from './Portal'

export default function Modal({ open, onClose, icon, title, children, actions }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <Portal>
      <div className="overlay-scrim overlay-scrim--center" onClick={onClose}>
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          {icon && <div className="modal-icon">{icon}</div>}
          {title && <h3 className="modal-title">{title}</h3>}
          {children && <div className="modal-body">{children}</div>}
          {actions && <div className="modal-actions">{actions}</div>}
        </div>
      </div>
    </Portal>
  )
}
