import React from 'react'
import './css/side_menu.css'
import { NavLink } from 'react-router-dom';
import AuthUser from './auth/AuthUser';

const Nav = () => {
  const {getToken} = AuthUser()
  // console.log(getToken);

  return (
        <>
        {
          getToken ? 
          <div className='flex fixed items-center z-50 justify-between border-b bg-white w-full h-[50px] px-10'>
         <div className='flex gap-20'>
         <span className=' cursor-pointer'>cROOM</span>
            <ul className='flex gap-6 mb-0'>
                <NavLink className='navmenu' to="/dashboard">Home</NavLink>
                <NavLink className='navmenu' to="/profile">Profile</NavLink>
                <NavLink className='navmenu' to="/task">Task</NavLink>
            </ul>
         </div>
            <div className='flex gap-3'>
                <span>user_name</span>
                <NavLink to="/">Logout</NavLink>
            </div>
        </div>
        : null
        }
      
        </>
  )
}

export default Nav