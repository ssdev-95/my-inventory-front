import '../styles/globals.css'
import { AddProductModalProvider } from '../contexts/AddProductModalContext';

function MyApp({ Component, pageProps }) {
  return (
    <AddProductModalProvider>
      <Component {...pageProps} />
    </ AddProductModalProvider>
  )
}

export default MyApp
