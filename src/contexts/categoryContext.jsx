import { createContext, useState } from "react";

export const CategoryContext=createContext()

export const CategoryProvider=({children})=>{
    const [selectValue,setSelectValue]=useState(new Set())
    return (
        <CategoryContext.Provider value={{selectValue,setSelectValue}}>
            {children}
        </CategoryContext.Provider>
    )
}