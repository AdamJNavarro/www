import * as React from "react"

import Head from "next/head"

export default function MetaWrapper({ children }: any) {
  return (
    <React.Fragment>
      <Head>
        <link rel="apple-touch-icon" sizes="398x398" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#4b24b0" />
      </Head>
      {children}
    </React.Fragment>
  )
}
