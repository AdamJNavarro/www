import * as React from "react"

import { DefaultSeo } from "next-seo"
import Head from "next/head"
import { defaultSEO } from "~/config/seo"

export default function MetaWrapper({ children }: any) {
  return (
    <React.Fragment>
      <DefaultSeo {...defaultSEO} />
      <Head>
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/site.webmanifest" rel="manifest" />
        <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#4b24b0" name="theme-color" />
      </Head>
      {children}
    </React.Fragment>
  )
}
