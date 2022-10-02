import React from 'react'
import InputField from '../../glopal/InputField'
import SignWrapper from '../../glopal/SignWrapper'

const ResetPassword = () => {
  return (
   <SignWrapper>
   <div className='auth-bage otp'>
     <div className='header-auth'>
       <h3>Reset Password</h3>
       <h5>Make sure your new password must be different from your previous password</h5>
     </div>
    <form>
    <InputField title="Reset Password" type="password" placeholder="Enter password"  idInbuts="3" />
    <InputField title="Confirm Password" type="password" placeholder="Enter password"  idInbuts="4" />
    <button className='btn btn__primary'>Submit</button>

    </form>
   </div>
   </SignWrapper>
  )
}

export default ResetPassword