import React from 'react'
import TextHeader from '../../components/glopal/TextHeader'

const Analytics = ({showSide}) => {
  return (
   <div className={showSide ? "sub-container" : "sub-container-sm" }>
   <TextHeader title="Analytics" />

 </div>
  )
}

export default Analytics