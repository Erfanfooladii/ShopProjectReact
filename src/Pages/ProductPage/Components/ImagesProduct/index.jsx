import { useState } from "react";
import "./style.css"
const ImagesProduct=({data,imageHandler,image})=>{
    
    
    return(
        <div className="product__iamges">
            <button onClick={imageHandler} className="product__images--top-button">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 15L12 10L7 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </button>
            <div className="product__images-item">
                {
                    image ?
                    (data?.images?.length > 0 && <img src={data?.images[1]} className="product__itme-img" alt={data.name} />):
                    (data?.images?.length > 0 && <img src={data?.images[0]} className="product__itme-img" alt={data.name} />)
                }
            </div>
            <button onClick={imageHandler} className="product__images--bottom-button">
            <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 15L12 10L7 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </button>
        </div>
    )
};
export default ImagesProduct;