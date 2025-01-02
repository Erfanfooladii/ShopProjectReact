import "./ProductPage.css"
import ProductList from "./Components/ProductList"
import Pagination from "./Components/Pagination"
import ShowPage from "./Components/Show"
import { useContext, useState } from "react"
import { GetApiContext } from "../../Contexts/getApiContext"
import TopSelling from "./Components/TopSellins"
import Category from "./Components/Category"
const HomePage=()=>{
    const {dataApi}=useContext(GetApiContext)
    const [category,setCategory]=useState(new Set())
    const [limitShowPage,setLimitShowPage]=useState()
    const [pagination,setPagination]=useState()
    return(
        <div className="home __global-container">
            <div className="home__body">
                <div className="home__body--right">
                    <Category setCategory={setCategory} />
                    <TopSelling />
                </div>
                <div className="home__body--list">
                    <ShowPage setLimitShowPage={setLimitShowPage} />
                    <ProductList
                        category={category}
                        limitShowPage={limitShowPage}
                        pagination={pagination}
                    />
                </div>
            </div>
            <div className="home__footer">
                <Pagination
                    pagination={pagination}
                    setPagination={setPagination}
                    totalPages={dataApi.data?.pagination.totalPages}
                />
            </div>
        </div>
    )
}
export default HomePage