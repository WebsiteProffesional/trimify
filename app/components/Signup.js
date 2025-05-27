"use client"; // Indicates this is a client-side component
import React, { useEffect } from "react"; // Import React for JSX
import Link from "next/link"; // Import Link for navigation
import GoogleLoginButton from "../components/GoogleButton"; // Import Google login button component
import { useState } from "react"; // Import useState hook for state management
import Image from "next/image"; // Import Image for optimized image rendering
import { useForm } from "react-hook-form"; // Import useForm for form handling
import Loader from "../components/Loader"; // Import custom Loader component
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer and toast for notifications
import Head from "next/head"; // Import Head for metadata
import Script from "next/script"; // Import Script for adding structured data
import { useSession } from "next-auth/react";

// Define the Signup component
const Signup = () => {
  const [showPassword, setshowPassword] = useState(false); // State to toggle confirm password visibility
  const [show1stPassword, setshow1stPassword] = useState(false); // State to toggle password visibility
  const [loading, setloading] = useState(false); // State to manage the loading spinner

  const router = useRouter(); // Initialize the router for navigation
  const { data: session, status } = useSession();

  useEffect(() => {
    const GoogleData = async () => {
      if (status === "authenticated") {
        let email = session.user.email;
        let username = email.split("@")[0].toLowerCase();
        router.push(`/user/${username}/dashboard`);
        toast.success(
          "Successfully logged in through Google. Redirecting to your Dashboard",
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      }
    };

    GoogleData();
  }, [session, status, router]);

  // Initialize form handling using react-hook-form
  const {
    register, // Register input fields
    handleSubmit, // Handle form submission
    watch, // Watch input values
    formState: { errors }, // Form state and errors
  } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    setloading(true); // Set loading state to true
    try {
      // Check if passwords match
      if (data.password !== data.ConfirmPass) {
        toast.error("Passwords do not match", {
          position: "top-right", // Position of the toast
          autoClose: 5000, // Auto close after 5 seconds
        });
        return; // Exit the function
      } else {
        let user = "user"; // Placeholder variable
        // Send a POST request to the sign-up API
        let a = await fetch("/api/sign-up", {
          method: "POST", // HTTP method
          body: JSON.stringify(data), // Send form data as JSON
          headers: { "Content-Type": "application/json" }, // Specify JSON content type
        });
        // Handle the API response
        a.json().then((res) => {
          if (res.success === false) {
            // Show error toast if sign-up fails
            toast.error(res.error, {
              position: "top-right",
              autoClose: 5000,
            });
          } else {
            // Show success toast if sign-up succeeds
            toast.success("Account created successfully.Redirecting to login page", {
              position: "top-right",
              autoClose: 5000,
            });

            // Redirect to the user dashboard
            setTimeout(() => {
              router.push(`/login`);
            }, 2000);
          }
        });
      }
    } catch (error) {
      // Show error toast if an exception occurs
      toast.error("An error occurred. Please try again Later.", {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setloading(false); // Set loading state to false
    }
  };

  // Render the component
  return (
    <>
      {/* Add structured data for SEO */}
      <Head>
        <title>Sign Up to Trimify</title>
        <meta
          name="description"
          content="Create your Trimify account to shorten and manage links with analytics."
        />
        <link rel="canonical" href="/sign-up-to-trimify" />
      </Head>
      {/* Toast container for notifications */}
      <ToastContainer className={"mt-12"} />
      <div
        className="relative  w-full p-2 bg-slate-900 flex justify-center items-center"
        style={{ minHeight: "calc(100vh - 142px)", height: "full" }}
      >
        {/* Main container for the sign-up form */}
        <div className="bg-slate-900 z-10 w-full max-w-[80vh] h-auto rounded-md shadow-md p-4">
          {/* Title of the sign-up page */}
          <h1 className="text-white bree-bold font-bold text-3xl text-center mt-5 ">
            Sign up to Trimify
          </h1>
          {/* Sign-up form */}
          <form
            id="submitForm"
            onSubmit={handleSubmit(onSubmit)} // Handle form submission
            className="flex flex-col gap-4 mt-10"
          >
            {/* Input fields for first and last name */}
            <div className="flex gap-2 w-full">
              <input
                title="Enter your first name"
                autoComplete="given-name" // Enable autocomplete for first name
                className="bg-gray-800 text-white py-3 p-2 focus:scale-102 focus:outline-green-600 transition-all duration-300 ease-in-out font-bold w-[130%]"
                type="text"
                {...register("FirstName", { required: true })} // Register input field
                id="First Name"
                placeholder="Enter First Name"
              />
              <input
                title="Enter your last name"
                className="bg-gray-800 text-white py-3 p-2 w-full sm:[20%] focus:scale-102 focus:outline-green-600 transition-all duration-300 ease-in-out font-bold"
                autoComplete="family-name" // Enable autocomplete for last name
                type="text"
                {...register("LastName", { required: true })} // Register input field
                placeholder="Enter Last Name"
              />
            </div>

            {/* Input field for email or mobile number */}
            <input
              title="Enter email or mobile number"
              autoComplete="email" // Enable autocomplete for email
              className="bg-gray-800 text-white py-3 p-2 focus:scale-102 focus:outline-green-600 transition-all duration-300 ease-in-out font-bold"
              id="Email or Mobile Number"
              type="text"
              {...register("Gmail", { required: true })} // Register input field
              placeholder="Enter Email or Mobile Number"
            />

            {/* Input field for username */}
            <input
              title="Enter your new username"
              className="bg-gray-800 text-white py-3 p-2 focus:scale-102 focus:outline-green-600 transition-all duration-300 ease-in-out font-bold"
              autoComplete="additional-name webauthn" // Enable autocomplete for username
              type="text"
              placeholder="Enter your new username"
              {...register("Username", {
                required: true,
                validate: (value) =>
                  !/\s/.test(value) || "Username cannot contain spaces", // Validate username
              })}
            />
            {errors.Username && (
              <div className="mt-[-10px] font-bold text-red-600">
                {errors.Username.message} {/* Display username error */}
              </div>
            )}

            {/* Input field for password */}
            <div className="relative w-full">
              <input
                title="Enter your new password"
                {...register("password", {
                  required:
                    "Password is required and it should be 8+ characters", // Password validation
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{8,}$/,
                    message:
                      "Password must be 8+ characters and include letters, numbers, and special characters",
                  },
                })}
                id="Password"
                type={show1stPassword ? "text" : "password"} // Toggle password visibility
                autoComplete="new-password" // Enable autocomplete for password
                placeholder="Enter your password"
                className="bg-gray-800 text-white w-full pr-12 px-2 py-3 focus:scale-102 transition-all duration-300 ease-in-out focus:outline-green-600 font-bold"
              />
              {/* Toggle password visibility */}
              <Image
                priority={true}
                title={show1stPassword ? "Hide password" : "Show password"}
                onClick={() => setshow1stPassword(!show1stPassword)} // Toggle visibility state
                alt="toggle visibility"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                width={28}
                height={28}
                src={show1stPassword ? "/hide.png" : "/show.png"} // Show appropriate icon
              />
            </div>
            {errors.password && (
              <div className="mt-[-10px] font-bold text-red-600">
                {errors.password.message} {/* Display password error */}
              </div>
            )}

            {/* Input field for confirm password */}
            <div className="relative w-full">
              <input
                title="Re-enter your password"
                required // Make the field required
                {...register("ConfirmPass", { required: true, minLength: 4 })} // Register input field
                id="confirmpassword"
                type={showPassword ? "text" : "password"} // Toggle confirm password visibility
                autoComplete="confirm-password" // Enable autocomplete for confirm password
                placeholder="Re-enter your password"
                className="bg-gray-800 text-white py-3 w-full px-2 focus:scale-102 transition-all duration-300 ease-in-out focus:outline-green-600 font-bold  "
              />
              {/* Toggle confirm password visibility */}
              <Image
                priority={true}
                title={showPassword ? "Hide password" : "Show password"}
                onClick={() => setshowPassword(!showPassword)} // Toggle visibility state
                alt="toggle visibility"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                width={28}
                height={28}
                src={showPassword ? "/hide.png" : "/show.png"} // Show appropriate icon
              />
            </div>

            {/* Terms and policies checkbox */}
            <label htmlFor="" className="text-white">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2"
                required // Make the checkbox required
                aria-label="Agree to terms and policies"
              />
              By checking it you agree to our{" "}
              <b className="underline ">Terms</b> and{" "}
              <b className="underline ">Policies</b>
            </label>

            {/* Submit button */}
            <button
              title="Create your account"
              aria-label="Create your account"
              type="submit"
              className={
                loading
                  ? " transition-all ease-in-out duration-300 font-bold bg-white text-black w-full p-4 hover:scale-100 rounded-[3px] cursor-not-allowed roboto-bold"
                  : "cursor-pointer transition-all ease-in-out duration-300 font-bold hover:bg-white hover:text-black w-full p-4 bg-green-600 text-white rounded-[3px] hover:scale-104 roboto-bold"
              }
              disabled={loading} // Disable button when loading
            >
              {loading ? "Creating Account..." : "Create Account"}{" "}
              {/* Show loading text */}
            </button>
          </form>

          {/* Show loader when loading */}
          {loading && <Loader style={{ marginTop: "10px" }} />}

          {/* Login link */}
          <div className="flex gap-[1px] items-center justify-center">
            <p className="text-white mt-3 ml-[34.8vh]">
              Already have an account?
            </p>
            <span
              title="If you already have trimify account then login"
              className="underline mt-3 text-green-500"
            >
              <Link href="/login">Login</Link>
            </span>
          </div>

          {/* Divider */}
          <p className="font-extrabold text-xl text-white text-center">or</p>

          {/* Google Sign-in button */}
          <div className="flex justify-center mt-2 cursor-pointer">
            <div
              title="Sign up using your google account"
              className="w-full bg-white"
            >
              <GoogleLoginButton width={300} />
            </div>
          </div>
        </div>

        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
      </div>
    </>
  );
};

// Export the Signup component as default
export default Signup;
