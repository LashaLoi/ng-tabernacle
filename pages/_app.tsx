import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.css'
import Header from '../components/header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
