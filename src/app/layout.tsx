import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/custom/ThemeProvider'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dailywaterintake.org'),
  title: {
    default: 'Water Calculator',
    template: '%s | Water Calculator',
  },
  description: 'Calculate the amount of water you should be drinking a day.',
  keywords: [
    'daily',
    'water',
    'intake',
    'calculator',
    'consumption',
    'recommendations',
    'drinking',
    'enough',
  ],
  openGraph: {
    title: 'Water Calculator',
    description: 'Calculate the amount of water you should be drinking a day.',
    url: 'https://www.dailywaterintake.org',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Water Calculator',
    description: 'Calculate the amount of water you should be drinking a day.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta content="ca-pub-9742468069936848" name="google-adsense-account" />
        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9742468069936848"
        ></script>
      </head>
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

      <body className={`${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
