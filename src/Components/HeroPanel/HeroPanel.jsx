import React from "react"
import "./HeroPanel.css"
import {Link} from "react-router-dom"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_img from "../Assets/hero_image.png"
export const HeroPanel = () =>{
    return (
        <>
        <div className="HeroPanel">
            <div className="HeroPanel_left">
                <h2>Srinivas Sadineni</h2>

                    <div className="Hero_head">
<p>New <img src={hand_icon}/> for everyone</p>
                    
                </div>
                <div className="Hero_latest">
                {/* <button className='new_collections'><Link to={'/login'}>Latest Collections <img src={arrow_icon} alt="" /></Link></button> */}
                <button className='new_collections'>Latest Collections <img src={arrow_icon} alt="" /></button>

                </div>
            </div>
            <div className="HeroPanel_right">
                <img src={hero_img}/>
            </div>
        </div>
        </>
    )
}
