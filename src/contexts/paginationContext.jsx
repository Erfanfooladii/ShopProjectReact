import { createContext, useState } from "react";

export const PaginationContext=createContext()

export const PaginationProvider=({children})=>{
    const [selectPagination,setSelectPagination]=useState(1)
    return (
        <PaginationContext.Provider value={{selectPagination,setSelectPagination}}>
            {children}
        </PaginationContext.Provider>
    )
}