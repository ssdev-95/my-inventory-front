import '../styles/globals.css'
import { AddProductModalProvider } from '../contexts/AddProductModalContext';
import { ContactModalProvider } from '../contexts/ContactModalContext';

function MyApp({ Component, pageProps }) {
  return (
    <ContactModalProvider>
      <AddProductModalProvider>
        <Component {...pageProps} />
      </ AddProductModalProvider>
    </ContactModalProvider>
  )
}

export default MyApp
