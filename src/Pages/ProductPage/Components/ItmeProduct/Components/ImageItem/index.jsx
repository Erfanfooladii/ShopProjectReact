import PropTypes from 'prop-types';
import './style.css';
import { useState } from 'react';
import Spinner from '../../../../../../Components/Spinner';

const ImageItem = ({ data, image }) => {
  const { name } = data;
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="product__item-image">
      <div className="product__item--loaded">
        {!imageLoaded && <Spinner size={60} className="loading__image" />}
        <img
          onLoad={() => setImageLoaded(true)}
          src={image[0]}
          className="product__item-img"
          alt={name}
        />
      </div>
    </div>
  );
};

ImageItem.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
  }),
  image: PropTypes.array,
};

export default ImageItem;
