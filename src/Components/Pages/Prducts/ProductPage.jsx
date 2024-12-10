import { fetchProducts } from "../../../utils/fetchProducts"
import { useState,useEffect } from "react"
import "./ProductPage.css"
import ProductList from "../../product-list/ProductList"
import Category from "../../Category/Category"
const ProductPage=()=>{

    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(undefined)
    const [error,setError]=useState(undefined)

    useEffect(() => {
        const getApi=async ()=>{
            setIsLoading(true)
            try {
                const data=await fetchProducts()
                setData(data)
            } catch (error) {
                setError(error.message)
            } finally{
                setIsLoading(false)
            }
        }
        getApi()
        document.title= "Procuts page"
    }, []);
    if (isLoading) {
        return <div>Loading data...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }    
    return(
        <div className="container-product-main">
            <Category/>
            <ProductList data={data}/>
        </div>
    )
}
export default ProductPage