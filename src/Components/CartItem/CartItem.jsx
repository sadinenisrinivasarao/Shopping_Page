import React, { useContext } from "react";
import "./CartItem.css"
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png"

export const CartItem = () =>{
     const {all_products,cartItem, removeFromCart,getTotalCartAmount} = useContext(ShopContext)
// console.log(cartItem)
    return (
        <>
        <div className="cart_items">
            <div className="item_main">
                <p>Products</p>
                <p>Titles</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr  className="main_hr"/>
            {all_products.map((e) =>{
                if(cartItem[e.id] > 0){
                    return (
                        <div>
                <div className="CartItem_format item_main">
                <img className="cartItem_Icon" src={e.image} alt="" />
                <b>{e.name}</b>
                <p>$ {e.new_price}</p>
                <button className="cart_quantity">{cartItem[e.id]}</button>
                <p>$ {e.new_price*cartItem[e.id]}</p>
                <img className="remove_icon "src={removeIcon} onClick={() => {removeFromCart()}} alt="" />
                </div>
                <hr />
            </div>
                    )
                }
                return null;
            })}
            <div className="cartItem_total">
                <h1>Cart total</h1>
                <div>
                    <div className="cart_total_items">
                        <p>Subtotal</p>
                        <p>$ {getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart_total_items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                       
                    </div>
                    <div className="cart_total_items">
                    <h3>Total</h3>
                    <h3>$ { getTotalCartAmount() }</h3>
                       
                    </div>
                </div>
                <button className="Check_out">Procedd to checkout</button>
            </div>
        </div>
        </>
    )
}