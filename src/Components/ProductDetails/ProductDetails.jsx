import React from "react";
import "./ProductDetails.css"
import arrow_icon  from "../Assets/breadcrum_arrow.png"
import { Product } from "../../Pages/Product/Product";

export const ProductDetails = (props) =>{
     const {product} = props;
    return (
        <>
        <div className="product_details">
            Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
        </>
        
    )
}