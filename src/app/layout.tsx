import './globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { env } from '@/env'

export const metadata: Metadata = {
  title: {
    template: '%s | Juliano Sill',
    default: 'Juliano Sill | Desenvolvedor Front-End',
  },
  description:
    'Desenvolvedor Front-End com foco em Typescript, React, Next.js e Node.js.',
  metadataBase: new URL(env.APP_URL),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-500 scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
