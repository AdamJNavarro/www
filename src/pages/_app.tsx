import "~/styles/tailwind.css"
import "~/styles/prose.css"

import * as Fathom from "fathom-client"

import MetaWrapper from "~/components/layout/MetaWrapper"
import { useEffect } from "react"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    Fathom.load("FQERWMZR", {
      includedDomains: ["adamjnavarro.com"],
      excludedDomains: ["localhost", "now.sh"],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete)
    }
  }, [])

  return (
    <MetaWrapper>
      <Component {...pageProps} />
    </MetaWrapper>
  )
}

export default MyApp
