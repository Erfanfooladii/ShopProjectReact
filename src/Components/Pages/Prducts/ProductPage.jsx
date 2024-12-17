import { useState,useEffect, useContext } from "react"
import "./ProductPage.css"
import ProductList from "../../product-list/ProductList"
import Category from "../../Category/Category"
import { CategoryContext } from "../../../contexts/categoryContext"
import Pagination from "../../Pagination/Pagination"
import { fetchProductApi } from "../../../utils/fetchProducts"
const ProductPage=()=>{
    return(
        <div className="container-product-main">
            <div className="body-product">
                <Category/>
                <ProductList/>
            </div>
            <div className="footer-product">
                <Pagination/>
            </div>
        </div>
    )
}
export default ProductPage