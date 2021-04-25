import '../styles/globals.css'

import { ThemeProvider } from '../contexts/Theme'
import { AddProductModalProvider } from '../contexts/AddProductModalContext'
import { EditModalProvider } from '../contexts/EditModalContext'
import { ContactModalProvider } from '../contexts/ContactModalContext'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
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
