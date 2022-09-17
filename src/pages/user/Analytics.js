import React, { useState } from 'react'
import TextHeader from '../../components/glopal/TextHeader'
import VpsServers from '../../components/user/analytics/VpsServers'
import Wedgits from '../../components/user/analytics/Wedgits'
import SideBar from '../../layouts/SideBar'
import Topbar from '../../layouts/Topbar'

const Analytics = ({showSide ,setShowSide ,showSideSm ,setShowSideSm}) => {

  return (
    <div className={showSide ? "sub-container" : "sub-container-sm"}>
      <SideBar showSide={showSide} setShowSide={setShowSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm} />
      <Topbar showSide={showSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm} />
      <TextHeader title="Analytics" />
      <Wedgits />
      <VpsServers />

    </div>
  )
}

export default Analytics