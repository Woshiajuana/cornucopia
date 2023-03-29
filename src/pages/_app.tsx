import type { AppProps } from 'next/app'
import { Layout } from '@/layouts'
import { setupNprogress } from '@/utils'
import '@/assets/scss/globals.scss'

// 设置loading
setupNprogress()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
