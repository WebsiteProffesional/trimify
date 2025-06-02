import React from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  keywords: [
    "URL shorteners",
    "URL shortening",
    "helpful and famous blogs",
    "Trimify",
    "free URL shortener",
    "Trimify blogs",
    "use cases",
  ],
   title: "Famous and Helpful BLOGS | Trimify-Blog",
  description: "Explore top articles related to URL shortening and more with Trimify.",
  icons: {
    icon: "/favicon.ico", // favicon
  },
  metadataBase: new URL("http://trimify.xyz"), // Replace with your domain later
  alternates: {
    canonical: "https://trimify.xyz/blog",
  },
  openGraph: {
    title: "Famous and Helpful BLOGS | Trimify-Blog",
    description: "Explore top articles related to URL shortening and more with Trimify.",
    siteName: "Trimify - The Ultimate and Free URL Shortener",
    images: [
      {
        url: "/og-image.png", // Recommended: 1200x630 og-image instead of favicon
        width: 800,
        height: 600,
        alt: "Trimify logo",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Famous and Helpful BLOGS | Trimify-Blog",
    description:
      "Explore top articles related to URL shortening and more with Trimify.",
    images: ["/og-image.png"],
  },
};
const page = () => {
  return (
    <>
      <div className="min-h-[80.8vh] ">
        <div className="relative  w-full bg-slate-900 z-10 p-4 m-0 z-10">
          <h1 className="bree-bold text-4xl text-center bg-slate-800 text-white ">
            {" "}
            Famous and Helpful BLOGS{" "}
          </h1>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
        </div>
        <div className=" bg-gray-100   h-full   m-4  p-4  rounded-[8px] ">
          <h2 className="roboto-bold text-3xl underline text-center">
            Articles Related to URL Shortening
          </h2>
          <div className="flex flex-row flex-wrap gap-4.5 mt-8">
            <article className="flex flex-col gap-2 mt-2 bg-white rounded-[5px]">
              <Image
                alt="Top 5 Best URL Shorteners 2025"
                src="/T5BUS.png"
                className="w-[350px] h-[220px] rounded-[6px]"
                width={270}
                height={180}
              />
              <h2 className="roboto-bold text-xl pl-2  ">
                01.{" "}
                <Link
                  title="Redirect to article 01"
                  className="hover:text-blue-500 transition-all ease-in-out duration-300 hover:underline"
                  href="/blog/01"
                >
                  Top 5 Best URL Shorteners 2025
                </Link>
              </h2>
              <p className="roboto-semibold  pl-2 w-[320px]">
                To short the url first of all we have to know about...
              </p>
              <p className="pl-2 mb-1">
                <b>Published By:</b>Trimify Owner
              </p>
            </article>
            <article className="flex flex-col gap-2 mt-2 bg-white rounded-[5px]">
              <Image
                alt="How to use URL Shorteners"
                src="/HTUUS.png"
                className="w-[350px] h-[220px] rounded-[6px]"
                width={270}
                height={180}
              />
              <h2 className="roboto-bold text-xl pl-2  ">
                02.{" "}
                <Link
                  title="Redirect to article 2"
                  className="hover:text-blue-500 transition-all ease-in-out duration-300 hover:underline"
                  href="/blog/02"
                >
                  How to Use URL Shorteners ?
                </Link>
              </h2>
              <p className="roboto-semibold  pl-2 w-[320px]">
                To short the url first of all we have to know about...
              </p>
              <p className="pl-2 mb-1">
                <b>Published By:</b>Trimify Owner
              </p>
            </article>
            <article className="flex flex-col gap-2 mt-2 bg-white rounded-[5px]">
              <Image
                alt="Why to use short Links"
                src="/WTUSL.png"
                className="w-[350px] h-[220px] rounded-[6px]"
                width={270}
                height={180}
              />
              <h2 className="roboto-bold text-xl pl-2 ">
                03.{" "}
                <Link
                  title="Redirect to article"
                  className="hover:text-blue-500 transition-all ease-in-out duration-300 hover:underline"
                  href="/blog/03"
                >
                  Why Use Short Links ?
                </Link>
              </h2>
              <p className="roboto-semibold  pl-2 w-[320px]">
                To short the url first of all we have to know about...
              </p>
              <p className="pl-2 mb-1">
                <b>Published By:</b>Trimify Owner
              </p>
            </article>
            <article className="flex flex-col gap-2 mt-2 bg-white rounded-[5px]">
              <Image
                alt="Free vs premium URL Shortener"
                src="/FVPUS.png"
                className="w-[350px] h-[220px] rounded-[6px]"
                width={270}
                height={180}
              />
              <h2 className="roboto-bold text-xl pl-2 ">
                04.{" "}
                <Link
                  className="hover:text-blue-500 transition-all ease-in-out duration-300 hover:underline"
                  href="/blog/04"
                  title="Redirect to article 04"
                >
                  Free vs Premium URL Shorteners
                </Link>
              </h2>
              <p className="roboto-semibold  pl-2 w-[320px]">
                Which one is right for you ? Lets try to know about.{" "}
              </p>
              <p className="pl-2 mb-1">
                <b>Published By:</b>Trimify Owner
              </p>
            </article>
            <article className="flex flex-col gap-2 mt-2 bg-white rounded-[5px]">
              <Image
                alt="Use cases of URL Shorteners"
                src="/UCOUS.png"
                className="w-[350px] h-[220px] rounded-[6px]"
                width={270}
                height={180}
              />
              <h2 className="roboto-bold text-xl pl-2 ">
                05.{" "}
                <Link
                  className="hover:text-blue-500 transition-all ease-in-out duration-300 hover:underline"
                  href="/blog/05"
                  title="Redirect to article 05"
                >
                  Use Cases of URL Shorteners
                </Link>
              </h2>
              <p className="roboto-semibold  pl-2 w-[320px]">
                The URL Shorteners are used by people in many industries such
                as...
              </p>
              <p className="pl-2 mb-1">
                <b>Published By:</b>Trimify Owner
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
