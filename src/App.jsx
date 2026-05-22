import { BrowserRouter } from 'react-router-dom'
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
          </BrowserRouter>
        </BookmarksProvider>
      </AuthProvider>
    </PreferencesProvider>
  )
}
