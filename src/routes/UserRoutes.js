import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/user/auth/Login'
import Analytics from '../pages/user/Analytics'
import DashboardUser from '../pages/user/DashboardUser'
import Domain from '../pages/user/Domain'
import { useState } from "react";

import Account from '../pages/user/Account'
import SideBar from '../layouts/SideBar'
import BarsLayout from '../layouts/BarsLayout'
import Profile from '../pages/user/Profile'
import SignUp from '../components/user/auth/SignUp'

const UserRoutes = () => {

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
         
        <Route path='/dashboard' element={<DashboardUser showSide={showSide}/>} />
        <Route path='/analytics' element={<Analytics showSide={showSide}/>} />
        <Route path='/domain' element={<Domain showSide={showSide}/>} />
        <Route path='/account' element={<Account showSide={showSide}/>} />
        <Route path='/profile' element={<Profile showSide={showSide}/>} />

        
        </Route>
        <Route path='/' element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/sign-up" element={<SignUp />} />

      </Routes>
      
    </div>
  )
}

export default UserRoutes