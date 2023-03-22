import type { AppProps } from 'next/app'
import '@/assets/scss/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
