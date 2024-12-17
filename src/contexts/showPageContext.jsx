import { createContext, useState } from "react";

export const ShowPageContext=createContext()

export const ShowPageProvider=({children})=>{
    const [selectLimitShowPage,setSelectLimitShowPage]=useState(10)
    return (
        <ShowPageContext.Provider value={{selectLimitShowPage,setSelectLimitShowPage}}>
            {children}
        </ShowPageContext.Provider>
    )
}