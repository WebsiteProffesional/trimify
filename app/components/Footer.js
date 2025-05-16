import React from 'react'
import { ScissorsIcon } from '@heroicons/react/24/outline';
const Footer = () => {
  return (
    <div className='flex justify-between  items-center w-full p-3 bg-slate-700 text-white '>
      <h1 className='text-xl  w-40 text-center  font-bold'>Trimify Created with 💖 by zain</h1>
      <ul className='flex justify-center items-center gap-3 text-xl'>
      
        <li className='transition-all duration-400 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-slate-200 hover:text-black hover:rounded-[12px] p-1  ' title='Click to redirect to about page'>About US</li>
        <li className='transition-all duration-400 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-slate-200 hover:text-black hover:rounded-[12px] p-1  ' title='Click to redirect to contact page'>Contact</li>
      
      </ul>
    </div>
  )
}

export default Footer
