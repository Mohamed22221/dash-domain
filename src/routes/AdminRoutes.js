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
import Users from '../pages/admin/Users';
import InformationUser from '../components/admin/users/InformationUser';
import Support from '../pages/admin/Support';

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
      <Route path='/admin/support' element={<Support showSide={showSide}/>} />
      <Route path='/admin/users' element={<Users showSide={showSide}/>} />
      <Route path="admin/user" element={<InformationUser showSide={showSide} />} >
      <Route path=":userid" element={<InformationUser showSide={showSide}/>} />
      </Route>
      <Route path='/admin/profile' element={<Profile showSide={showSide}/>} />

      
      </Route>
      <Route path='/admin' element={<Login />} />
      <Route path="/admin/login" element={<Login />} />


    </Routes>
    
  </div>
  )
}

export default AdminRoutes