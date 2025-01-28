import "./style.css"
const PriceItem=({data})=>{
    return(
        <div className="product__price">
          <p className="product__price--original">${Math.round(data.price)}</p>
          <p className="product__price--discounted">$999</p>
          <p className="product__price--stock">IN STOCK</p>
        </div>
    )
}
export default PriceItem;