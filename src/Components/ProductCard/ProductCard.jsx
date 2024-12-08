import Stars from "../Stars/Stars";
import "./ProductCard.css";

const ProductCard = ({ productImage, category, productName, productPrice }) => {

    return (
        <div className="container-product">
            <img src={productImage} alt={`${productName} image`} />
            <div className="body-product">
                <h1 className="category">{category}</h1>
                <h2 className="name">{productName}</h2>
                <span className="price">${productPrice} <small>$99</small></span>
                <Stars value={3}/>
            </div>
            <div className="content-btn">
                <button className="btn-product">
                    Add To Cart
                </button>
            </div>
            <div className="footer-btns">
                <button>
                    <span className="material-symbols-outlined">
                    favorite
                    </span>
                </button>
                <button>
                    <span className="material-symbols-outlined">
                    sync_alt
                    </span>
                </button>
                <button>
                    <span className="material-symbols-outlined">
                    visibility
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;