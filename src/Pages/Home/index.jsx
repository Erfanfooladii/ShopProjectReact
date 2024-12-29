import "./ProductPage.css"
import ProductList from "../../Components/product-list"
import Pagination from "../../Components/Pagination"
import ShowPage from "../../Components/Show"
import { useContext } from "react"
import { GetApiContext } from "../../contexts/getApiContext"
import TopSelling from "../../Components/TopSellins"
import Category from "../../Components/Category"
const ProductPage=()=>{
    const {dataApi}=useContext(GetApiContext)
    return(
        <div className="home __global-container">
            <div className="home__body">
                <div className="home__body--right">
                    <Category/>
                    <TopSelling />
                </div>
                <div className="home__body--list">
                    <ShowPage/>
                    <ProductList/>
                </div>
            </div>
            <div className="home__footer">
                <Pagination totalPages={dataApi.data?.pagination.totalPages} />
            </div>
        </div>
    )
}
export default ProductPage