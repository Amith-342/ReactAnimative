import React, { useState } from 'react'
import Navbar from './Navbar'

function Contact() {
  const [Data,setData] = useState();
  var name,phone,email,msg;
  function handleChange(event){
  
if(event.target.name === input1){
setData(event.target.value);
name = Data;
}
if(event.target.name === input2){
  setData(event.target.value);
 phone = Data;
}
if(event.target.name === input3){
  setData(event.target.value);
 email = Data;
}

if(event.target.name === input4){
  setData(event.target.value);
 msg = Data; 
}
  }

  function resetData(){
setData('');

console.log("Data: "+Data+name+phone)

name = Data;
phone = Data;
email = Data;
msg = Data;


  }

  return (
    <>
    <Navbar/>
    <div className='contact-page'>
      <h1>Contact Us</h1>
      <form action="" id='usrForm'>
        <p>Full Name</p>
        <input value={name} name="input1" onChange={handleChange} className='contactInput' type="text" placeholder='Full Name' />
        <p>Phone</p>
        <input value={phone} name="input2" onChange={handleChange} className='contactInput' type="text" placeholder='Phone No' />
        <p>Email Address</p>
        <input value={email} name="input3" onChange={handleChange} className='contactInput' type="email" placeholder='email' />
        <p>Message</p>
        
      </form>

<textarea onChange={handleChange} name="input4" value={msg} className='contactInput' id='contactMsg' form='usrForm' placeholder='Message'></textarea>
<button value={msg} onClick={resetData}  id='cnt-btn'>Submit</button>

    </div>
    </>
  )
}

export default Contact