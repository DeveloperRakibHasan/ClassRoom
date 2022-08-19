import React from 'react'
import './css/side_menu.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {


  return (
        <>
       <div className='flex items-center justify-between shadow-md bg-white w-full h-[50px] px-10'>
         <div className='flex gap-20'>
            <ul className='flex gap-6 mb-0'>
                <NavLink className='navmenu' exact to="/dashboard">Home</NavLink>
                <NavLink className='navmenu' exact to="/profile">Profile</NavLink>
                <NavLink className='navmenu' exact to="/task">Task</NavLink>
            </ul>
         </div>
            <div>
                <span>user_name</span>
            </div>
        </div>
        </>
  )
}

export default Nav