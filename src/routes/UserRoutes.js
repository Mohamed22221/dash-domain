import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/user/auth/Login'
import Analytics from '../pages/user/Analytics'
import DashboardUser from '../pages/user/DashboardUser'
import Domain from '../pages/user/Domain'
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const UserRoutes = () => {

  const [showSide, setShowSide] = useState(true)
  const [showSideSm, setShowSideSm] = useState(true)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<DashboardUser
          showSide={showSide}
          setShowSide={setShowSide}
          showSideSm={showSideSm}
          setShowSideSm={setShowSideSm}
        />} />
        <Route path='/analytics' element={<Analytics
          showSide={showSide}
          setShowSide={setShowSide}
          showSideSm={showSideSm}
          setShowSideSm={setShowSideSm}

        />} />
        <Route path='/domain' element={<Domain
          showSide={showSide}
          setShowSide={setShowSide}
          showSideSm={showSideSm}
          setShowSideSm={setShowSideSm}
        />}

        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default UserRoutes