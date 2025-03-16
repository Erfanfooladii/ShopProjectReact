import PropTypes from 'prop-types';
import Stars from '../../../../Components/Stars';
import './style.css';
import { getProductId } from '../../../../utils/fetchProducts';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../Features/cartData';
import { toast } from 'react-toastify';
const ListItem = ({ id }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const dispatch = useDispatch();

  const getApi = async (id) => {
    try {
      const productData = await getProductId(id);
      setData(productData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const remvoeHadneler = () => {
    dispatch(removeFromCart(data));
    toast.error('Remove item form cart!');
  };
  useEffect(() => {
    setIsLoading(true);
    getApi(id);
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const roundedPrice = Math.round(data.price);

  return (
    <li className="cart__list--item">
      <div className="cart__list-image">
        <img
          className="cart__list-img"
          src={data.images?.[0]}
          alt="image product"
        />
      </div>
      <div className="cart__list-details">
        <h1 className="cart__list-name">{data.name || 'Product Name'}</h1>
        <h2 className="cart__list-category">Category: {data.category?.name}</h2>
        <span className="cart__list-price">Price: {roundedPrice}$</span>
        <Stars value={5} />
      </div>
      <button onClick={remvoeHadneler} className="cart__button-remove">
        Remove from cart
      </button>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ListItem;
