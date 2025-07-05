import { StrictMode } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/w3.css'

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
)
