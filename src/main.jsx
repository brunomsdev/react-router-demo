import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

createRoot(document.getElementById('root')).render(

<StrictMode>
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
</StrictMode>

)
