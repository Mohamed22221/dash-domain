import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from '../../glopal/InputField'
import SignWrapper from '../../glopal/SignWrapper'

const SignUp = () => {
  const [activeColor, setActiveColor] = useState("");
  const NamesDataInbut = [
    { nameId: "1", active: true },
    { nameId: "2", active: true },
    { nameId: "3", active: true },
    { nameId: "4", active: true },
    { nameId: "5", active: true },


  ]
  const handleChange = (event) => {
    
    const idInput = event.target.id;
    const IdActive = NamesDataInbut.filter((item) => item.nameId === idInput).map((item) => item.active)[0];
    //set active color when 
 
    if (event.target.value.length >= 3 || event.target.checked === true ) {
      if (IdActive === true) {
        setActiveColor((prev) => ({ ...prev, [idInput]: "active" }));
      }
    } else {
      setActiveColor((prev) => ({ ...prev, [idInput]: "" }));
    }
    console.log(IdActive)
  }
  return (
    <SignWrapper>
      <div className='auth-bage sign-up '>
        <div className='header-auth'>
          <h3>Sign Up</h3>
          <h5>Please enter your details</h5>
        </div>
        <form >
          <InputField title="Full Name" type="text" placeholder="Enter Your Name " change={handleChange} idInbuts="1" />
          <InputField title="Email" type="email" placeholder="Enter Your Email" />
          <InputField title="Password" type="password" placeholder="Enter Your Password " />
          <InputField title="Confirm Password" type="password" placeholder="Confirm Your Password" />

          <div className='checkbox'>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1">I agree with <span>Terms</span> and <span>Privacy</span></label>
          </div>
          <div className='colors row justify-content-between px-3 py-2'>
            <span className='col-2 line '><span></span></span>
            <span className='col-2 line '></span>
            <span className='col-2 line '></span>
            <span className='col-2 line '></span>
            <span className='col-2 line '></span>
          </div>
          <button className='btn btn__primary  '>log in</button>
          <p className='d-flex justify-content-center my-3'>Not have an account ?  <Link to="/login">login</Link> </p>

        </form>
      </div>
    </SignWrapper>
  )
}

export default SignUp