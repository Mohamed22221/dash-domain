import React from 'react'
import InputField from '../../glopal/InputField'
const ChangeContact = ({setToggleChange}) => {
  return (
   <form>
    <h5 className='py-4'>Contact information</h5>
   <div className='d-flex flex-wrap justify-content-md-evenly' >
   <InputField title="Name" type="text" placeholder="First name" />
   <InputField title="Email" type="email" placeholder="your email" />
   </div>
   <div className='d-flex flex-wrap justify-content-evenly' >
   <InputField title="Company" type="text" placeholder="Company name" />
   <InputField title="Address" type="number" placeholder="your address" />

   </div>
   <div className='d-flex flex-wrap justify-content-evenly' >
   <InputField title="phone" type="number" placeholder="your phone" />
   <InputField title="Mobile" type="number" placeholder="your mobile" />

   </div>
   <div className='buttons d-flex justify-content-end '>
   <button className='btn btn__secound'  onClick={() =>setToggleChange(true)} >cancel</button>
   <button className='btn btn__primary ' onClick={() =>setToggleChange(true)} >save</button>
   </div>
  </form>
  )
}

export default ChangeContact