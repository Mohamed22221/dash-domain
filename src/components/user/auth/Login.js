import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
 const [email , setEmail] = useState("paul.hoang@vmodev.com")
 const [pass , setPassword] = useState("abcd1234")
 const location = useLocation();
 const navigate = useNavigate();
 useEffect(() => {
  if (localStorage.getItem("user-info")) {
   navigate("/dashboard")
  }
  
 }, [])
 
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
    location.pathname.includes('dashboard')
    navigate("/dashboard")
   
  })
  .catch(function (error) {

  });
  
 }  

 return (
  <div className='sub-container '>
   <form >
    <input type="email" value={email} placeholder='ادخل بريدك الالكتروني' onChange={(e) => setEmail(e.target.value)} />
    <input type="password" value={pass} placeholder='ادخل كلمة السر' onChange={(e) => setPassword(e.target.value)} />
    <Link to="/analytics">analytics</Link>
    <button onClick={handelLogin} className='btn btn-dark btn-lg '>تسجيل الدخول</button>
   </form>
  </div>
 )
}

export default Login