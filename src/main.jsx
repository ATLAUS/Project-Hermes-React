import ReactDOM from 'react-dom/client'
import { createContext, useState } from 'react'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-wfrnzblw5rylyqxk.us.auth0.com"
    clientId="HZ3nBT1D3gZsller6vHzO0k4K9NS73UX"
    authorizationParams={{
      redirect_uri:
        import.meta.env.VITE_REDIRECT_URI || 'http://localhost:5173/dashboard',
      audience: import.meta.env.VITE_AUDIENCE || 'http://localhost:3000/'
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
)
