import { fetchProducts } from "../../../utils/fetchProducts"
import ProductCard from "../../ProductCard/ProductCard"
import { useState,useEffect } from "react"
import "./ProductPage.css"
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
        document.title= "Procut page"
    }, []);
    if (isLoading) {
        return <div>Loading data...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    return(
        <div className='container-product-list' >
        {
          data.map((item)=>{
            return <ProductCard 
              key={item.id}
              productName={item.name}
              productPrice={Math.round(item.price)}
              productImage={item.images[0]}
              category={item.category.name}
            />
          })
        }
      </div>
    )
}
export default ProductPage