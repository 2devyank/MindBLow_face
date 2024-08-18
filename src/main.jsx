import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-chatbot-kit/build/main.css'
import PsychdataContext from './context/PsychContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PsychdataContext>
    <App />
    </PsychdataContext>
  </React.StrictMode>,
)
