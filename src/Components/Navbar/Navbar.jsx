import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import account_icon from "../Assets/account.jpeg"

import cart_icon from "../Assets/cart_icon.png";

export const Navbar = ({ username }) => {
   
    const location = useLocation();
    const { CartQuantity } = useContext(ShopContext);
    const [hideNavbar, setHideNavbar] = useState(false);
    

    useEffect(() => {
        // Update hideNavbar based on the current location
        // if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/') {
            if (location.pathname === '/login' || location.pathname === '/signup' ) {
            setHideNavbar(true);
        } else {
            setHideNavbar(false);
        }
    }, [location.pathname]); // Execute effect when location.pathname changes

    const [menu, setMenu] = useState("shop");

    return (
        <>
            {!hideNavbar && (
                <div className='Navbar'>
                    <div className='Shopping_logo'>
                        <Link to={'/shop'}><img src="https://logosandtypes.com/wp-content/uploads/2021/01/myntra.svg" alt="Logo" />My Shopping Website</Link>
                    </div>
                    <div>
                        <ul className='nav-links'>
                            <li onClick={() => { setMenu("shop") }}><Link to={'/shop'}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                            <li onClick={() => { setMenu("men") }}><Link to={'/men'}>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                            <li onClick={() => { setMenu("Women") }}><Link to={'/women'}>Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
                            <li onClick={() => { setMenu("kids") }}><Link to={'/kids'}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
                        </ul>
                    </div>
                    <div className='Nav-login-cart'>
                    {username && (<div><p className='user_name'>Hi  {username}</p></div> )}
                    
                        <button className='login_btn' ><Link to={'/'}>Signout</Link></button>
                        <Link to={'/cart'}><img src={cart_icon} alt="Cart icon" /></Link>
                        <div className='cart_count'>{CartQuantity()}</div>
                    </div>
                </div>
            )}
        </>
    );
};
