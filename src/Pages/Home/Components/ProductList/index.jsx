import "./ProductList.css"
import ProductCard from "../ProductCard";
import { useContext, useEffect, useState } from "react";
import { fetchProductApi } from "../../../../utils/fetchProducts";
import { GetApiContext } from "../../../../Contexts/getApiContext";
import { SearchContext } from "../../../../Contexts/searchContext";

const ProdcutList = ({category,limitShowPage,pagination}) => {
    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(undefined)
    const {setDataApi}=useContext(GetApiContext)
    const {searchValue}=useContext(SearchContext)

    const getApi=async ()=>{
        setIsLoading(true)
        try {
            const data=await fetchProductApi({category:[...category],limit:limitShowPage,page:pagination,search:searchValue})
            setData(data.productsData)
            setDataApi(data)
        } catch (error) {
            setError(error.message)
        } finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getApi()
        document.title= "Procuts page"
    }, [category,limitShowPage,pagination,searchValue]);
    
    if (isLoading) {
        return <div>Loading data...</div>
    }
    if (error) {
        return <div>Error: {error} </div>
    }
    return (
        <div className='products' >
            {
                data.map((item,index)=>{
                    return <ProductCard 
                        key={index}
                        productName={item.name}
                        productPrice={Math.round(item.price)}
                        productImage={item.images[0]}
                        category={item.category.name}
                        id={item._id}
                    />
                })
            }
        </div>
    )
};
export default ProdcutList