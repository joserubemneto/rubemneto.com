import { AppProps } from 'next/app'
import { Layout } from '../components/Layout'

import '../styles/global.css'

import { Poppins, Inter } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '600',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['700', '600', '400', '300'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} ${inter.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
