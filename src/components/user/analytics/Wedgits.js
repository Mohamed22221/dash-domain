import React from 'react'
import timer from "../../../assets/images/icons/timer.png"
import counter from "../../../assets/images/icons/counter.png"
import BarChart from '../dashboard/barChart'

const Wedgits = () => {
 return (
  <div className='wedgets-analytics space-section row'>
   <div className='col-12 col-xl-6'>
    <div className='left-wedgets row mx-3'>
     <div className='col-12 col-xl-6'>
      <div className='timer my-4'>
       <h4>CPU Daily Usage</h4>
       <img src={timer} alt="timer" />
       <h4>45.75 %</h4>
       <p>Daily Usage is <span>Good</span></p>

      </div>
      
     </div>
     <div className='col-12  col-xl-6'>
      <div className='counter my-4'>
       <img src={counter} alt='counter' />
       <h4>Storage usage</h4>

      </div>
      <div className='counter my-4'>
       <img src={counter} alt='counter' />
       <h4>Storage usage</h4>

      </div>
     </div>

    </div>

   </div>
   <div className='col-12 col-xl-6'>
    <div className='right-wedgets mx-4 my-4'>
     <h4 className='my-3'>Server Status Overtime</h4>
     <BarChart />


    </div>

   </div>


  </div>
 )
}

export default Wedgits