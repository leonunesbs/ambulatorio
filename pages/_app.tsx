// eslint-disable-next-line no-use-before-define
import React from 'react'
import { AppProps } from 'next/app'
import ThemeProvider from '../context/ThemeProvider'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
