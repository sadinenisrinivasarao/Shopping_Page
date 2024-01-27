import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'
export const Items = (props) =>{
    return(
        
        <div className="item">
<Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}></img></Link>
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