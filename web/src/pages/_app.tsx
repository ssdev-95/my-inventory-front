import '../styles/globals.css'
import { AddProductModalProvider } from '../contexts/AddProductModalContext';
import { ContactModalProvider } from '../contexts/ContactModalContext';
import { LoginModalProvider } from '../contexts/LoginModalContext';

function MyApp({ Component, pageProps }) {
  return (
    <LoginModalProvider>
      <ContactModalProvider>
        <AddProductModalProvider>
          <Component {...pageProps} />
        </ AddProductModalProvider>
      </ContactModalProvider>
    </LoginModalProvider>
  )
}

export default MyApp
