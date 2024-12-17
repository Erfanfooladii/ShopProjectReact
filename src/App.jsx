import './App.css'
import Header from './Components/Header/Header'
import ProductPage from './Components/Pages/Prducts/ProductPage'
import { CategoryProvider } from './contexts/categoryContext'
import { ShowPageProvider } from './contexts/showPageContext'

function App() {
  return (
    <>
      <CategoryProvider>
        <ShowPageProvider>
          <Header/>
          <ProductPage/>
        </ShowPageProvider>
      </CategoryProvider>
    </>
  )
}

export default App
