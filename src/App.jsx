import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { PreferencesProvider } from './context/PreferencesContext'
import { AuthProvider } from './context/AuthContext'
import { BookmarksProvider } from './context/BookmarksContext'
import AppRouter from './router'

export default function App() {
  return (
    <PreferencesProvider>
      <AuthProvider>
        <BookmarksProvider>
          <BrowserRouter>
            <AppRouter />
            <Analytics />
          </BrowserRouter>
        </BookmarksProvider>
      </AuthProvider>
    </PreferencesProvider>
  )
}
