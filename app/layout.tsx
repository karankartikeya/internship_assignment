import { MyUserContextProvider } from '@/utils/useUser'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from './provider'
import { NextSeo } from 'next-seo'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider>
      <MyUserContextProvider>
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <meta title='Jet Protocol' />
          </head>
          <body className={inter.className}>{children}</body>
        </html>
      </MyUserContextProvider>
    </Provider>
  )
}
