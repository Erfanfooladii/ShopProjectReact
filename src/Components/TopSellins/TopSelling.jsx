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
        <div className="container-top-selling">
            <h2>Top Selling</h2>
            <ul>
                {
                    data.map((item)=>(
                        <li className="item-sellin">
                            <img src={item.images[0]} alt={item.name} />
                            <div className="box-detail">
                                <h2>{item.category.name}</h2>
                                <h3>{item.name}</h3>
                                <span className="sellin-price">
                                    ${Math.round(item.price)}
                                    <small>$99</small>
                                </span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default TopSelling;