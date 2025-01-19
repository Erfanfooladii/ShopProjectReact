import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'normalize.css'
import { BrowserRouter } from 'react-router-dom'
import MainLayouts from './Layouts/MainLayouts'
import { GetApiProvider } from './Contexts/getApiContext'
import { SearchProvider } from './Contexts/searchContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GetApiProvider>
        <SearchProvider>
          <MainLayouts />
        </SearchProvider>
      </GetApiProvider>
    </BrowserRouter>
  </StrictMode>
)
