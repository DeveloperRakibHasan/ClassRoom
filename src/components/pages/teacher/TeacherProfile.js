import React, { useEffect, useState } from 'react'
import techerIMG from '../../../assets/img/profile.jpg'
import { EditOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import '../../css/teacher_profile.css'
import AuthUser from '../../auth/AuthUser';

function TeacherProfile() {
    const {httpurl} = AuthUser();

    const [info, setInfo] = useState([])

    useEffect(()=>{
      httpurl.post('teacher')
      .then((res)=>{
        setInfo(res.data)
        // console.log(res);

      }).catch((err)=>{
        console.log(err);
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div className='main-content'>
      <div className='body-content p-10'>
      <h2 className='border-b pb-2'>{info.name}</h2>
     <div className='flex justify-between'>
     <div className='flex gap-10 pt-6'>
      <div>
        <img className='w-44 h-44' src={techerIMG} alt='' />
      </div>
        <div>
         <ul className='teacher_profile__list'>
          <li><span>Name: </span>{info.name}</li>
          <li><span>Gender: </span>{info.gender ? info.gender : <span>plz add your gender</span>}</li>
          <li><span>Date of Birth: </span>20/06/1985</li>
          <li><span>Religion: </span>{info.religion ? info.religion : <span>plz add your religion</span>}</li>
          <li><span>E-mail: </span>{info.email}</li>
          <li><span>Subject: </span>{info.subject ? info.subject : <span>No teaching subject</span>}</li>
          <li><span>ID: </span>#{info.id}</li>
          <li><span>Address: </span>{info.address ? info.address : <span>plz add your Address</span>}</li>
          <li><span>Phone: </span>{info.phone ? info.phone : <b className='text-red-300 pl-4'>plz add your phone number</b> }</li>
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