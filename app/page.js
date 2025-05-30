import Link from "next/link";
import globalcss from "./globals.css";
import { icons } from "lucide-react";
export const metadata = {
title: "Trimify – The Ultimate and Free URL Shortener",
  description:
    "Trimify helps you create short, memorable links for easy sharing. Track clicks, manage your links, and say goodbye to long URLs with Trimify!.The main advantage of Trimify is that it is Free for all users.",
  keywords: [
    "URL shortener",
    "free URL shortener",
    "custom short links",
    "shorten URLs online",
    "best link shortener",
    "Trimify",
    "link shortener",
    "URL Shortener alternative to bitly",
    "2025 Best URL Shortener",
  ],
  icons:{
    icon: '/favicon.png',  // favicon
  },
  metadataBase: new URL("https://www.trimify.xyz"), // Replace with your domain later
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trimify – The Ultimate and Free URL Shortener",
    description:
      "Shorten, manage, and track links easily. Trimify lets you create memorable URLs and measure performance in real time.",
    url: "/",
    siteName: "Trimify",
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
    title: "Trimify – The Ultimate and Free URL Shortener",
    description:
      "Fast, reliable, and free link shortener with real-time analytics. Try Trimify today!",
    images: ["/og-image.png"],
  },
};
export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <div
        className="relative  w-full bg-slate-900 z-10 overflow-auto"
        style={{ minHeight: "calc(100vh - 142px)", height: "full" }}
      >
        <div className="text-white flex flex-col md:flex-row items-center p-12 justify-center gap-4 md:gap-32 z-10">
          {/* Left section */}
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl bree font-extrabold text-center text-white mb-[-2px] ml-[-3px] z-10">
              TRIMIFY
            </h1>
            <p className="max-w-[500px] w-full text-center p-2 text-xl leading-relaxed z-10 text-white roboto">
              Welcome to the ultimate URL shortener — your go-to tool for
              turning long, messy links into clean, memorable ones. Whether
              you're sharing on social media, sending emails, or just saving
              links for later, our service makes it fast, easy, and reliable.
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full md:max-w-[60vh] justify-center z-10">
              <Link href="/generate-shortUrl">
                <button
                  name="Click to generate short URLs"
                  title="Click to generate short URLs"
                  aria-label="Click to generate short URLs"
                  className="bg-slate-950 cursor-pointer transition-all duration-500 ease-in-out rounded-[14px] md:max-w-[23vh] w-full p-3 text-white roboto-bold hover:text-red-900 hover:bg-white hover:scale-103"
                >
                  Try Trimify
                </button>
              </Link>
              <Link href="/count-clicks">
                <button
                  name="Click to check clicks on URL"
                  title="Click to check clicks on URL"
                  aria-label="Click to check clicks on URL"
                  className="bg-slate-950 cursor-pointer transition-all duration-500 ease-in-out rounded-[14px] md:max-w-[23vh] w-full p-3 text-white roboto-bold hover:text-red-900 hover:bg-white hover:scale-103"
                >
                  Check clicks on url
                </button>
              </Link>

              <Link href="/login">
                <button
                  title="Click to login to Trimify"
                  name="Click to login to Trimify"
                  aria-label="Click to login to Trimify"
                  className="bg-slate-950 cursor-pointer transition-all duration-500 ease-in-out rounded-[14px] md:max-w-[23vh] w-full p-3 text-white roboto-bold hover:text-red-900 hover:bg-white hover:scale-103"
                >
                  Login for Free
                </button>
              </Link>
            </div>
          </div>

          {/* Right section with video */}
          <div className="z-2">
            <video
              src="intro.webm"
              className="rounded-[10px] md:rounded-3xl max-w-[400px] md:max-w-[550px] w-full h-[250px]"
              autoPlay
              muted
              playsInline
              loop
              preload="none"
              loading="lazy"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b82f6,transparent)] opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#9333ea,transparent)] opacity-20"></div>
      </div>
   
      <section className="border-black border-3 w-full p-2 bg-white text-gray-800">
        <div>
          <h1 className="text-center bg-slate-800 text-white bree p-3 text-2xl">
            Want More? Try Trimify Premium Mode!
          </h1>
          <div className="flex flex-col justify-center items-center gap-4 p-4 md:roboto-bold">
            <p className="text-lg roboto-semibold md:roboto-bold text-gray-700 text-center max-w-[600px]">
              Unlocks a separate dashboard for managing all your short URLs,
              real-time analytics and tracking of link clicks, and the ability
              to edit, delete, and organize your links. It is also free of cost
              only requires user login so why wait? Signup Now
            </p>
            <Link href="/sign-up-to-trimify">
              <button
                name="Signup to create custom short URLs"
                title="Signup to create custom short URLs"
                aria-label="Signup to create custom short URLs"
                className="bg-slate-950 cursor-pointer transition-all duration-500 ease-in-out rounded-[14px] md:max-w-[23vh] w-full text-center p-4 text-white roboto-bold hover:text-red-900 hover:bg-white ] hover:scale-103"
              >
                Signup Now
              </button>
            </Link>
          </div>
        </div>
      </section>
     {/* Ad's Secrion */ }
     <section className="border-black border-3 p-2 bg-white text-gray-800 mt-2">
    <h2 className="text-center bg-slate-800 text-white bree p-3 text-2xl">
            Ad's Section
     </h2> 
     <div classname="mx-auto" id="container-568618a428c18986cf4e486dc3df8e4b"></div>
     <section/>
      {/* FAQ Block */}
      <section className="border-black border-3 p-2 bg-white text-gray-800 mt-2">
        <section className="w-full text-gray-800 mt-4">
          <h2 className="text-center text-4xl md:text-5xl roboto-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Frequently Asked Questions
          </h2>
          <p className="text-center md:roboto-bold text-lg md:text-xl text-gray-700 mb-12 roboto-semibold">
            Everything you need to know about how Trimify works and why it’s
            awesome.
          </p>
        </section>

        <div className="mt-10">
          <section className="w-full bg-white text-gray-800">
            <h2 className="bg-black text-white p-5 text-center bree text-2xl md:text-3xl">
              Why Choose Trimify?
            </h2>
            <div className="md:roboto-bold text-xl p-3 md:p-8 md:py-12 roboto">
              <p>
                Trimify is a free and easy-to-use URL shortener. Whether you're
                new to short links or just want something quick and reliable,
                our user-friendly design makes it accessible for everyone.
                Trimify offers two modes:
              </p>
              <ol className="list-decimal list-inside mt-4 mb-6">
                <li>
                  <b>Simple Mode</b> (no account required)
                </li>
                <li>
                  <b>Premium Mode</b> (requires login or sign-up)
                </li>
              </ol>

              <section className="mb-6">
                <h3 className="text-2xl roboto-bold underline mb-2">
                  Simple Mode
                </h3>
                <p>No login required. Perfect for:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Users in a hurry who want to shorten links quickly.</li>
                  <li>One-time or occasional users.</li>
                  <li>People concerned with privacy and account creation.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-2xl roboto-bold underline mb-2">
                  Premium Mode
                </h3>
                <p>Login required. Ideal for frequent users who need:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>To shorten URLs repeatedly.</li>
                  <li>To track and manage their shortened URLs.</li>
                  <li>To create custom branded short links.</li>
                </ul>

                <div className="pl-5 ml-3 mt-4 border-l-4 border-slate-400">
                  <h3 className="text-xl roboto-bold underline mb-2">
                    Key Features:
                  </h3>
                  <p>
                    The premium mode of Trimify provides some key features that
                    are listed below:
                  </p>
                  <ul className="list-disc list-inside mt-1">
                    <li>
                      A personalized dashboard for managing all your short URLs.
                    </li>
                    <li>Real-time analytics and tracking of link clicks.</li>
                    <li>Ability to edit, delete, and organize your links.</li>
                  </ul>
                </div>
              </section>
            </div>
          </section>

          <section className="w-full bg-white text-gray-800">
            <h2 className="bg-black text-white p-5 text-center bree text-2xl md:text-3xl">
              Is Trimify Secure?
            </h2>
            <div className="roboto md:roboto-bold text-xl p-3 md:p-8 md:py-12">
              <p>
                Yes, Trimify is secure. We prioritize your privacy and data
                security. Our platform uses encryption to protect your
                information, and we do not share your data with third parties.
              </p>
              <ol className="list-decimal list-inside mt-4 space-y-2 roboto-bold">
                <li>
                  Your passwords are encrypted using the <code>bcrypt</code>{" "}
                  library before being stored in our database. This means even
                  we cannot view or retrieve your original passwords — your data
                  is safe with us.
                </li>
                <li>
                  Access to your short links and analytics is restricted to your
                  account only, ensuring no unauthorized access.
                </li>
              </ol>
              <div className="mt-6 border-l-4 border-slate-400 ml-3 pl-4">
                <h3 className="text-xl roboto-bold underline mb-2">
                  Security Measures:
                </h3>
                <ol className="list-disc list-inside space-y-2">
                  <li>
                    Never share your Trimify account password with anyone. Doing
                    so can lead to unauthorized access to your dashboard and
                    stored data.
                  </li>
                  <li>
                    Always log out after using Trimify on public or shared
                    devices to prevent unauthorized sessions.
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>

        <section className="w-full bg-white text-gray-800">
          <h2 className="bg-black text-white p-5 text-center bree text-2xl md:text-3xl">
            Getting Started with Trimify
          </h2>
          <div className="roboto md:roboto-bold text-xl p-3 md:p-8 md:py-12 space-y-6">
            <p>
              Trimify makes it easy to shorten your URLs in just a few steps.
              Whether you want a quick link or a customized short URL, getting
              started is simple and fast.
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <span className="roboto-bold">Visit the Generator Page:</span>{" "}
                Go to the{" "}
                <Link
                  href="/generate-shortUrl"
                  className="text-blue-600 underline"
                  title="Click to generate short URLs"
                  aria-label="Click to generate short URLs"
                >
                  Trimify Generator
                </Link>{" "}
                to create your first short URL.
              </li>
              <li>
                <span className="roboto-bold">Choose Your Mode:</span> Use{" "}
                <span className="italic">Simple Mode</span> for quick links or
                log in to access the{" "}
                <span className="italic">Premium Mode</span> with extra features
                like link tracking and a personal dashboard.
              </li>
              <li>
                <span className="roboto-bold">Paste Your Long URL:</span> Enter
                your long link into the input box.
              </li>
              <li>
                <span className="roboto-bold">Paste Your short name:</span>{" "}
                Paste a suitable name for your short URL into the second input
                box.
              </li>
              <li>
                <span className="roboto-bold">Click “Shorten”:</span> Instantly
                receive a short, shareable URL.
              </li>
              <li>
                <span className="roboto-bold">Start Sharing:</span> Copy your
                new link and share it anywhere—social media, email, or messaging
                apps.
              </li>
            </ol>
            <p>
              That’s it! Trimify takes care of the rest, offering speed,
              simplicity, and control—all in one place.
            </p>
          </div>
        </section>
      </section>
       {/* Ad's Secrion */ }
       <div classname="mx-auto" id="container-568618a428c18986cf4e486dc3df8e4b"></div>              
    </>
  );
}
