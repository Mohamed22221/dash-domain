import React from 'react'
import { useParams } from 'react-router-dom'
import DomyData3 from '../../glopal/DomyData3'
import TextHeader from '../../glopal/TextHeader'
import CardUser from "./cardUser"
import Packages from './Packages'
const InformationUser = ({ showSide }) => {
 // params id 
 const Params = useParams()
 const ParamsId = `${Params.userid}`

 return (
  <div className={showSide ? "sub-container" : "sub-container-sm"}>
   <TextHeader title="Personal Information" />
   {DomyData3.filter((item) => item.id === ParamsId).map((item) => {
    return (
     <div className='main-information-user space-section'>
      <CardUser {...item}/>
      <Packages />
     </div>
    )
   })}
   
  </div>
 )
}

export default InformationUser