import { getProductId } from '../../utils/fetchProducts';
import './style.css';
import { useEffect, useState } from 'react';
const CartPage = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const getApi = async (id) => {
    setIsLoading(true);
    try {
      const data = await getProductId(id);
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getApi();
    document.title = 'Cart';
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="cart __global-container">
      <h1 className="cart__title">Cart list</h1>
      <div className="cart__content">
        <div className="cart__total">
          <h2 className="cart__total--price">222$</h2>
          <h2 className="cart__total--product">23</h2>
        </div>
        <ul className="cart__list">
          <li className="cart__list--item">
            <h1 className="cart__list-name">{data?.name}</h1>
            <div className=""></div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CartPage;
