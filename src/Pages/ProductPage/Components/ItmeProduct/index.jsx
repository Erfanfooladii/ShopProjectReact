import ActionsItem from "./Components/ActionsItem";
import CategoryItem from "./Components/CategoryItem";
import FormItem from "./Components/FormItem";
import ImageItem from "./Components/ImageItem";
import PriceItem from "./Components/PriceItem";
import ReviewItem from "./Components/ReviewsItem";
import ShareItem from "./Components/ShareItem";
import "./style.css";
const ItemProduct = ({ data }) => {
  return (
    <div className="product__item">
      <ImageItem data={data} />
      <div className="product__item-detail">
        <h1 className="product__title">{data.name}</h1>
        <ReviewItem data={data} />
        <PriceItem data={data} />
        <p className="product__description">{data.description}</p>
        <FormItem/>
        <ActionsItem/>
        <CategoryItem data={data}/>
        <ShareItem />
      </div>
    </div>
  );
};
export default ItemProduct;
