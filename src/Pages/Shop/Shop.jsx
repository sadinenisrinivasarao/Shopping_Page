import React from "react"
import { HeroPanel } from "../../Components/HeroPanel/HeroPanel"
import { Popular } from "../../Components/Popular/Popular"
import { NewCollection } from "../../Components/NewCollections/NewCollection"
import { Footer } from "../../Components/Footer/Footer"
export const Shop = () =>{
    return(
        <>
        <div className="container">
        <HeroPanel/>

        <Popular/>
        <NewCollection />
        
        
        </div>
        </>
    )
}