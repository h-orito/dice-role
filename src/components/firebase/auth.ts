import { useEffect, useState } from 'react'
import { onAuthStateChanged, auth, signOut } from 'plugins/firebase'

const initial: AuthState = {
  isSignedIn: false,
  isLoading: true,
  userId: undefined,
  userName: undefined
}

export const useAuthState = (): AuthState => {
  const [authState, setAuthState] = useState(initial)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState({
          isSignedIn: true,
          isLoading: false,
          userId: user.uid,
          userName: user.displayName || undefined
        })
      } else {
        setAuthState({ ...initial, isLoading: false })
      }
    })

    return () => unsubscribe()
  }, [])

  return authState
}

export { signOut }
