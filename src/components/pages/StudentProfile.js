import React from 'react'
import Nav from '../Nav'
import SiteMenu from '../SiteMenu'
import EditProfile from '../stydent_profile/edit_Profile'
 
const StudentProfile = () => {
  return (
   <>
    <Nav />
     <div className='flex gap-10'>
      <div>
        <SiteMenu />
      </div>
      <div>
        <EditProfile />
      </div>
     </div>
   </>
  )
}

export default StudentProfile