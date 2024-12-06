import "./ProductCard.css";

const ProductCard = ({ productImage, category, productName, productPrice }) => {
    const starImage = "https://seeklogo.com/images/R/red-star-logo-2D3327A276-seeklogo.com.png";

    return (
        <div className="container-product">
            <img src={productImage} alt={`${productName} image`} />
            <div className="body-product">
                <h1 className="category">{category}</h1>
                <h2 className="name">{productName}</h2>
                <span className="price">{productPrice} <small>$99</small></span>
                <div className="stars">
                    <img src={starImage} alt="icon star" />
                    <img src={starImage} alt="icon star" />
                    <img src={starImage} alt="icon star" />
                </div>
            </div>
            <div className="content-btn">
                <button className="btn-product">
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;