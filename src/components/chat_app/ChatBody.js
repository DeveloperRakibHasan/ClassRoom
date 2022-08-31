import React, { useState } from 'react'
import profileIMG from '../../assets/img/profile.jpg'
import {PhoneFilled, VideoCameraFilled, SendOutlined} from '@ant-design/icons'
import { IoIosAddCircle } from "react-icons/io";

const ChatBody = () => {
  const [item, setItem] = useState([]);
  function handelClick(e){
    const value = e.target.value
    setItem([...item, value])
    e.target.value = ''
  }

  return (
    <div className='main-content flex'>
        <div className='w-9/12 border-r height relative'>
          <div className='flex justify-between absolute top-0 w-full px-10 h-12 bg-slate-100'>
            <div className='flex gap-3 items-center'>
              <img className='w-7 h-7 rounded-full' src={profileIMG} alt='profile' />
              <span>Rakib</span>
            </div>
            <div className='flex gap-4 items-center'>
              <PhoneFilled />
              <VideoCameraFilled />
            </div>
          </div>
          <div className='message__body h-full overflow-auto'>
            <li>hi</li>
            {
              item.map((elem, index)=>(
                <li key={index}>{elem}</li>
              ))
            }
            <li></li>
          </div>
          <div className='footer__item absolute bottom-0 w-full h-14 bg-violet-300'>
            <div className='w-8/12 mx-auto flex items-center'>
              <span className='p-2 mr-2 rounded-full bg-violet-400'>
              <IoIosAddCircle />
              </span>

              <input 
              className='w-full focus:outline-none bg-violet-200 py-4 px-2' 
              name='message'
              placeholder='type your message...' />

              <button onClick={handelClick} className='py-[17px] px-10 bg-violet-600'><SendOutlined/></button>
            </div>
          </div>
        </div>
        <div className='w-3/12 bg-slate-50 overflow-auto'>
          <div className='h-12 bg-violet-300 flex items-center pl-10 fixed w-full'>
            <b>Active friends</b>
          </div>
        </div>
    </div>
  )
}

export default ChatBody