import React, { useContext } from "react";
import './ShopCategory.css'
import dropdown_icon from "../../Components/Assets/dropdown_icon.png"
import { Items } from "../../Components/Items/Items";
import { ShopContext } from "../../Context/ShopContext";
export const ShopCategory = (props) => {
    const {all_products}  = useContext(ShopContext)
    
    return(
        <div className="shop-category">
            <img  className="category_banner" src={props.banner} alt="" />
       {/* <div className="Shopcategory-index">
        <p>
            <span>Showing <b>1- 12</b></span> out of <b>36</b>
        </p>
        <div className="Shop_sort">
            Sort by <img src={dropdown_icon}></img>
        </div>
       </div> */}
       <div className="shop_products">
        {all_products.map((item ,i) =>{
            if(props.category === item.category){
return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else{
                return null;
            }
        })}
       </div>
       <div className="loadMore">
        Expand more
       </div>
        </div>
        
    )
    
}