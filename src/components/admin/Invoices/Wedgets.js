import React from 'react'
import { motion } from "framer-motion"
import RedialBar from '../../user/analytics/RadialBar'
import true1 from "../../../assets/images/icons/true1.png"
const Wedgets = () => {
 const initial = { x: 0, y: -12, opacity: 0 }
 const animate = { x: 0, y: 0, opacity: 1 }
 const transition = { duration: 0.5 }

 return (
  <motion.div initial={initial} animate={animate} transition={transition} className='wedgits-invoices space-section row'>
   <div className='item-wedgits col-lg-6 col-xl-3'>
    <div className='about-item'>
     <div className='counter'>
     <RedialBar percentage="70" name="Total" color='#FF9800' />
     </div>
     <div className='text-about-item'>
      <h5>Total</h5>
      <h6>24 invoice</h6>
      <p>275.43 KWD</p>
     </div>
    </div>
   </div>
   <div className='item-wedgits col-lg-6 col-xl-3'>
    <div className='about-item'>
     <div className='counter'>
     <RedialBar percentage="50" name="Hosts" color='#0AB28B' />
     </div>
     <div className='text-about-item'>
      <h5>Hosts</h5>
      <h6>24 invoice</h6>
      <p>275.43 KWD</p>
     </div>
    </div>
   </div>
   <div className='item-wedgits col-lg-6 col-xl-3'>
    <div className='about-item'>
     <div className='counter'>
     <RedialBar percentage="80" name="Domains" color='#287AFB' />
     </div>
     <div className='text-about-item'>
      <h5>Domains</h5>
      <h6>24 invoice</h6>
      <p>275.43 KWD</p>
     </div>
    </div>
   </div>
   <div className='item-wedgits col-lg-6 col-xl-3'>
    <div className='about-item'>
     <div className='counter'>
     <RedialBar percentage="30" name="SMS" color='#E24A34' />
     </div>
     <div className='text-about-item'>
      <h5>SMS</h5>
      <h6>24 invoice</h6>
      <p>275.43 KWD</p>
     </div>
    </div>
   </div>


  </motion.div>
 )
}

export default Wedgets