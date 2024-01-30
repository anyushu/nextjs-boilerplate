import '@/styles/globals.css'
import { Noto_Sans_JP as FontSans } from 'next/font/google'

import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Next.js boilerplate',
  description: 'Generated by Next.js'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans'
  })
  return (
    <html lang="ja">
      <body className={cn('font-sans antialiased', fontSans.variable)}>{children}</body>
    </html>
  )
}

export default RootLayout
