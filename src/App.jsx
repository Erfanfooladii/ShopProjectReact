import './App.css'
import { CategoryProvider } from './contexts/categoryContext'
import { GetApiProvider } from './contexts/getApiContext'
import { PaginationProvider } from './contexts/paginationContext'
import { ShowPageProvider } from './contexts/showPageContext'
import Header from './Layouts/Header'
import ProductPage from './Pages/Home'

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
