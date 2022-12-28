import React from 'react'
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import Body from './Body'
import Navbar from './Navbar'

function Home() {
  return (
    <>
    <Navbar />
    
    <Body
    str = "TechSite" pic="pic"
    />
    </>
  )
}

export default Home