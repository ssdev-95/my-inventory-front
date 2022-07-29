import React from 'react'
import ReactDOM from 'react-dom/client'
import eruda from 'eruda'
import { App } from './App'
import './globals.css'

if(
  !!document &&
	window.innerWidth <= 860 &&
	import.meta.env.DEV
) {
  eruda.init()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
