'use client'

import Header from '@/layout/header'
import Home from '@/app/page'
import { AuthProvider, LoadingProvider } from '@/contexts'

const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js'
}

export const RootLayout = () => {
  return (
    <html lang="en">
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />
      <body>
        <AuthProvider>
          <LoadingProvider>
            <main>
              <Header />
              <Home />
            </main>
          </LoadingProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
