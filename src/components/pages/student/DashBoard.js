import React from 'react'
import AddClass from '../../class_request/AddClass'
import '../../css/side_menu.css'
import '../../css/searchicon.css'


const DashBoard = () => {

  return (
        <>
        <div className='main-content bg-slate-50'>
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
        </>
  )
}

export default DashBoard