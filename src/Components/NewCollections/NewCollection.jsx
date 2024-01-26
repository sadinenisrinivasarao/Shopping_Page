
import React from "react"
import './NewCollections.css'

import {Items} from '../Items/Items'
import new_collections from "../Assets/new_collections"
export const NewCollection = () => {
    return(
        <div className="NewCollection">
            <h1>New Collections</h1>
            <hr />
            <div className="NewCollection_item">
                {new_collections.map((item,i) =>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}