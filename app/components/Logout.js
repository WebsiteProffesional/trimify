'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const Logout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [button, setbutton] = useState()
  const {data:session,status}=useSession()
  async function provider() {
    if(session.provider==="google"){
      setbutton(true)
   }
  }
 
  return (
    <>
    <ToastContainer className={"mt-12"}/>
    <div className='bg-slate-700 text-white'>
      <div className='flex justify-between items-center p-3 h-[62px]'>
        {/* Logo + Slogan */}
        <div className='flex flex-col sm:flex-row sm:items-center py-[2px] '>
          <h1 className='text-3xl font-extrabold text-gray-900'>Trimify</h1>
          <p className=' ml-1 mt-3 text-black text-sm font-extrabold'>Shorten smart · Share fast</p>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex justify-center items-center gap-3 text-xl'>
          <li title='Click to redirect to homepage' className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-slate-200 hover:text-black hover:rounded-[12px] px-2 py-[2px]'>
            <Link href="/">Home</Link>
          </li>
          <li title='Click to redirect to about page' className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-slate-200 hover:text-black hover:rounded-[12px] px-2 py-[2px]'>
            <Link href="/about">About</Link>
          </li>
          <li title='Click to redirect to contact page' className='transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-slate-200 hover:text-black hover:rounded-[12px] px-2 py-[2px]'>
            <Link href="/contact">Contact</Link>
          </li>

         {button? <li title='Click to get logged out' className='bg-slate-600 font-bold text-black rounded-[12px] transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-white hover:text-black px-2 pb-1'>
            <Link href="/login">Log out</Link>
          </li>:<li title='Click to get logged out' onClick={() =>{ signOut({ callbackUrl: "/login" })
         toast.success("Successfully Logged Out",{
          position:"top-right",
          autoClose:3000
         })
        }} className='bg-slate-600 font-bold text-black rounded-[12px] transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-white hover:text-black px-2 pb-1'>
          Log out
          </li>}
        </ul>

        {/* Mobile Toggle Button */}
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='flex flex-col items-start px-4 pb-4 gap-3 md:hidden text-lg'>
          <Link href='/' className='hover:text-gray-300' onClick={() => setIsOpen(false)}>Home</Link>
          <Link href='/about' className='hover:text-gray-300' onClick={() => setIsOpen(false)}>About us</Link>
          <Link href='/contact' className='hover:text-gray-300' onClick={() => setIsOpen(false)}>Contact</Link>
          {button? <li title='Click to create new account' className='bg-slate-600 font-bold text-black rounded-[12px] transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-white hover:text-black px-2 pb-1'>
            <Link href="/login">Log out</Link>
          </li>:<li title='Click to create new account' onClick={() => signOut({ callbackUrl: "/sign-up-to-trimify" })} className='bg-slate-600 font-bold text-black rounded-[12px] transition-all duration-300 ease-in-out cursor-pointer hover:translate-x-[-1px] hover:bg-white hover:text-black px-2 pb-1'>
          Log out
          </li>}
        </ul>
      )}
    </div>
    </>
  )
}

export default Logout
