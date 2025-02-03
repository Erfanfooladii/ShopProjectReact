import './style.css';
import Stars from '../../../../../../Components/Stars';
import PropTypes from 'prop-types';

const ReviewItem = ({ data }) => {
  return (
    <div className="product__reviews">
      <div className="product__reviews-stars">
        <Stars value={data.rating} />
      </div>
      <p className="product__reviews-title">
        {data.reviewCount} Review(s) | Add your review
      </p>
    </div>
  );
};

ReviewItem.propTypes = {
  data: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReviewItem;
