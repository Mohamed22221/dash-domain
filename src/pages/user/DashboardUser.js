import React, { useState } from 'react'
import TextHeader from '../../components/glopal/TextHeader'
import TrafficOverview from '../../components/user/dashboard/TrafficOverview'
import Wedgits from '../../components/user/dashboard/Wedgits'

const DashboardUser = ({showSide}) => {

  return (
    <div className={showSide ? "sub-container" : "sub-container-sm" }>

      <TextHeader title="Hey, Welcome back" />
      <Wedgits />
      <TrafficOverview />
    </div>
  )
}

export default DashboardUser