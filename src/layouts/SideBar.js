import React from 'react'
import logo from "../assets/images/logos/logo.png"
import { FiGrid } from 'react-icons/fi';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { MdDomainVerification } from 'react-icons/md';
import { MdPersonAddAlt } from 'react-icons/md';
import { HiOutlineChat } from 'react-icons/hi';




const SideBar = () => {
  return (
    <nav className='sidebar' >
     <div >
      <div className='logo'>
        <a href='#'><img src={logo} /></a>
      </div>
      <div className='links'>
         <a href='#' className='active'><FiGrid/>Dashboard</a>
         <a href='#'><TbDeviceAnalytics/>analytics</a>
         <a href='#'><MdDomainVerification/>Domain</a>
         <a href='#'><MdPersonAddAlt />My account</a>
         <a href='#'><HiOutlineChat/>Support</a>
      </div>
      
     </div>
    </nav >
  )
}

export default SideBar