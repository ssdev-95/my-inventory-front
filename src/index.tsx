import React from 'react'
import ReactDOM from 'react-dom'

import { NavigationProvider } from 'src/contexts/NavigationContext'
import { ThemeProvider } from 'src/contexts/Theme'
import { AuthProvider } from 'src/contexts/AuthContext'
import { ProductProvider } from 'src/contexts/ProductContext'

import App from 'src/pages/App'

import 'src/globals.scss'

import reportWebVitals from 'src/pages/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <NavigationProvider>
      <AuthProvider>
        <ProductProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ProductProvider>
      </AuthProvider>
    </NavigationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
