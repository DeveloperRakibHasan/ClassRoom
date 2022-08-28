import React from 'react'
import {DollarCircleFilled} from '@ant-design/icons';
import { ImBook } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa";
import AcceptProblems from './AcceptProblems';

const TeacherDashboard = () => {
  return (
    <div className='main-content bg-slate-50'>
        <div className='body_content'>
            <div className='grid grid-flow-row grid-cols-3 gap-6 mb-20'>
                <div className='card_bg text-center'>
                    <span className='text-[26px] text-gray-500 flex justify-center'><ImBook/></span>
                    <h2 className='text-gray-400'>Total Course</h2>
                    <span className='text-[18px]'>+07</span>
                </div>
                <div className='card_bg text-center'>
                    <span className='text-[26px] text-gray-500 flex justify-center'><FaGraduationCap/></span>
                    <h2 className='text-gray-400'>Total Student</h2>
                    <span className='text-[18px]'>+122</span>
                </div>
                <div className='card_bg text-center'>
                    <span className='text-[26px] text-gray-500'><DollarCircleFilled /></span>
                    <h2 className='text-gray-400'>Available Balance</h2>
                    <b className='text-[18px]'>$ 564</b>
                </div>
            </div>
           <div>
           <h1 className='border-t border-b py-4 pl-6 text-[22px] font-semibold'>Accepted Request ::</h1>
            <div className='grid grid-flow-row grid-cols-2 mt-10'>
                    <AcceptProblems/>
                </div>
           </div>
        </div>
    </div>
  )
}

export default TeacherDashboard