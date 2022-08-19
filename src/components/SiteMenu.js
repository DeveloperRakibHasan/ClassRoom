import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/side_menu.css'



function SiteMenu() {

  return (
     <>
       <div className=''>
        <div className='w-[200px] bg-white shadow-sm h-screen'>
          <nav>
            <ul className='pt-10'>
            <NavLink className="block pl-10 mb-2 py-2 text-gray-300" to="/dashboard">DashBoard</NavLink>
            <NavLink className="block pl-10 mb-2 py-2 text-gray-300" to="/profile">Profile</NavLink>
            <NavLink className="block pl-10 mb-2 py-2 text-gray-300" to="/task">Task</NavLink>
            <NavLink className="block pl-10 mb-2 py-2 text-gray-300" to="/chat">Chat</NavLink>
            </ul>
          </nav>
        </div>
       </div>

     </>

  )
}

export default SiteMenu