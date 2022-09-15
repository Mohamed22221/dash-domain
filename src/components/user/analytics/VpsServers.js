
import React, { useState } from 'react'
import ToggleThreeBottons from '../../glopal/ToggleThreeBottons'
import PlanDetails from './PlanDetails'
import VbsAccess from './VbsAccess'
import VpsInfo from './VpsInfo'

const VpsServers = () => {
 const [active, setActive] = useState("plan details")
 return (
  <div className='main-vps-serveses '>
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

  </div>
 )
}

export default VpsServers