import '../styles/globals.css'

import { ThemeProvider } from '../contexts/Theme'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
