import './style.css';
import Star from './star/Star';
import PropTypes from 'prop-types';

const Stars = ({ value }) => {
  const stars = Array.from({ length: value }, (_, index) => (
    <Star key={index} />
  ));
  return <div className="stars">{stars}</div>;
};

Stars.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Stars;
