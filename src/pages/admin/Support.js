import React from 'react'
import MainSupport from '../../components/admin/support/MainSupport'
import TextHeader from '../../components/glopal/TextHeader'

const Support = ({ showSide }) => {
 return (
  <div className={showSide ? "sub-container" : "sub-container-sm"}>

   <TextHeader title="Support" />
   <MainSupport />

  </div>
 )
}

export default Support