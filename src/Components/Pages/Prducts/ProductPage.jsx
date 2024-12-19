import "./ProductPage.css"
import ProductList from "../../product-list/ProductList"
import Category from "../../Category/Category"
import Pagination from "../../Pagination/Pagination"
import ShowPage from "../../Show/ShowPage"
const ProductPage=()=>{
    return(
        <div className="container-product-main">
            <div className="body-product">
                <Category/>
                <div className="">
                    <ShowPage/>
                    <ProductList/>
                </div>
            </div>
            <div className="footer-product">
                <Pagination/>
            </div>
        </div>
    )
}
export default ProductPage