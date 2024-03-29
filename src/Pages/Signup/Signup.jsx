import './Signup.css';
import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate , Link } from 'react-router-dom';
import { Login } from '../Login/Login';

export const Signup = () =>{
    const [phone, setPhone] = useState("");
    const [FullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const { phone, name, email, password } = state;
    let regobj =  {phone, FullName, email, password } 

    fetch('http://localhost:8000/user',{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(regobj)
    }).then((res) =>{
        toast.success('Registration success')
        navigate('/login')
    }).catch((err) =>{
        toast.error('Registration failed' + err.message)
    })
  };

  return (
<>

<div className="login_heading">
                <img src="https://logosandtypes.com/wp-content/uploads/2021/01/myntra.svg" alt="" />
                <h2>My Shopping website</h2>
            </div>
    <div className="Signup_div">
      <h1>Signup</h1>
      <form action="" onSubmit={handleSubmit} method="POST">
        <label htmlFor="phone">Phone: </label>
        <input required
          className=""
          type="phone"
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /><br />
        <label htmlFor="name">Name: </label>
        <input required
          className=""
          type="name"
          id="name"
          name="name"
          placeholder="Enter name"
          value={FullName}
          onChange={(e) => setName(e.target.value )}
        /><br />
        <label htmlFor="email">Email: </label>
        <input required
          className=""
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value )}
        /><br />
        <label htmlFor="password">Password: </label>
        <input required
          className=""
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value )}
        /><br />
      
        <button type="submit" className="create_btn ">Sign Up</button>
        <div className="already">
          Already has an account ? &nbsp;&nbsp;<Link to={'/login'} >Login</Link>
        </div>
      </form>
    </div>
    </>
  );
};