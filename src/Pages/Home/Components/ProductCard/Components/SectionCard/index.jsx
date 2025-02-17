import './style.css';
import Stars from '../../../../../../Components/Stars';
import PropTypes from 'prop-types';

export const SectionCard = ({ category, productName, productPrice }) => {
  return (
    <div className="card__section">
      <h1 className="card__section__category">{category}</h1>
      <h2 className="card__section__name">{productName}</h2>
      <span className="card__section__price">
        ${productPrice} <small className="card__body__price--off">$99</small>
      </span>
      <Stars value={4} />
    </div>
  );
};

SectionCard.propTypes = {
  category: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};
