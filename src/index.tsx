import React from 'react'
import ReactDOM from 'react-dom'

import { NavigationProvider } from 'src/contexts/NavigationContext'
import { ThemeProvider } from 'src/contexts/Theme'
import App from 'src/pages/App'

import 'src/globals.scss'

import reportWebVitals from 'src/pages/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
