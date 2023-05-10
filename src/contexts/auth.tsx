'use client'

import {
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  createContext,
  useContext
} from 'react'

type AuthenticadType = {
  isAuthenticad: boolean
  setAuthenticad: Dispatch<SetStateAction<boolean>>
}

const AuthContext = createContext<AuthenticadType>({
  isAuthenticad: false,
  setAuthenticad: () => {}
})

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticad, setAuthenticad] = useState(false)

  return (
    <AuthContext.Provider value={{ isAuthenticad, setAuthenticad }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
