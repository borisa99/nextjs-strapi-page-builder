import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <div className="layout-container min-h-screen">
        <Component {...pageProps} />
      </div>
    </div>
  )
}
