import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  )
}
