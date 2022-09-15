import React from 'react'
import DomyData from "../../glopal/DomyData"
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const DnsRecord = () => {
 return (
  <div className='flow'>
   <table class="table table-hover ">
    <thead>
     <tr>
      <th className='title' scope="col">type</th>
      <th className='title' scope="col">name</th>
      <th className='title' scope="col">priority</th>
      <th className='title' scope="col">Content</th>
      <th className='title' scope="col">TTL</th>
      <th className='title'  scope="col">Action</th>
      <th className='title title-add' scope="col">Add Record</th>

     </tr>
    </thead>
    <tbody>
     {DomyData.map(item => {
      return (
       <tr className='trr'>

        <td className='primary'>{item.type}</td>
        <td className='primary'>{item.name}</td>
        <td className='primary'>{item.priority}</td>
        <td className='primary'>{item.Content}</td>
        <td className='primary'>{item.TTL}</td>
        <td className='primary'><BiDotsHorizontalRounded/></td>
        <td className='primary'></td>


       </tr>
      )
     })}


    </tbody>
   </table>
  </div>
 )
}

export default DnsRecord