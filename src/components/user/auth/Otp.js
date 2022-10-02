import React from 'react'
import { Link } from 'react-router-dom'
import SignWrapper from '../../glopal/SignWrapper'

const Otp = () => {
  return (
   <SignWrapper>
   <div className='auth-bage otp'>
     <div className='header-auth'>
       <h3>OTP VERIFICATION</h3>
       <h5>Enter the OTP sent to example@gmail.com </h5>
     </div>
    <form>
     <div className='otp-numbers'>
      <input type="text" placeholder='5' />
      <input type="text" placeholder='2' />
      <input type="text" placeholder='3' />
      <input type="text" placeholder='1' />
     </div>
    <button className='btn btn__primary'>Submit</button>
    <p>00:120 Sec</p>
    <p>Don’t receive code ? <Link to="/login/reset-password">Re-send</Link> </p>
    </form>
   </div>
   </SignWrapper>
  )
}

export default Otp