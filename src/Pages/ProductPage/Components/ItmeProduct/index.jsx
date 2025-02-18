import PropTypes from 'prop-types';
import ActionsItem from './Components/ActionsItem';
import CategoryItem from './Components/CategoryItem';
import FormItem from './Components/FormItem';
import ImageItem from './Components/ImageItem';
import PriceItem from './Components/PriceItem';
import ReviewItem from './Components/ReviewsItem';
import ShareItem from './Components/ShareItem';
import './style.css';

const ItemProduct = ({ auth, data, image }) => {
  return (
    <div className="product__item">
      <ImageItem image={image} data={data} />
      <div className="product__item-detail">
        <h1 className="product__title">{data.name}</h1>
        <ReviewItem data={data} />
        <PriceItem data={data} />
        <p className="product__description">{data.description}</p>
        <FormItem auth={auth} data={data} />
        <ActionsItem />
        <CategoryItem data={data} />
        <ShareItem />
      </div>
    </div>
  );
};

ItemProduct.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
  image: PropTypes.bool,
  auth: PropTypes.bool,
};

export default ItemProduct;
