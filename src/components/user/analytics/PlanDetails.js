import React, { useState } from 'react'
import FormPlanDetails from './FormPlanDetails'

const PlanDetails = () => {
  const [togglePlan , setTogglePlan] = useState(true)
  return (
    
    <div className='plan-details'>
      { togglePlan ?
      <div>
        
     <div className='item-bg'>
      <p>Current plan</p>
      <h5>VPS 4</h5>
     </div>
     <div className='item-bg'>
      <p>Expiration date</p>
      <h5>2023-07-28</h5>
     </div>
     <div className='item-bg'>
      <p>CPU cores</p>
      <h5>4</h5>
     </div>
     <div className='item-bg'>
      <p>Memory</p>
      <h5>4 GB</h5>
     </div>
     <div className='item-bg'>
      <p>Bandwidth</p>
      <h5>4 TP</h5>
     </div>
     <div className='item-bg'>
      <p>Disk space</p>
      <h5>80GB</h5>
     </div>
     <div className='buttons d-flex justify-content-end '>
     <button className='btn btn__secound' onClick={() =>setTogglePlan(false)} >Change Plan</button>
     <button className='btn btn__primary' >Stop VPS</button>



     </div>
     </div>
     : 
     <FormPlanDetails setTogglePlan={setTogglePlan} />
     
      }
    </div>
    
  )
}

export default PlanDetails