// import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" className="footer-logo" />
          <p style={{padding:"5px"}}>
            Order your favorite meals with ease.Good food is good life, we believe in delivering the best of the best from us
            !! Keep ordering keep enjoying the food.     </p>
          {/* <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div> */}
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery App</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <ul>
            <li>📍 Address: Kakinada 533448</li>
            <li>📞 Phone: 9876543210</li>
            <li>📧 Email: mealmate@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="footer-copyright">&copy; 2025 MealMate.com - All Rights Reserved</p>
    </footer>
  );
}
