import React from 'react'
import TextHeader from '../../components/glopal/TextHeader'
import Wedgits from '../../components/user/dashboard/Wedgits'

const DashboardUser = () => {
  return (
    <div className='sub-container'>
      <TextHeader title="Hey, Welcome back" />
      <Wedgits />
    </div>
  )
}

export default DashboardUser