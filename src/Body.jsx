import React from 'react'
import pic from "./Images/techImg.jpg"
import pics from "./Images/techImage.jpg"
import { Link } from 'react-router-dom';

function Body(props) {
  var Img = props.pic;
  return (
    <div className='techbody'>
<h1>Welcome to <span>{props.str}</span> </h1>
<p>We are a team of talented web developers</p>
<button><Link className='nav-link' to='/Contact'>Contact Us</Link></button>
<div className='techImg'>
  
<img className='webImg' src={pic} alt="tech Image" />
</div>
    </div>
  )
}

export default Body;