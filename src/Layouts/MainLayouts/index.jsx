import { Route, Routes } from 'react-router-dom';
import './index.css';
//import { GetApiContext } from '../../Contexts/getApiContext';
import Header from '../Header';
import HomePage from '../../Pages/Home';
import ProductPage from '../../Pages/ProductPage';
import Footer from '../Footer';
import Page404 from '../../Pages/404';
//import { useContext, useEffect, useState } from 'react';
import CartPage from '../../Pages/CartPage';
import { ToastContainer } from 'react-toastify';
import LoginPage from '../../Pages/AuthPages/LoginPage';

function MainLayouts() {
  //const [validIds, setValidIds] = useState([]);
  //const { dataApi } = useContext(GetApiContext);
  //const { pathname } = useLocation();

  /* useEffect(() => {
    if (dataApi.productsData) {
      const listId = dataApi.productsData.map((item) => item._id);
      setValidIds(listId);
    }
  }, [dataApi.productsData]); */

  //const isValidPath = validIds.includes(pathname.slice(1));
  //const status = !isValidPath;

  return (
    <>
      <Header />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MainLayouts;
