import React from 'react'
import AbexPar from '../analytics/AbexPar'
import BarChart from './barChart'

const TrafficOverview = () => {
 return (
  <div className='traffic-overview my-3 m-md-3 space-section'>
   <div className='header-overview'>
    <h4>Traffic overview</h4>
    <div>
     <form>
      <input type="radio" id="age1" name="age" value="30" />
      <label for="age1">Upload</label>
      <input type="radio" id="age2" name="age" value="60" />
      <label for="age2">Download</label>
     </form>
    </div>

   </div>
   <div className='about-traffic row align-items-center gx-md-4'>
    <div className='col-12 col-lg-6 col-xl-5'>
     <div className='item-about daily'>
      <h3>13.87<span>/10GB</span></h3>
      <p>Daily traffic</p>

     </div>
     <div className='item-about hourly'>
      <h3>13.87<span>/10GB</span></h3>
      <p>Hourly traffic</p>

     </div>

    </div>
    <div className='col-12 col-lg-6 col-xl-7 charts'>
     <div className='item-about chart'>
    <AbexPar />
     </div>
    </div>

   </div>
  </div>
 )
}

export default TrafficOverview