"use client";
import React, { useState } from "react";
import { useEffect } from "react"; // Import useEffect for side effects
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Head from "next/head"; // Import Head for managing the document head
import Image from "next/image";
import { faPhoneLaptop } from "@fortawesome/free-solid-svg-icons";
export default function UserUrl({ params }) {
  const username = params.analytics; // Extract the username from the route parameters
  const [analytics, setanalytics] = useState(); // State for the data
  const [clicks, setclicks] = useState("");
  const isMobile = useIsMobile(); // ✅ Call it here
  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
      const updateSize = () => setIsMobile(window.innerWidth < 640);
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return isMobile;
  }

  const getDeviceData = () => {
    if (!analytics || analytics.length === 0) return [];

    const counts = analytics.reduce((acc, entry) => {
      const device = entry.Device || "Unknown";
      acc[device] = (acc[device] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a0522d"];
  useEffect(() => {
    async function fetchData() {
      let a = await fetch(`/api/analytics/${username}`);
      let result = await a.json();
      setanalytics(result.analytics); // Set the data in state
      setclicks(result.clicks);
    }
    fetchData();
  }, [username]); // Dependency array to run effect only when username changes
  useEffect(() => {}, []);

  return (
    <>
      <Head>
        <title>Analytic Page</title>
        <meta name="description" content="Analytics Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <div className="relative h-full min-h-[76vh]  w-full bg-slate-900 -z-10 pt-6 ">
        <div className="container relative w-full bg-white z-10 mx-auto min-h-full rounded-lg shadow-lg p-6">
          <h2 className="bree-bold font-bold text-xl md:text-3xl text-center ">
            Analytic Page of{" "}
            <span className="underline">
              <b>{username}</b>
            </span>{" "}
            Url
          </h2>
          <div className=" mt-2 md:my-13">
            {/* Total Clicks Card Centered */}
            <div className="flex gap-2 justify-center">
              <div className="bg-blue-100 text-blue-900 font-semibold p-1 rounded-lg md:rounded-xl  md:p-6 shadow-md text-center w-40">
                <p className=" text-sm">Total Clicks</p>
                <p className="text-2xl font-bold">{clicks}</p>
              </div>
            </div>

            {/* Pie Chart Positioned in Top-Right */}
            {/* <div className="md:absolute mx-auto bottom-[52px] md:right-4 w-[200px] h-[200px]  md:w-[260px] md:h-[260px] max-w-auto ">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={getDeviceData()}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={isMobile ? 50 : 80} // Smaller on mobile
                    fill="#8884d8"
                    label
                  >
                    {getDeviceData().map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    height={36}
                    wrapperStyle={{
                      paddingTop: 0,
                      marginTop: 0,
                      lineHeight: "5px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div> */}
          </div>
          <div className="w-full overflow-x-auto">
            <h2 className="roboto-bold text-2xl mb-2">Recent 30 Clicks</h2>
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
                {analytics?.map((item, index) => (
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
                      <div className="flex justify-center">{item.Browser}</div>
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
