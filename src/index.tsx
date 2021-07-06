import React from 'react'
import ReactDOM from 'react-dom'

import { NavigationProvider } from 'src/contexts/NavigationContext'
import { ThemeProvider } from 'src/contexts/Theme'
import { AuthProvider } from 'src/contexts/AuthContext'
import App from 'src/pages/App'

import 'src/globals.scss'

import reportWebVitals from 'src/pages/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <NavigationProvider>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </NavigationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
