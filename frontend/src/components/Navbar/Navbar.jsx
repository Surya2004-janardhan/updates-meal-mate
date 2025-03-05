import React, { useContext, useState } from "react";
// import assets from "../../assets/assets"
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
// import { useState } from "react";
import "./Navbar.css";
import { StoreContext } from "../../context/Storecontext";
export default function Navbar({ setshowlogin }) {
  // console.log(assets.logo)
  const logout = () =>{
      // settoken("")/
      localStorage.removeItem("token") 
      settoken("")
      // window.location.reload()
      useNavigate("/")
    }
   const navigate = useNavigate()
  const { gettotalcartamount, token, settoken } = useContext(StoreContext);
  const [menu, setmenu] = useState("Home");
  return (
    <div className="navbar">
      {/* <img src="https://s.yimg.com/fz/api/res/1.2/rm1cPAwyMBAo4GnIdCa8Lg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/01e30ec3-42a3-3ea2-b9e9-47b4bc0b82fb/t_500x300" alt="" className="logo" /> */}
      <Link to="/">
        <img src={assets.logo} alt="" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setmenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          {" "}
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setmenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setmenu("Mobile-app")}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setmenu("Contact")}
          className={menu === "Contact" ? "active" : ""}
        >
          Contact
        </a>
      </ul>
      <div className="navbar-right">
        <img className="search" src={assets.search_icon} alt="" />
        <div className="navabar-search-icon">
          <Link to="/cart">
            <img className="basket" src={assets.basket_icon} alt="" />{" "}
          </Link>
          <div className={gettotalcartamount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button
            onClick={() => {
              setshowlogin(true);
            }}
          >
            sign in{" "}
          </button>
        ) : (
          <div className="navbar-profile">
            {/* <img src={assets.profile_image alt = " " /> </div>} */}

            <img src={assets.profile_image} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() =>navigate("/myorders")}>
                {" "}
                <img src={assets.basket_icon} alt="" /> <p>Orders</p>
              </li>
              {/* <li>Orders</li> */}
              <hr />
              <li onClick={logout}>
                <img src={assets.basket_icon} alt="" /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
