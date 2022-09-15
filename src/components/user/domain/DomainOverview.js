import React from 'react'

const DomainOverview = () => {
  return (
    <div className='domain-overview space-section'>
     <h4 className='py-4'>Domain overview</h4>
       <div className='item-bg'>
      <p>Domain name</p>
      <div className='d-flex align-items-center'>
      <h5 className='mx-5'>anahi.ns.cloudflare.com</h5>
      <a className='mx-3'>change</a>
      </div>

     </div>
     <div className='item-bg'>
      <p>Status</p>
      <h5 className='root'>Running</h5>
     </div>
     <div className='item-bg'>
      <p>EMAIL VERIFICATION STATUS</p>
      <h5 className='root' >Verified</h5>
     </div>
     <div className='item-bg'>
      <p>Expires at </p>
      <h5>2023-8-01 02:59:59</h5>
     </div>
     <div className='item-bg'>
      <p>Secret key</p>
      <h5>*********</h5>
     </div>
     </div>
  )
}

export default DomainOverview