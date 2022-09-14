import React from 'react'

const InputSelect = ({ value, setValue, title ,select1 ,select2  }) => {
 return (
  <div className='input__box'>
   <label className="input__label" htmlFor="email">{title}</label>
   <select className="input input__select" value={value}>
    <option value="volvo">{select1 ? select1 : "select" }</option>
    <option value="saab">{select2 ? select2 : "select" }</option>


   </select>
  </div>
 )
}

export default InputSelect