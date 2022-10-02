import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../../glopal/InputField'
import SignWrapper from '../../glopal/SignWrapper'

const ForgetPassword = () => {
 return (
  <SignWrapper>
  <div className='auth-bage forget-password'>
    <div className='header-auth'>
      <h3>Forget Password</h3>
      <h5>Don’t worry ! It happens. Please enter your email to continue </h5>
    </div>
   <form>
   <InputField title="Email" type="email" placeholder="Email"  />
   <Link to="/login/forget-password/otp"><button className='btn btn__primary  '>Continue</button></Link>
   <Link to="/login"><button  className='btn btn__secound  '>Back to log in</button></Link>
   </form>
  </div>
  </SignWrapper>
 )
}

export default ForgetPassword