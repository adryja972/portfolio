import '../style/index.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
config.autoAddCss = false

export default function MyApp({ Component, pageProps:  { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}
