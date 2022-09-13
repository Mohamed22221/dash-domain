import React from 'react'

const ToggleThreeBottons = ({name1 , name2 ,name3 ,active ,setActive}) => {
 
 return (
  <div>
   <div className='three-buttons'>
    <button onClick={() =>setActive(name1) } className={active === name1 ? 'btn btn__primary' : "btn" }>{name1}</button>
    <button onClick={() =>setActive(name2) } className={active === name2? 'btn btn__primary' : "btn" }>{name2}</button>
    <button onClick={() =>setActive(name3) } className={active === name3 ? 'btn btn__primary' : "btn" }>{name3}</button>

   </div>
  </div>
 )
}

export default ToggleThreeBottons