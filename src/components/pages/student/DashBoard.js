import React from 'react'
import AddClass from '../../class_request/AddClass'
import '../../css/side_menu.css'
import '../../css/searchicon.css'
import TeacherDashboard from '../teacher/TeacherDashboard'

const DashBoard = () => {
  const usr = JSON.parse(localStorage.getItem('user'));
  return (
        <>
        {
          usr.type === 'student' ? 
          <div className='main-content bg-slate-50 h-screen'>
          <div className='body_content'>
            <div className='grid grid-flow-row grid-cols-3 gap-6'>
              <div className='card_bg flex justify-center items-center'>
                <AddClass />
              </div>
              <div className='card_bg'>
                <h2 className='text-[28px]'>+1</h2>
                <span>Classes</span>
              </div>
              <div className='card_bg'>
                <h2 className='text-[28px]'>+1</h2>
                <span>Teachers</span>
              </div>
             
            </div>
          </div>
        </div>
        :
        null
        }
        {
          usr.type === 'teacher' ? <TeacherDashboard/> : null
        }
        </>
  )
}

export default DashBoard