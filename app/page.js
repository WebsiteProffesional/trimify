// Import the Link component from Next.js for navigation
import Link from "next/link";

// Metadata for the page, used for SEO and social sharing
export const metadata = {
  title: "Trimify — Shorten Smart, Share Fast",
  description:
    "Trimify is a URL shortener that helps you create short, memorable links for easy sharing. Track link performance and manage your links effortlessly. Say goodbye to long URLs and hello to Trimify!",
  openGraph: {
    title: "Trimify",
    description:
      "Trimify is a URL shortener that helps you create short, memorable links for easy sharing. Track link performance and manage your links effortlessly. Say goodbye to long URLs and hello to Trimify!",
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
  },
  keywords: ["URL shortener", "link shortener", "short links", "Trimify"],
};

export const dynamic = "force-static";

// Define the Home component
export default function Home() {
  return (
    <>
      <div className="relative h-full min-h-[76vh] w-full bg-slate-900">
        <div className="text-white flex flex-col md:flex-row items-center p-12 justify-center gap-4 md:gap-32 z-10">
          {/* Left section */}
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl font-extrabold text-center text-gray-200 mb-[-2px] ml-[-3px] z-10">
              Trimify
            </h1>
            <p className="max-w-[500px] w-full text-center p-2 text-xl leading-relaxed z-10">
              Welcome to the ultimate URL shortener — your go-to tool for
              turning long, messy links into clean, memorable ones. Whether
              you're sharing on social media, sending emails, or just saving
              links for later, our service makes it fast, easy, and reliable.
            </p>

            <div className="flex flex-col md:flex-row gap-4 w-full md:max-w-[60vh] justify-center z-10">
              <Link href="/generate-shortUrl">
                <button
                  title="Click to generate short URLs"
                  className="bg-slate-950 cursor-pointer transition-all duration-500 ease-in-out rounded-[14px] md:max-w-[23vh] w-full px-5 py-2 text-white font-semibold hover:text-red-900 hover:bg-white md:max-h-[7vh]"
                >
                  Try Trimify
                </button>
              </Link>

              <Link href="/login">
                <button
                  title="Click to login to Trimify"
                  className="bg-slate-950 cursor-pointer transition-all duration-500 ease-in-out rounded-[14px] md:max-w-[23vh] w-full px-5 py-2 text-white font-semibold hover:text-red-900 hover:bg-white md:max-h-[7vh]"
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
              className="rounded-[10px] md:rounded-3xl max-w-[400px] md:max-w-[550px] w-full h-[250px] "
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
      {/* FAQ Block */}
      <section className="w-full text-gray-800 mt-4 ">
      
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Frequently Asked Questions
        </h2>
        <p className="text-center md:extrabold text-lg md:text-xl text-gray-700 mb-12">
          Everything you need to know about how Trimify works and why it’s
          awesome.
        </p>{" "}
      </section>
      {/* Place all FAQ blocks like “Why choose Trimify?”, “Is Trimify Secure?” etc. here */}

      {/* Example: */}
      <div className="mt-10">
        {/* Why Choose Trimify Section */}
        <section className="w-full bg-white text-gray-800">
          <h2 className="bg-black text-white p-5 text-center font-bold text-2xl md:text-3xl">
            Why Choose Trimify?
          </h2>
          <div className="font-semibold md:font-bold text-xl p-3 md:p-8 md:py-12">
            <p>
              Trimify is a free and easy-to-use URL shortener. Whether you're
              new to short links or just want something quick and reliable, our
              user-friendly design makes it accessible for everyone. Trimify
              offers two modes:
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
              <h3 className="text-2xl font-bold underline mb-2">Simple Mode</h3>
              <p>No login required. Perfect for:</p>
              <ul className="list-disc list-inside mt-2">
                <li>Users in a hurry who want to shorten links quickly.</li>
                <li>One-time or occasional users.</li>
                <li>People concerned with privacy and account creation.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-bold underline mb-2">
                Premium Mode
              </h3>
              <p>Login required. Ideal for frequent users who need:</p>
              <ul className="list-disc list-inside mt-2">
                <li>To shorten URLs repeatedly.</li>
                <li>To track and manage their shortened URLs.</li>
                <li>To create custom branded short links.</li>
              </ul>

              <div className="pl-5 ml-3 mt-4 border-l-4 border-slate-400">
                <h4 className="text-xl font-bold underline mb-2">
                  Key Features:
                </h4>
                <p>
                  The premium mode of Trimify provide some key features that are
                  listed below:
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
          <h2 className="bg-black text-white p-5 text-center font-bold text-2xl md:text-3xl">
            Is Trimify Secure?
          </h2>
          <div className="font-semibold md:font-bold text-xl p-3 md:p-8 md:py-12">
            <p>
              Yes, Trimify is secure. We prioritize your privacy and data
              security. Our platform uses encryption to protect your
              information, and we do not share your data with third parties.
            </p>
            <ol className="list-decimal list-inside mt-4 space-y-2 font-bold">
              <li>
                Your passwords are encrypted using the <code>bcrypt</code>{" "}
                library before being stored in our database. This means even we
                cannot view or retrieve your original passwords — your data is
                safe with us.
              </li>
              <li>
                Access to your short links and analytics is restricted to your
                account only, ensuring no unauthorized access.
              </li>
            </ol>
            <div className="mt-6  border-l-4 border-slate-400 ml-3 pl-4">
              <h4 className="text-xl font-bold underline mb-2">
                Security Measures:
              </h4>
              <ol className="list-disc list-inside space-y-2">
                <li>
                  Never share your Trimify account password with anyone. Doing
                  so can lead to unauthorized access to your dashboard and
                  stored data.
                </li>
                <li>
                  Always log out after using Trimify on public or shared devices
                  to prevent unauthorized sessions.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full bg-white text-gray-800">
        <h2 className="bg-black text-white p-5 text-center font-bold text-2xl md:text-3xl">
          Getting Started with Trimify
        </h2>
        <div className="font-semibold md:font-bold text-xl p-3 md:p-8 md:py-12 space-y-6">
          <p>
            Trimify makes it easy to shorten your URLs in just a few steps.
            Whether you want a quick link or a customized short URL, getting
            started is simple and fast.
          </p>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <span className="font-bold">Visit the Generator Page:</span> Go to
              the{" "}
              <Link
                href="/generate-shortUrl"
                className="text-blue-600 underline"
              >
                Trimify Generator
              </Link>{" "}
              to create your first short URL.
            </li>
            <li>
              <span className="font-bold">Choose Your Mode:</span> Use{" "}
              <span className="italic">Simple Mode</span> for quick links or log
              in to access the <span className="italic">Premium Mode</span> with
              extra features like link tracking and a personal dashboard.
            </li>
            <li>
              <span className="font-bold">Paste Your Long URL:</span> Enter your
              long link into the input box.
            </li>
            <li>
              <span className="font-bold">Paste Your short name: </span>Paste a
              suitable name for your short URL into the second input box.
            </li>
            <li>
              <span className="font-bold">Click “Shorten”:</span> Instantly
              receive a short, shareable URL.
            </li>
            <li>
              <span className="font-bold">Start Sharing:</span> Copy your new
              link and share it anywhere—social media, email, or messaging apps.
            </li>
          </ol>
          <p>
            That’s it! Trimify takes care of the rest, offering speed,
            simplicity, and control—all in one place.
          </p>
        </div>
      </section>
    </>
  );
}
