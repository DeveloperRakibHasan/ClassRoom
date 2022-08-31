import React from 'react'
import AddClass from '../../class_request/AddClass'
import '../../css/side_menu.css'
import '../../css/searchicon.css'
import TeacherDashboard from '../teacher/TeacherDashboard'
import img from '../../../assets/img/book.jfif'

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
            <div className='grid grid-flow-row grid-cols-2 gap-6 mt-20'>
              <div className='card_bg p-6'>
                <div className='flex justify-between'>
                  <b className='pl-4 text-gray-400'>Md Rakib</b>
                  <span className='text-gray-300'>9 min ago..</span>
                </div>
               <div className='mt-3'>
                <h4 className='text-[18px] mb-0'>Title text</h4>
                <p className='text-gray-400'>Description text here. Description text here Description text here Description text here. Description text here Description text here..</p>
               </div>
               <div className='flex justify-between items-center'>
                <img className='w-20 h-auto ' src={img} alt='' />
                <div>
                  <span className='px-4 py-1 bg-yellow-100 text-gray-500 rounded-xl'>pending</span>
                  {/* <span className='px-4 py-1 bg-green-200 text-gray-500 rounded-xl'>accepted</span> */}
                </div>
               </div>
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