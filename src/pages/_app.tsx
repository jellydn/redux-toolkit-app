import {AppProps} from 'next/app'
import Head from 'next/head'

import '../App.css'
import '../index.css'

export default function MyApp({ Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>React Redux App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

