import React from 'react'
import Navbar from './Navbar'
import Array from "./Array"

function makeTable(cards){
  return(
    <>
    <div className='courseCards'>
  <div className='services-imgs'><img src={cards.url}  alt="Imges"/></div>
<div>
  <h2 className='services-h2'>{cards.Course}</h2>
  <p className='services-h2'>{cards.content} </p>
  <button  id='service-btn'>Check Now</button>
</div>


    </div>
    
    </>
  );
}

function Services() {
  return (
    <>
<Navbar />
<div className='fullTable'>
  {Array.map(makeTable)}
  </div>
    </>
  )
}

export default Services