"use client";

import Link from "next/link";

export const dynamic = "force-static";
const metadata = {
  title: "Trimify.Shorten-smart,Share-fast",
  description:
    "Trimify is a URL shortener that helps you create short, memorable links for easy sharing. With Trimify, you can track link performance and manage your links effortlessly. Say goodbye to long URLs and hello to Trimify!",
  openGraph: {
    title: "Trimify",
    description:
      "Trimify is a URL shortener that helps you create short, memorable links for easy sharing. With Trimify, you can track link performance and manage your links effortlessly. Say goodbye to long URLs and hello to Trimify!",
    url: "https://trimify.vercel.app/",
    siteName: "Trimify",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
    Keywords: ["URL shortener", "link shortener", "short links", "Trimify"],
  },
};
export default function Home() {
  return (
    <>
      <div className="relative sm:h-full md:h-[78vh] w-full bg-slate-900">
        <div className="text-white flex flex-col  md:flex-row items-center  p-12 justify-center gap-32 ">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="flex flex-col text-3xl font-extrabold text-center items-center  text-gray-200 mb-[-2px] ml-[-3px]">
              Trimify
            </h1>
            <p className="flex max-w-[500px] w-full text-center p-2 text-xl  leading-relaxed ">
              Welcome to the ultimate URL shortener — your go-to tool for
              turning long, messy links into clean, memorable ones. Whether
              you're sharing on social media, sending emails, or just saving
              links for later, our service makes it fast, easy, and reliable.
              Say goodbye to bulky URLs and hello to sleek, shareable links!
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full md:max-w-[60vh]  justify-center ">
              <button className="  cursor-pointer transition-all duration-400 ease-in-out  bg-slate-950  relative z-2 rounded-[14px] px-5 py-2  text-white font-semibold hover:text-red-900 hover:bg-white  md:max-h-[7vh] ">
                <Link href="/generate-shortUrl">Try Trimify</Link>
              </button>

              <button className="bg-slate-950 cursor-pointer transition-all duration-400 ease-in-out   relative z-10 rounded-[14px]  md:max-w-[23vh] w-full px-5 py-2  text-white font-semibold hover:text-red-900 hover:bg-white md:max-h-[7vh]">
                <Link href="/login">Login for free</Link>
              </button>
            </div>
          </div>
          <div className="z-2">
            <video
              src="intro.webm"
              className="rounded-xl max-w-[400px] md:max-w-[550px] w-full  h-[250px] "
              autoPlay
              muted
              playsInline
              loop
              preload="none"
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
      </div>
    </>
  );
}
