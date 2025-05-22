import { Geist, Geist_Mono } from "next/font/google";
import SessionWrapper from "./components/SessionProvider";
import Script from "next/script";
import "./globals.css";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <link
          rel="icon"
          href="/favicon.png"
          className="rounded-[50%]"
          type="image/png"
          sizes="64x64"
        />
      </head>
      <body
       
      >
        {/* Move Script here */}
        <Script
          src="https://cdn.lordicon.com/ritcuqlt.js"
          strategy="afterInteractive"
        />
        <Script
          unsafe-eval
          src="https://accounts.google.com/gsi/client"
          strategy="afterInteractive"
        />
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
