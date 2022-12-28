import React from 'react'
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"


function Navbar() {
  return (
    <div className='navbar-home'>
<h1 className='nav-h1'>TechSite</h1>
<div className='links'>
<p className='nav-link'> <Link className='nav-link' to="/">Home </Link> </p>
<p className='nav-link'><Link className='nav-link' to="/Services">Services </Link></p>
<p className='nav-link'><Link className='nav-link' to="/About">About </Link></p>
<p className='nav-link'><Link className='nav-link' to="/Contact">Contact Us </Link></p>
</div>
 
    </div>
  )
}

export default Navbar