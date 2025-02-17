import PropTypes from 'prop-types';
import './style.css';

const Spinner = ({ size = 50 }) => {
  return <div className="spinner" style={{ width: size, height: size }}></div>;
};

Spinner.propTypes = {
  size: PropTypes.number,
};

export default Spinner;
