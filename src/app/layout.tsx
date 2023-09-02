import './globals.css'
import 'swiper/css'
import 'swiper/css/pagination'

import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import { ActiveLinkProvider } from '@/contexts/ActiveLinkContext'

export const metadata = {
  title: "Click's",
  description: 'Estúdio de fotografia profissional',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`bg-clicksUI-gray-800 ${inter.className}`}>
        <ActiveLinkProvider>{children}</ActiveLinkProvider>
      </body>
    </html>
  )
}
