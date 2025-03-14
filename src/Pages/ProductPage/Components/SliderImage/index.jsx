import PropTypes from 'prop-types';
import { useState } from 'react';

const SliderImage = ({ images }) => {
  const [image, setImage] = useState(0);
  const showImageNext = () => {
    setImage((indexImg) => {
      if (indexImg === images.length - 1) return 0;
      return indexImg + 1;
    });
  };
  const showImagePrev = () => {
    setImage((indexImg) => {
      if (indexImg === 0) return images.length - 1;
      return indexImg - 1;
    });
  };
  return (
    <section className="container">
      <div className="slider">
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={image !== index}
            className="slider__img"
            style={{ translate: `${-100 * image}%` }}
          />
        ))}
      </div>
      <button
        onClick={showImageNext}
        style={{ left: '0' }}
        className="slider__button"
      >
        next
      </button>
      <button
        onClick={showImagePrev}
        style={{ right: '0' }}
        className="slider__button"
      >
        preve
      </button>
      <div aria-hidden="true">salamee</div>
    </section>
  );
};
SliderImage.propTypes = {
  images: PropTypes.array,
};
export default SliderImage;
