import {React, useContext, useState} from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext";

import cart_icon from "../Assets/cart_icon.png"
export const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    
    const {CartQuantity} = useContext(ShopContext)
    return (
        <>
        <div className='Navbar'>
            <div className='Shopping_logo'>
                <img src="https://logosandtypes.com/wp-content/uploads/2021/01/myntra.svg" alt="Logo" />
            </div>
            <div>
            <ul className='nav-links'>
                <li onClick={() =>{setMenu("shop")}}><Link to={'/'}>Shop</Link> {menu ==="shop"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("men")}}><Link to={'/men'}>Men</Link>{menu ==="men"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("Women")}}><Link to={'/women'}>Women</Link>{menu ==="Women"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("kids")}}><Link to={'/kids'}>Kids</Link>{menu ==="kids"?<hr/>:<></>}</li>
            </ul>
            </div>
            <div className='Nav-login-cart'>
                <button className='login_btn'><Link to={'/login'}>Login</Link></button>
                <Link to={'/cart'}><img src={cart_icon} alt="Cart icon" /></Link>
                <div className='cart_count'>{CartQuantity()}</div>
            </div>
        </div>
        </>
    )
}