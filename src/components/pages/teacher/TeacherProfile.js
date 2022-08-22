import React from 'react'
import techerIMG from '../../../assets/img/profile.jpg'
import { EditOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import '../../css/teacher_profile.css'

function TeacherProfile() {


  return (
    <div className='main-content bg-slate-50'>
      <div className='body-content p-10'>
      <h2 className='border-b pb-2'>Josim Ahamed</h2>
     <div className='flex justify-between'>
     <div className='flex gap-10 pt-6'>
      <div>
        <img className='w-44 h-44' src={techerIMG} alt='' />
      </div>
        <div>
         <ul className='teacher_profile__list'>
          <li><span>Name: </span>Mr. Josim Ahamed</li>
          <li><span>Gender: </span>Male</li>
          <li><span>Date of Birth: </span>25/09/1988</li>
          <li><span>Religion: </span>Islam</li>
          <li><span>E-mail: </span>mrjosimahamed@outlook.com</li>
          <li><span>Subject: </span>English</li>
          <li><span>Class: </span>12</li>
          <li><span>Section: </span>A</li>
          <li><span>ID: </span>#JF654HDFB</li>
          <li><span>Address: </span>Bogura</li>
          <li><span>Phone: </span>+88017 1234 5678</li>
         </ul>
        </div>
      </div>
      <div className='flex gap-2'>
      <NavLink to='/edit_teacher_profile'>
        <EditOutlined className='text-[20px]' title='Edit' />
      </NavLink>
      </div>
     </div>
      </div>
    </div>
  )
}

export default TeacherProfile