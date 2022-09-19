import React from 'react'
import BgBlur from '../components/glopal/BgBlur'

const BlurSideBar = ({setShowBlurSide ,showBlurSide ,children}) => {
  return (
    <div >
     <BgBlur toggleClass={showBlurSide} setShowBlurSide={setShowBlurSide}  />
     <div className={showBlurSide ? 'main-blur-sidebar' : "main-blur-sidebar show" }>
      <div className='py-4 px-4'>
       {children}
      </div>
     </div>
    </div>
  )
}

export default BlurSideBar