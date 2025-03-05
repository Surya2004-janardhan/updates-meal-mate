import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
export default function Footer() {
  return (
    <>
      {" "}
      <div className="footer" id="footer">
        Modify this shit latter 
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>
              order Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Adip voluptatum dolorem debitis assumenda!
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>

          <div className="footer-content-center">
            <h2>company</h2>

            <ul>
              <li>Home</li>
              <li>about</li>
              <li>delivery-app</li>
              <li>privacy policy</li>
            </ul>
          </div>

          <div className="footer-content-right">
            <h2>contact us</h2>
            <ul>
              <li>Address: 1234 xyz street</li>
              <li>Phone: 123-456-7890</li>
              <li>Email:juii@gmail.com</li>
            </ul>
          </div>
        </div>
        {/* <hr /> */}
        <p className="footrer-copyright">copyright 2025 @totot.com</p>
      {/* <hr /> */}
      </div>
      <hr className="hr"/>
    
      {/* // </div> */}
    </>
  );
}
