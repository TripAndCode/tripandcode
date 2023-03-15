// HTTP HEAD ELEMENT (METADATA FOR PAGES)

export default function Head() {

  return (
    <>
      <title>Trip&Code</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {/* <!-- Google tag (gtag.js) --> */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_TRACKING_ID}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA4_TRACKING_ID}');
          `,
        }}
      />
    </>
  )
}
