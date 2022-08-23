import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/side_menu.css'



function SiteMenu() {
  let activeStyle = {
    color: '#000'
  };


  return (
     <>
       <div className='fixed long border-r '>
        <div className='w-[200px] bg-white h-screen overflow-auto'>
          <nav>
            <ul className='pt-10'>
            <NavLink className="block pl-10 mb-2 py-2 text-gray-300" to="/" 
             style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
              DashBoard
            </NavLink>
            <NavLink className="block pl-10 mb-2 py-2 text-gray-300" to="/teacher_dashboard" 
             style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
              TeacherDashBoard
            </NavLink>
            <NavLink className="block pl-10 mb-2 py-2 text-gray-300" to="/timeline" 
             style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
              Timeline
            </NavLink>
            <NavLink className="block pl-10 mb-2 py-2 text-gray-300" to="/teacher_profile" 
             style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
              TeacherProfile
            </NavLink>
            <NavLink className="block pl-10 mb-2 py-2 text-gray-300" to="/profile" 
             style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Profile</NavLink>
            <NavLink className="block pl-10 mb-2 py-2 text-gray-300" to="/chat" 
             style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Chat</NavLink>
            <NavLink className="block pl-10 mb-2 py-2 text-gray-300" to="/calender" 
             style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Calender</NavLink>
            </ul>
          </nav>
        </div>
       </div>

     </>

  )
}

export default SiteMenu