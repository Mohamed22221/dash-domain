import React from 'react'
import { motion } from "framer-motion"
//images
import sales from"../../../assets/images/icons/sales.svg"
import users from"../../../assets/images/icons/users.svg"
import orders from"../../../assets/images/icons/orders.svg"
import supports from"../../../assets/images/icons/support.svg"

const Wedgets = () => {
 const initial = { x: 0, y: -12, opacity: 0 }
 const animate = { x: 0, y: 0, opacity: 1 }
 const transition = { duration: 0.5 }
 return (
  <div className='top-wedgits space-section row '>
   <motion.div initial={initial} animate={animate} transition={transition} className='item-wedgets col-12 col-lg-6 col-xl-3 '>
    <div className='bg-item '>
     <img src={sales} />
     <div className='about'>
      <p>Weekly Sales</p>
      <h5>7102</h5>

     </div>
    </div>
   </motion.div >
   <motion.div initial={initial} animate={animate} transition={transition} className='item-wedgets col-12 col-lg-6 col-xl-3'>
   <div className='bg-item '>
     <img src={users} />
     <div className='about'>
      <p>New Users</p>
      <h5>1102</h5>

     </div>
    </div>
   </motion.div >
   <motion.div initial={initial} animate={animate} transition={transition} className='item-wedgets col-12 col-lg-6 col-xl-3 '>
   <div className='bg-item '>
     <img src={orders} />
     <div className='about'>
      <p>Item Orders</p>
      <h5>1072</h5>

     </div>
    </div>
   </motion.div >
   <motion.div initial={initial} animate={animate} transition={transition} className='item-wedgets col-12 col-lg-6 col-xl-3'>
   <div className='bg-item '>
     <img src={supports} />
     <div className='about'>
      <p>Supports</p>
      <h5>2002</h5>

     </div>
    </div>
   </motion.div>


  </div>
 )
}

export default Wedgets