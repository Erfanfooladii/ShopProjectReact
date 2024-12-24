import "./ProductPage.css"
import ProductList from "../../Components/product-list/ProductList"
import Category from "../../Components/Category/Category"
import Pagination from "../../Components/Pagination/Pagination"
import ShowPage from "../../Components/Show/ShowPage"
import { useContext } from "react"
import { GetApiContext } from "../../contexts/getApiContext"
import TopSelling from "../../Components/TopSellins/TopSelling"
const ProductPage=()=>{
    const {dataApi}=useContext(GetApiContext)
    return(
        <div className="global-container container-product-main">
            <div className="body-product">
                <Category/>
                <TopSelling data={dataApi} />
                <div className="body-product-list">
                    <ShowPage/>
                    <ProductList/>
                </div>
            </div>
            <div className="footer-product">
                <Pagination totalPages={dataApi.data?.pagination.totalPages} />
            </div>
        </div>
    )
}
export default ProductPage