import React from 'react'
import { motion } from "framer-motion"

const AboutAccount = () => {
  const initial = { x: 0, y: -12, opacity: 0 }
  const animate = { x: 0, y: 0, opacity: 1 }
  const transition = { duration: 0.5 }
  return (
   <>
    <motion.div initial={initial} animate={animate} transition={transition} className='about-account '>
     <div className='head-about'>
      <h4>Domain</h4>
     </div>
     <div className='body-about d-flex justify-content-between align-items-center'>
      <div>
      <h5>easymediaasms.onlin</h5>
      <p>Expires on 2023-08-01</p>
      </div>
      <div>
      <button className='btn btn__primary' >Mange</button>

      </div>
     </div>
    </motion.div>
    <motion.div initial={initial} animate={animate} transition={transition} className='about-account '>
     <div className='head-about'>
      <h4>Vps</h4>
     </div>
     <div className='body-about d-flex justify-content-between align-items-center'>
      <div>
      <h5>easymedia.cloud</h5>
      <p>Expires on 2023-08-01</p>
      </div>
      <div>
      <button className='btn btn__primary' >Mange</button>

      </div>
     </div>
    </motion.div >
    </>
  )
}

export default AboutAccount