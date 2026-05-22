import { useEffect } from 'react'
import Portal from './Portal'

/* Generic left slide-in panel. App menu content is passed as children. */
export default function SideDrawer({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <Portal>
      <div className="overlay-scrim" onClick={onClose}>
        <aside
          className="side-drawer"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </aside>
      </div>
    </Portal>
  )
}
