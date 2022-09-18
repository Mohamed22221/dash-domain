
import React, { useState } from 'react'
import ToggleThreeBottons from '../../glopal/ToggleThreeBottons'
import PlanDetails from './PlanDetails'
import VbsAccess from './VbsAccess'
import VpsInfo from './VpsInfo'
import { motion } from "framer-motion"

const VpsServers = () => {
 const [active, setActive] = useState("plan details")
 const initial = { x: 0, y: -12, opacity: 0 }
 const animate = { x: 0, y: 0, opacity: 1 }
 const transition = { duration: 0.5 }
 return (
  <motion.div initial={initial} animate={animate} transition={transition} className='main-vps-serveses '>
   <div className='head-vps'>
    <h4 className='my-3'>VPS Servers</h4>
    <ToggleThreeBottons
     name1="VPS info"
     name2="VPS Access"
     name3="plan details"
     active={active}
     setActive={setActive}
    />

   </div>
   <div className='body-vbs space-section '>
    {
     active === "plan details" ? <PlanDetails /> 
    :active === "VPS Access" ? <VbsAccess /> 
    :<VpsInfo /> 
    }
    
   </div>

  </motion.div >
 )
}

export default VpsServers