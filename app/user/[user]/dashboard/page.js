"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Head from "next/head"
export default function Page({ params }) {
  const [data, setdata] = useState([]); // Data state
  const [loading, setLoading] = useState(false);
  const [confirming, setconfirming] = useState(false);
 
  const router = useRouter();
   
  const username = params.user;

  const { data: session, status } = useSession();

  useEffect(() => {
    async function tokenfetch() {
      let data = await localStorage.getItem("Token");
      let decodedtoken = await jwtDecode(data);

      let savedUsername = decodedtoken.Username;

      if (username === savedUsername || status === "authenticated") {
        return;
      } else {
        toast.warn("Please login first", {
          position: "top-right",
          autoClose: 3000,
        });
        router.push("/login");
      }
    }
    tokenfetch();
  }, [username, router, status]);

  useEffect(() => {
    const fetchData = async () => {
    setLoading(true)
      try {
        const response = await fetch(`/api/userdata/${username}`);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data1 = await response.json();

        if (Array.isArray(data1.urls)) {
          setdata(data1.urls); // Update state with fetched data
          
        } else {
          toast.error("Invalid data format, try again later");
        }
      } catch (error) {
        toast.warn("Server Error, try again later");
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };

     fetchData();
  }, [username]); // Re-fetch when loading state is set to false

  // Delete URL handler
  const handleDelete = async (item) => {
    try {
      const deleteUrl = await fetch(
        `http://localhost:3000/api/userdata/${username}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ shortName: item }),
        }
      );
      const response = await deleteUrl.json();
      if (deleteUrl.ok) {
        toast.success("URL deleted successfully");
        setdata((prevData) => ({
          ...prevData,
          urls: prevData.urls.filter((url) => url.shortName !== item),
        }));
      }
    } catch (err) {
      toast.error("Failed to delete URL");
    }
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      toast.success("URL copied to clipboard");
    });
  };

  return (
    <>
      <head>
        <title>User Dashboard - Trimify</title>
         <meta name="description" content="A separate dashboard provided by TRIMIFY to its logged user in which they can create custom links and manage them" />
         <Link rel="canonical" href="/"/>
      </head>
      <ToastContainer className={"pt-12"} />
      <div className="flex flex-col items-center  bg-gray-800 text-white"style={{ minHeight: "calc(100vh - 142px)" ,height:"full"}}>
        <div className="my-2 bg-gray-900 mx-auto max-w-[210vh] w-full  min-h-[60vh]rounded-xl flex flex-col gap-3 z-10 p-3 shadow-2xl shadow-black ">
          <header>
            <h1 className="bree-bold text-2xl text-center capitalize mt-1">
              <span className="underline"> {username}</span> Welcome to your
              dashboard
            </h1>
            <p className="capitalize text-xl roboto-bold text-center mt-4 md:mt-1">
              All your URLs and their analytics will be shown to you in your
              dashboard
            </p>
            <div className="flex justify-between items-center px-2 mt-4">
              <h2 className="font-bold text-xl md:text-2xl mt-1 text-start">
                Your URLs ({data?.urls?.length || 0})
              </h2>
              <button
                title="Click to generate new short URL"
                className="cursor-pointer bg-gray-600 md:rounded-2xl p-1 font-semibold md:p-2 text-white md:font-bold rounded-[8px] shadow-2xs shadow-gray-300 hover:bg-gray-500 transition-all ease-in-out duration-300"
              >
                <Link
                  target="_blank"
                  href={`/generate-shortUrl/${username}`}
                  className="flex justify-center items-center gap-2"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                    trigger="hover"
                    colors="primary:white,secondary:#4ade80"
                    style={{ width: "28px", height: "28px" }}
                  ></lord-icon>
                  Create New Url
                </Link>
              </button>
            </div>
          </header>
          <main className="flex-grow">
            <div className=" bg-gray-700 rounded-xl w-full overflow-x-auto p-2">
              <table className="table-auto w-full shadow-2xl shadow-white">
                <thead className="bg-gray-400 w-full text-black h-[40px] roboto-bold md:text-xl rounded-2xl">
                  <tr>
                    <th>Website</th>
                    <th>Short URL</th>
                    <th>Time of Creation</th>
                    <th>Analytics</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="w-full">
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      className="text-center text-white roboto-semibold text-xl bg-gray-900 h-[50px] rounded-2xl border-b-2 border-gray-950"
                    >
                      <td className="text-center py-2 bg-slate-600 border-b-2 border-gray-950 max-w-[200px] break-words md:max-w-[400px]">
                        {item.longUrl} + .............hsk
                      </td>

                      <td className="whitespace-nowrap text-center bg-slate-600 min-h-[10vh] h-full mt-2">
                        <div className="inline-flex gap-2 justify-center items-center">
                          <Link
                            title="Click to redirect"
                            target="_blank"
                            className="underline transition-all ease-in-out duration-600 hover:text-black mt-1.5"
                            href={item.fullShortUrl}
                          >
                            {item.fullShortUrl}
                          </Link>

                          <span className="gap-2 mt-2 cursor-pointer">
                            <lord-icon
                              aria-label="Copy to Clipboard"
                              onClick={() => {
                                handleCopy(item.fullShortUrl);
                              }}
                              alt="Copy to Clipboard"
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                              colors="primary:black,secondary:#08a88a"
                              className="w-[28px] h-[28px]"
                              title="Copy to Clipboard"
                            ></lord-icon>
                          </span>
                        </div>
                      </td>

                      <td className="text-center py-2 bg-slate-600">
                        {item.time + " " + item.date}
                      </td>

                      <td className="text-center py-2 bg-slate-600">
                        <Link
                          title="Click to see the URL analytics"
                          href={`analytics/${item.shortName}`}
                          target="_blank"
                          className="hover:underline"
                        >
                          Click here to see Analytics
                        </Link>
                      </td>

                      <td className="text-center py-2 bg-slate-600">
                        <lord-icon
                          title="Click to delete this URL"
                          aria-label="Delete this URL"
                          onClick={() => {
                            handleDelete(item.shortName);
                          }}
                          alt="Delete this URL"
                          src="https://cdn.lordicon.com/jmkrnisz.json"
                          trigger="hover"
                          colors="primary:black,secondary:#e83a30"
                          style={{
                            width: "40px",
                            height: "40px",
                            cursor: "pointer",
                          }}
                        ></lord-icon>
                      </td>
                    </tr>
                 ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
