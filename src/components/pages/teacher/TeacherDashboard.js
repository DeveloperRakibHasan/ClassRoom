import React, { useEffect, useState } from 'react'
import {DollarCircleFilled} from '@ant-design/icons';
import { ImBook } from "react-icons/im";
import { FaGraduationCap } from "react-icons/fa";
import img from '../../../assets/img/book.jfif'
import AuthUser from '../../auth/AuthUser';

const TeacherDashboard = () => {
    const {httpurl} = AuthUser();
    const [acptedProblem, setAcptedProblem] = useState([])

    useEffect(() => {
        httpurl.get('accepted_problem')
        .then((res)=>{
            setAcptedProblem(res.data.data)
        }).catch((err)=>{
            console.log(err);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


  return (
    <div className='main-content bg-slate-50'>
        <div className='body_content'>
            <div className='grid grid-flow-row grid-cols-4 gap-6 mb-20'>
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
                    <h2 className='text-gray-400'>Total Earning</h2>
                    <b className='text-[18px]'>$ 1064</b>
                </div>
                <div className='card_bg text-center'>
                    <span className='text-[26px] text-gray-500'><DollarCircleFilled /></span>
                    <h2 className='text-gray-400'>Available Balance</h2>
                    <b className='text-[18px]'>$ 564</b>
                </div>
            </div>
           <div>
           <h1 className='border-t border-b py-4 pl-6 text-[22px] font-semibold'>Accepted Request ::</h1>
            <div className='grid grid-flow-row grid-cols-3 gap-6 mt-10'>
               {
                acptedProblem.map((item) => {
                    return(
                <div className='card_bg' key={item.id}>
                <div className='flex items-center gap-4 mb-6'>
                    <img className='w-6 h-6 rounded-full' src={img} alt='' />
                    <div>
                        <b>Rakib Hasan</b>
                    </div>
                </div>
                    <img className='w-full h-40' src={img} alt='' />
                    <div className='p-6'>
                       <h2>{item.title}</h2>
                       <p>{item.description}</p>
                       <span>{item.date}</span>
                    </div>
                </div>
                    )
                })
               }
            </div>
           </div>
        </div>
    </div>
  )
}

export default TeacherDashboard