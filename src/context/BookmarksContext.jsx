import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'sl_bookmarks'

/* Seeded so the Saved tab has content on first run of the demo. */
const SEED = ['rbi-repo', 'isro-gaganyaan']

function loadBookmarks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : SEED
  } catch {
    return SEED
  }
}

const BookmarksContext = createContext(null)

export function BookmarksProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(loadBookmarks)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks))
    } catch {
      /* storage unavailable — demo still works in-memory */
    }
  }, [bookmarks])

  const value = {
    bookmarks,
    isBookmarked: (id) => bookmarks.includes(id),
    toggleBookmark: (id) =>
      setBookmarks((list) =>
        list.includes(id) ? list.filter((b) => b !== id) : [id, ...list],
      ),
  }

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  )
}

export function useBookmarks() {
  const ctx = useContext(BookmarksContext)
  if (!ctx) throw new Error('useBookmarks must be used within BookmarksProvider')
  return ctx
}
