import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'

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
      {/* Vercel analytics */}
      <Analytics />
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-CE5KD70FXZ`}
        strategy="afterInteractive"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CE5KD70FXZ');`,
        }}
        id="gtag-init"
        strategy="lazyOnload"
      />
      {/* Google Ads */}
      <Script
        async
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9742468069936848"
      />
      <body className={`${spaceGrotesk.variable} antialiased`}>{children}</body>
    </html>
  )
}
