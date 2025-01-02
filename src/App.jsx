import { Route, Routes } from 'react-router-dom'
import './App.css'
import { GetApiProvider } from './Contexts/getApiContext'
import { SearchProvider } from './Contexts/searchContext'
import Header from './Layouts/Header'
import HomePage from './Pages/Home'

function App() {
  return (
    <>
      <GetApiProvider>
        <SearchProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
          </Routes>
        </SearchProvider>
      </GetApiProvider>
    </>
  )
}

export default App
