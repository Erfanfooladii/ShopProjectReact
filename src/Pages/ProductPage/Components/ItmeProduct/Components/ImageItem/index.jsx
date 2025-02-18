import PropTypes from 'prop-types';
import './style.css';
import { useEffect, useState } from 'react';
import Spinner from '../../../../../../Components/Spinner';

const ImageItem = ({ data, image }) => {
  const { images = [], name } = data;
  const imageIndex = image ? 0 : 1;
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setImageLoaded(true);
  }, [image]);

  if (images.length > 0 && imageIndex < images.length) {
    return (
      <div className="product__item-image">
        <div className="product__item--loaded">
          {!imageLoaded && <Spinner size={60} className="loading__image" />}
          <img
            onLoad={() => setImageLoaded(true)}
            src={images[imageIndex]}
            className="product__item-img"
            alt={name}
          />
        </div>
      </div>
    );
  }

  return null;
};

ImageItem.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
  }),
  image: PropTypes.bool,
};

export default ImageItem;
