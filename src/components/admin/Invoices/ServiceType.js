import React from 'react'
import { BsSearch } from 'react-icons/bs';
const ServiceType = () => {
  return (
    <div className='services-type space-section'>
      <h5>Service Type</h5>
      <div className='services row my-5'>
          <select className="input input__select  col-xl-3" >
            <option value="volvo">All</option>
            <option value="saab">Root </option>
          </select>
          <input type="text" className="input input__field col-xl-2" placeholder='Start Date' 
           onFocus={(e) => e.target.type = 'date'}>
           </input>
          <input type="text" className="input input__field col-xl-2" placeholder='End Date'  
          onFocus={(e) => e.target.type = 'date'}>
          </input>
          <div className="input search-input col-xl-4">
          <BsSearch/>
          <input placeholder="Search" />
          </div>


      </div>
    </div>
  )
}

export default ServiceType