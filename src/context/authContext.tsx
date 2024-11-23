import { ReactNode, createContext, useCallback, useState } from 'react'
import { localStorageKeys } from '../config/localStorageKeys'

interface AuthContextValue {
  signedIn: boolean
  setSignedIn: any;
  signin(accessToken: string, name: string, email: string): void
  signout(): void
}

export const AuthContext = createContext({} as AuthContextValue)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(
    () => !!localStorage.getItem(localStorageKeys.ACCESS_USER),
  )

  const signin = useCallback((accessToken: string, name: string, email: string) => {
    const object = { token: accessToken, name, email }
    localStorage.setItem(localStorageKeys.ACCESS_USER, JSON.stringify(object))

    setSignedIn(true)
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_USER)

    setSignedIn(false)
  }, [])

  return (
    <AuthContext.Provider value={{ signedIn, setSignedIn, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}
