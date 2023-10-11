import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/lib/nav/nav'
import ReduxProvider from './redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'cool app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <ReduxProvider>
        {children}
        </ReduxProvider>
        </body>
    </html>
  )
}
