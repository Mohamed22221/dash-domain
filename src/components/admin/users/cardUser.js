import React from 'react'
import avatar from "../../../assets/images/main/person.jpeg"
import { motion } from "framer-motion"

//icons 
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { BiLocationPlus } from 'react-icons/bi';




const cardUser = ({id , client , email ,phone }) => {

  const initial = { x: 0, y: -12, opacity: 0 }
  const animate = { x: 0, y: 0, opacity: 1 }
  const transition = { duration: 0.5 }
  return (
    <motion.div initial={initial} animate={animate} transition={transition} className='card-user'>
     <div className='head-card'>
      <img src={avatar} alt="avatar" />
      <div className='about-head'>
      <h5>{client}</h5>
      <p>#{id}</p>
     </div>
     </div>
     <div className='about-card'>
      <div className='item'>
       <h5>Email <span><HiOutlineMail/></span></h5>
       <p>{email}</p>
      </div>
      <div className='item'>
       <h5>phone<span><FiPhoneCall/></span></h5>
       <p>(603) 555-0123</p>
      </div>
     </div>
     <div className='about-card'>
      <div className='item'>
       <h5>Address<span><BiLocationPlus/></span> </h5>
       <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
      </div>
     </div>
    
     </motion.div >
  )
}

export default cardUser