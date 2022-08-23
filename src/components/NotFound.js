import React from 'react'

function NotFound() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='text-center'>
      <h4 className='text-yellow-500 text-[40px] font-semibold'>OOps!</h4>
      <span className='text-gray-500 text-[20px]'>page not found</span>
      <h1 className='text-[140px] text-red-500 font-bold'>404</h1>
      </div>
    </div>
  )
}

export default NotFound