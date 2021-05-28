import "~/styles/tailwind.css"
import "~/styles/prose.css"

import * as Fathom from "fathom-client"

import MetaWrapper from "~/components/layout/MetaWrapper"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Fathom.load("TOSBYDZC", {
      includedDomains: ["adamjnavarro.com"],
      excludedDomains: ["localhost", "now.sh"],
    })
  }, [])

  return (
    <MetaWrapper>
      <Component {...pageProps} />
    </MetaWrapper>
  )
}

export default MyApp
