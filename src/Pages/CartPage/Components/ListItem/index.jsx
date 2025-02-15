import PropTypes from 'prop-types';
import Stars from '../../../../Components/Stars';
import './style.css';
import { getProductId } from '../../../../utils/fetchProducts';
import { useEffect, useMemo, useState } from 'react';

const ListItem = ({ id }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const roundedPrice = useMemo(() => Math.round(data.price), [data.price]);
  const getApi = async (id) => {
    try {
      const data = await getProductId(id);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getApi(id);
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <li className="cart__list--item">
      <div className="cart__list-image">
        <img
          className="cart__list-img"
          src={data.images && data.images[0]}
          alt="image product"
        />
      </div>
      <div className="cart__list-details">
        <h1 className="cart__list-name">{data.name}</h1>
        <h2 className="cart__list-category">Category: {data.category?.name}</h2>
        <span className="cart__list-price">Price: {roundedPrice}$</span>
        <Stars value={3} />
      </div>
      <button className="cart__button-remove">Remove from cart</button>
    </li>
  );
};
ListItem.propTypes = {
  id: PropTypes.string.isRequired,
};
export default ListItem;
