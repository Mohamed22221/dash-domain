import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
//icons
import { FiGrid } from 'react-icons/fi';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { MdDomainVerification } from 'react-icons/md';
import { HiOutlineChat } from 'react-icons/hi';
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'
import { FaUsersCog } from 'react-icons/fa'
//images
import logo from "../assets/images/logos/logo.png"

const SideBar = ({ showSide, setShowSide, showSideSm, setShowSideSm }) => {
  const location = useLocation().pathname.slice(1, 6)

  return (
    <nav
      className={
        showSide && showSideSm ? "sidebar hide"
          : showSideSm === false ? "sidebar show" : "sidebar sidehide "
      }
    >
      <div >
        <div className='logo'>
          <NavLink to={location === "admin" ? "/admin/dashboard" : "/dashboard"}><img src={logo} /></NavLink>
          <div onClick={() => setShowSide(!showSide)} class="arrow"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><g fill="currentColor" fill-rule="nonzero"><path d="M14.3283 11.4343 18.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z" opacity=".48"></path><path d="M8.3283 11.4343 12.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z"></path></g></g></svg></div>
        </div>
        <div className='links'>
          <div  >
            <NavLink to={location === "admin" ? "/admin/dashboard" : "/dashboard"} className='route' onClick={() => setShowSideSm(true)} >
              <FiGrid />
              <p>dashboard</p>
            </NavLink>
          </div>
          <NavLink to={location === "admin" ? "/admin/invoices" : "/analytics"} className='route ' onClick={() => setShowSideSm(true)}>
            {location === "admin" ? <HiOutlineCurrencyDollar /> : <TbDeviceAnalytics />}
            <p >{location === "admin" ? "Invoices" : "Analytics"}</p>
          </NavLink>
          <NavLink to={location === "admin" ? "/admin/support" : "/domain"}  className='route ' onClick={() => setShowSideSm(true)}>
            {location === "admin" ? <HiOutlineChat />: <MdDomainVerification />}
            <p >{location === "admin" ? "Support" : "Domain"}</p>
          </NavLink>
          {location === "admin" && <h5 className='mx-5'>{showSide === true && "Managment"}</h5>}
          
          <NavLink to={location === "admin" ? "/admin/users" : "/account"}  className='route ' onClick={() => setShowSideSm(true)}>
            <BiUser />
            <p >{location === "admin" ? "Users" : "My account"}</p>
          </NavLink>
          <NavLink to={location === "admin" ? "/admin/admins" : "/support"}  className='route ' onClick={() => setShowSideSm(true)}>
            
            {location === "admin" ? <FaUsersCog />: <HiOutlineChat />}
            <p >{location === "admin" ? "Admins" : "Support"}</p>
          </NavLink>


        </div>

      </div>
    </nav >
  )
}

export default SideBar