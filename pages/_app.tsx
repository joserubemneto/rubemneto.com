import { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { globalStyles } from '../styles/theme/stitches.config'

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
