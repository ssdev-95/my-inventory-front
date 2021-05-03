import '../styles/globals.css'
import Head from 'next/head'

import { ThemeProvider } from '../contexts/Theme'
import { AddProductModalProvider } from '../contexts/AddProductModalContext'
import { EditModalProvider } from '../contexts/EditModalContext'
import { ContactModalProvider } from '../contexts/ContactModalContext'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Head>
				<meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<AddProductModalProvider>
				<EditModalProvider>
					<ContactModalProvider>
						<Component {...pageProps} />
					</ContactModalProvider>
				</EditModalProvider>
			</AddProductModalProvider>
		</ThemeProvider>
	)
}

export default MyApp
