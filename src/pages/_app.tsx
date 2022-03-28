import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { GlobalCSS } from '../globals'

function MyApp({
  Component, pageProps: { session, ...pageProps }
}: AppProps) {
  return (
	  <SessionProvider session={session}>
		  <GlobalCSS />
	    <Component {...pageProps} />
		</SessionProvider>
	)
}

export default MyApp
