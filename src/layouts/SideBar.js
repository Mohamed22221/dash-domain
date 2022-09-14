import React from 'react'
import logo from "../assets/images/logos/logo.png"
import { FiGrid } from 'react-icons/fi';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { MdDomainVerification } from 'react-icons/md';
import { MdPersonAddAlt } from 'react-icons/md';
import { HiOutlineChat } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';


const SideBar = ({showSide ,setShowSide ,showSideSm}) => {
  return (
    <nav 
    className={
      showSide && showSideSm  ? "sidebar hide" 
      :showSideSm === false ? "sidebar show"  : "sidebar sidehide " 
       
    }  
    >
     <div >
      <div className='logo'>
        <a href='#'><img src={logo} /></a>
        <div onClick={() => setShowSide(!showSide)} class="arrow"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><g fill="currentColor" fill-rule="nonzero"><path d="M14.3283 11.4343 18.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z" opacity=".48"></path><path d="M8.3283 11.4343 12.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z"></path></g></g></svg></div>
      </div>
      <div className='links'>
          <NavLink to="/dashboard" className='route'>
          <FiGrid/>
          <p>Dashboard</p>
          </NavLink>
          <NavLink to="/analytics" className='route '>
          <TbDeviceAnalytics/>
          <p >Analytics</p>
          </NavLink>
          <NavLink to="/domain" className='route '>
          <MdDomainVerification/>
          <p >Domain</p>
          </NavLink>
          <NavLink to="/account" className='route '>
          <MdDomainVerification/>
          <p >My account</p>
          </NavLink>
          <NavLink to="/support" className='route '>
          <MdDomainVerification/>
          <p >Supportt</p>
          </NavLink>


      </div>
      
     </div>
    </nav >
  )
}

export default SideBar