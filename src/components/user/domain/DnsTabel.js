import React, { useState } from 'react'
import ToggleThreeBottons from '../../glopal/ToggleThreeBottons'
import DnsRecord from './DnsRecord'
import { motion } from "framer-motion"

const DnsTabel = () => {
 const [active, setActive] = useState("Dns record")
 const initial = { x: 0, y: -12, opacity: 0 }
 const animate = { x: 0, y: 0, opacity: 1 }
 const transition = { duration: 0.5 }
 return (
  <motion.div initial={initial} animate={animate} transition={transition} className='dns-Tabel'>
   <div className='head-dns'>
    <h4 className='py-4'>DNS</h4>
    <ToggleThreeBottons
     name1="Dns record"
     name2="child name servers"
     name3="Dnssec"
     active={active}
     setActive={setActive}
    />
   </div>
   <div className='body-dns'>
   {
     active === "Dns record" ? <DnsRecord /> 
    :active === "child name servers" ? <DnsRecord /> 
    :<DnsRecord /> 
    }
   </div>
  </motion.div >
 )
}

export default DnsTabel