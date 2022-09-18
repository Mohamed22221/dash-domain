import React from 'react'
import { motion } from "framer-motion"

const DomainOverview = () => {
  const initial = { x: 0, y: -12, opacity: 0 }
  const animate = { x: 0, y: 0, opacity: 1 }
  const transition = { duration: 0.5 }
  return (
    <motion.div initial={initial} animate={animate} transition={transition} className='domain-overview space-section'>
     <h4 className='py-4'>Domain overview</h4>
       <div className='item-bg'>
      <p>Domain name</p>
      <div className='d-flex justify-content-end flex-wrap align-items-center'>
      <h5 className='mx-sm-0 mx-md-5'>anahi.ns.cloudflare.com</h5>
      <a className='mx-2 mx-md-3'>change</a>
      </div>

     </div>
     <div className='item-bg'>
      <p>Status</p>
      <h5 className='root'>Running</h5>
     </div>
     <div className='item-bg'>
      <p>EMAIL VERIFICATION STATUS</p>
      <h5 className='root' >Verified</h5>
     </div>
     <div className='item-bg'>
      <p>Expires at </p>
      <h5>2023-8-01 02:59:59</h5>
     </div>
     <div className='item-bg'>
      <p>Secret key</p>
      <h5>*********</h5>
     </div>
     </motion.div >
  )
}

export default DomainOverview