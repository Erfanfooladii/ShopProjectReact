import PropTypes from 'prop-types';
import './style.css';
import { useMemo } from 'react';

const PriceItem = ({ data }) => {
  const roundedPrice = useMemo(() => Math.round(data.price), [data.price]);

  return (
    <div className="product__price">
      <p className="product__price--original">${roundedPrice}</p>
      <p className="product__price--discounted">${data.discountedPrice}</p>
      <p className="product__price--stock">IN STOCK</p>
    </div>
  );
};

PriceItem.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number,
    discountedPrice: PropTypes.number,
  }),
};

export default PriceItem;
