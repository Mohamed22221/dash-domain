import React from 'react'
import ServiceType from '../../components/admin/Invoices/ServiceType'
import Tabel from '../../components/admin/Invoices/Tabel'
import Wedgets from '../../components/admin/Invoices/Wedgets'
import TextHeader from '../../components/glopal/TextHeader'

const Invoices = ({showSide}) => {
  return (
   <div className={showSide ? "sub-container" : "sub-container-sm" }>

   <TextHeader title="Invoices" />
   <Wedgets />
   <ServiceType />
   <Tabel />

 </div>
  )
}

export default Invoices