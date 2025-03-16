import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import './style.css';

const SliderImage = ({ images, imageHandler }) => {
  const [image, setImage] = useState(0);
  const prevImageRef = useRef();

  useEffect(() => {
    if (prevImageRef.current !== image && images && images.length > 0) {
      imageHandler(images[image]);
      prevImageRef.current = image;
    }
  }, [image, images, imageHandler]);

  const showImageNext = () => {
    setImage((nextImage) => (nextImage + 1) % images.length);
  };

  const showImagePrev = () => {
    setImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }
  const newPosition = 100 * image;
  return (
    <section className="slider__container">
      <div
        style={{
          transform: `translateY(${newPosition}%)`,
        }}
        className="slider__border"
      ></div>
      <div className="slider">
        {images.map((name, index) => (
          <img
            key={index}
            src={name}
            alt={name}
            aria-hidden={image !== index}
            className="slider__img"
          />
        ))}
      </div>
      <button
        onClick={showImageNext}
        style={{ left: '0' }}
        className="slider__button slider__button-next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
        >
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
      </button>
      <button
        onClick={showImagePrev}
        style={{ right: '0' }}
        className="slider__button slider__button-prev"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </button>
    </section>
  );
};

SliderImage.propTypes = {
  images: PropTypes.array,
  imageHandler: PropTypes.func.isRequired,
};

export default SliderImage;
