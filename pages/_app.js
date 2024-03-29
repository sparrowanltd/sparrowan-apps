import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import 'swiper/swiper.min.css';
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react';
import NextNProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <NextNProgress color="#FF6B00" />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
