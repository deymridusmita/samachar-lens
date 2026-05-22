import { useState } from 'react'
import { createPortal } from 'react-dom'

/* Renders overlays into the phone frame so sheets, modals and the drawer
   stay clipped to the device instead of escaping to the whole window.
   Overlays only ever mount after the app is committed, so #phone-frame
   already exists when this resolves. */
export default function Portal({ children }) {
  const [host] = useState(() => document.getElementById('phone-frame'))

  if (!host) return null
  return createPortal(children, host)
}
