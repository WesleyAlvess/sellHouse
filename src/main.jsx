import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import Router
import { BrowserRouter } from 'react-router-dom'
// import house context provider
import HouseContextProvider from './components/HouseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HouseContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </HouseContextProvider>
)
