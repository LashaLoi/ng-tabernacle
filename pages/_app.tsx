import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import 'antd/dist/antd.css'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
