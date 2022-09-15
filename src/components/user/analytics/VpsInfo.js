import React, { useState } from 'react'
import FormPlaneInfo from './FormPlaneInfo'

const VpsInfo = () => {
  const [toggleInfo , setToggleInfo] = useState(true)

  return (
   <div className='vbs-info'>
    { toggleInfo ?
    <div>
   <div className='item-bg'>
    <p>IP Address</p>
    <h5>82.180.132.85</h5>
   </div>
   <div className='item-bg'>
    <p>Status</p>
    <h5 className='root'>Running</h5>
   </div>
   <div className='item-bg'>
    <p>VPS uptime</p>
    <h5>33 days 12 hours</h5>
   </div>
   <div className='item-bg'>
    <p>Current OS</p>
    <h5>CentOS 7 64bit</h5>
   </div>
   <div className='item-bg'>
    <p>Location</p>
    <h5>Egypt</h5>
   </div>
   <div className='item-bg'>
    <p>Node</p>
    <h5>Egypt</h5>
   </div>
   <div className='buttons d-flex justify-content-end '>
   <button className='btn btn__secound' onClick={() =>setToggleInfo(false)} >Change Plan</button>
   <button className='btn btn__primary' >Stop VPS</button>
   </div>
   </div>
  :<FormPlaneInfo setToggleInfo={setToggleInfo} />
}
  </div>
  )
}

export default VpsInfo