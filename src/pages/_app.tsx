import type { AppProps } from 'next/app'
import { Layout } from '@/layouts'
import '@/assets/scss/globals.scss'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
