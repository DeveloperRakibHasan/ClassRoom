import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/side_menu.css'
import {
  DashboardFilled, 
  ProfileFilled, 
  ProjectFilled, 
  WechatFilled, 
  CalendarFilled
} from '@ant-design/icons';

function SiteMenu({roll}) {
  const sitemenu = [
    {
      'roll': ['student', 'teacher'],
      'name': 'Dashboard',
      'to': '/',
      icon: <DashboardFilled />,
    },
    {
      'roll': ['teacher'],
      'name': 'Timeline',
      'to': '/timeline',
      icon: <ProjectFilled />,
    },
    {
      'roll': ['student', 'teacher'],
      'name': 'Profile',
      'to': 'profile',
      icon: <ProfileFilled />,
    },
    {
      'roll': ['student', 'teacher'],
      'name': 'Chat',
      'to': '/chat',
      icon: <WechatFilled />,
    },
    {
      'roll': ['student', 'teacher'],
      'name': 'Calender',
      'to': '/calender',
      icon: <CalendarFilled />,
    },
    
  ]
  
  const navElements = sitemenu.filter((element) =>
  element.roll.find((info) => info === roll)
  );

  let activeStyle = {
    color: '#fff'
  };

  return (
     <>
        <div className='fixed long border-r '>
        <div className='w-[200px] bg-[#0A1229] h-screen overflow-auto'>
          <nav>
            <ul className='pt-10'>
           {
            navElements.map((data, index) => {
              return(
            <NavLink key={index} className="block pl-10 mb-2 py-2 text-gray-400" to={data.to} 
             style={({ isActive }) =>
              isActive ? activeStyle : undefined}>
             <div className='flex gap-3 items-center'><span className='flex text-[18px]'>{data.icon}</span>{data.name}</div>
            </NavLink>
              )
            })
           }
            </ul>
          </nav>
        </div>
       </div>
     </>

  )
}

export default SiteMenu