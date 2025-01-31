import { createContext, useState } from "react";

export const CartContext=createContext()
export const CartProvider=({children})=>{
    const [cartValue,setCartValue]=useState([])
    return(
        <CartContext.Provider value={{cartValue,setCartValue}}>
            {children}
        </CartContext.Provider>
    )
}