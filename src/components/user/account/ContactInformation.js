import React, { useState } from 'react'
import ChangeContact from './ChangeContact'
import { motion } from "framer-motion"

const ContactInformation = () => {
 const [toggleChange, setToggleChange] = useState(true)
 const initial = { x: 0, y: -12, opacity: 0 }
 const animate = { x: 0, y: 0, opacity: 1 }
 const transition = { duration: 0.5 }
 return (
  <div>
   <div className='contact-information space-section'>
    {toggleChange ?
     <motion.div initial={initial} animate={animate} transition={transition}>
      <div className='header d-flex justify-content-between align-items-center'>
       <h5 className='py-4'>Contact information</h5>
       <button className="btn btn__primary" onClick={() => setToggleChange(false)}>Change</button>
      </div>

      <div className='item-bg'>
       <p>Name</p>
       <h5 className=''>Cameron Williamson</h5>
      </div>
      <div className='item-bg'>
       <p>Company</p>
       <h5 >Easy media Company</h5>
      </div>
      <div className='item-bg'>
       <p>Address</p>
       <h5  >8502 Preston Rd. Inglewood, Maine 98380</h5>
      </div>
      <div className='item-bg'>
       <p>Email </p>
       <h5>jessica.hanson@example.com</h5>
      </div>
      <div className='item-bg'>
       <p>Phone</p>
       <h5>+965 999997785</h5>
      </div>
      <div className='item-bg'>
       <p>Mobile</p>
       <h5>41452634</h5>
      </div>
     </motion.div >
     : <ChangeContact setToggleChange={setToggleChange} />
    }


   </div>
  </div>
 )
}

export default ContactInformation