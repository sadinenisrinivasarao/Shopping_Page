import React from 'react'
import './Items.css'
export const Items = (props) =>{
    return(
        
        <div className="item">
<img src={props.image}></img>
<p>{props.name}</p>
<div className='item-prices'>
    <div className='item_price_new'>
        ${props.new_price}
    </div>
    <div className='item_price_old'>
        ${props.old_price}
    </div>
</div>
        </div>
       
    )
}