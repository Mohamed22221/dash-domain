import React from 'react'
import { BiUpArrow } from 'react-icons/bi';

import lineblue from "../../../assets/images/icons/lineblue.png"
import linegreen from "../../../assets/images/icons/linegreen.png"
import linered from "../../../assets/images/icons/linered.png"
import lineyellow from "../../../assets/images/icons/lineyallow.png"




const Wedgits = () => {
 return (
  <div className='wedgits space-section'>
   <div className='row'>
    {/*left-wedgets */}
    <div className='left-wedgets col-12 col-xl-6  h2'>
      <div className=' row mr-3 '>


      <div className='col-xl-6'>
    <div className='item-wedgets wedgets1 m-3 '>
      <div>
       <p >Website views</p>
       <h4>7102</h4>
       <p className='percentage percentage-1'><BiUpArrow/>2,5%</p>
      </div>
      <div className='img'>
       <img src={lineblue} />
      </div> 
     </div>
     </div>
     
     <div className='col-xl-6'>
    <div className='item-wedgets wedgets2 m-3 '>
      <div>
       <p >Sign up</p>
       <h4>7102</h4>
       <p className='percentage percentage-2'><BiUpArrow/>2,5%</p>
      </div>
      <div className='img'>
       <img src={linegreen} />
      </div> 
     </div>
     </div>

     <div className='col-xl-6'>
    <div className='item-wedgets wedgets3 m-3 '>
      <div>
       <p >Sign in</p>
       <h4>7102</h4>
       <p className='percentage percentage-3'><BiUpArrow/>2,5%</p>
      </div>
      <div className='img'>
       <img src={lineyellow} />
      </div> 
     </div>
     </div>
     
     <div className='col-xl-6'>
    <div className='item-wedgets wedgets4 m-3 '>
      <div>
       <p >Log out</p>
       <h4>7102</h4>
       <p className='percentage percentage-4'><BiUpArrow/>2,5%</p>
      </div>
      <div className='img'>
       <img src={linered} />
      </div> 
     </div>
     </div>


     </div>
    </div>
        {/*left-wedgets */}

      <div className='col-12 col-xl-6'>
      <div className='right-wedgets h2 m-3'>
     <h4>My Domain</h4>
     <p className='info'>Upgrade or download this site</p>
     <div className='item-right-wedgets'>
      <div>
       <h5 className='weight-medium'>abx.Com</h5>
       <p className='info'>Expiry Date :20/12/2022</p>
      </div>
      <h4 className='primary'>200 $</h4>

     </div>
     <div className='item-right-wedgets'>
      <div>
       <h5 className='weight-medium'>abx.Com</h5>
       <p className='info'>Expiry Date :20/12/2022</p>
      </div>
      <h4 className='primary'>200 $</h4>

     </div>


    </div>
    
    </div>
   </div>
  </div>
 )
}

export default Wedgits