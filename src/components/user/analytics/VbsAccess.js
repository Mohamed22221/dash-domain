import React from 'react'

const VbsAccess = () => {
  return (
   <div className='vbs-access'>
   <div className='item-vbs'>
    <p>SSH IP</p>
    <h5>82.180.132.85</h5>
   </div>
   <div className='item-vbs'>
    <p>SSH username</p>
    <h5 className='root'>Root</h5>
   </div>
   <div className='item-vbs'>
    <p>SSH password</p>
    <a>Change</a>
   </div>
   <div className='item-vbs'>
    <p>Default SSH port</p>
    <h5>22</h5>
   </div>
   <div className='item-vbs'>
    <p>IPV6</p>
    <h5>2a02:4780:10:1f02::1</h5>
   </div>
   <div className='item-vbs'>
    <p>Termminal</p>
    <h5>ssh root@82.180.132.85</h5>
   </div>
   <div className='buttons d-flex justify-content-end '>
   <button className='btn btn__secound' >Change Plan</button>
   <button className='btn btn__primary' >Stop VPS</button>




   </div>

  </div>
  )
}

export default VbsAccess