import Head from 'next/head'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <link rel='shortcut icon' type='image/x-icon' href='/logo.png'/>
    <title>TailNext Boilerplate</title>
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
