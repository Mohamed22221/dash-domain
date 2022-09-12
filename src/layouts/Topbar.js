import React from 'react'
import { BsSearch } from 'react-icons/bs';
import notification from "../assets/images/icons/notification.svg"
import account from "../assets/images/main/account.png"
import more from "../assets/images/icons/more.svg"
import AccountMenu from '../components/glopal/Menu';

const Topbar = ({showSide}) => {
  return (
    <nav className='topbar'>
     <div className={showSide ? 'main-topbar container-inline ' : "main-topbar container-inline-sm"}>
      <div className='box'>
      <div className='input input__search'>
        <BsSearch/><input  placeholder='Search'  />
      </div>
      <div className='right-topbar'>
        <div className='notification'>
          <img src={notification} alt="notification" />
        </div>
        <div className='account'>
          <img src={account} alt="my-account" />
          <div>
            <h6>ahmed</h6>
            <p>admin</p>
          </div>
          <div className='more'>
          <AccountMenu />
          </div>
        </div>
      </div>  

      </div>

     </div>
    </nav>
  )
}

export default Topbar