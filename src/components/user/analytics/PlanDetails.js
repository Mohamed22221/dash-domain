import React from 'react'

const PlanDetails = () => {
  return (
    <div className='plan-details'>
     <div className='item-vbs'>
      <p>Current plan</p>
      <h5>VPS 4</h5>
     </div>
     <div className='item-vbs'>
      <p>Expiration date</p>
      <h5>2023-07-28</h5>
     </div>
     <div className='item-vbs'>
      <p>CPU cores</p>
      <h5>4</h5>
     </div>
     <div className='item-vbs'>
      <p>Memory</p>
      <h5>4 GB</h5>
     </div>
     <div className='item-vbs'>
      <p>Bandwidth</p>
      <h5>4 TP</h5>
     </div>
     <div className='item-vbs'>
      <p>Disk space</p>
      <h5>80GB</h5>
     </div>
     <div className='buttons d-flex justify-content-end '>
     <button className='btn btn__secound' >Change Plan</button>
     <button className='btn btn__primary' >Stop VPS</button>




     </div>

    </div>
  )
}

export default PlanDetails