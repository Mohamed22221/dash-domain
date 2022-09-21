import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../glopal/InputField';
import SignWrapper from '../../glopal/SignWrapper';

const Login = () => {

 const [email , setEmail] = useState("paul.hoang@vmodev.com")
 const [pass , setPassword] = useState("abcd1234")
 const navigate = useNavigate();
 
 useEffect(() => {
  if (localStorage.getItem("user-info")) {
   navigate("/admin/dashboard")
  }

 }, [])
 
 // start handel api login
 const handelLogin= (e) =>{
  e.preventDefault()
  
  const config = {
    method: 'post',
    url: 'https://api.cdp.setel.devopsinsider.io/api/v1/account-service/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : {
     pass: pass ,
     email: email 
  }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(config.data.email));
    localStorage.setItem("user-info",JSON.stringify(config.data))
    navigate("/admin/dashboard")
   
  })
  .catch(function (error) {

  });
  
 }  

 return (
  <SignWrapper>
  <div className='auth-bage'>
    <div className='header-auth'>
      <h3>LOG IN</h3>
      <h5>Login Into Your Account</h5>
    </div>
   <form >
    <InputField title="Email" type="email" placeholder="Email" value={email} change={(e) =>setEmail(e.target.value)} />
    <InputField title="Password" type="password" placeholder="Password" value={pass} change={(e) =>setPassword(e.target.value)} />
    <a className='d-flex justify-content-end my-4'>forgot password ?</a>
    <button onClick={handelLogin} className='btn btn__primary  '>log in</button>
   </form>
  </div>
  </SignWrapper>

 )
}

export default Login