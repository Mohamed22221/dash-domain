import React from 'react'

//images
import avatar from "../../../assets/images/main/person.jpeg"
//icons
import { AiOutlineMail } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import { Link } from 'react-router-dom';





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
     <p>#{detailsPerson.id}</p>
    </div>
    <div className='main-date'>
     <div className='item'>
      <h6>Email <span><AiOutlineMail/></span></h6>
      <p>{detailsPerson.email}</p>
     </div>
     <div className='item'>
      <h6>Invoice <span><VscFeedback/></span></h6>
      <p className={detailsPerson.type === "Shard host" ? "green" : detailsPerson.type === "Domain" ? "blue" : "red"}>{detailsPerson.type}</p>
     </div>
    </div>
    <div className='button'>
      <Link to={`/admin/user/${detailsPerson.id}`}>
      
    <button className=" btn btn btn__primary ">See More</button>
    </Link>
    </div>
   </div>


  </div>

 )
}

export default DetailsPerson