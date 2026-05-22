import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/* Renders overlays into the phone frame so sheets, modals and the drawer
   stay clipped to the device instead of escaping to the whole window. */
export default function Portal({ children }) {
  const [host, setHost] = useState(null)

  useEffect(() => {
    setHost(document.getElementById('phone-frame'))
  }, [])

  if (!host) return null
  return createPortal(children, host)
}
