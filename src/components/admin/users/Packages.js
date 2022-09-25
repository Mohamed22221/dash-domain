import React, { useState } from 'react'
import CardPackages from '../../glopal/CardPackages'
import TextHeader from '../../glopal/TextHeader'
import ToggleThreeBottons from '../../glopal/ToggleThreeBottons'
import { motion } from "framer-motion"

const Packages = () => {
 const [active, setActive] = useState("Hosting")
 const initial = { x: 0, y: -12, opacity: 0 }
 const animate = { x: 0, y: 0, opacity: 1 }
 const transition = { duration: 0.5 }
 return (
  <div className='space-section'>
   <TextHeader title="Packages" />
   <div className='main-packeges space-section'>
    <ToggleThreeBottons
     name1="Hosting"
     name2="Domain"
     name3="SMS"
     active={active}
     setActive={setActive}
    />
    <div className='body-packages '>
     {
      active === "Hosting" ?
       <motion.div initial={initial} animate={animate} transition={transition}  className='hosting row justify-content-evenly'>
        <CardPackages title="Shared" packages="BASIC" price="$25.99" time="/month" />
        <CardPackages title="dedicated" packages="BASIC" price="$25.99" time="/month" />
        <CardPackages title="VPS" packages="BASIC" price="$25.99" time="/month" />
       </motion.div  >

       : active === "Domain" ?
        <motion.div initial={initial} animate={animate} transition={transition}  className='hosting row justify-content-evenly'>
         <CardPackages title=".com" packages="Domain 1" price="$25.99" />
         <CardPackages title=".net" packages="Domain 2" price="$25.99" />
         <CardPackages title=".org" packages="Domain 3" price="$25.99" />
        </motion.div  >
        :
        <motion.div initial={initial} animate={animate} transition={transition} className='hosting row justify-content-evenly'>
         <CardPackages title="" packages="2000 Credits" price="KWD25.99" />
         <CardPackages title="" packages="2000 Credits" price="KWD25.99" />
         <CardPackages title="" packages="2000 Credits" price="KWD25.99" />
        </motion.div >

     }

    </div>
   </div>
  </div>
 )
}

export default Packages