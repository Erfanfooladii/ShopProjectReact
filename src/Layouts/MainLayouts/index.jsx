import { Route, Routes } from 'react-router-dom'
import './index.css'
import { GetApiProvider } from '../../Contexts/getApiContext'
import { SearchProvider } from '../../Contexts/searchContext'
import Header from '../Header'
import HomePage from '../../Pages/Home'

function MainLayouts() {
  return (
    <GetApiProvider>
        <SearchProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
          </Routes>
        </SearchProvider>
      </GetApiProvider>
  )
}

export default MainLayouts;