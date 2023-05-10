'use client'

import {
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  createContext,
  useContext
} from 'react'

type LoadingType = {
  isLoading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

const LoadingContext = createContext<LoadingType>({
  isLoading: false,
  setLoading: () => {}
})

const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

const useLoading = () => useContext(LoadingContext)

export { LoadingProvider, useLoading }
