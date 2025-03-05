import React from 'react'
import "./Navbar.css"
import { assets } from "../assets/assets"
export default function Navbar() {
  return (
    <div className='navabar'>
      <img src={assets.logo} className='logo' alt="" />
        <img src={assets.profile} className='profile' alt="" />

    </div>
  )
}
