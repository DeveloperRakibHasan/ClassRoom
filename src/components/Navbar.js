import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-4'>
        <span className='text-[18px] cursor-pointer font-semibold'>𝒞𝓁𝒶𝓈𝓈𝑅𝒪𝒪𝑀</span>
        <div>New User? <Link to="/signup" className='text-[#6534D9]'>Registration</Link></div>
    </div>
  )
}

export default Navbar