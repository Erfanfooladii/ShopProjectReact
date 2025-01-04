import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'normalize.css'
import { BrowserRouter } from 'react-router-dom'
import MainLayouts from './Layouts/MainLayouts'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayouts />
    </BrowserRouter>
  </StrictMode>
)
