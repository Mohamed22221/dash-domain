import React, { useState } from 'react'
import SideBar from './SideBar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom';
const BarsLayout = ({showSide ,setShowSide ,showSideSm ,setShowSideSm}) => {

  return (
    <>
     <Outlet />
     <SideBar showSide={showSide} setShowSide={setShowSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm} />
     <Topbar showSide={showSide} setShowSide={setShowSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm} />
     
    </>
  )
}

export default BarsLayout