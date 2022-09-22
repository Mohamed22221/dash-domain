import React from 'react'
import timer from "../../../assets/images/icons/timer.png"
import counter from "../../../assets/images/icons/counter.png"
import BarChart from '../dashboard/barChart'
import RedialBar from './RadialBar'
import { motion } from "framer-motion"

const Wedgits = () => {
 const initial = { x: 0, y: -12, opacity: 0 }
 const animate = { x: 0, y: 0, opacity: 1 }
 const transition = { duration: 0.5 }
 return (
  <div className='wedgets-analytics space-section row'>
   <div className='col-12  col-xl-6 p-0'>
    <div className='left-wedgets row mx-md-3'>
     <motion.div initial={initial} animate={animate} transition={transition} className='col-12  col-xl-6'>
      <div className='timer my-md-4'>
       <h4>CPU Daily Usage</h4>
       <img src={timer} alt="timer" />
       <h4>45.75 %</h4>
       <p>Daily Usage is <span>Good</span></p>

      </div>

     </motion.div >
     <div className='col-12  col-xl-6 '>
      <motion.div initial={initial} animate={animate} transition={transition} className='counter my-4 mx-2  '>
       <RedialBar percentage="70" name="Storage" color='#FF9800' />
       <h4 >Storage usage</h4>

      </motion.div >
      <motion.div initial={initial} animate={animate} transition={transition} className='counter my-4 mx-2  '>
       <RedialBar percentage="80" name="Storage" />
       <h4 >Storage usage</h4>

      </motion.div >
     </div>

    </div>

   </div>
   <div className='col-12  col-xl-6 p-0'>
    <motion.div initial={initial} animate={animate} transition={transition} className='right-wedgets mx-md-4 my-4'>
     <h4 className='my-3'>Server Status Overtime</h4>
     <BarChart />


    </motion.div >

   </div>


  </div>
 )
}

export default Wedgits