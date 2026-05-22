import { Routes, Route, Navigate } from 'react-router-dom'
import PhoneFrame from './components/PhoneFrame'
import Splash from './pages/Splash'
import Intro from './pages/Intro'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Language from './pages/Onboarding/Language'
import Region from './pages/Onboarding/Region'
import Interests from './pages/Onboarding/Interests'
import Welcome from './pages/Onboarding/Welcome'
import Home from './pages/Home'
import Search from './pages/Search'
import Article from './pages/Article'
import Bookmarks from './pages/Bookmarks'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<PhoneFrame />}>
        <Route path="/" element={<Splash />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/onboarding/language" element={<Language />} />
        <Route path="/onboarding/region" element={<Region />} />
        <Route path="/onboarding/interests" element={<Interests />} />
        <Route path="/onboarding/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
