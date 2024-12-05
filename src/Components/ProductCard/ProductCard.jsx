import "./ProductCard.css"
import linkStar from "https://seeklogo.com/images/R/red-star-logo-2D3327A276-seeklogo.com.png"
const ProductCard=({productImage,category,productName,productPrice})=>{
    return(
        <>
            <div className="container-product">
                <img src={productImage} alt={productImage} />
                <div className="body-product">
                    <h1>{category}</h1>
                    <h2>{productName}</h2>
                    <span>{productPrice}</span>
                    <div className="stars">
                        <img src={linkStar} alt="star icon" />
                        <img src={linkStar} alt="star icon" />
                        <img src={linkStar} alt="star icon" />
                    </div>
                </div>
                <div className="content-btn">
                    <button className="btn-product">
                        Add To Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductCard;