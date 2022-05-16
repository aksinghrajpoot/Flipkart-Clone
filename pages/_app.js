import Head from 'next/head'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <link rel='shortcut icon' type='image/x-icon' href='/logo.jpg'/>
    <title>Flipkart Shopping Website</title>
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
