import React from 'react'

//images
import avatar from "../../../assets/images/main/person.jpeg"
//icons
import { BsCalendarDate } from 'react-icons/bs';
import { BiMoney } from 'react-icons/bi';
import { VscFeedback } from 'react-icons/vsc';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };




const DetailsPerson = ({ checked, detailsPerson, keyChecked }) => {
 return (

  <div
   className={
    checked[keyChecked] === true
     ? "data-person show"
     : checked[keyChecked] === false
      ? "data-person hide"
      : "data-person hide"
   }
  >
   <div className='about-person'>
    <div className='header'>
     <h5>Card Deatails</h5>

    </div>
    <div className='img-person'>
     <img src={avatar} alt="person" />
     <h5>{detailsPerson.client}</h5>
     <p>#123</p>
    </div>
    <div className='main-date'>
     <div className='item'>
      <h6>Host<span><BsCalendarDate/></span></h6>
      <p><Switch {...label} color="default" /></p>
     </div>
     <div className='item'>
      <h6>Domain <span><BsCalendarDate/></span></h6>
      <p><Switch {...label} color="default" /></p>
     </div>


    </div>
    <div className='main-about'>
     <div className='item'>
      <h6>SMS <span><BiMoney/></span></h6>
      <p><Switch {...label} color="default" /></p>
     </div>
     <div className='item'>
      <h6>Support<span><VscFeedback/></span></h6>
      <p ><Switch {...label} color="default" /></p>
     </div>
     <div className='item'>
      <h6>Users<span><VscFeedback/></span></h6>
      <p><Switch {...label} color="default" /></p>
     </div>
    </div>
    <div className='button'>
    <button className=" btn btn btn__primary ">See More</button>
    </div>
   </div>


  </div>

 )
}

export default DetailsPerson