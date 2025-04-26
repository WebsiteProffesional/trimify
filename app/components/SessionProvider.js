"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";

export default function SessionWrapper({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      {children}
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
      />
      <Footer />
    </SessionProvider>
  );
}
