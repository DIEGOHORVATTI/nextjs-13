'use client'

import { useAuth } from '@/contexts'
import { Button } from '@mui/material'

const Header = () => {
  const { setAuthenticad, isAuthenticad } = useAuth()

  return (
    <>
      <Button variant="outlined" onClick={() => setAuthenticad(!isAuthenticad)}>
        <>{isAuthenticad ? 'Logout' : 'Login'}</>
      </Button>
    </>
  )
}

export default Header
