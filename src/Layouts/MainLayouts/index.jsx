import { Route, Routes } from 'react-router-dom'
import './index.css'
import { GetApiProvider } from '../../Contexts/getApiContext'
import { SearchProvider } from '../../Contexts/searchContext'
import Header from '../Header'
import HomePage from '../../Pages/Home'
import ProductPage from '../../Pages/ProductPage'
import Footer from '../Footer'

function MainLayouts() {
  return (
    <GetApiProvider>
        <SearchProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/:id' element={<ProductPage/>} />
          </Routes>
          <Footer/>
        </SearchProvider>
      </GetApiProvider>
  )
}

export default MainLayouts;