import React from 'react'

const AboutAccount = () => {
  return (
   <>
    <div className='about-account '>
     <div className='head-about'>
      <h4>Domain</h4>
     </div>
     <div className='body-about d-flex justify-content-between align-items-center'>
      <div>
      <h5>easymediaasms.onlin</h5>
      <p>Expires on 2023-08-01</p>
      </div>
      <div>
      <button className='btn btn__primary' >Mange</button>

      </div>
     </div>
    </div>
    <div className='about-account '>
     <div className='head-about'>
      <h4>Vps</h4>
     </div>
     <div className='body-about d-flex justify-content-between align-items-center'>
      <div>
      <h5>easymedia.cloud</h5>
      <p>Expires on 2023-08-01</p>
      </div>
      <div>
      <button className='btn btn__primary' >Mange</button>

      </div>
     </div>
    </div>
    </>
  )
}

export default AboutAccount