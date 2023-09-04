import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

const inter = Nunito_Sans({ subsets: ['latin'], weight: ['300', '400', '600', '800'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
