import { createContext, useState } from "react";

export const CategoryContext=createContext()

export const CategoryProvider=({children})=>{
    const [selectValueCategory,setSelectValueCategory]=useState(new Set())
    return (
        <CategoryContext.Provider value={{selectValueCategory,setSelectValueCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}