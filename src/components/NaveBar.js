import React from 'react'
import Logo from "../res/logo.png"
import { Link } from 'react-router-dom'

function NaveBar() {
  return (
    <div>
        <ul className="nav-bar">
      <li>
          <Link to="/"><img src={Logo} alt='logo' /></Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
       
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default NaveBar