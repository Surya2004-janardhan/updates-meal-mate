import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Loginpop.css";
import axios from "axios"
import { StoreContext } from "../../context/Storecontext";

export default function Loginpop({ setshowlogin }) {
  const [currentstate, setcurrentstate] = useState("Login");
  const {url} = useContext(StoreContext)
  const {token ,settoken} = useContext(StoreContext)
   const [data,setdata] = useState({
    name:"",
    email:"",
    password:""
  })

  const handlechange = (e) => {
    setdata({...data,[e.target.name]:e.target.value})
  }
 const onlogin = async (e) => {
    e.preventDefault()
    let newurl = url
    if (currentstate === "Login"){
      newurl += "/api/user/login"
    }
    else{
      newurl += "/api/user/register"
    }

    const response = await axios.post(newurl,data)

    if (response.data.success){
        settoken(response.data.token)
        localStorage.setItem("token",response.data.token)
        setshowlogin(false)
    }
    else{
      alert(response.data.message)
    }
  }

  return (
    <div className="loginpopup">
      <form onSubmit={onlogin} action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentstate}</h2>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentstate === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" onChange={handlechange} value={data.name} required name="name" id="" />
          )}
          <input type="email" placeholder="your email" onChange={handlechange} value={data.email} required name="email" id="" />

          <input
            type="password"
            placeholder="password"
            required 
            onChange={handlechange}
             value={data.password}
            name="password"
            id=""
          />
        </div>
        <button type="submit">
          {" "}
          {currentstate === "sign up" ? "create account " : "Login"}{" "}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By agreeing to all the{" "}
            <a href="www.google.com/zomato">conditions</a>
          </p>
        </div>
        {currentstate === "Login" ? (
          <p>
            Create a new account{" "}
            <span onClick={() => setcurrentstate("Sign Up")}>click here </span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span onClick={() => setcurrentstate("Login")}>Login here</span>
          </p>
        )}
        {/* onClick={() => setcurrentstate("Login")}{" "} */}
      </form>
    </div>
  );
}
