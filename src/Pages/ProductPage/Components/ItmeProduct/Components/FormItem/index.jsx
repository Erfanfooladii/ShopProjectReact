import { useEffect, useState } from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../../../../Features/cartData';

const FormItem = ({ data }) => {
  const [isAdd, setIsAdd] = useState(false);
  const cartRducser = useSelector((state) => state.data.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    const isProductCart = cartRducser.some((item) => item._id === data._id);
    setIsAdd(isProductCart);
  }, []);

  const handleFormData = (e) => {
    e.preventDefault();
    if (isAdd) {
      setIsAdd(false);
      dispatch(removeFromCart(data));
      toast.error('Removed from cart');
    } else {
      toast.success('Added to cart');
      setIsAdd(true);
      dispatch(addToCart(data));
    }
  };

  return (
    <form className="product__form" onSubmit={handleFormData}>
      <div className="product__options">
        <div className="product__options_container">
          <label className="product__options--label" htmlFor="size_product">
            size
          </label>
          <select id="size_product" className="product__option--size">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="product__options_container">
          <label className="product__options--label" htmlFor="color_product">
            color
          </label>
          <select id="color_product" className="product__option--color">
            <option value="1">Red</option>
            <option value="2">Green</option>
            <option value="3">Black</option>
          </select>
        </div>
      </div>
      <div className="product__buy">
        <div className="product__buy--quantity">
          <label className="product__buy--quantity-label">Qty</label>
          <input
            type="number"
            className="product__buy--quantity-input"
            min="1"
          />
        </div>
        <button type="submit" className="product__buy--button">
          {isAdd ? 'Remove from cart' : 'Add to cart'}
        </button>
      </div>
    </form>
  );
};

FormItem.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
  }),
};

export default FormItem;
