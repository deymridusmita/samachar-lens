import { useAuth } from '../context/AuthContext'

/* The lens (ownership sheet) and coverage gap are account-only.
   guard(fn) runs fn for signed-in users; for guests it opens the
   "Sign up — it's free!" prompt instead and returns false. */
export function useGate() {
  const { isAuthenticated, promptSignUp } = useAuth()

  const guard = (fn) => {
    if (isAuthenticated) {
      fn?.()
      return true
    }
    promptSignUp()
    return false
  }

  return { guard, isAuthenticated }
}
