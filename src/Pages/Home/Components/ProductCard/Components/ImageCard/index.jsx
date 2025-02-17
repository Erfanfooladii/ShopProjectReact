import PropTypes from 'prop-types';
import Spinner from '../../../../../../Components/Spinner';
import './style.css';
import { useState, useEffect } from 'react';

export const ImageCard = ({ productImage, productName }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = productImage;
    img.onload = () => setImageLoaded(true);
  }, [productImage]);

  return (
    <div className="loading__image">
      {!imageLoaded && <Spinner size={60} />}
      <img
        className={`card__image ${imageLoaded ? 'card__image--loaded' : ''}`}
        loading="lazy"
        src={productImage}
        alt={`${productName} image`}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

ImageCard.propTypes = {
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
};
