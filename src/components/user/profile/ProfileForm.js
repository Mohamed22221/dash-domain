import React, { useState } from 'react'
import profile from "../../../assets/images/main/profile.png"
import InputField from '../../glopal/InputField'
const ProfileForm = () => {
  const [changePass , setChangePass] = useState(true)
  return (
    <div className='main-profile space-section'>
      <form>
        <div className='upload-form d-flex flex-column align-items-center'>
          <img src={profile} />
          <h5>Upload Photo</h5>
        </div>
        <div className='inbuts'>
          <div className='d-flex flex-wrap justify-content-md-evenly' >
            <InputField title="First Name" type="text" placeholder="Paul" />
            <InputField title="Last Name" type="email" placeholder="Mohamed" />
          </div>
          <div className='d-flex flex-wrap justify-content-md-evenly' >
            <InputField title="Your Email" type="email" placeholder="paul.hoang@vmodev.com" />
            <InputField title="Phone Number" type="number" placeholder="(208) 555-0112" />
          </div>
          {/*start show & hide onClick change */}
          <div className={changePass ? 'show-change' : "hide-change" }>
          <div className='d-flex flex-wrap justify-content-md-evenly' >
            <div className="input__box change-pass">
              <label className="input__label" htmlFor="password">Your Password</label>
              <input type="password" className="input input__field" placeholder="****"  required />
              <button className='btn' onClick={() => setChangePass(false)} >Change</button>
             
            </div>
          </div>
          </div>
          <div className={changePass ? 'hide-change ' : "show-change" }>
          <div className='d-flex flex-wrap justify-content-md-evenly' >
            <div className="input__box ">
              <label className="input__label" htmlFor="password">Current password</label>
              <input type="password" className="input input__field" placeholder="Enter Your Current password"  required />

             
            </div>
            <div className="input__box ">
              <label className="input__label" htmlFor="password">New password</label>
              <input type="password" className="input input__field" placeholder="Enter Your New password"  required />
            </div>
          </div>
          </div>
          {/*end show & hide onClick change */}

        </div>
        <div className='d-flex justify-content-center '>
        <button className='btn btn btn__primary save-change  '  >Save</button>
        </div>
      </form>


    </div>
  )
}

export default ProfileForm