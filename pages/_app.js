import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider  enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )


}
