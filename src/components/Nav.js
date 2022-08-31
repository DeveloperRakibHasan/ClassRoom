import React from 'react'
import './css/side_menu.css'
import { Link } from 'react-router-dom';
import {LogoutOutlined, BellFilled} from '@ant-design/icons';
import { Input } from 'antd';

const { Search } = Input;

const Nav = () => {
  const onSearch = (value) => console.log(value);
  const usr = JSON.parse(localStorage.getItem('user'));
  const logout = () =>{
      localStorage.removeItem('token');
      localStorage.removeItem('user');
  }

  return (
      <>  
        <div className='flex fixed items-center z-50 justify-between shadow-md bg-white w-full h-[50px] px-10'>
         <div className='flex gap-32'>
         <span className=' cursor-pointer'>cROOM</span>
         </div>
            <div className='flex items-center gap-3'>
            <span><Search placeholder="input search text" onSearch={onSearch} enterButton /></span>
            <span className=' text-md'><BellFilled /></span>
              <span>{usr.name}</span>
              <Link onClick={logout} to='/login'><span className='flex items-center gap-1 px-3 py-1 bg-red-400 text-white rounded-md'><LogoutOutlined />Logout</span></Link>
            </div>
        </div> 
      </>
  )
}

export default Nav