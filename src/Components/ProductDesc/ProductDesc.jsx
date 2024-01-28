import React, { useContext } from "react";
import "./ProductDesc.css"
import star_icon from "../Assets/star_icon.png"
import star_dull from "../Assets/star_dull_icon.png"
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

export const ProductDesc = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <>
        <div className="product_desc">
            <div className="desc_left">
                <div className="image_list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product_mainimage">
               <Link to={`/product/${product.id}`}><img src={product.image} alt="" /></Link>
                </div>
            </div>
            <div className="desc_right">
                <h1>{product.name}</h1>
                <div className="product_rating">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull} alt="" />
                    <img src={star_dull} alt="" />
                    <p>( 6 )</p>
                </div>
                <div className="product_price">
                    <div className="Product_old_price">$ {product.old_price}</div>
                    <div className="Product_new_price">$ {product.new_price}</div>
                </div>
                <div className="product_size">
                    <h1>Select size</h1>
                    <div className="product_sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                </div>
                <button onClick={() =>{addToCart(product.id)}} className="addtocart">Add to cart</button>
                
            </div>
        </div>
        </>
    )
}