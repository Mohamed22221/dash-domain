import React, { useState } from 'react'
import TextHeader from '../../components/glopal/TextHeader'
import DnsTabel from '../../components/user/domain/DnsTabel'
import DomainOverview from '../../components/user/domain/DomainOverview'
import SideBar from '../../layouts/SideBar'
import Topbar from '../../layouts/Topbar'

const Domain = ({showSide}) => {


  return (
    <div className={showSide ? "sub-container" : "sub-container-sm"}>

      <TextHeader title="Domain" />
      <DomainOverview />
      <DnsTabel />


    </div>
  )
}

export default Domain