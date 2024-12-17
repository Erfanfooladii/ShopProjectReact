import "./ProductList.css"
import ProductCard from "../ProductCard/ProductCard";
import { CategoryContext } from "../../contexts/categoryContext";
import { useContext, useEffect, useState } from "react";
import { fetchProductApi } from "../../utils/fetchProducts";

const ProdcutList = () => {
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
    return (
        <div className='container-product-list' >
            {
            data.map((item,index)=>{
                return <ProductCard 
                    key={index}
                    productName={item.name}
                    productPrice={Math.round(item.price)}
                    productImage={item.images[0]}
                    category={item.category.name}
                />
            })
            }
        </div>
    )
};
export default ProdcutList