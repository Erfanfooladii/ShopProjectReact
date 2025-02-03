import PropTypes from 'prop-types';
import './style.css';

const ImageItem = ({ data, image }) => {
  const { images = [], name } = data;
  const imageIndex = image ? 0 : 1;

  if (imageIndex < images.length) {
    return (
      <div className="product__item-image">
        <img
          src={images[imageIndex]}
          className="product__item-img"
          alt={name}
        />
      </div>
    );
  }

  return null;
};

ImageItem.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.element.isRequired,
};

export default ImageItem;
