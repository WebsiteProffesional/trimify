"use client"; // Indicates this is a client-side component
import React from "react"; // Import React for JSX
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Link from "next/link"; // Import Link for navigation
import GoogleLoginButton from "../components/GoogleButton"; // Import Google login button component
import Image from "next/image"; // Import Image for optimized image rendering
import { useState, useEffect } from "react"; // Import useState hook for state management
import { toast, ToastContainer } from "react-toastify"; // Import ToastContainer and toast for notifications
import Loader from "../components/Loader"; // Import custom Loader component
import { useSession } from "next-auth/react"; // Importing useSession from next-auth
// Define the Login component
const Login = () => {
  // State variables for managing input fields, password visibility, and loading state
  const [showPassword, setshowPassword] = useState(false); // State to toggle password visibility
  const [username, setusername] = useState(""); // State for the username input
  const [password, setpassword] = useState(""); // State for the password input
  const [loading, setLoading] = useState(false); // State to manage the loading spinner
  const router = useRouter(); // Initialize the router for navigation
  const { data: session, status } = useSession(); //Taking data from useSession and renaming it to session
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && !hasRedirected) {
      const email = session?.user?.email;
      if (email) {
        const username = email.split("@")[0].toLowerCase();
        setHasRedirected(true); // prevent double trigger
        toast.success(
          "Successfully logged in through google. Redirection to your Dashboard",
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
        router.push(`/user/${username}/dashboard`);
      }
    }
  }, [status, session, hasRedirected,router]); // Dependency array for useEffect

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Set loading state to true

    // Validate username input
    if (username.length === 0) {
      setLoading(false)
      toast.error("Please enter your username", {
        position: "top-right", // Position of the toast
        autoClose: 5000, // Auto close after 5 seconds
      });
      
      return; // Exit the function
      
    }

    // Validate password input
    if (password.length === 0) {
      toast.error("Please enter your password", {
        position: "top-right",
        autoClose: 5000,
      });
      setLoading(false)
      return; // Exit the function
    }

    try {
      // Call your API for login
      const response = await fetch("/api/login", {
        method: "POST", // HTTP method
        body: JSON.stringify({
          Username: username, // Send username
          Password: password, // Send password
        }),
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
      });

      const result = await response.json(); // Parse the JSON response

      await localStorage.setItem("Token", result.token);
      if (result.success) {
        // If login is successful, show success toast
        toast.success("Login successful", {
          position: "top-right",
          autoClose: 5000,
        });
        // Redirect to the user dashboard
        router.push(`/user/${username}/dashboard`);
      } else {
        // Handle login error
        toast.error(result.error, {
          position: "top-right",
          autoClose: 5000,
        });
        setloading(false);
      }
    } catch (error) {
      // Show error toast if an exception occurs
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
      });
      setLoading(false);
    } finally {
      // Once the process is complete, set loading to false
      setLoading(false);
    }
  }

  // Render the component
  return (
    <>
      {/* Toast container for notifications */}
      <ToastContainer className={"mt-12"} />
      <div className="relative  w-full bg-slate-900 flex flex-col justify-center items-center p-2" style={{ minHeight: "calc(100vh - 142px)" ,height:"full"}}>
        {/* Main container for the login form */}
        <div className="bg-gray-900 rounded-2xl p-4 max-w-[80vh] w-full h-auto flex flex-col gap-3 items-center justify-center z-2">
          {/* Title of the login page */}
          <h1 className="text-3xl bree-bold text-white font-bold mb-3 mt-3">
            Login to TRIMIFY now
          </h1>
          {/* Login form */}
          <form
            action="Submit"
            className="flex flex-col items-center gap-4 w-full max-w-[78vh]"
          >
            {/* Username input field */}
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              title="Enter your username"
              required // Make the field required
              onChange={(e) => setusername(e.target.value)} // Update state on change
              value={username} // Bind state to input
              autoComplete="username" // Enable autocomplete for username
              id="username"
              type="text"
              placeholder="Enter your username"
              className="bg-gray-800 text-white max-w-[75vh] transition-all duration-300 ease-in-out w-full px-2 py-4 focus:scale-102 focus:outline-green-400 outline-green-200 font-bold"
            />

            {/* Password input field */}
            <div className="relative w-full">
              <input
                required // Make the field required
                title="Enter your password"
                onChange={(e) => setpassword(e.target.value)} // Update state on change
                value={password} // Bind state to input
                id="password"
                type={showPassword ? "text" : "password"} // Toggle password visibility
                autoComplete="current-password" // Enable autocomplete for password
                placeholder="Enter your password"
                className="bg-gray-800 text-white transition-all duration-300 ease-in-out focus:scale-102 focus:outline-green-400 max-w-[75vh] w-full px-2 py-4 outline-green-200 font-bold"
              />
              {/* Toggle password visibility */}
              <Image
                priority={false} // Do not prioritize loading
                title={showPassword ? "Hide password" : "Show password"} // Tooltip for the icon
                onClick={() => setshowPassword(!showPassword)} // Toggle visibility state
                alt="toggle visibility"
                className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                width={28}
                height={28}
                src={showPassword ? "/hide.png" : "/show.png"} // Show appropriate icon
              />
            </div>

            {/* Forgot password link */}
            <p
              title="Recover your account"
              className="underline text-red-400 mt-[-10px] mb-2 w-full cursor-pointer"
            >
              Forgot password
            </p>

            {/* Login button */}
            <button
              title="Login to your account"
              onClick={handleSubmit} // Call handleSubmit on click
              type="submit"
              className={
                loading
                  ? "bg-white text-black max-w-[75vh] roboto-bold w-full cursor-not-allowed transition-all ease-in-out duration-300 hover:scale-102 rounded-[3px] p-3 text-xl"
                  : "max-w-[75vh] w-full cursor-pointer transition-all ease-in-out duration-300 text-xl roboto-bold hover:bg-white hover:text-black p-3 hover:scale-102 bg-green-600 text-white rounded-[3px]"
              }
              disabled={loading} // Disable button when loading
            >
              {loading ? "Logging in..." : "Login now"}{" "}
              {/* Show loading text */}
            </button>
          </form>

          {/* Show loader when the page is loading */}
          {loading && <Loader />}

          {/* Sign-up link */}
          <div className="flex gap-[1px] items-center justify-center w-full">
            <p className="text-white mt-4 ml-[34.8vh]">
              Don't have an account?
            </p>
            <span
              title="Sign up if you don't have account"
              className="underline mt-3 text-green-500"
            >
              <Link href="/sign-up-to-trimify">Sign Up</Link>
            </span>
          </div>

          {/* Divider */}
          <p className="text-xl font-bold text-white">or</p>

          {/* Google Sign-in button */}
          <div
            title="Login using your google account"
            className="max-w-[75vh] w-full flex items-center justify-center gap-2 bg-white rounded-[3px]"
          >
            <GoogleLoginButton width={300} />
          </div>
        </div>

        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
      </div>
    </>
  );
};

// Export the Login component as default
export default Login;
