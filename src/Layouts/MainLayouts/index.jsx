import { Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Header from '../Header';
import HomePage from '../../Pages/Home';
import ProductPage from '../../Pages/ProductPage';
import Footer from '../Footer';
import Page404 from '../../Pages/404';
import CartPage from '../../Pages/CartPage';
import { ToastContainer } from 'react-toastify';
import LoginPage from '../../Pages/AuthPages/LoginPage';
import PrivateRoute from '../../Pages/AuthPages/PrivateRoute';
import { useContext, useEffect, useState } from 'react';
import RegisterPage from '../../Pages/AuthPages/RegisterPage';
import Menu from '../Menu';
import { CategoryContext } from '../../Contexts/categoryContext';

function MainLayouts() {
  const [auth, setAuth] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const { setCategory } = useContext(CategoryContext);
  const { pathname } = useLocation();
  const validRoutes = ['/', '/login', '/register', '/cart'];
  useEffect(() => {
    const statusToken = typeof localStorage.getItem('token') === 'string';
    setAuth(statusToken);
  }, [auth]);
  const objectIdRegex = /^[0-9a-fA-F]{24}$/;
  const isRouteValid =
    validRoutes.includes(pathname) || objectIdRegex.test(pathname.slice(1));
  return (
    <>
      <Header
        funcHandeleMenu={() => setIsMenu(!isMenu)}
        setAuth={setAuth}
        auth={auth}
      />
      <Menu setCategory={setCategory} isMenu={isMenu} />
      <ToastContainer position="bottom-left" />
      <Routes>
        {!isRouteValid ? (
          <Route path="*" element={<Page404 />} />
        ) : (
          <>
            <Route path="/" element={<HomePage isMenu={isMenu} />} />
            <Route path="/:id" element={<ProductPage auth={auth} />} />
            <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
            <Route
              path="/register"
              element={<RegisterPage setAuth={setAuth} />}
            />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <CartPage />
                </PrivateRoute>
              }
            />
          </>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default MainLayouts;
