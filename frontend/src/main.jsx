// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StoreContextProvider } from './context/Storecontext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictM>
  <StoreContextProvider value={null}>
    <App />
  {/* // </StrictM/ode>, */}
  </StoreContextProvider>
)
