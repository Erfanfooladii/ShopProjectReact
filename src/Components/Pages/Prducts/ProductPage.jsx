import { useState,useEffect, useContext } from "react"
import "./ProductPage.css"
import ProductList from "../../product-list/ProductList"
import Category from "../../Category/Category"
import { CategoryContext } from "../../../contexts/categoryContext"
import Pagination from "../../Pagination/Pagination"
import { fetchProductApi } from "../../../utils/fetchProducts"
const ProductPage=()=>{

    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(undefined)
    const [error,setError]=useState(undefined)
    const {selectValueCategory}=useContext(CategoryContext)
        
        useEffect(() => {
            const getApi=async ()=>{
                setIsLoading(true)
                try {
                    const data=await fetchProductApi({category:[...selectValueCategory]})
                    setData(data)
                } catch (error) {
                    setError(error.message)
                } finally{
                    setIsLoading(false)
                }
            }
            getApi()
            document.title= "Procuts page"
        }, [selectValueCategory]);
        console.log([...selectValueCategory]);
        
    if (isLoading) {
        return <div>Loading data...</div>
    }
    if (error) {
        return <div>Error: {error} </div>
    }    
    return(
        <div className="container-product-main">
            <div className="body-product">
                <Category/>
                <ProductList data={data}/>
            </div>
            <div className="footer-product">
                <Pagination/>
            </div>
        </div>
    )
}
export default ProductPage