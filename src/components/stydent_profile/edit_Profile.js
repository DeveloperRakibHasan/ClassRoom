import React from 'react'
import { Input } from 'antd';

const edit_Profile = () => {
  return (
    <div className='mt-10'>
    <div className='bg-white shadow-md p-10 rounded-2xl w-full'>
    <h2>Edit Profile</h2>
        <div className='mt-6'>
            <div className='flex gap-5 mb-6'>
            <Input placeholder="first name" />
            <Input placeholder="last name" />
            <Input placeholder="your phone number" />
            <Input placeholder="parents phone number (optional)" />
            </div>
            <div className='flex gap-5 mb-6'>
            <Input placeholder='type your ' />
            </div>
            
            
        </div>
    </div>
    </div>
  )
}

export default edit_Profile