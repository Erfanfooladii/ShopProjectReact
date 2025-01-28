import "./style.css"
import Stars from "../../../../../../Components/Stars";
const ReviewItem=({data})=>{
    return(
        <div className="product__reviews">
          <div className="product__reviews-stars">
            <Stars value={2} />
          </div>
          <p className="product__reviews-title">
            10 Review(s) | Add your review
          </p>
        </div>
    )
}
export default ReviewItem;