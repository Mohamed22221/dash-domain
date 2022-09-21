import React from 'react'

const TextHeader = ({ title }) => {
  return (
    <div >
      <h3 className='secound weight-bold text-center text-md-start'
      style={{ textShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
      {title}
      </h3>
    </div>
  )
}

export default TextHeader