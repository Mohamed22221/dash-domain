import React from 'react'
import InputField from '../../glopal/InputField'

const FormPlanAccess = ({setToggleAccess}) => {
  return (
   <form>
   <div className='d-flex flex-wrap justify-content-md-evenly' >
   <InputField title="SSH IP" type="text" placeholder="82.180.132.85" />
   <InputField title="SSH username" type="date" placeholder="Root" />
   </div>
   <div className='d-flex flex-wrap justify-content-md-evenly' >
   <InputField title="SSH password" type="password" placeholder="***********" />
   <InputField title="Default SSH port" type="text" placeholder="22" />
   </div>
   <div className='d-flex flex-wrap justify-content-md-evenly' >
   <InputField title="IPV6" type="text" placeholder="2a02:4780:10:1f02::1" />
   <InputField title="Termminal" type="text" placeholder="ssh root@82.180.132.85" />
   </div>
   <div className='buttons d-flex justify-content-end '>
   <button className='btn btn__secound'  onClick={() =>setToggleAccess(true)} >cancel</button>
   <button className='btn btn__primary ' onClick={() =>setToggleAccess(true)} >save</button>



   </div>
  </form>
  )
}

export default FormPlanAccess