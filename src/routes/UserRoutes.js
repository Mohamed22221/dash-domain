import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Analytics from '../pages/user/Analytics'
import DashboardUser from '../pages/user/DashboardUser'
import Domain from '../pages/user/Domain'

const UserRoutes = ({showSide}) => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<DashboardUser showSide={showSide} />} />
      <Route path='/dashboard' element={<DashboardUser showSide={showSide} />} />
      <Route path='/analytics' element={<Analytics showSide={showSide} />} />
      <Route path='/domain' element={<Domain showSide={showSide} />} />
      </Routes>
    </div>
  )
}

export default UserRoutes