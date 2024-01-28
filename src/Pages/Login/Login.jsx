import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

export const Login = ({ setUsername })=> {
    const usernavigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName,setName] = useState("")

    const success_login = (e) => {
        e.preventDefault();
        if (validation()) {
            fetch(`http://localhost:8000/user?email=${encodeURIComponent(email)}`)
                .then((res) => res.json())
                .then((resp) => {
                    if (Object.keys(resp).length === 0) {
                        toast.error('enter valid email');
                    } else {
                        if (resp[0].password === password) {
                            sessionStorage.setItem('email', email);
                            setUsername(resp[0].FullName);
                            usernavigate('/shop');
                        } else {
                            toast.error('enter valid password');
                        }
                    }
                })
                .catch((err) => {
                    toast.error('login failed due to ' + err);
                });
        }
    };

    const validation = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            toast.warning('please enter username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('please enter password');
        }
        return result;
    };

    return (
        <>
            <ToastContainer /> 
            <div className="login_heading">
                <img src="https://logosandtypes.com/wp-content/uploads/2021/01/myntra.svg" alt="" />
                <h2>My Shopping website</h2>
            </div>
            <div className="Login_div credentials">
                <h1> Login</h1>
                <form onSubmit={success_login} class="form-horizontal" >
                    <div className="username_div">
                    <div class="form-group">
                        <label htmlFor="email" className="control-label col-sm-2">Email: </label>
                        <div class="col-sm-7">
                        <input className="form-control" type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
                            id="email" name="email" placeholder="Enter your Email" />
      </div>
      </div>
                    </div>
                    <div className="password_div">
                    <div class="form-group">
                        <label htmlFor="password" className="control-label col-sm-2">Password: </label>
                        <div class="col-sm-7">
                        <input className="form-control" type="password" id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                            name="password" placeholder="Enter your password" />
                            </div>
                    </div>
                    </div>
                    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-7 Sub_btn">
      <button type="submit" className="btn create_btn create_orange">Login</button>
      </div>
                    
                    </div>
                    <div className="Create_acc_div">
                        <p>Don't have an account? <Link className="create_Acc_text" to={'/signup'}>Create account</Link></p>
                    </div>
                </form>
            </div>
           
        </>
    );
};
