import React from 'react'

const BgBlur = ({setShowBlurSide , toggleClass}) => {
  return (
   <div className={toggleClass ? 'bg-blur hide-blur' : "bg-blur show-blur" } onClick={() => setShowBlurSide(true)}></div>
   )
}

export default BgBlur