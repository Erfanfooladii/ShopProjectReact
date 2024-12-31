import { Route, Routes } from 'react-router-dom'
import './App.css'
import { CategoryProvider } from './contexts/categoryContext'
import { GetApiProvider } from './contexts/getApiContext'
import { PaginationProvider } from './contexts/paginationContext'
import { SearchProvider } from './contexts/searchContext'
import { ShowPageProvider } from './contexts/showPageContext'
import Header from './Layouts/Header'
import HomePage from './Pages/Home'

function App() {
  return (
    <>
      <CategoryProvider>
        <ShowPageProvider>
          <PaginationProvider>
            <GetApiProvider>
              <SearchProvider>
                <Header/>
                <Routes>
                  <Route path='/' element={<HomePage/>} />
                </Routes>
              </SearchProvider>
            </GetApiProvider>
          </PaginationProvider>
        </ShowPageProvider>
      </CategoryProvider>
    </>
  )
}

export default App
