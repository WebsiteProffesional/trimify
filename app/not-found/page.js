import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="relative h-[78vh] w-full bg-slate-900 flex justify-center items-center">
      <div className='bg-white h-[60vh] w-auto font-extrabold p-4 z-10'>

        <h1 className='text-3xl font-extrabold'>Page not found Due to invalid url</h1>
        <h1 className='text-3xl font-extrabold text-center mt-4'>Error:404</h1>
        <button className='bg-purple-950 cursor-pointer text-white z-10 mt-16 w-[74vh] h-[8vh] ml-6  '><Link href={"/generate-shortUrl"}>Click here to return</Link></button>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
    </div>
  )
}

export default page
