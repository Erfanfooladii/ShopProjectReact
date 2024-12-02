import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './Components/ProductCard/ProductCard'

function App() {
  const [data,setData]=useState([])
  const GetApi=async ()=>{
    try {
      const res=await fetch('https://kaaryar-ecom.liara.run/v1/products')
      const data=await res.json()
      setData(data.products)
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  }

useEffect(() => {
  GetApi()
}, []);
  return (
    <>
      <div className='container-main'>
        {
          data.map((item,index)=>{
            return <ProductCard key={index}
            productName={item.name}
            productImage={item?.images[0]}
            productPrice={item.price}
            />
          })
         
        }
        
      </div>
    </>
  )
}

export default App
