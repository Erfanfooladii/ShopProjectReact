import PropTypes from 'prop-types';
import './style.css';

const ImagesProduct = ({ data, imageHandler, image }) => {
  const imageSrc =
    data && data.images && data.images.length > 0
      ? data.images[image ? 1 : 0]
      : '';

  return (
    <div className="product__iamges">
      <button onClick={imageHandler} className="product__images--top-button">
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 15L12 10L7 15"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="product__images-item">
        {imageSrc && (
          <img src={imageSrc} className="product__itme-img" alt={data.name} />
        )}
      </div>
      <button onClick={imageHandler} className="product__images--bottom-button">
        <svg
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(180)"
        >
          <path
            d="M17 15L12 10L7 15"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

ImagesProduct.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
  }),
  imageHandler: PropTypes.func.isRequired,
  image: PropTypes.bool.isRequired,
};

export default ImagesProduct;
