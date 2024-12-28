import ItemSllin from "./ItemSellin";
import "./TopSelling.css"
import { useEffect, useState } from "react";

const TopSelling=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        const getData=async()=>{
            try {
                const res=await fetch('https://kaaryar-ecom.liara.run/v1/products/top-rated')
                const data=await res.json()
                setData([...data])
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    },[])
    console.log('dste:',data);
    
    return(
        <div className="selling">
            <h2 className="selling-title">Top Selling</h2>
            <ul className="selling-list">
                {
                    data.map((item,index)=>(
                        <ItemSllin 
                            key={index}
                            image={item.images[0]}
                            name={item.name}
                            category={item.category.name}
                            price={item.price}
                        />
                    ))
                }
            </ul>
        </div>
    )
};

export default TopSelling;