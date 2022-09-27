import React from 'react'
import Tabel from '../../components/admin/admins/Tabel'
import TextHeader from '../../components/glopal/TextHeader'
const Admins = ({showSide}) => {
  return (
   <div className={showSide ? "sub-container" : "sub-container-sm" }>

   <TextHeader title="Admins" />
   <Tabel />
   </div>
  )
}

export default Admins