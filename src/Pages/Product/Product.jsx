import React, { useContext } from "react";
import arrow_icon  from "../../Components/Assets/breadcrum_arrow.png"

import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../../Components/ProductDetails/ProductDetails";
import { Items } from "../../Components/Items/Items";
import { ProductDesc } from "../../Components/ProductDesc/ProductDesc";

export const Product = () => {
  
    const {all_products}  = useContext(ShopContext);

    const {productId} = useParams();
const product = all_products.find((e) => Number(e.id) === Number(productId))
return(
    <div>
        {/* <ProductDetails product={product} /> */}
        <ProductDesc product= {product}/>
    </div>
)
 
}