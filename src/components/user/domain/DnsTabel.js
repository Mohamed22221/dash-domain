import React, { useState } from 'react'
import ToggleThreeBottons from '../../glopal/ToggleThreeBottons'
import DnsRecord from './DnsRecord'

const DnsTabel = () => {
 const [active, setActive] = useState("Dns record")

 return (
  <div className='dns-Tabel'>
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
  </div>
 )
}

export default DnsTabel