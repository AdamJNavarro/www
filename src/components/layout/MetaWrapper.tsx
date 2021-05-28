import * as React from "react"

import Head from "next/head"

export default function MetaWrapper({ children }: any) {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#4b24b0" />
      </Head>
      <FathomAnalytics />
      {children}
    </React.Fragment>
  )
}

function FathomAnalytics() {
  React.useEffect(() => {
    const tracker = window.document.createElement("script")
    const firstScript = window.document.getElementsByTagName("script")[0]
    tracker.defer = true
    tracker.setAttribute("site", "TOSBYDZC")
    tracker.setAttribute("spa", "auto")
    tracker.setAttribute("excluded-domains", "localhost,now.sh")
    tracker.setAttribute("included-domains", "adamjnavarro.com")
    tracker.src = "https://cdn.usefathom.com/script.js"
    firstScript.parentNode.insertBefore(tracker, firstScript)
  })

  return null
}
