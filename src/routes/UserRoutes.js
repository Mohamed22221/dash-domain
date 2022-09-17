import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/user/auth/Login'
import Analytics from '../pages/user/Analytics'
import DashboardUser from '../pages/user/DashboardUser'
import Domain from '../pages/user/Domain'
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Account from '../pages/user/Account'
import SideBar from '../layouts/SideBar'
import BarsLayout from '../layouts/BarsLayout'

const UserRoutes = () => {

  const [showSide, setShowSide] = useState(true)
  const [showSideSm, setShowSideSm] = useState(true)

  return (
    <div>
      <Routes>
        <Route element={<BarsLayout 
        showSide={showSide}
        setShowSide={setShowSide}
        showSideSm={showSideSm}
        setShowSideSm={setShowSideSm}
        /> }>

        <Route path='/dashboard' element={<DashboardUser showSide={showSide}/>} />
        <Route path='/analytics' element={<Analytics showSide={showSide}/>} />
        <Route path='/domain' element={<Domain showSide={showSide}/>} />
        <Route path='/account' element={<Account showSide={showSide}/>} />
        
        </Route>
        <Route path='/' element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/analytics" element={<Analytics />} />

      </Routes>
    </div>
  )
}

export default UserRoutes