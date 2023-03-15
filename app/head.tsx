// HTTP HEAD ELEMENT (METADATA FOR PAGES)
import Script from 'next/script'

export default function Head() {


  return (
    <>
      <title>Trip&Code</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon-32x32.png" />
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_TRACKING_ID}`}
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', '${process.env.NEXT_PUBLIC_GA4_TRACKING_ID}');
        `}

      </Script>
    </>
  )
}
