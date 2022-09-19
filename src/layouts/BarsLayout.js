import React, { useState } from 'react'
import SideBar from './SideBar'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom';
import BlurSideBar from './BlurSideBar';
import Notification from '../components/glopal/Notification';
const BarsLayout = ({ showSide, setShowSide, showSideSm, setShowSideSm, showBlurSide, setShowBlurSide }) => {

  return (
    <>
      <Outlet />
      <SideBar showSide={showSide} setShowSide={setShowSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm} />
      <Topbar showSide={showSide} setShowSide={setShowSide} showSideSm={showSideSm} setShowSideSm={setShowSideSm} setShowBlurSide={setShowBlurSide} />
      <Notification showBlurSide={showBlurSide} setShowBlurSide={setShowBlurSide} />
    </>
  )
}

export default BarsLayout