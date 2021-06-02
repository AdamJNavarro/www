import * as React from "react"

import { DefaultSeo } from "next-seo"
import Head from "next/head"
import { defaultSEO } from "~/config/seo"

export default function MetaWrapper({ children }: any) {
  return (
    <React.Fragment>
      <DefaultSeo {...defaultSEO} />
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#4b24b0" />
      </Head>
      {children}
    </React.Fragment>
  )
}
