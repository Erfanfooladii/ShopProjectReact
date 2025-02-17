import { useNavigate } from 'react-router-dom';
import './style.css';
import PropTypes from 'prop-types';
import { FooterCard } from './Components/FooterCard';
import { ButtonCard } from './Components/ButtonCard';
import { SectionCard } from './Components/SectionCard';
import { ImageCard } from './Components/ImageCard';

const ProductCard = ({
  productImage,
  category,
  productName,
  productPrice,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/${id}`);
      }}
      className="card"
    >
      <ImageCard productImage={productImage} productName={productName} />
      <SectionCard
        productName={productName}
        productPrice={productPrice}
        category={category}
      />
      <ButtonCard />
      <FooterCard />
    </div>
  );
};
ProductCard.propTypes = {
  productImage: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
