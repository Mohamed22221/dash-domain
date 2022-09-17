import React, { useState } from 'react'
import TextHeader from '../../components/glopal/TextHeader'
import DnsTabel from '../../components/user/domain/DnsTabel'
import DomainOverview from '../../components/user/domain/DomainOverview'
import SideBar from '../../layouts/SideBar'
import Topbar from '../../layouts/Topbar'

const Domain = ({showSide ,setShowSide ,showSideSm ,setShowSideSm}) => {


  return (
    <div className={showSide ? "sub-container" : "sub-container-sm"}>
      <SideBar showSide={showSide} setShowSide={setShowSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm} />
      <Topbar showSide={showSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm} />
      <TextHeader title="Domain" />
      <DomainOverview />
      <DnsTabel />


    </div>
  )
}

export default Domain