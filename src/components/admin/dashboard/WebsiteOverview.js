import React from 'react'
import { CircleCharts } from './CircleCharts'
import { ParCharts } from './ParCharts'
import { motion } from "framer-motion"

const WebsiteOverview = () => {
 const initial = { x: 0, y: -12, opacity: 0 }
 const animate = { x: 0, y: 0, opacity: 1 }
 const transition = { duration: 0.5 }
  return (
    <div className='website-overview row'>
     <motion.div initial={initial} animate={animate} transition={transition}  className=' col-lg-12 col-xl-6'>
      <div className='left-item'>
       <h5 >Website Visits</h5>
       <ParCharts />

      </div>
      
     </motion.div>
     <motion.div initial={initial} animate={animate} transition={transition} className=' col-lg-12 col-xl-6'>
      <div className='right-item'>
       <h5>Hosting analistic</h5>
       <CircleCharts />
      </div>
      
     </motion.div >

    </div>
  )
}

export default WebsiteOverview