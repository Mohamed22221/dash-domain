import React, { useState } from 'react'
import TextHeader from '../../components/glopal/TextHeader'
import TrafficOverview from '../../components/user/dashboard/TrafficOverview'
import Wedgits from '../../components/user/dashboard/Wedgits'
import SideBar from '../../layouts/SideBar'
import Topbar from '../../layouts/Topbar'

const DashboardUser = ({showSide ,setShowSide ,showSideSm ,setShowSideSm}) => {

  return (
    <div className={showSide ? "sub-container" : "sub-container-sm" }>
      <SideBar showSide={showSide} setShowSide={setShowSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm} />
      <Topbar showSide={showSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm}  />
      <TextHeader title="Hey, Welcome back" />
      <Wedgits />
      <TrafficOverview />
    </div>
  )
}

export default DashboardUser