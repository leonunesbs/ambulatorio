// eslint-disable-next-line no-use-before-define
import React from 'react'
import { AppProps } from 'next/app'
import ThemeProvider from '../context/ThemeProvider'
import { HotKeys } from 'react-hotkeys'

const keyMap = {
  LEFT: 'left',
  RIGHT: 'right'
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <HotKeys keyMap={keyMap}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </HotKeys>
  )
}
export default MyApp
