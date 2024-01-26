
import React from "react"
import './Footer.css'
import insta_logo from "../Assets/instagram_icon.png"
import pintrest_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"
export const Footer = () =>{
    return(
        <>
        <div className="footer">
<div className="footer-logo">
    <img src="https://logosandtypes.com/wp-content/uploads/2021/01/myntra.svg" alt="" />
    <p>My Shopping website</p>

</div>
<ul className="footer_ul">
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className="footer_social_links">
<div className="footer_icon">
    <img src={insta_logo} alt="" />
</div>
<div className="footer_icon">
    <img src={whatsapp_icon} alt="" />
</div>
<div className="footer_icon">
    <img src={pintrest_icon} alt="" />
</div>
</div>

        </div>
        </>
    )
}