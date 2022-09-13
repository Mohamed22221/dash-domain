import React from 'react'

const VpsInfo = () => {
  return (
   <div className='vbs-access'>
   <div className='item-vbs'>
    <p>IP Address</p>
    <h5>82.180.132.85</h5>
   </div>
   <div className='item-vbs'>
    <p>Status</p>
    <h5 className='root'>Running</h5>
   </div>
   <div className='item-vbs'>
    <p>VPS uptime</p>
    <h5>33 days 12 hours</h5>
   </div>
   <div className='item-vbs'>
    <p>Current OS</p>
    <h5>CentOS 7 64bit</h5>
   </div>
   <div className='item-vbs'>
    <p>Location</p>
    <h5>Egypt</h5>
   </div>
   <div className='item-vbs'>
    <p>Node</p>
    <h5>Egypt</h5>
   </div>
   <div className='buttons d-flex justify-content-end '>
   <button className='btn btn__secound' >Change Plan</button>
   <button className='btn btn__primary' >Stop VPS</button>




   </div>

  </div>
  )
}

export default VpsInfo