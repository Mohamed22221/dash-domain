import React from 'react'
import TextHeader from '../../components/glopal/TextHeader'
import DomainOverview from '../../components/user/domain/DomainOverview'

const Domain = ({showSide}) => {
  return (
   <div className={showSide ? "sub-container" : "sub-container-sm" }>
   <TextHeader title="Domain" />
   <DomainOverview />


 </div>
  )
}

export default Domain