"use client";
import React from "react";
import Link from "next/link";
import GoogleLoginButton from "../components/GoogleButton";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Loader from "../components/Loader";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import Head from "next/head";
import Script from "next/script";
//  const metadata = {   
//   title: "Signup to Trimify - Create Your Account",
//   description:
//     "Sign up for Trimify, a tool to shorten URLs, manage passwords, and more. Join now to access exclusive features and optimize your online experience.",
//   keywords:"Trimify, sign up, create account, URL shortening, password management",
//   robots: "index, follow",  
// }
const Signup = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [show1stPassword, setshow1stPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setloading(true);
    try {
      if (data.password !== data.ConfirmPass) {
        toast.error("Passwords do not match", {
          position: "top-right",
          autoClose: 5000,
        });
        return;
      } else {
        console.log("submitted", data); //
        let user = "user";
        let a = await fetch("/api/sign-up", {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
        a.json().then((res) => {
          if (res.success === false) {
            toast.error(res.error, {
              position: "top-right",
              autoClose: 5000,
            });
          } else {
            toast.success("Account created successfully", {
              position: "top-right",
              autoClose: 5000,
            });
            router.push(`/user/${data.Username}/dashboard`);
          }
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again Later.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setloading(false);
    }
  };
  return (
    <>
          <Head>
        <title>Signup to Trimify - Create Your Account</title>
        <meta
          name="description"
          content="Sign up for Trimify, a tool to shorten URLs, manage passwords, and more. Join now to access exclusive features and optimize your online experience."
        />
        <meta
          name="keywords"
          content="Trimify, sign up, create account, URL shortening, password management"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Signup to Trimify" />
        <meta
          property="og:description"
          content="Join Trimify and unlock features like URL shortening and password management."
        />
        <meta property="og:url" content="https://www.trimify.com/signup" />
        <meta
          property="og:image"
          content="https://www.trimify.com/images/signup-banner.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Signup to Trimify" />
        <meta
          name="twitter:description"
          content="Create an account at Trimify for powerful online tools and services."
        />
          <link
    rel="preload"
    href="/fonts/your-font.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />

<script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Signup to Trimify",
        "description":
          "Sign up for Trimify to shorten URLs and manage your passwords.",
        "publisher": {
          "@type": "Organization",
          "name": "Trimify",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.trimify.com/logo.png",
          },
        },
        "mainEntityOfPage": "https://www.trimify.com/signup",
      }),
    }}
  />
      </Head>
      <ToastContainer className={"mt-12"} />
      <div className="relative h-auto w-full p-2 bg-slate-900 flex justify-center items-center">
        <div className="bg-slate-900  z-10 w-full max-w-[80vh] h-auto rounded-md shadow-md p-4">
          <h1 className="text-white font-bold text-2xl text-center mt-5 ">
            Sign up to Trimify
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-10  "
          >
            <div className="flex gap-2 w-full ">
              <input
                className="bg-gray-800 text-white p-2 outline-green-300 font-bold w-[130%]"
                type="text"
                {...register("FirstName", { required: true })}
                id="First Name"
                placeholder="Enter First Name"
              />
              <input
                className="bg-gray-800 text-white p-2 w-full sm:[20%] outline-green-300 font-bold"
                autoComplete="family-name"
                type="text"
                {...register("LastName", { required: true })}
                placeholder="Enter Last Name"
              />
            </div>
            <input
              className="bg-gray-800 text-white p-2 outline-green-300 font-bold"
              autoComplete="Email"
              type="text"
              {...register("Gmail", { required: true })}
              placeholder="Enter Email or Mobile Number"
            />
            <input
              className="bg-gray-800 text-white p-2 outline-green-300 font-bold"
              autoComplete="additional-name webauthn"
              type="text"
              {...register("Username", { required: true })}
              placeholder="Enter your username"
            />
            <div className="relative w-full">
              <input
                {...register("password", {
                  required:
                    "Password is required and it should be 8+ characters",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{8,}$/,
                    message:
                      "Password must be 8+ characters and include letters, numbers, and special characters",
                  },
                })}
                id="Password"
                type={show1stPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Enter your password"
                className="bg-gray-800 text-white w-full  pr-12 px-2 py-2 outline-green-200 font-bold"
              />
              <Image
                priority={true}
                title={show1stPassword ? "Hide password" : "Show password"}
                onClick={() => setshow1stPassword(!show1stPassword)}
                alt="toggle visibility"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                width={28}
                height={28}
                src={show1stPassword ? "/hide.png" : "/show.png"}
              />
            </div>
            {errors.password && (
              <div className=" mt-1 font-bold text-red-600">
                {errors.password.message}
              </div>
            )}
            <div className="relative w-full">
              <input
                required
                {...register("ConfirmPass", { required: true, minLength: 4 })}
                id="confirmpassword"
                type={showPassword ? "text" : "password"}
                autoComplete="confirm-password"
                placeholder="Re-enter your password"
                className="bg-gray-800 text-white w-full px-2 py-2 outline-green-200 font-bold"
              />
              <Image
                priority={true}
                title={showPassword ? "Hide password" : "Show password"}
                onClick={() => setshowPassword(!showPassword)}
                alt="toggle visibility"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                width={28}
                height={28}
                src={showPassword ? "/hide.png" : "/show.png"}
              />
            </div>

            <label htmlFor="" className="text-white">
              <input type="checkbox" name="" id="" className="mr-2" required 
               aria-label="Agree to terms and policies"
              />
              By checking it you agree to our{" "}
              <b className="underline ">Terms</b> and{" "}
              <b className="underline ">Policies</b>
            </label>
            <button
              type="submit"
              className="cursor-pointer transition-all ease-in-out duration-300 font-bold hover:bg-white hover:text-black w-full p-2 bg-green-600 text-white rounded-[3px]"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
          {loading && <Loader style={{ marginTop: "10px" }} />}
          <div className="flex gap-[1px] items-center justify-center ">
            <p className=" text-white mt-3 ml-[34.8vh]">
              Already have an account?
            </p>
            <span className="underline mt-3 text-green-500">
              <Link href="/login">Login</Link>
            </span>
          </div>
          <p className="font-extrabold text-xl text-white text-center">or</p>
          {/* Google Sign in Button Code starts here */}
          <div className="flex justify-center mt-2 cursor-pointer">
            <div className="w-full ] bg-white">
              <GoogleLoginButton width={300} />
            </div>
          </div>
          {/* End Here */}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
      </div>
    </>
  );
};

export default Signup;
