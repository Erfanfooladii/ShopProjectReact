import './style.css';
import Stars from '../../../../../../Components/Stars';
import PropTypes from 'prop-types';

const ReviewItem = ({ data }) => {
  const reviewCount = data.reviewCount !== undefined ? data.reviewCount : 0;

  return (
    <div className="product__reviews">
      <div className="product__reviews-stars">
        <Stars value={data.rating} />
      </div>
      <p className="product__reviews-title">
        {reviewCount} Review(s) | Add your review
      </p>
    </div>
  );
};

ReviewItem.propTypes = {
  data: PropTypes.shape({
    rating: PropTypes.number,
    reviewCount: PropTypes.number,
  }).isRequired,
};

export default ReviewItem;
