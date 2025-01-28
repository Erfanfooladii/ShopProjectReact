import "./style.css"
const FormItem=({data})=>{
    return (
        <form className="product__form">
          <div className="product__options">
            <div className="product__options_container">
              <label className="product__options--label" htmlFor="size_product">
                size
              </label>
              <select id="size_product" className="product__option--size">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="product__options_container">
              <label
                className="product__options--label"
                htmlFor="color_product"
              >
                color
              </label>
              <select id="color_product" className="product__option--color">
                <option value="1">Red</option>
                <option value="2">green</option>
                <option value="3">black</option>
              </select>
            </div>
          </div>
          <div className="product__buy">
            <div className="product__buy--quantity">
              <label className="product__buy--quantity-label">Qyt </label>
              <input type="number" className="product__buy--quantity-input" />
            </div>
            <button className="product__buy--button">Add to cart</button>
          </div>
        </form>
    )
}
export default FormItem;