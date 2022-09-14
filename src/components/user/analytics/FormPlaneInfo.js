import React from 'react'
import InputField from '../../glopal/InputField'
import InputSelect from '../../glopal/InputSelect'

const FormPlaneInfo = ({setToggleInfo}) => {
  return (
   <form>
   <div className='d-flex justify-content-evenly' >
   <InputField title="IP address" type="text" placeholder="82.180.132.85" />
   <InputSelect title="Status" select1="Running" select2="Root"/>

   </div>
   <div className='d-flex justify-content-evenly' >
   <InputField title="VPS uptime" type="text" placeholder="33 days 12 hours" />
   <InputField title="Current os" type="text" placeholder="CentOS 7 64bit" />
   </div>
   <div className='d-flex justify-content-evenly' >
   <InputField title="Location" type="text" placeholder="enter location" />
   <InputField title="Node" type="text" placeholder="First name" />
   </div>
   <div className='buttons d-flex justify-content-end '>
   <button className='btn btn__secound'  onClick={() =>setToggleInfo(true)} >cancel</button>
   <button className='btn btn__primary ' onClick={() =>setToggleInfo(true)} >save</button>

   </div>
  </form>
  )
}

export default FormPlaneInfo