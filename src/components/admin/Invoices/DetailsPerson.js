import React from 'react'

//images
import preson from "../../../assets/images/main/account.png"
import avatar from "../../../assets/images/main/person.jpeg"
//icons
import { BsCalendarDate } from 'react-icons/bs';
import { BiMoney } from 'react-icons/bi';
import { VscFeedback } from 'react-icons/vsc';





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
      <h6>Start Date <span><BsCalendarDate/></span></h6>
      <p>{detailsPerson.start}</p>
     </div>
     <div className='item'>
      <h6>End Date <span><BsCalendarDate/></span></h6>
      <p>{detailsPerson.end}</p>
     </div>


    </div>
    <div className='main-about'>
     <div className='item'>
      <h6>Amount <span><BiMoney/></span></h6>
      <p>{detailsPerson.amount}</p>
     </div>
     <div className='item'>
      <h6>Type<span><VscFeedback/></span></h6>
      <p className={detailsPerson.type === "Shard host" ? "green" : detailsPerson.type === "Domain" ? "blue" : "red"}>{detailsPerson.type}</p>
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