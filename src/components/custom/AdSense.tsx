import Script from 'next/script'

type AdSenseProps = {
  pid: string
}

export const AdSense = ({ pid }: AdSenseProps) => {
  return (
    <Script
      async
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pid}`}
      strategy="afterInteractive"
    />
  )
}
