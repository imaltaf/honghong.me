import Document, { Head, Html, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-TW" className="scroll-smooth">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=JetBrains+Mono:wght@500;700&family=Noto+Sans+TC:wght@500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#373737" />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="小康" />
          <meta name="application-name" content="小康" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body className="bg-body text-typeface-primary dark:bg-body-dark dark:text-typeface-primary-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
