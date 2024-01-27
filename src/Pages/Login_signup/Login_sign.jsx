import React from "react";
import "./Login_signup.css"
import { Link } from "react-router-dom";
export const Login_sign = () => {
    return (
        <div className="loginsignup">
            <div className="signup_container">
                <h1>
                    Signup
                </h1>
                <div className="signup_credentials">
                    <input type="text"  placeholder=" Enter your name" name="" id="" />
                    <input type="email"  placeholder="Enter your email" name="" id="" />
                    <input type="password" placeholder="Enter your password" name="" id="" />
                </div>
                <button className="signup_button">Continue</button>
                <p className="already">Already have an account <Link className="login_link">Login</Link></p>

            </div>
        </div>
    )
}