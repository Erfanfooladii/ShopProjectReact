import './style.css';
import { useEffect } from 'react';
import ListItem from './Components/ListItem';

const CartPage = () => {
  const productCart = JSON.parse(localStorage.getItem('cart'));
  const listIdCart = productCart.map((item) => item._id);
  useEffect(() => {
    document.title = 'Cart';
  }, []);
  return (
    <div className="cart __global-container">
      <div className="cart__content">
        <div className="cart__details">
          <h1 className="cart__title">Cart list</h1>
          <h2 className="cart__total--price">Total price: 222$</h2>
          <h2 className="cart__total--product">Total products: 23</h2>
          <button className="cart__button-all-remove">Remove All</button>
        </div>
        <ul className="cart__list">
          {listIdCart.length > 0 ? (
            listIdCart.map((id) => {
              return <ListItem key={id} id={id} />;
            })
          ) : (
            <h2 className="cart_title-empty">Shopping cart is empty.</h2>
          )}
        </ul>
      </div>
    </div>
  );
};
export default CartPage;
