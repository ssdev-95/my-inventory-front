import React from 'react'
import ReactDOM from 'react-dom'

import App from 'src/pages/App'
import 'src/globals.scss'

import reportWebVitals from 'src/pages/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
