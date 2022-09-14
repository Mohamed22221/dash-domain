import React, { useState } from 'react'
//icons
import { BsSearch } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';
import { RiMenu2Fill } from 'react-icons/ri';
//images
import notification from "../assets/images/icons/notification.svg"
import account from "../assets/images/main/account.png"
//combonent
import AccountMenu from '../components/glopal/Menu';



const Topbar = ({ showSide, showSideSm, setShowSideSm }) => {
  const [toggleSearch, setToggleSearch] = useState(true)
  return (
    <nav className='topbar '>
      <div className={showSide ? 'main-topbar container-inline ' : "main-topbar container-inline-sm"}>
        <div className='box'>
          {/*search & menu par */}
          <div className='d-flex align-items-center'>
            <RiMenu2Fill className='menu' onClick={() => {
              setShowSideSm(!showSideSm)
              setToggleSearch(true)
            }
            } />
            {toggleSearch ?
              <FiSearch className='search-icon' onClick={() => setToggleSearch(false)} />
              : <MdOutlineClose className='search-icon' onClick={() => setToggleSearch(true)} />
            }
            <div className={toggleSearch ? 'search input input__search' : 'search show input input__search'}>
              <BsSearch /><input placeholder='Search' />
            </div>
          </div>
          {/*notification & account */}
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