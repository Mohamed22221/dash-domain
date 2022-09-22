import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/admin/auth/Login'
import Domain from '../pages/user/Domain'
import { useState } from "react";
import Account from '../pages/user/Account'
import BarsLayout from '../layouts/BarsLayout'
import Profile from '../pages/user/Profile'
import DashboardAdmin from '../pages/admin/DashboardAdmin'
import Invoices from '../pages/admin/Invoices'

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
      <Route path='/admin/invoices' element={<Invoices showSide={showSide}/>} />
      <Route path='/admin/support' element={<Domain showSide={showSide}/>} />
      <Route path='/admin/account' element={<Account showSide={showSide}/>} />
      <Route path='/admin/profile' element={<Profile showSide={showSide}/>} />

      
      </Route>
      <Route path='/admin' element={<Login />} />
      <Route path="/admin/login" element={<Login />} />


    </Routes>
    
  </div>
  )
}

export default AdminRoutes