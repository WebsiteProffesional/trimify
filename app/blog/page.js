import React from "react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  keywords: [
    "url shortener use cases",
    "how to use url shorteners",
    "url shortening benefits",
    "url shortener examples",
    "Trimify url shortener use cases",
    "marketing url short links",
    "social media url shortener",
  ],
  icons: {
    icon: "/favicon.ico", // favicon
  },
  metadataBase: new URL("https://trimify.xyz"), // Replace with your domain later
  alternates: {
    canonical: "https://trimify.xyz/blog/05",
  },
  openGraph: {
    title: "Use Case of URL Shorteners | Trimify-Blog",
    description:
      "Discover various use cases of URL shorteners across marketing, social media, analytics, and more. Learn how Trimify enhances link management and tracking for users.",
    url: "https://trimify.xyz/blog/05",
    siteName: "Trimify - The Ultimate and Free URL Shortener",
    images: [
      {
        url: "/og-image.png",
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
    title: "Use Case of URL Shorteners | Trimify-Blog",
    description:
      "Discover various use cases of URL shorteners across marketing, social media, analytics, and more. Learn how Trimify enhances link management and tracking for users.",
    images: ["/og-image.png"],
  },
};
const page = () => {
  return (
    <>
      <div className="min-h-[80.8vh] ">
       
         </div>
            <article className="flex flex-col gap-2 mt-2 bg-white rounded-[5px]">
              <Image
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
        
    </>
  );
};

export default page;
