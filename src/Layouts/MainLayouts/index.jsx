import { Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import { GetApiContext } from '../../Contexts/getApiContext';
import Header from '../Header';
import HomePage from '../../Pages/Home';
import ProductPage from '../../Pages/ProductPage';
import Footer from '../Footer';
import Page404 from '../../Pages/404';
import { useContext, useEffect, useState } from 'react';

function MainLayouts() {
  const [validIds, setValidIds] = useState([]);
  const { dataApi } = useContext(GetApiContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (dataApi.productsData) {
      const listId = dataApi.productsData.map(item => item._id);
      setValidIds(listId);
    }
  }, [dataApi.productsData]);

  const isValidPath = validIds.includes(pathname.slice(1));
  const status = !isValidPath;

  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={<HomePage />} />
            <Route path='/:id' element={<ProductPage />} />
          <Route path='*' element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainLayouts;

