import PropTypes from 'prop-types';
import './style.css';
const CategoryItem = ({ data }) => {
  return (
    <div className="product__category">CATEGORY: {data?.category?.name}</div>
  );
};
CategoryItem.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};
export default CategoryItem;
