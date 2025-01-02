import { createContext, useState } from "react";

export const GetApiContext=createContext()

export const GetApiProvider=({children})=>{
    const [dataApi,setDataApi]=useState(10)
    return (
        <GetApiContext.Provider value={{dataApi,setDataApi}}>
            {children}
        </GetApiContext.Provider>
    )
}