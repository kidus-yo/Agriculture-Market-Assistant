import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/css-files/index.css'
import './assets/css-files/background.css'
import './assets/css-files/welcome.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="aura-bg">
        <div className="aura-layer-1" />
        <div className="aura-layer-2" />
        <div className="aura-content">
          <App />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)