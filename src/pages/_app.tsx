import "../styles/tailwind.css"
import "../styles/prose.css"

import MetaWrapper from "../components/layout/MetaWrapper"

function MyApp({ Component, pageProps }) {
  return (
    <MetaWrapper>
      <Component {...pageProps} />
    </MetaWrapper>
  )
}

export default MyApp
