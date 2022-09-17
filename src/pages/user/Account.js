import React from 'react'
import TextHeader from '../../components/glopal/TextHeader'
import AboutAccount from '../../components/user/account/AboutAccount'
import ContactInformation from '../../components/user/account/ContactInformation'
import SideBar from '../../layouts/SideBar'
import Topbar from '../../layouts/Topbar'

const Account = ({showSide}) => {
  return (
   <div className={showSide ? "sub-container" : "sub-container-sm"}>

   <TextHeader title="My account" />
   <ContactInformation />
   <AboutAccount />


 </div>
  )
}

export default Account