"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import GoogleLoginButton from "../components/GoogleButton";
import Image from "next/image";
import { useState,  } from "react";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader";
const Login = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);
    if(username.length ===0) {
      toast.error("Please enter your username",{
        position: "top-right",
        autoClose: 5000,
      });
      return
    }
    if(password.length ===0) {  
      toast.error("Please enter your password",{
        position: "top-right",
        autoClose: 5000,
      });
      return}
    
      try {
        // Call your API for login
        const response = await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify({
            Username: username,
            Password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
  
        if (result.success) {
          // If login is successful, redirect to the user dashboard
          toast.success("Login successful",{
            position: "top-right",
            autoClose: 5000,
          });
          // Store the username in local storage or session storage
          router.push(`/user/${username}/dashboard`);
        } else {
          // Handle login error
          toast.error(result.error,{
            position: "top-right",
            autoClose: 5000,
          });
        }
      } catch (error) {
        toast.error(error,{
          position: "top-right",
          autoClose: 5000,
        });
      }finally {
        // Once the process is complete, set loading to false
        setLoading(false);
      }
    };
  return (
    <>
    <ToastContainer className={"mt-12"}/>
    <div className="relative  min-h-[78vh] h-full w-full bg-slate-900  flex flex-col justify-center items-center">
      <div className="bg-gray-900  p-4  max-w-[80vh] w-full h-auto flex flex-col gap-3 items-center justify-center z-2 ">
        <h1 className="text-3xl text-white font-bold mb-12">
          Login to Trimify
        </h1>
        <form action="Submit" className="flex flex-col items-center gap-4 w-full max-w-[78vh]">
          <label htmlFor="username" className="sr-only ">
            Username
          </label>
          <input
            required 
            onChange={(e)=>setusername(e.target.value)}
            value={username}
            autoComplete="username"
            id="username"
            type="text"
            placeholder="Enter your username"
            className="bg-gray-800 text-white max-w-[75vh] w-full  px-2 py-2 outline-green-200  font-bold"
          />

          {/* <label htmlFor="password" className="sr-only">
            Password
          </label> */}
          <div className="relative w-full">
            <input
              required
              onChange={(e)=>setpassword(e.target.value)}
              value={password}
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Enter your password"
              className="bg-gray-800 text-white max-w-[75vh] w-full px-2 py-2 outline-green-200 font-bold"
            />
            <Image
            priority={false}
              title={showPassword ? "Hide password" : "Show password"}
              onClick={() => setshowPassword(!showPassword)}
              alt="toggle visibility"
              className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
              width={28}
              height={28}
              src={showPassword ? "/hide.png" : "/show.png"}
            />
          </div>
          <p className="underline text-red-400 mt-[-10px] mb-2  w-full cursor-pointer">
            Forgot password
          </p>

          <button
            onClick={handleSubmit}
            type="submit"
            className="max-w-[75vh] w-full cursor-pointer transition-all ease-in-out duration-300 font-bold hover:bg-white hover:text-black p-2 bg-green-600 text-white rounded-[3px]"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Logging in...":"Login now"}
          </button>
        </form>
          {/* Show loader when the page is loading */}
      {loading && <Loader />}
        <div className="flex gap-[1px] items-center justify-center w-full">
          <p className=" text-white mt-4  ml-[34.8vh]">Don't have an account?</p>
          <span className="underline mt-3 text-green-500">
            <Link href="/sign-up-to-trimify">Sign Up</Link>
          </span>
        </div>
        <p className="text-xl font-bold text-white">or</p>
        {/* Google Sign in Button Code starts here */}

     <div className="max-w-[75vh] w-full flex items-center justify-center gap-2 bg-white rounded-[3px]">
        <GoogleLoginButton width={300} />
        </div>
        {/* End Here */}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
    </div>
    </>
  );
  
};

export default Login;
