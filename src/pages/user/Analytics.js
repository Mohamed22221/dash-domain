import React, { useState } from 'react'
import TextHeader from '../../components/glopal/TextHeader'
import VpsServers from '../../components/user/analytics/VpsServers'
import Wedgits from '../../components/user/analytics/Wedgits'


const Analytics = ({showSide}) => {

  return (
    <div className={showSide ? "sub-container" : "sub-container-sm"}>

      <TextHeader title="Analytics" />
      <Wedgits />
      <VpsServers />

    </div>
  )
}

export default Analytics