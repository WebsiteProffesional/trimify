"use client"; // Indicates this is a client-side component
import React, { useEffect } from "react"; // Import React and useEffect for side effects
import { useState } from "react"; // Import useState hook for state management
import Link from "next/link"; // Import Link for navigation
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast for notifications
import Loader from "@/app/components/Loader"; // Import custom Loader component
import { motion } from "framer-motion"; // Import motion for animations
import { set } from "mongoose"; // Import set from mongoose (not used here)

export default  function UserUrl({ params }) {
  const username = params.user; // Extract the username from the route parameters
  const [longUrl, setlongUrl] = useState(""); // State for the long URL input
  const [shortUrl, setshortUrl] = useState(""); // State for the short URL input
  const [Msg, setMsg] = useState(""); // State for the generated short URL message
  const [On, setOn] = useState(false); // State to toggle the display of the short URL
  const [loading, setloading] = useState(false); // State to manage the loading spinner

  // Function to handle URL generation
  async function GenerateUrl() {
    // Check if both input fields are filled
    if (!longUrl.trim() || !shortUrl.trim()) {
      // Show a warning toast if inputs are empty
      toast.warn(
        "Please fill both Long URL and Short Name before generating!",
        {
          position: "top-right", // Position of the toast
          autoClose: 3000, // Auto close after 3 seconds
        }
      );
      return; // Exit the function
    }
    setloading(true); // Set loading state to true

    try {
      let Time = await Date.now(); // Get the current timestamp
      let time = new Date(Time).toLocaleTimeString(); // Format time
      let data = new Date(Time).toLocaleDateString(); // Format date

      // Send a POST request to the API with the input data
      const response = await fetch(`/api/`, {
        method: "POST", // HTTP method
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify({
          username: username, // Include the username
          longUrl: longUrl, // Long URL input
          shortUrl: shortUrl, // Short URL input
          time: time, // Current time
          date: data, // Current date
          analytics:0
        }),
      });

      let result = await response.json(); // Parse the JSON response
      setMsg(result.shortUrl); // Set the generated short URL message

      // Check if the response is not OK
      if (!response.ok) {
        // Show a warning toast if the URL already exists
        toast.warn("The url with this short name already exists", {
          position: "top-right",
          autoclose: 3000,
        });
        setlongUrl(""); // Clear the long URL input
        setshortUrl(""); // Clear the short URL input
        return; // Exit the function
      } else {
        // Show a success toast if the URL is generated successfully
        toast.success("The url is generated successfully", {
          position: "top-right",
          autoClose: 3000,
        });
        setlongUrl(""); // Clear the long URL input
        setshortUrl(""); // Clear the short URL input
        setOn(!On); // Toggle the display of the short URL
      }
    } catch (err) {
      toast,warn("Server error Try again later", {
        position: "top-right", // Position of the toast
        autoClose: 3000, // Auto close after 3 seconds
      }); // Show a warning toast if an error occurs
     console.log(err)
    } finally {
      setloading(false); // Set loading state to false
    }
  }

  // Render the component
  return (
    <>
      {/* Toast container for notifications */}
      <ToastContainer className={"pt-12"} />
      <div className="relative h-[78vh] w-full bg-slate-900 flex justify-center items-center">
        {/* Main container for the form */}
        <div
          className="flex flex-col z-10 bg-slate-700  sm:max-w-[50vh] md:max-w-[90vh] justify-center items-center h-[60vh]  w-full text-white
          gap-6 rounded-2xl shadow-lg shadow-gray-600 p-3"
        >
          {/* Title */}
          <h1 className="text-2xl font-bold md:mb-1 md:mt-[-40px] md:text-4xl">
            Generate Shorturl From Here
          </h1>
          {/* Input for the long URL */}
          <input
            title="Enter the long url"
            autoComplete="on"
            className="bg-gray-800 z-2 font-bold outline-purple-700 rounded-2xl max-w-[80vh] w-full text-gray-white px-4 py-2"
            placeholder="Enter Long url"
            type="text"
            onChange={(e) => setlongUrl(e.target.value)} // Update state on change
            value={longUrl} // Bind state to input
          />
          {/* Input for the short name */}
          <input
            title="Enter the short name"
            autoComplete="on"
            className="bg-gray-800 z-2 font-bold  outline-purple-700 rounded-2xl max-w-[80vh] w-full text-gray-white px-4 py-2"
            placeholder="Enter Short Name"
            type="text"
            onChange={(e) => setshortUrl(e.target.value)} // Update state on change
            value={shortUrl} // Bind state to input
          />
          {/* Button to trigger URL generation */}
          <button
            title="Click to generate shorturls"
            className="bg-purple-700 md:max-w-[79vh] max-w-[75vh] w-full sm:rounded-xl rounded-[5px] cursor-pointer z-2 p-3 shadow-2xs shadow-white text-white font-semibold hover:text-red-900 hover:bg-white transition-all duration-400 ease-in-out"
            onClick={GenerateUrl} // Call GenerateUrl on click
            disabled={loading} // Disable button if loading
          >
            {loading ? "Generating shorturl..." : "Generate shorturl"} {/* Show loading text */}
          </button>
          {/* Show loader if loading */}
          {loading && <Loader />}
          {/* Show the generated short URL if available */}
          {On && (
           
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} // Initial animation state
              animate={{ opacity: 1, scale: 1 }} // Final animation state
              transition={{ duration: 1 }} // Animation duration
              className="text-xl z-2 font-extrabold text-black text-center"
            >
              The short url is:{" "}
              <Link
                title="Click to open the short url"
                rel="noopener noreferrer" // Prevents the new page from accessing the original page
                target="_blank" // Open link in a new tab
                className="text-white font-bold cursor-pointer underline z-2"
                href={Msg} // Link to the generated short URL
              >
                {Msg}
              </Link>
            </motion.div>
          )}
        </div>
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
      </div>
    </>
  );
}