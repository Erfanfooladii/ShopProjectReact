import "./ProductCard.css"
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
                        <img src="" alt="star icon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;