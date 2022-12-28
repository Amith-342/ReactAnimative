import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Homes from "./Home"
import About from "./About"
import Services from "./Services"
import Contact from "./Contact"


function App() {
  return (
    <main>
    <Routes>
        <Route path='/' element={<Homes/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/Contact' element={<Contact/>} />

    </Routes>
    </main>
  )
}

export default App