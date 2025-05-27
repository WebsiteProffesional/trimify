"use client";
import React, { useState } from "react";
import { useEffect } from "react"; // Import useEffect for side effects


import Image from "next/image";
import { faPhoneLaptop } from "@fortawesome/free-solid-svg-icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function UserUrl({ params }) {
  const username = params.analytics; // Extract the username from the route parameters
  const [analytics, setanalytics] = useState(); // State for the data
  const [clicks, setclicks] = useState("");
  const [clicksPerDay, setclicksPerDay] = useState([]);
  const [showChart, setshowChart] = useState(false);
 
  useEffect(() => {
    async function fetchData() {
      let a = await fetch(`/api/analytics/${username}`);
      let result = await a.json();
      setanalytics(result.analytics); // Set the data in state
      setclicks(result.clicks);
    }
    const results = fetchData();
  }, [username]); // Dependency array to run effect only when username changes

  useEffect(() => {
    if (!analytics) return;
    function getLast7Days() {
      const today = new Date();
      const last7Days = [];

      for (let i = 6; i >= 0; i--) {
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - i);
        last7Days.push(pastDate.toLocaleDateString());
      }
      return last7Days;
    }
    function getClicksPerDay() {
      const last7Days = getLast7Days(); // 👈 یہ وہی فنکشن جو آپ نے اوپر بنایا
      const clicksPerDay = {};

      // initialize all 7 days with 0
      last7Days.forEach((date) => {
        clicksPerDay[date] = 0;
      });

      // count clicks per day
      analytics.forEach((entry) => {
        const dateStr = new Date(entry.timestamp).toLocaleDateString();
        if (clicksPerDay[dateStr] !== undefined) {
          clicksPerDay[dateStr]++;
        }
      });
      return clicksPerDay;
    }

    const clicksperday = getClicksPerDay();

    setclicksPerDay(clicksperday);
  }, [analytics]);
  const chartData = Object.entries(clicksPerDay).map(([date, clicks]) => ({
    date,
    clicks,
  }));
  function useWindowWidth() {
    const [width, setWidth] = useState(() => window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  }
  const width=useWindowWidth();
  const handleShowChart = () => {
    setshowChart(!showChart);
  };
  return (
    <>
   <head>
        <title>Analytic Page - Trimify</title>
        <meta name="description" content="Analytics Page of short URL where user can see the analytics of there specific short URL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <div
        className="relative w-full bg-slate-900 z-10 p-4"
        style={{ minHeight: "calc(100vh - 142px)", height: "full" }}
      >
        <div className="p-4 relative w-full bg-white z-10 mx-auto min-h-full rounded-lg shadow-lg py-6 ">
          <h2 className="bree-bold font-bold text-xl md:text-3xl text-center  ">
            Analytic Page of
            <span className="underline">
              <b> {username}</b>
            </span>{" "}
            Url
          </h2>
          <div className="md:mt-2 mt-6 md:my-13">
            {/* Total Clicks Card Centered */}
            <div className=" gap-2 flex flex-col justify-center ">
              <div className="bg-blue-100 text-blue-900 mt-4 font-semibold p-3 rounded-lg md:rounded-xl  md:p-6 shadow-md text-center w-40 mx-auto">
                <p className=" text-sm">Total Clicks</p>
                <p className="text-2xl font-bold">{clicks}</p>
              </div>
              <button
                style={{ cursor: "pointer" }}
                onClick={handleShowChart}
                className="cursor-pointer z-10 roboto-bold mt-4 text-blue-600 underline "
              >
                {showChart ? "Hide Chart" : "Show Chart of Last 7 days"}
              </button>
              {showChart && (
                <>
                  <div className="w-full min-w-[400px] md:max-w-[700px] mx-auto md:pr-0 pr-20">
                    <ResponsiveContainer width="100%" height={350}>
                      <BarChart
                        data={chartData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis
                          dataKey="date"
                          interval={0}
                          angle={width < 600 ? -60:0} // Optional: adjust angle based on screen width
                        />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="clicks" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <h2 className="text-center bree-bold mb-2 md:mb-0">
                    Click Counts on Last 7 days
                  </h2>
                </>
              )}
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <h2 className=" md:bree-bold  mt-2 text-2xl mb-2">
              Recent 30 Clicks
            </h2>
            <table className="table-auto w-full text-center border-collapse border border-slate-400 overflow-x-scroll">
              <thead className="bg-gray-200">
                <tr>
                  <th className="roboto-bold text-xl w-[16.6%] px-4 py-2 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      Date
                      <Image
                        src="/date.png"
                        width={28}
                        height={28}
                        alt="date"
                      />
                    </div>
                  </th>
                  <th className="roboto-bold text-xl w-[16.6%] px-4 py-2 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      Time
                      <Image
                        src="/time.png"
                        width={32}
                        height={32}
                        alt="time"
                      />
                    </div>
                  </th>
                  <th className="roboto-bold text-xl w-[16.6%] px-4 py-2 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      Device
                      <Image
                        src="/device.png"
                        width={28}
                        height={28}
                        alt="device"
                      />
                    </div>
                  </th>
                  <th className="roboto-bold w-[16.6%] text-xl px-4 py-2 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      Browser
                      <Image
                        src="/browser.png"
                        width={28}
                        height={28}
                        alt="browser"
                      />
                    </div>
                  </th>
                  <th className="roboto-bold w-[16.6%] text-xl px-4 py-2 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      City
                      <Image
                        src="/city.png"
                        width={28}
                        height={28}
                        alt="city"
                      />
                    </div>
                  </th>
                  <th className="roboto-bold  w-[16.6%] text-xl px-4 py-2 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      Country
                      <Image
                        src="/country.png"
                        width={28}
                        height={28}
                        alt="country"
                      />
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {analytics
                  ?.slice(-30)
                  .reverse()
                  .map((item, index) => (
                    <tr key={index} className="border-t border-slate-300">
                      <td className="px-4 py-2">
                        <div className="flex justify-center">
                          {new Date(item.timestamp).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center ">
                          {new Date(item.timestamp).toLocaleTimeString()}
                        </div>
                      </td>
                      <td className="py-2 pr-8">
                        <div className="flex justify-center">{item.Device}</div>
                      </td>
                      <td className="py-2 pr-13">
                        <div className="flex justify-center">
                          {item.Browser}
                        </div>
                      </td>
                      <td className=" py-2  pr-4">
                        <div className="flex justify-center ">{item.City}</div>
                      </td>
                      <td className="px-8 py-4">
                        <div className="flex items-center justify-center gap-2">
                          {item.countryName}
                          <Image
                            src={item.countryFlag}
                            width={32}
                            height={32}
                            alt="Country Flag"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
      </div>
    </>
  );
}
