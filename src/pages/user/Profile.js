import React from 'react'
import TextHeader from '../../components/glopal/TextHeader'
import ProfileForm from '../../components/user/profile/ProfileForm'

const Profile = ({showSide}) => {
 return (
  <div className={showSide ? "sub-container" : "sub-container-sm"}>
   <TextHeader title="profile" />
   <ProfileForm />

  </div>
 )
}

export default Profile