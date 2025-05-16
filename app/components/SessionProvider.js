"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";
import { usePathname } from "next/navigation";
import Logout from "./Logout";

export default function SessionWrapper({ children }) {
  const currentPath=usePathname()
  return (
    <SessionProvider>
    {!currentPath.includes("/dashboard") ? <Navbar />:<Logout />}
      {children}
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
      />
      <Footer />
    </SessionProvider>
  );
}
