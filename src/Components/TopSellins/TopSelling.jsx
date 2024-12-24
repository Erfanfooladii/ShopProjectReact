import { useEffect } from "react";

const TopSelling=({data})=>{
    useEffect(()=>{
        const getData=async()=>{
            try {
                const res=await fetch('https://kaaryar-ecom.liara.run/v1/products/top-rated')
                const data=await res.json()
                console.log(data);
                
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    },[])
    
    return(
        <div className="container-top-selling">
            <ul>
                
            </ul>
        </div>
    )
};

export default TopSelling;
