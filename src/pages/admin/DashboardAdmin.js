import React from 'react'
import WebsiteOverview from '../../components/admin/dashboard/WebsiteOverview'
import Wedgets from '../../components/admin/dashboard/Wedgets'
import TextHeader from '../../components/glopal/TextHeader'

const DashboardAdmin = ({showSide}) => {
  return (
   <div className={showSide ? "sub-container" : "sub-container-sm" }>

   <TextHeader title="Hey, Welcome back" />
   <Wedgets />
   <WebsiteOverview />
 </div>
  )
}

export default DashboardAdmin