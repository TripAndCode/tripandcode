// HTTP HEAD ELEMENT (METADATA FOR PAGES)
"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script'
import { useEffect } from 'react';
import * as gtag from "../lib/gtag";

export default function Head() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    const url = pathname + searchParams.toString()
    gtag.pageview(url)
  }, [pathname, searchParams])
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
