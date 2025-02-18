import './style.css';
import { useEffect } from 'react';
import ListItem from './Components/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../../Features/cartData';

const CartPage = () => {
  const dispatch = useDispatch();
  const productCart = useSelector((state) => state.data.cartData);

  const listIdCart = productCart.map((item) => item._id);
  const numberCart = productCart.length;
  const totalPriceCart = Math.round(
    productCart.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0),
  );

  useEffect(() => {
    document.title = 'Cart';
  }, []);
  return (
    <div className="cart __global-container">
      <div className="cart__content">
        <div className="cart__details">
          <h1 className="cart__title">Cart list</h1>
          <h2 className="cart__total--price">Total price: {totalPriceCart}$</h2>
          <h2 className="cart__total--product">Total products: {numberCart}</h2>
          <button
            onClick={() => dispatch(emptyCart())}
            className="cart__button-all-remove"
          >
            Remove All
          </button>
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
