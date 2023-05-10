'use client'

/*
  Exemplo de uma requisição que espera um loading
  antes dos dados serem carregados oque é errado
  no quesito usabilidade
*/

import { useEffect, useState } from 'react'
import { useLoading, useAuth } from '@/contexts'
import { User } from '@/Types/user'

const Home = () => {
  const [profile, setProfile] = useState<User>()
  const { isAuthenticad } = useAuth()
  const { isLoading } = useLoading()

  useEffect(() => {
    if (!isLoading && isAuthenticad) {
      fetch('http://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((data) => setProfile(data))
    }
  }, [isLoading, isAuthenticad])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>{isAuthenticad ? 'authenticaded' : 'Not authenticated'}</h1>
      {isAuthenticad ? (
        <>
          {profile ? (
            <section>
              <h1>{profile.name}</h1>
              <h2>{profile.email}</h2>
              <h2>{profile.phone}</h2>
              <h2>{profile.website}</h2>
              <ul>
                <li>{profile.company.name}</li>
                <li>{profile.company.catchPhrase}</li>
                <li>{profile.company.bs}</li>
              </ul>
              <ul>
                <li>{profile.address.street}</li>
                <li>{profile.address.suite}</li>
                <li>{profile.address.city}</li>
                <li>{profile.address.zipcode}</li>
                <ul>
                  <li>{profile.address.geo.lat}</li>
                  <li>{profile.address.geo.lng}</li>
                </ul>
              </ul>
            </section>
          ) : (
            <h1>Loading</h1>
          )}
        </>
      ) : (
        <h1>Login before...</h1>
      )}
    </>
  )
}

export default Home
