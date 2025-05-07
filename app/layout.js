
import { Geist, Geist_Mono } from "next/font/google";
import SessionWrapper from "./components/SessionProvider";
import Script from "next/script";
import "./globals.css"; 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trimify.Shorten-smart,Share-fast",
  description: "Trimify is a URL shortener that helps you shorten, share, and track your links easily.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <link
          rel="icon"
          href="/favicon.png"
          className="rounded-[50%]"
          type="image/png"
          sizes="64x64"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Move Script here */}
     
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="afterInteractive"
        />
        <SessionWrapper>
     
          {children}
        </SessionWrapper>
      </body>
    </html>
  );}

