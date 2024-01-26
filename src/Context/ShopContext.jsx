import React, { createContext } from "react";
import all_products from "../Components/Assets/all_product"
export const ShopContext = createContext(null);

 export const ShopContextProvider = (props) => {
    const contextValue = {all_products}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>
    )
}