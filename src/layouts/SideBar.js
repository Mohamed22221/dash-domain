import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
//icons
import { FiGrid } from 'react-icons/fi';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { MdDomainVerification } from 'react-icons/md';
import { MdPersonAddAlt } from 'react-icons/md';
import { HiOutlineChat } from 'react-icons/hi';
//images
import logo from "../assets/images/logos/logo.png"

const SideBar = ({ showSide, setShowSide, showSideSm, setShowSideSm }) => {
  const location = useLocation().pathname.slice(1,6)

  console.log(location)
  return (
    
    <nav
    
      className={
        showSide && showSideSm ? "sidebar hide"
          : showSideSm === false ? "sidebar show" : "sidebar sidehide "
      }
    >
      <div >
        <div className='logo'>
          <NavLink to={location ==="admin" ? "/admin/dashboard":"/dashboard"}><img src={logo} /></NavLink>
          <div onClick={() => setShowSide(!showSide)} class="arrow"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><g fill="currentColor" fill-rule="nonzero"><path d="M14.3283 11.4343 18.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z" opacity=".48"></path><path d="M8.3283 11.4343 12.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z"></path></g></g></svg></div>
        </div>
        <div className='links'>
          <div  >
            <NavLink  to={location ==="admin" ? "/admin/dashboard":"/dashboard"} className='route' onClick={() => setShowSideSm(true)} >
              <FiGrid />
              <p>dashboard</p>
            </NavLink>
          </div>
          <NavLink to="/analytics" className='route ' onClick={() => setShowSideSm(true)}>
            <TbDeviceAnalytics />
            <p >Analytics</p>
          </NavLink>
          <NavLink to="/domain" className='route ' onClick={() => setShowSideSm(true)}>
            <MdDomainVerification />
            <p >Domain</p>
          </NavLink>
          <NavLink to="/account" className='route ' onClick={() => setShowSideSm(true)}>
            <MdPersonAddAlt />
            <p >My account</p>
          </NavLink>
          <NavLink to="/support" className='route ' onClick={() => setShowSideSm(true)}>
            <HiOutlineChat />
            <p >Supportt</p>
          </NavLink>


        </div>

      </div>
    </nav >
  )
}

export default SideBar