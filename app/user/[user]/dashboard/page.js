"use client";
import { useState, useEffect,useLayoutEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
export default function Page({ params }) {
  const [data, setData] = useState([]); // Data state
  const [loading, setLoading] = useState(false);
  const [confirming, setconfirming] = useState(false);

  const router = useRouter();

  const username = params.user;
  const [count, setcount] = useState(0);
  const { data: session, status } = useSession();
  useEffect(() => {
    async function tokenfetch() {
      let data = await localStorage.getItem("Token");
      let decodedtoken = await jwtDecode(data);
     
      let savedUsername = decodedtoken.Username;
    
      if (username === savedUsername || status==="authenticated") {
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
  }, [username,router, status]);
  useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.visibilityState === "visible") {
      // Refetch data when the tab becomes active again
      setLoading(true);
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);

  return () => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  };
}, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/userdata/${username}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        if (Array.isArray(data.urls)) {
          setData(data); // Update state with fetched data
        } else {
          toast.error("Invalid data format, try again later");
        }
      } catch (error) {
        toast.warn("Server Error, try again later");
      } finally {
        setLoading(false); // Set loading to false after fetch attempt
      }
    };

      if (loading) fetchData();
  }, [username, loading]); // Re-fetch when loading state is set to false

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
          body: JSON.stringify({ shortUrl: item }),
        }
      );
      const response = await deleteUrl.json();
      if (deleteUrl.ok) {
        toast.success("URL deleted successfully");
        setData((prevData) => ({
          ...prevData,
          urls: prevData.urls.filter((url) => url.shortUrl !== item),
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
  const handleCount = () => {
    setcount(count + 1);
  };

  return (
    <>
      <ToastContainer className={"pt-12"} />
      <div className="flex flex-col items-center min-h-[78vh] h-auto bg-slate-900 text-white">
        <div className="mt-2 bg-gray-900 mx-auto max-w-[210vh] w-full min-h-full rounded-xl flex flex-col gap-3 z-10 p-3">
          <header>
            <h1 className="font-bold text-2xl text-center capitalize mt-1">
              {username} Welcome to your dashboard
            </h1>
            <p className="capitalize text-xl text-center">
              All your URLs and their analytics will be shown to you in your
              dashboard
            </p>
            <div className="flex justify-between items-center px-2">
              <h2 className="font-bold text-2xl mt-1 text-start">
                Your URLs ({data?.urls?.length || 0})
              </h2>
              <button
                title="Click to generate new short URL"
                className="cursor-pointer bg-gray-600 p-2 text-white font-bold rounded-xl"
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
                  Create new URL
                </Link>
              </button>
            </div>
          </header>
          <main className="flex-grow">
            <div className="p-4 bg-gray-700 rounded-2xl w-full overflow-x-auto">
              <div className="rounded-2xl">
                <table className="table-auto w-full">
                  <thead className=" bg-gray-400 w-full text-black h-[40px] rounded-2xl">
                    <tr>
                      <th>Website</th>
                      <th>Short URL</th>
                      <th>Time of Creation</th>
                      <th>Analytics</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  {data?.urls?.map((item, index) => (
                    <tbody className="w-full" key={index}>
                      <tr className="text-center text-white text-[15px] font-bold bg-gray-900 h-[50px] rounded-2xl border-b-2 border-gray-950">
                        <td className="text-center py-2 bg-slate-600 border-b-2 border-gray-950 max-w-[200px] break-words md:max-w-[400px]">
                          {item.longUrl}
                        </td>
                        <td className="whitespace-nowrap text-center bg-slate-600 min-h-[10vh] h-full mt-2">
                          <div className="inline-flex gap-2">
                            <Link
                              onClick={handleCount}
                              title="Click to redirect"
                              target="_blank"
                              className="underline transition-all ease-in-out duration-600 hover:text-black mt-1.5"
                              href={item.fullShortUrl}
                            >
                              {item.fullShortUrl}
                            </Link>

                            <span className="  gap-2 mt-2">
                              <lord-icon
                                aria-label="Copy to Clipboard"
                                onClick={() => {
                                  handleCopy(item.fullShortUrl);
                                }}
                                alt="Copy to Clipboard"
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                                colors="primary:black,secondary:#08a88a"
                                className="w-[28px] h-[28px] cursor-pointer"
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
                            href="/analytics"
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
                              handleDelete(item.shortUrl);
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
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
