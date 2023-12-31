import './globals.css'
import type { Metadata } from 'next'
import { SkeletonTheme } from 'react-loading-skeleton'
import { Nunito_Sans } from 'next/font/google'
import { Header } from '@/components/Header/Header'
import { CountryProvider } from '@/context/CountryContext'

const inter = Nunito_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '800'] })

export const metadata: Metadata = {
  title: 'Countries app - busca y obtén información sobre tu país.',
  description: 'App para buscar información sobre todos los paices del mundo.',
  creator: 'Rubert Gonzalez'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SkeletonTheme baseColor="#c2c2c2" highlightColor="#9b9b9b">
          <Header />
          <main
            className='max-w-6xl px-4 m-auto mb-16'
          >
            <CountryProvider>
              {children}
            </CountryProvider>
          </main>
        </SkeletonTheme>
      </body>
    </html>
  )
}
