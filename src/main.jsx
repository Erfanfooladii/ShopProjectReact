import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'normalize.css'
import { BrowserRouter } from 'react-router-dom'
import MainLayouts from './Layouts/MainLayouts'
import { GetApiProvider } from './Contexts/getApiContext'
import { SearchProvider } from './Contexts/searchContext'
import { CartProvider } from './Contexts/cartContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GetApiProvider>
        <SearchProvider>
          <CartProvider>
            <MainLayouts />
          </CartProvider>
        </SearchProvider>
      </GetApiProvider>
    </BrowserRouter>
  </StrictMode>
)
  