import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config'

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="Rubem Neto" name="author" />
          <meta property="og:type" content="website" />
          <meta name="theme-color" content="#08070b" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <link
            rel="icon"
            href="/favicon.svg"
            sizes="any"
            type="image/svg+xml"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}
