import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_products.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
};


export const ShopContextProvider = (props) => {
    
    const [cartItem, setCartItem] = useState(getDefaultCart());
    // console.log(cartItem)
  const addToCart = (itemId) =>{
    setCartItem((prev => ({...prev, [itemId]:prev[itemId] + 1})))
    // console.log(cartItem)

  }

  const removeFromCart = (itemId) =>{
    setCartItem((prev => ({...prev, [itemId]:prev[itemId] - 1})))
  }

  const CartQuantity = () => {
    let cart_quantity = 0;
    for(const item in cartItem){
        if(cartItem[item] > 0){
            cart_quantity += cartItem[item]
        }
    }
    return cart_quantity;

  }
  const getTotalCartAmount =  () =>{
let totalCartAmount = 0;
for(const item in cartItem){
    if(cartItem[item] > 0){
    all_products.map((product) => {
        if(product.id === Number(item)){
            
            totalCartAmount +=  product.new_price * cartItem[item]
        }
        
    })

    }

    
  }
  return totalCartAmount;
}
  const contextValue = { all_products, cartItem,addToCart,removeFromCart ,getTotalCartAmount , CartQuantity};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}
