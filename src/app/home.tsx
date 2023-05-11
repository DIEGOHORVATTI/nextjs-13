/*
  Exemplo de uma requisição do lado do servidor
 */

'use client'

import { useAuth } from '@/contexts'

const Home = async () => {
  const { isAuthenticad } = useAuth()

  let profile

  if (isAuthenticad) {
    profile = await fetch('http://jsonplaceholder.typicode.com/users/1').then(
      (response) => response.json()
    )
  }

  return (
    <>
      <h1>{isAuthenticad ? 'authenticaded' : 'Not authenticated'}</h1>
      {isAuthenticad && (
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
      )}
    </>
  )
}

export default Home
