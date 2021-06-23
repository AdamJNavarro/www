import Document, { Head, Html, Main, NextScript } from "next/document";

import React from "react";

export default class MyDocument extends Document {
  /*static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  } */

  render() {
    return (
      <Html
        className="dark:bg-black dark:bg-opacity-100"
        //className="text-base antialiased bg-gray-300 bg-opacity-5 dark:bg-gray-1000 dark:bg-opacity-100"
        lang="en"
      >
        <Head></Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
