import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ProductsProvider } from "../contexts"
import { GlobalCSS } from '../globals'

function MyApp({
  Component, pageProps: { session, ...pageProps }
}: AppProps) {
  return (
	  <SessionProvider session={session}>
		 <ProductsProvider>
	    <GlobalCSS />
	    <Component {...pageProps} />
		 </ProductsProvider>
		</SessionProvider>
	)
}

export default MyApp
