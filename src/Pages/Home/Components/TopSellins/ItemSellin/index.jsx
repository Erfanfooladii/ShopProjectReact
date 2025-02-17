import PropTypes from 'prop-types';
import './style.css';

const ItemSllin = ({ image, name, category, price }) => {
  return (
    <li className="itemSllin">
      <div className="itmeSllin__image-frame">
        <img className="itemSllin__image" src={image} alt={name} />
      </div>
      <div className="itemSllin__detail">
        <h2 className="itemSllin__detail__category">{category}</h2>
        <h3 className="itemSllin__detail__name">{name}</h3>
        <span className="itemSllin__detail__price">
          ${price.toFixed(2)}
          <small className="itemSllin__detail__price-off">$99</small>
        </span>
      </div>
    </li>
  );
};

ItemSllin.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemSllin;
