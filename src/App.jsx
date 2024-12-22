import './App.css'
import Header from './Components/Header/Header'
import { CategoryProvider } from './contexts/categoryContext'
import { GetApiProvider } from './contexts/getApiContext'
import { PaginationProvider } from './contexts/paginationContext'
import { ShowPageProvider } from './contexts/showPageContext'
import ProductPage from './Pages/Prducts/ProductPage'

function App() {
  return (
    <>
      <CategoryProvider>
        <ShowPageProvider>
          <PaginationProvider>
            <GetApiProvider>
              <Header/>
              <ProductPage/>
            </GetApiProvider>
          </PaginationProvider>
        </ShowPageProvider>
      </CategoryProvider>
    </>
  )
}

export default App
