import React from 'react'
import { useParams } from 'react-router-dom'
import Tabel from '../../components/admin/users/Tabel'

import TextHeader from '../../components/glopal/TextHeader'
const Users = ({ showSide }) => {

  return (
    <div className={showSide ? "sub-container" : "sub-container-sm"}>

      <TextHeader title="Users" />
      <Tabel   />
      

    </div>
  )
}

export default Users