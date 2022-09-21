import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/admin/auth/Login'
import Analytics from '../pages/user/Analytics'
import Domain from '../pages/user/Domain'
import { useState } from "react";

import Account from '../pages/user/Account'
import SideBar from '../layouts/SideBar'
import BarsLayout from '../layouts/BarsLayout'
import Profile from '../pages/user/Profile'
import SignUp from '../components/user/auth/SignUp'
import DashboardAdmin from '../pages/admin/DashboardAdmin'

const AdminRoutes = () => {
  const [showSide, setShowSide] = useState(true)
  const [showSideSm, setShowSideSm] = useState(true)
  const [showBlurSide, setShowBlurSide] = useState(true)
  return (
    <div>
    <Routes>
      <Route element={<BarsLayout 
      showSide={showSide}
      setShowSide={setShowSide}
      showSideSm={showSideSm}
      setShowSideSm={setShowSideSm}
      showBlurSide={showBlurSide}
      setShowBlurSide={setShowBlurSide}
      /> }>
       
      <Route path='/admin/dashboard' element={<DashboardAdmin showSide={showSide}/>} />
      <Route path='/analytics' element={<Analytics showSide={showSide}/>} />
      <Route path='/domain' element={<Domain showSide={showSide}/>} />
      <Route path='/account' element={<Account showSide={showSide}/>} />
      <Route path='/profile' element={<Profile showSide={showSide}/>} />

      
      </Route>
      <Route path='/admin' element={<Login />} />
      <Route path="/admin/login" element={<Login />} />


    </Routes>
    
  </div>
  )
}

export default AdminRoutes