import { AppProps } from 'next/app'
import { Layout } from '../components/Layout'

import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
