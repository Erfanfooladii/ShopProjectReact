import './App.css'
import Header from './Components/Header/Header'
import ProductPage from './Components/Pages/Prducts/ProductPage'
import { CategoryProvider } from './contexts/categoryContext'

function App() {
  return (
    <>
      <CategoryProvider>
        <Header/>
        <ProductPage/>
      </CategoryProvider>
    </>
  )
}

export default App
