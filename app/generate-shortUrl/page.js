"use client"
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
const Generate = () => {
  const [longUrl, setlongUrl] = useState("");
  const [shortUrl, setshortUrl] = useState("");
  const [Msg, setMsg] = useState("")
  const [On, setOn] = useState(false)
 
  
  async function GenerateUrl() {
    
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     
      body: JSON.stringify({
        LongUrl:longUrl,
        ShortUrl:shortUrl
      }),
      // ...
    });
   let result=await response.json()
   setMsg(result)
   if(!response.ok){
    toast.warn("The url already exists",{
      position:"top-right",
      autoclose:3000
    })
    return
   }else{ toast.success("The url is generated successfully",{
    position:"top-right",
    autoClose:3000
   })
     setOn(!On)}
  }
  return (
    <>
  <ToastContainer className={"pt-12"}/>
    <div className="relative h-[78vh] w-full bg-slate-900 flex justify-center items-center">
      <div
        className="flex flex-col z-10 bg-slate-700 p-4 sm:max-w-[50vh] md:max-w-[90vh] justify-center items-center min-h-[60vh] w-full text-white
      gap-6"
      >
        <h1 className="text-3xl font-extrabold mb-6 mt-[-40px]">
          Generate shortUrl From here
        </h1>
        <input
          className="bg-white z-2  outline-purple-700 rounded-[20px] max-w-[75vh] md:max-w-[80vh] w-full text-gray-900 px-4 py-2"
          placeholder="Enter Long Url"
          type="text"
          onChange={(e) => setlongUrl(e.target.value)}
          value={longUrl}
        />
        <input
          className="bg-white z-2  outline-purple-700 rounded-[20px] max-w-[80vh] w-full text-gray-900 px-4 py-2"
          placeholder="Enter shortName"
          type="text"
          onChange={(e) => setshortUrl(e.target.value)}
          value={shortUrl}
        />
        <button className="bg-purple-700 md:max-w-[79vh] max-w-[75vh] w-full sm:rounded-xl rounded-[5px] cursor-pointer z-2 p-3"
        onClick={GenerateUrl}
        >
          Generate Now
        </button>
        {On ?<div className={" text-xl z-2 font-extrabold text-black"}>The short url is: <Link target="_blank" className=" text-white font-bold cursor-pointer underline z-2" href={Msg}>{Msg}</Link></div>:""}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
    </div>
    </>
  );
};

export default Generate;
